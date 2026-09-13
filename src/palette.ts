/**
 * The Deep Contrast semantic color system.
 *
 * One set of roles, two values each: `light` and `dark` are two variants of
 * the same design system, not two themes. The roles are the vocabulary —
 * `src/tokens.ts` maps each role onto the Harness `--dsw-*` token it drives,
 * so no component-facing token is ever assigned a color directly.
 *
 * Design rules that shaped the values:
 * - Contrast first: primary text clears 15:1 against its base in both modes;
 *   secondary clears 8:1; every role still used as reading text stays at or
 *   above 4.5:1 (WCAG AA).
 * - One accent: a single deep indigo carries interactivity. State colors
 *   appear only as states.
 * - Restraint: surfaces stay within one cool gray family; borders are
 *   hairline alphas; nothing glows.
 */

/**
 * Cool ink neutrals, one indigo accent, three quiet state hues.
 * Every value is a final CSS color; derivations happen here, not in components.
 */
export interface Palette {
  /* Surfaces: base page, layered panels (1 innermost → 3 outermost), and
     floating overlays. Layer steps are small in light mode (white-on-white
     separated by borders) and larger in dark mode (real elevation). */
  bgBase: string
  bgLayer1: string
  bgLayer2: string
  bgLayer3: string
  bgOverlay: string
  /* Broad workspace areas behind cards (toolbars, pickers, selection bands). */
  bgModulePlatform: string
  bgMultiSelect: string
  /* Loading placeholder wash. */
  bgSkeleton: string
  /* Full-screen scrims over the page. */
  mask1: string
  mask2: string
  mask3: string
  /* Backdrop wash behind dragged/ghost content. */
  maskDrop: string

  /* Borders: hairline → strongest. `borderInverted*` separates surfaces from
     the opposite palette (transparent in light mode, matching the Harness). */
  borderHairline: string
  borderThin: string
  borderSubtle: string
  borderStrong: string
  borderStronger: string
  borderInverted: string
  borderInvertedStrong: string

  /* Text ladder: reading text → captions, plus fills on accent/inverted
     surfaces and the dimmed end-stops. Contrast-checked against bgBase. */
  textPrimary: string
  textSecondary: string
  textTertiary: string
  textCaption: string
  /* Low-emphasis text rendered on strong fills (dark strip in light mode). */
  textDimmedFill: string
  /* De-emphasized primary text (icons, quiet marks) in each mode. */
  textPrimarySoft: string
  /* Text and icons sitting on the accent. */
  textOnAccent: string
  /* Text sitting on inverted-palette fills (toasts, contrast buttons). */
  textInverted: string
  /* Text on blue-tinted headings and brand chips. */
  textBlueTinted: string

  /* The single accent: interactivity, selection, focus, primary buttons. */
  accent: string
  accentHover: string
  accentSoftFill: string
  accentActiveBorder: string
  accentActiveFill: string
  accentActiveHover: string

  /* Interaction washes over arbitrary surfaces. */
  hoverFill: string
  hoverAccent: string
  hoverDanger: string
  activeFill: string
  hoverSolid: string

  /* Buttons: contrast (opaque neutral), info (accent), elevated/floating
     surfaces, and translucent tool bars over content. */
  buttonContrast: string
  buttonInfo: string
  buttonInfoHover: string
  buttonElevated: string
  buttonFloating: string
  buttonFloatingHover: string
  buttonToolbar: string
  buttonToolbarHover: string

  /* Content surfaces: markdown/code blocks and their chrome. */
  codeBlock: string
  codeBanner: string
  inlineCode: string
  citation: string
  codeSegmentSelected: string
  codeSegmentUnselected: string
  tag: string
  placeholder: string

  /* Links use the accent (distinct from body text, AA on the base). */
  link: string

  /* Scrollbars. */
  scrollbar: string
  scrollbarHover: string

  /* States: one hue each, primary (reading), soft (strong line/icon),
     tint (background wash). Warn also has a label variant. */
  error: string
  errorSoft: string
  success: string
  successSoft: string
  successTint: string
  warn: string
  warnSoft: string
  warnTint: string
  warnLabel: string
  /* Business tint: harness-branded highlight washes (the business accent
     itself is the shared accent). */
  businessTint: string

  /* Chrome: sidebar, bubbles around assistant turns, inputs, menus, tips,
     toasts, and tooltips. */
  sidebarFill: string
  sidebarHover: string
  sidebarActive: string
  sidebarActiveAccent: string
  bubble: string
  bubbleHighlight: string
  inputMajor: string
  inputSubtle: string
  selector: string
  tip: string
  toast: string
  tooltip: string

  /* Syntax tokens (shiki code highlighting): muted-but-distinct hues that
     keep code readable without neon saturation. */
  syntaxConstant: string
  syntaxString: string
  syntaxComment: string
  syntaxKeyword: string
  syntaxParameter: string
  syntaxFunction: string
  syntaxStringExpression: string
  syntaxPunctuation: string
  syntaxLink: string
}

/** Light variant: white paper, ink text, hairline separation, one indigo accent. */
export const lightPalette: Palette = {
  bgBase: '#ffffff',
  bgLayer1: '#ffffff',
  bgLayer2: '#f7f8fb',
  bgLayer3: '#f1f3f8',
  bgOverlay: '#ffffff',
  bgModulePlatform: '#f1f3f8',
  bgMultiSelect: '#f1f3f8',
  bgSkeleton: 'rgba(15, 23, 42, 0.06)',
  mask1: 'rgba(15, 23, 42, 0.32)',
  mask2: 'rgba(15, 23, 42, 0.12)',
  mask3: 'rgba(15, 23, 42, 0.52)',
  maskDrop: 'rgba(244, 246, 250, 0.72)',

  borderHairline: 'rgba(15, 23, 42, 0.08)',
  borderThin: 'rgba(15, 23, 42, 0.1)',
  borderSubtle: 'rgba(15, 23, 42, 0.14)',
  borderStrong: 'rgba(15, 23, 42, 0.18)',
  borderStronger: 'rgba(15, 23, 42, 0.24)',
  borderInverted: 'rgba(0, 0, 0, 0)',
  borderInvertedStrong: 'rgba(0, 0, 0, 0)',

  textPrimary: '#10141f',
  textSecondary: '#3f4859',
  textTertiary: '#5b6478',
  textCaption: '#737d92',
  textDimmedFill: '#dfe3ec',
  textPrimarySoft: '#1a2130',
  textOnAccent: '#ffffff',
  textInverted: '#ffffff',
  textBlueTinted: '#1d2b57',

  accent: '#3b5bdb',
  accentHover: '#324fc4',
  accentSoftFill: '#e2e8f9',
  accentActiveBorder: '#8fa4ee',
  accentActiveFill: '#e8edfc',
  accentActiveHover: '#dbe3fa',

  hoverFill: 'rgba(24, 33, 58, 0.06)',
  hoverAccent: 'rgba(59, 91, 219, 0.1)',
  hoverDanger: 'rgba(198, 50, 50, 0.07)',
  activeFill: 'rgba(59, 91, 219, 0.16)',
  hoverSolid: '#eef0f5',

  buttonContrast: '#1f2637',
  buttonInfo: '#3b5bdb',
  buttonInfoHover: '#324fc4',
  buttonElevated: '#ffffff',
  buttonFloating: '#ffffff',
  buttonFloatingHover: '#eef0f5',
  buttonToolbar: 'rgba(40, 47, 64, 0.5)',
  buttonToolbarHover: 'rgba(40, 47, 64, 0.62)',

  codeBlock: '#f6f7fa',
  codeBanner: '#eef0f4',
  inlineCode: '#eef0f4',
  citation: '#e8ecf2',
  codeSegmentSelected: '#ffffff',
  codeSegmentUnselected: '#eceef3',
  tag: '#e9ecf2',
  placeholder: '#e4e7ee',

  link: '#3b5bdb',

  scrollbar: '#d2d7e0',
  scrollbarHover: '#b7bfcc',

  error: '#c03434',
  errorSoft: '#e05c5c',
  success: '#157f43',
  successSoft: '#2f9e63',
  successTint: '#dcf2e5',
  warn: '#9a5b00',
  warnSoft: '#d08307',
  warnTint: '#faeecd',
  warnLabel: '#9a5b00',
  businessTint: '#e3e9fb',

  sidebarFill: '#f4f6f9',
  sidebarHover: '#e9ecf2',
  sidebarActive: '#dfe4ee',
  sidebarActiveAccent: '#dbe3f6',
  bubble: '#edf1fa',
  bubbleHighlight: '#d7e1f7',
  inputMajor: '#ffffff',
  inputSubtle: '#f4f6f9',
  selector: '#f1f3f8',
  tip: '#f1f3f8',
  toast: '#1f2637',
  tooltip: '#232b3d',

  syntaxConstant: '#1e60d1',
  syntaxString: '#237a4b',
  syntaxComment: '#8a93a4',
  syntaxKeyword: '#a13e8f',
  syntaxParameter: '#b25e09',
  syntaxFunction: '#5b4bd6',
  syntaxStringExpression: '#1c7f57',
  syntaxPunctuation: '#5f6779',
  syntaxLink: '#1e60d1',
}

/** Dark variant: deep blue-black surfaces, high-legibility light text, the same indigo lifted for the darker base. */
export const darkPalette: Palette = {
  bgBase: '#0e1118',
  bgLayer1: '#131826',
  bgLayer2: '#182031',
  bgLayer3: '#1e2739',
  bgOverlay: '#222b3d',
  bgModulePlatform: '#1a2233',
  bgMultiSelect: '#1a2233',
  bgSkeleton: 'rgba(255, 255, 255, 0.07)',
  mask1: 'rgba(0, 0, 0, 0.55)',
  mask2: 'rgba(0, 0, 0, 0.24)',
  mask3: 'rgba(0, 0, 0, 0.6)',
  maskDrop: 'rgba(16, 20, 31, 0.72)',

  borderHairline: 'rgba(230, 238, 252, 0.07)',
  borderThin: 'rgba(230, 238, 252, 0.07)',
  borderSubtle: 'rgba(230, 238, 252, 0.13)',
  borderStrong: 'rgba(230, 238, 252, 0.17)',
  borderStronger: 'rgba(230, 238, 252, 0.22)',
  borderInverted: 'rgba(255, 255, 255, 0.07)',
  borderInvertedStrong: 'rgba(255, 255, 255, 0.09)',

  textPrimary: '#e8ecf4',
  textSecondary: '#a9b3c6',
  textTertiary: '#8b96ab',
  textCaption: '#76829a',
  textDimmedFill: '#2c3648',
  textPrimarySoft: '#dde3ee',
  textOnAccent: '#ffffff',
  textInverted: '#131a2a',
  textBlueTinted: '#c9d6ff',

  accent: '#4d68e8',
  accentHover: '#5d76ee',
  accentSoftFill: '#2c3854',
  accentActiveBorder: '#5a6fd8',
  accentActiveFill: '#2e3b5e',
  accentActiveHover: '#38476f',

  hoverFill: 'rgba(232, 238, 252, 0.07)',
  hoverAccent: 'rgba(123, 150, 255, 0.16)',
  hoverDanger: 'rgba(232, 86, 86, 0.14)',
  activeFill: 'rgba(123, 150, 255, 0.24)',
  hoverSolid: '#222b3d',

  buttonContrast: '#e8ecf4',
  buttonInfo: '#4d68e8',
  buttonInfoHover: '#5d76ee',
  buttonElevated: '#1e2739',
  buttonFloating: '#1a2233',
  buttonFloatingHover: '#222b3d',
  buttonToolbar: 'rgba(10, 14, 22, 0.55)',
  buttonToolbarHover: 'rgba(10, 14, 22, 0.68)',

  codeBlock: '#111726',
  codeBanner: '#1a2233',
  inlineCode: '#1f2940',
  citation: '#1b2334',
  codeSegmentSelected: '#1e2739',
  codeSegmentUnselected: '#161d2e',
  tag: '#232c42',
  placeholder: '#1e2739',

  link: '#7b96ff',

  scrollbar: '#2a3348',
  scrollbarHover: '#3a4560',

  error: '#ef6f6f',
  errorSoft: '#e05c5c',
  success: '#3fbf7f',
  successSoft: '#35a86c',
  successTint: '#142c1e',
  warn: '#d99a3d',
  warnSoft: '#e5b563',
  warnTint: '#2d2410',
  warnLabel: '#d9b26a',
  businessTint: '#1d2745',

  sidebarFill: '#111723',
  sidebarHover: '#1a2233',
  sidebarActive: '#212b41',
  sidebarActiveAccent: '#26324e',
  bubble: '#1a2337',
  bubbleHighlight: '#26325a',
  inputMajor: '#161e2f',
  inputSubtle: '#10151f',
  selector: '#1e2739',
  tip: '#1a2233',
  toast: '#2c3854',
  tooltip: '#2c3854',

  syntaxConstant: '#74b3ff',
  syntaxString: '#85d9a0',
  syntaxComment: '#75809a',
  syntaxKeyword: '#d8a3ea',
  syntaxParameter: '#e2a765',
  syntaxFunction: '#ab9dff',
  syntaxStringExpression: '#7fd8a4',
  syntaxPunctuation: '#b7bfce',
  syntaxLink: '#74b3ff',
}
