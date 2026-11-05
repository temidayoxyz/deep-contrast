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
  bgLayer2: '#eff2f5',
  bgLayer3: '#e0e6eb',
  bgOverlay: '#ffffff',
  bgModulePlatform: '#e0e6eb',
  bgMultiSelect: '#e0e6eb',
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

  textPrimary: '#010409',
  textSecondary: '#454c54',
  textTertiary: '#59636e',
  textCaption: '#656c76',
  textDimmedFill: '#e0e6eb',
  textPrimarySoft: '#010409',
  textOnAccent: '#ffffff',
  textInverted: '#ffffff',
  textBlueTinted: '#1d2b57',

  accent: '#0349b4',
  accentHover: '#023b95',
  accentSoftFill: '#dff7ff',
  accentActiveBorder: '#368cf9',
  accentActiveFill: '#023b954d',
  accentActiveHover: '#023b9533',

  hoverFill: 'rgba(24, 33, 58, 0.06)',
  hoverAccent: 'rgba(59, 91, 219, 0.1)',
  hoverDanger: 'rgba(198, 50, 50, 0.07)',
  activeFill: 'rgba(59, 91, 219, 0.16)',
  hoverSolid: '#e0e6eb',

  buttonContrast: '#1f2637',
  buttonInfo: '#0349b4',
  buttonInfoHover: '#023b95',
  buttonElevated: '#ffffff',
  buttonFloating: '#ffffff',
  buttonFloatingHover: '#e0e6eb',
  buttonToolbar: 'rgba(40, 47, 64, 0.5)',
  buttonToolbarHover: 'rgba(40, 47, 64, 0.62)',

  codeBlock: '#eff2f5',
  codeBanner: '#e6eaefff',
  inlineCode: '#e6eaefff',
  citation: '#e0e6eb',
  codeSegmentSelected: '#ffffff',
  codeSegmentUnselected: '#e6eaefff',
  tag: '#eff2f5',
  placeholder: '#e0e6eb',

  link: '#0349b4',

  scrollbar: '#d2d7e0',
  scrollbarHover: '#b7bfcc',

  error: '#a0111f',
  errorSoft: '#eb3342',
  success: '#024c1a',
  successSoft: '#055d20',
  successTint: '#d2fedb',
  warn: '#603700',
  warnSoft: '#4e2c00',
  warnTint: '#fcf7be',
  warnLabel: '#603700',
  businessTint: '#dff7ff',

  sidebarFill: '#eff2f5',
  sidebarHover: '#eff2f5',
  sidebarActive: '#e6eaefff',
  sidebarActiveAccent: '#dff7ff',
  bubble: '#eff2f5',
  bubbleHighlight: '#dff7ff',
  inputMajor: '#ffffff',
  inputSubtle: '#eff2f5',
  selector: '#e0e6eb',
  tip: '#e0e6eb',
  toast: '#1f2637',
  tooltip: '#232b3d',

  syntaxConstant: '#023b95',
  syntaxString: '#032563',
  syntaxComment: '#59636e',
  syntaxKeyword: '#a0111f',
  syntaxParameter: '#702c00',
  syntaxFunction: '#622cbc',
  syntaxStringExpression: '#024c1a',
  syntaxPunctuation: '#a0111f',
  syntaxLink: '#023b95',
}

/** Dark variant: deep blue-black surfaces, high-legibility light text, the same indigo lifted for the darker base. */
export const darkPalette: Palette = {
  bgBase: '#010409',
  bgLayer1: '#010409',
  bgLayer2: '#151b23',
  bgLayer3: '#212830',
  bgOverlay: '#212830',
  bgModulePlatform: '#151b23',
  bgMultiSelect: '#151b23',
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

  textPrimary: '#ffffff',
  textSecondary: '#b7bdc8',
  textTertiary: '#9198a1',
  textCaption: '#9198a1',
  textDimmedFill: '#212830',
  textPrimarySoft: '#b7bdc8',
  textOnAccent: '#ffffff',
  textInverted: '#131a2a',
  textBlueTinted: '#74b9ff',

  accent: '#74b9ff',
  accentHover: '#5cacff',
  accentSoftFill: '#212830',
  accentActiveBorder: '#5cacff',
  accentActiveFill: '#194fb15a',
  accentActiveHover: '#194fb1',

  hoverFill: 'rgba(232, 238, 252, 0.07)',
  hoverAccent: 'rgba(123, 150, 255, 0.16)',
  hoverDanger: 'rgba(232, 86, 86, 0.14)',
  activeFill: 'rgba(123, 150, 255, 0.24)',
  hoverSolid: '#212830',

  buttonContrast: '#ffffff',
  buttonInfo: '#74b9ff',
  buttonInfoHover: '#5cacff',
  buttonElevated: '#212830',
  buttonFloating: '#151b23',
  buttonFloatingHover: '#212830',
  buttonToolbar: 'rgba(10, 14, 22, 0.55)',
  buttonToolbarHover: 'rgba(10, 14, 22, 0.68)',

  codeBlock: '#010409',
  codeBanner: '#151b23',
  inlineCode: '#1f2940',
  citation: '#1b2334',
  codeSegmentSelected: '#212830',
  codeSegmentUnselected: '#161d2e',
  tag: '#232c42',
  placeholder: '#212830',

  link: '#74b9ff',

  scrollbar: '#9198a1',
  scrollbarHover: '#b7bdc8',

  error: '#ff9492',
  errorSoft: '#eb3342',
  success: '#2bd853',
  successSoft: '#28d751',
  successTint: '#006222',
  warn: '#f0b72f',
  warnSoft: '#f7c843',
  warnTint: '#3a2d10',
  warnLabel: '#fbd669',
  businessTint: '#151b23',

  sidebarFill: '#010409',
  sidebarHover: '#151b23',
  sidebarActive: '#212830',
  sidebarActiveAccent: '#194fb1',
  bubble: '#151b23',
  bubbleHighlight: '#26325a',
  inputMajor: '#212830',
  inputSubtle: '#010409',
  selector: '#212830',
  tip: '#151b23',
  toast: '#212830',
  tooltip: '#212830',

  syntaxConstant: '#74b9ff',
  syntaxString: '#85d9a0',
  syntaxComment: '#9198a1',
  syntaxKeyword: '#ffadd4',
  syntaxParameter: '#f7c843',
  syntaxFunction: '#dbb7ff',
  syntaxStringExpression: '#4ae168',
  syntaxPunctuation: '#b7bdc8',
  syntaxLink: '#74b9ff',
}
