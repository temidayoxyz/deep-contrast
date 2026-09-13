/**
 * Deep Contrast toggle: the half-shaded circle in the sidebar foot. One
 * control serves both directions — it always switches to the opposite color
 * scheme, and the harness persists the choice (the default untouched state
 * stays `system`, which follows the OS).
 *
 * @module dsh-deep-contrast/client/ContrastToggle
 */
import { useSyncExternalStore } from 'react'
import type { LocaleSeat, ThemeSnapshot } from '../harness-types.js'
import type { ThemeStore } from './theme-store.ts'

/** Injected share: the bound theme store plus the preference write. */
export interface ContrastToggleInjected {
  theme: ThemeStore
  setMode(mode: 'light' | 'dark'): void
}

/** Full component props: injected share, owner column state, locale seat. */
export interface ContrastToggleProps extends ContrastToggleInjected {
  /** Whether the sidebar renders wide content (false = 56px rail). */
  wide: boolean
  /** Localized copy seat from the `deepContrast` namespace. */
  t: LocaleSeat['t']
}

/** The half-shaded circle: one glyph for both directions of the switch. */
function ContrastGlyph() {
  return (
    <svg viewBox='0 0 16 16' width={16} height={16} aria-hidden focusable='false'>
      <circle cx='8' cy='8' r='6.25' fill='none' stroke='currentColor' strokeWidth='1.5' />
      <path d='M8 1.75 A 6.25 6.25 0 0 0 8 14.25 Z' fill='currentColor' stroke='none' />
    </svg>
  )
}

/**
 * Sidebar-foot theme toggle.
 * @param props - injected theme store and write, owner column state, locale.
 * @returns the icon (rail) or icon+label (wide) button.
 */
export function ContrastToggle({ theme, setMode, wide, t }: ContrastToggleProps) {
  const snapshot: ThemeSnapshot = useSyncExternalStore(theme.subscribe, theme.getSnapshot, theme.getSnapshot)
  const scheme = snapshot.active.colorScheme
  const next = scheme === 'dark' ? 'light' : 'dark'
  const label = t('toggle.aria', { mode: t(next === 'dark' ? 'mode.dark' : 'mode.light') })
  return (
    <button
      type='button'
      className={wide ? 'dc-toggle dc-wide' : 'dc-toggle dc-rail'}
      onClick={() => { setMode(next) }}
      aria-label={label}
      title={label}
      data-deep-contrast-toggle=''
      data-scheme={scheme}
    >
      <ContrastGlyph />
      {wide ? <span className='dc-label'>{t('toggle.label')}</span> : null}
    </button>
  )
}
