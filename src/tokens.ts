/**
 * Mapping from the Deep Contrast semantic roles onto the Harness `--dsw-*`
 * token vocabulary, producing one `overrideTokens` layer.
 *
 * The mapping table is typed `{ [K in keyof Palette]: ... }`, so a palette
 * role without a token assignment is a compile error, and every token in the
 * layer receives a `{ light, dark }` pair — the Harness rejects single-value
 * overrides because a bare value goes illegible when the user switches color
 * scheme. Tokens the Harness derives itself (`--dsw-specific-menu` follows
 * `bg-layer-3`, shiki backgrounds follow the markdown code-block alias) are
 * deliberately absent.
 *
 * @module dsh-deep-contrast/tokens
 */
import type { ThemeTokenOverrides } from './harness-types.js'
import { darkPalette, lightPalette, type Palette } from './palette.js'

/** One Harness `--dsw-*` token vocabulary name driven by a Deep Contrast role. */
const TOKEN_ROLES: { readonly [K in keyof Palette]: readonly string[] } = {
  bgBase: ['--dsw-alias-bg-base'],
  bgLayer1: ['--dsw-alias-bg-layer-1'],
  bgLayer2: ['--dsw-alias-bg-layer-2'],
  bgLayer3: ['--dsw-alias-bg-layer-3'],
  bgOverlay: ['--dsw-alias-bg-overlay'],
  bgModulePlatform: ['--dsw-alias-bg-module-platform'],
  bgMultiSelect: ['--dsw-alias-bg-multi-select'],
  bgSkeleton: ['--dsw-alias-bg-skeleton'],
  mask1: ['--dsw-alias-bg-mask-1'],
  mask2: ['--dsw-alias-bg-mask-2'],
  mask3: ['--dsw-alias-bg-mask-3'],
  maskDrop: ['--dsw-alias-bg-mask-drop'],

  borderHairline: ['--dsw-alias-border-l1'],
  borderThin: ['--dsw-alias-border-l2-darkmode-thin'],
  borderSubtle: ['--dsw-alias-border-l2'],
  borderStrong: ['--dsw-alias-border-l3'],
  borderStronger: ['--dsw-alias-border-l4'],
  borderInverted: ['--dsw-alias-border-inverted'],
  borderInvertedStrong: ['--dsw-alias-border-inverted2'],

  textPrimary: ['--dsw-alias-label-primary', '--dsw-alias-brand-text'],
  textSecondary: ['--dsw-alias-label-secondary'],
  textTertiary: ['--dsw-alias-label-tertiary'],
  textCaption: ['--dsw-alias-label-caption'],
  textDimmedFill: ['--dsw-alias-label-dimmed'],
  textPrimarySoft: ['--dsw-alias-label-primary-dimmed'],
  textOnAccent: ['--dsw-alias-label-primary-foreground', '--dsw-alias-brand-primary-invert'],
  textInverted: ['--dsw-alias-label-primary-inverted'],
  textBlueTinted: ['--dsw-alias-label-primary-bluish'],

  accent: [
    '--dsw-alias-brand-primary',
    '--dsw-alias-brand-primary-new-colorprimary-new-color',
    '--dsw-alias-button-primary-fill',
    '--dsw-alias-state-business-primary',
  ],
  accentHover: ['--dsw-alias-button-primary-hover'],
  accentSoftFill: ['--dsw-alias-button-primary-dimmed'],
  accentActiveBorder: ['--dsw-alias-button-ghost-active-border'],
  accentActiveFill: ['--dsw-alias-button-ghost-active-fill'],
  accentActiveHover: ['--dsw-alias-button-ghost-active-hover'],

  hoverFill: ['--dsw-alias-interactive-bg-hover'],
  hoverAccent: ['--dsw-alias-interactive-bg-hover-accent'],
  hoverDanger: ['--dsw-alias-interactive-bg-hover-danger'],
  activeFill: ['--dsw-alias-interactive-bg-active'],
  hoverSolid: ['--dsw-alias-interactive-bg-hover-solid'],

  buttonContrast: ['--dsw-alias-button-contrast-fill'],
  buttonInfo: ['--dsw-alias-button-info-fill'],
  buttonInfoHover: ['--dsw-alias-button-info-hover'],
  buttonElevated: ['--dsw-alias-button-elevated-fill'],
  buttonFloating: ['--dsw-alias-button-floating-fill'],
  buttonFloatingHover: ['--dsw-alias-button-floating-hover'],
  buttonToolbar: ['--dsw-alias-button-tool-bar-fill'],
  buttonToolbarHover: ['--dsw-alias-button-tool-bar-hover'],

  codeBlock: ['--dsw-alias-markdown-code-block'],
  codeBanner: ['--dsw-alias-markdown-code-block-banner'],
  inlineCode: ['--dsw-alias-markdown-inline-code'],
  citation: ['--dsw-alias-markdown-citation'],
  codeSegmentSelected: ['--dsw-alias-markdown-code-segment-selected'],
  codeSegmentUnselected: ['--dsw-alias-markdown-code-segment-unselected'],
  tag: ['--dsw-alias-markdown-tag'],
  placeholder: ['--dsw-alias-markdown-placeholder'],

  link: ['--dsw-alias-link'],

  scrollbar: ['--dsw-alias-scrollbar-bg-l1', '--dsw-alias-scrollbar-bg-l2'],
  scrollbarHover: ['--dsw-alias-scrollbar-hover-l1', '--dsw-alias-scrollbar-hover-l2'],

  error: ['--dsw-alias-state-error-primary'],
  errorSoft: ['--dsw-alias-state-error-secondary'],
  success: ['--dsw-alias-state-success-primary'],
  successSoft: ['--dsw-alias-state-success-secondary'],
  successTint: ['--dsw-alias-state-success-tertiary'],
  warn: ['--dsw-alias-state-warn-primary'],
  warnSoft: ['--dsw-alias-state-warn-secondary'],
  warnTint: ['--dsw-alias-state-warn-tertiary'],
  warnLabel: ['--dsw-alias-state-warn-label'],
  businessTint: ['--dsw-alias-state-business-tertiary'],

  sidebarFill: ['--dsw-specific-sidebar-fill'],
  sidebarHover: ['--dsw-specific-sidebar-nav-item-hover'],
  sidebarActive: ['--dsw-specific-sidebar-nav-item-active'],
  sidebarActiveAccent: ['--dsw-specific-sidebar-nav-item-active-accent'],
  bubble: ['--dsw-specific-bubble'],
  bubbleHighlight: ['--dsw-specific-bubble-highlight'],
  inputMajor: ['--dsw-specific-input-major'],
  inputSubtle: ['--dsw-specific-login-input'],
  selector: ['--dsw-specific-selector'],
  tip: ['--dsw-specific-tip'],
  toast: ['--dsw-alias-toast-bg'],
  tooltip: ['--dsw-alias-tooltip-bg'],

  syntaxConstant: ['--shiki-token-constant'],
  syntaxString: ['--shiki-token-string'],
  syntaxComment: ['--shiki-token-comment'],
  syntaxKeyword: ['--shiki-token-keyword'],
  syntaxParameter: ['--shiki-token-parameter'],
  syntaxFunction: ['--shiki-token-function'],
  syntaxStringExpression: ['--shiki-token-string-expression'],
  syntaxPunctuation: ['--shiki-token-punctuation'],
  syntaxLink: ['--shiki-token-link'],
}

/** The Deep Contrast override layer: every token carries both palette values. */
export const TOKEN_OVERRIDES: ThemeTokenOverrides = buildTokenOverrides()

/**
 * Fold the role map into the override-layer shape the Harness theme runtime
 * accepts. The source palettes stay authoritative; nothing here recomputes
 * colors.
 * @returns the token-name → `{ light, dark }` layer.
 */
function buildTokenOverrides(): ThemeTokenOverrides {
  const overrides: ThemeTokenOverrides = {}
  for (const role of Object.keys(TOKEN_ROLES) as (keyof Palette)[]) {
    for (const name of TOKEN_ROLES[role]) {
      overrides[name] = { light: lightPalette[role], dark: darkPalette[role] }
    }
  }
  return overrides
}
