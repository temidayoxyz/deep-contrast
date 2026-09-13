/**
 * Structural types for the Harness client faces Deep Contrast compiles
 * against. The Harness packages are runtime-provided (the client-modules
 * loader owns the instances), so this plugin carries structural declarations
 * instead of installing them — the runtime passes the real context and the
 * shapes below only describe it.
 *
 * @module dsh-deep-contrast/harness-types
 */
import type { DeepContrastKey } from './client/locales.js'

/** One token's per-palette values; the Harness rejects single strings. */
export interface ThemeTokenModes {
  light: string
  dark: string
}

/** Override-layer dictionary: token name → per-palette values. */
export type ThemeTokenOverrides = Record<string, ThemeTokenModes>

/** One selectable theme as exposed on the runtime snapshot. */
export interface ThemeDefinition {
  id: string
  colorScheme: 'light' | 'dark'
  tokens: Record<string, string>
}

/** Immutable snapshot published by the Harness theme registry on every change. */
export interface ThemeSnapshot {
  preference: 'light' | 'dark' | 'system' | string
  fontSize: number
  active: ThemeDefinition
  themes: readonly ThemeDefinition[]
  revision: number
}

/** The subset of the Harness theme runtime Deep Contrast drives. */
export interface ThemeRuntime {
  getTheme(): ThemeSnapshot
  setTheme(id: string): void
  overrideTokens(source: string, tokens: ThemeTokenOverrides): () => void
}

/** Localized copy seat handed to slot components (`t(key, params?)`). */
export interface LocaleSeat {
  t: (key: DeepContrastKey, params?: Record<string, string | number>) => string
}

/** The Harness locale registry subset (`ctx.locale`). */
export interface LocaleHost {
  register(ns: string, dictionaries: Record<string, unknown>): void
}

/** The Harness slots service subset (`ctx.slots`). */
export interface SlotsHost {
  /** Contribute to a slot: the factory runs per consumer with owner props. */
  inject(slot: string, factory: () => unknown): void
  /** Register one entry component into the slot being injected. */
  register(options: SlotRegistration, component: (props: never) => unknown): unknown
}

/** Options of one slot registration (id, ordering, locale, injected share). */
export interface SlotRegistration {
  name: string
  id: string
  order: number
  locale: string
  inject?: (owner: unknown) => unknown
}

/** The client-context face Deep Contrast's `apply` receives. */
export interface ClientContextLike {
  /** Register a plugin-lifetime effect; the returned disposer runs at teardown. */
  effect(apply: () => (() => void) | void, label: string): void
  /** Subscribe to a context event; returns the unsubscriber. */
  on(event: 'theme/change', listener: (snapshot: ThemeSnapshot) => void): () => void
  /** The Harness theme runtime (provided by `@deepseek-ai/dsh-client-ui-theme`). */
  theme: ThemeRuntime
  /** The Harness slot registry (provided by `@deepseek-ai/dsh-client-ui-renderer`). */
  slots: SlotsHost
  /** The Harness locale registry (provided by `@deepseek-ai/dsh-client-locale`). */
  locale: LocaleHost
}

/** The host-context face Deep Contrast's host `apply` receives. */
export interface HostContextLike {}
