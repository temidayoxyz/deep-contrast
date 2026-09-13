/**
 * Reactive bridge between the slot component and the Harness theme runtime:
 * an external store (`useSyncExternalStore` shape) that re-emits on the
 * runtime's `theme/change` event.
 *
 * @module dsh-deep-contrast/client/theme-store
 */
import type { ClientContextLike, ThemeRuntime, ThemeSnapshot } from '../harness-types.js'

/** External-store face of the theme runtime handed to the toggle component. */
export interface ThemeStore {
  subscribe(listener: () => void): () => void
  getSnapshot(): ThemeSnapshot
}

/**
 * Bind one store to the runtime. The `theme/change` subscription lives for
 * the plugin lifetime — `apply` releases it through `ctx.effect`, so the
 * returned disposer here only manages the component-side listener set.
 * @param theme - the Harness theme runtime from the client context.
 * @param ctx - context carrying the `theme/change` event.
 * @returns the store.
 */
export function bindThemeStore(theme: ThemeRuntime, ctx: ClientContextLike): ThemeStore {
  const listeners = new Set<() => void>()
  ctx.on('theme/change', () => {
    for (const listener of [...listeners]) listener()
  })
  return {
    subscribe(listener: () => void): () => void {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    getSnapshot: () => theme.getTheme(),
  }
}
