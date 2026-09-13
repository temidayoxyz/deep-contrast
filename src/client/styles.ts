/**
 * The toggle's stylesheet, injected for the plugin lifetime. Colors ride the
 * Harness tokens — which Deep Contrast itself overrides — so the control
 * re-themes together with everything else. One class family (`dc-*`) keeps
 * the surface tiny and collision-free.
 *
 * @module dsh-deep-contrast/client/styles
 */

/** The `dc-toggle` sheet: layout for both column states, hover, and focus. */
export const TOGGLE_STYLES = `
.dc-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  line-height: 1;
  transition: background-color var(--ds-transition-duration-fast, 0.1s) var(--ds-ease-in-out, ease),
    color var(--ds-transition-duration-fast, 0.1s) var(--ds-ease-in-out, ease);
}
.dc-toggle:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}
.dc-toggle:focus-visible {
  outline: 2px solid var(--dsw-alias-button-ghost-active-border);
  outline-offset: 1px;
}
.dc-toggle.dc-rail {
  width: 36px;
  height: 36px;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
}
.dc-toggle.dc-wide {
  height: 34px;
  padding: 0 10px;
}
.dc-toggle svg {
  flex: none;
  display: block;
}
.dc-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`
