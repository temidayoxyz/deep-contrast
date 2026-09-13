/** `deepContrast` namespace dictionaries: the theme toggle's copy. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'deepContrast'

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'toggle.label': '主题',
  'toggle.aria': '切换到{mode}主题',
  'mode.light': '浅色',
  'mode.dark': '深色',
} as const

/** English dictionary, key-identical to the Chinese source of truth. */
export const en: Record<DeepContrastKey, string> = {
  'toggle.label': 'Theme',
  'toggle.aria': 'Switch to the {mode} theme',
  'mode.light': 'light',
  'mode.dark': 'dark',
}

/** Key domain of the `deepContrast` namespace (zh is the source of truth). */
export type DeepContrastKey = keyof typeof zh
