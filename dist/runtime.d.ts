/**
 * AliveUI Runtime
 *
 * Provides data-attribute-driven interactivity for accordion, modal, drawer,
 * dropdown, and tabs components — zero dependencies, ~2 KB.
 *
 * Usage:
 *   import { init } from '@alivecss/aliveui/runtime'
 *   init() // wire everything in document
 *   init(myRootElement) // wire a subtree
 */
declare function openModal(id: string): void;
declare function closeModal(id: string): void;
declare function openDrawer(id: string): void;
declare function closeDrawer(id: string): void;
declare function toggleDropdown(container: Element): void;
/**
 * Wire all data-alive-* components within `root` (defaults to document.documentElement).
 * Safe to call multiple times — existing listeners are tracked and replaced on `destroy()`.
 */
declare function init(root?: Element): void;
/**
 * Remove all event listeners registered by `init(root)`.
 */
declare function destroy(root?: Element): void;

export { closeDrawer, closeModal, destroy, init, openDrawer, openModal, toggleDropdown };
