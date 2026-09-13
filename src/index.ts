/**
 * Deep Contrast host half.
 *
 * The theme lives entirely in the browser half (`src/client`); this entry
 * exists to put the package on the Loader — the bundle patch inserts this
 * module, and the client-modules scan then discovers and serves
 * `lib/client` from the package's `dsh.client` declaration. A mount with
 * nothing to do on the Host is the intended shape: no Host state, no config,
 * no server surface.
 *
 * @module dsh-deep-contrast
 */
import type { HostContextLike } from './harness-types.js'

/**
 * Mount the theme package.
 * @param _ctx - host context (unused: the Host owns no theme state).
 */
export function apply(_ctx: HostContextLike): void {}
