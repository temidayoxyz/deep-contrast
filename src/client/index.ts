/**
 * Deep Contrast browser half: a restrained high-contrast light/dark palette
 * over the Harness theme system, plus the sidebar-foot toggle.
 *
 * Integration model — no competing theme machinery:
 * - The palette lands as one `overrideTokens` layer over the Harness theme
 *   registry, so the shipped Appearance row (light / dark / system, default
 *   `system` following the OS) remains the mode authority and the choice
 *   keeps persisting in the Harness settings document.
 * - The toggle contributes to `sidebar.footer.action` and writes through the
 *   same registry (`setTheme`), flipping to the opposite color scheme in one
 *   click; the glyph is a single half-shaded circle for both directions.
 *
 * @module dsh-deep-contrast/client
 */
import type { ClientContextLike, ThemeRuntime } from '../harness-types.js'
import { ContrastToggle, type ContrastToggleInjected } from './ContrastToggle.tsx'
import { en, NS, zh } from './locales.ts'
import { TOGGLE_STYLES } from './styles.ts'
import { bindThemeStore } from './theme-store.ts'
import { TOKEN_OVERRIDES } from '../tokens.js'

/** The override-layer identity: one layer per source, re-registered on HMR. */
export const LAYER_SOURCE = 'deep-contrast'

/** Required services, loaded before `apply` runs. */
export const inject = ['theme', 'slots', 'locale']

/**
 * Client plugin body: install the palette layer, the dictionaries, the
 * toggle stylesheet, and the sidebar-foot toggle.
 * @param ctx - client cordis context.
 */
export function apply(ctx: ClientContextLike): void {
  // The layer re-registers for this source on re-apply (HMR), and its
  // disposer runs at plugin disposal so uninstalling the theme restores the
  // stock palette without a restart.
  ctx.effect(
    () => ctx.theme.overrideTokens(LAYER_SOURCE, TOKEN_OVERRIDES),
    'deep-contrast: palette layer',
  )

  ctx.effect(
    () => ctx.locale.register(NS, { zh, en }),
    'deep-contrast: dictionaries',
  )

  if (typeof document !== 'undefined') {
    ctx.effect(() => {
      const tag = document.createElement('style')
      tag.dataset.plugin = 'dsh-deep-contrast'
      tag.dataset.pluginCss = 'dsh-deep-contrast/toggle.css'
      tag.textContent = TOGGLE_STYLES
      document.head.appendChild(tag)
      return () => { tag.remove() }
    }, 'deep-contrast: toggle stylesheet')
  }

  const theme: ThemeRuntime = ctx.theme
  const store = bindThemeStore(theme, ctx)
  ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
    name: 'sidebar.footer.action',
    id: 'deep-contrast',
    order: 10,
    locale: NS,
    inject: (): ContrastToggleInjected => ({
      theme: store,
      setMode: (mode) => { theme.setTheme(mode) },
    }),
  }, ContrastToggle))
}
