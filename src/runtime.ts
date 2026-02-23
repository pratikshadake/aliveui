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

type Cleanup = () => void

const cleanupRegistry = new WeakMap<Element, Cleanup[]>()

function registerCleanup(root: Element, fn: Cleanup): void {
  const existing = cleanupRegistry.get(root) ?? []
  existing.push(fn)
  cleanupRegistry.set(root, existing)
}

function addListener<K extends keyof HTMLElementEventMap>(
  el: EventTarget,
  type: K,
  handler: (e: HTMLElementEventMap[K]) => void,
  options?: AddEventListenerOptions,
): Cleanup {
  el.addEventListener(type, handler as EventListener, options)
  return () => el.removeEventListener(type, handler as EventListener, options)
}

// ── Accordion ─────────────────────────────────────────────────────────────────

function wireAccordion(container: Element, root: Element): void {
  const triggers = container.querySelectorAll<HTMLElement>('[data-alive-trigger]')
  triggers.forEach(trigger => {
    const item = trigger.closest('[data-alive-accordion-item]') ?? trigger.parentElement
    if (!item) return

    const cleanup = addListener(trigger, 'click', () => {
      const isOpen = item.classList.contains('is-open')
      // Close all items if not multi-open
      if (!container.hasAttribute('data-alive-multi')) {
        container.querySelectorAll('[data-alive-accordion-item]').forEach(i => {
          i.classList.remove('is-open')
          i.querySelector('[data-alive-trigger]')?.setAttribute('aria-expanded', 'false')
        })
      }
      if (!isOpen) {
        item.classList.add('is-open')
        trigger.setAttribute('aria-expanded', 'true')
      }
    })
    registerCleanup(root, cleanup)
  })
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function wireModal(modal: Element, root: Element): void {
  const id = modal.getAttribute('data-alive-modal')
  if (!id) return

  // Open triggers
  const openers = document.querySelectorAll<HTMLElement>(`[data-alive-open="${id}"]`)
  openers.forEach(opener => {
    const cleanup = addListener(opener, 'click', () => openModal(id))
    registerCleanup(root, cleanup)
  })

  // Close triggers inside the modal
  modal.querySelectorAll<HTMLElement>('[data-alive-close]').forEach(closer => {
    const cleanup = addListener(closer, 'click', () => closeModal(id))
    registerCleanup(root, cleanup)
  })

  // Backdrop click to close (click on the modal wrapper, not the content)
  const cleanup = addListener(modal, 'click', (e) => {
    if (e.target === modal) closeModal(id)
  })
  registerCleanup(root, cleanup)

  // ESC key
  const escCleanup = addListener(document, 'keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(id)
  })
  registerCleanup(root, escCleanup)
}

export function openModal(id: string): void {
  const modal = document.querySelector<HTMLElement>(`[data-alive-modal="${id}"]`)
  if (!modal) return
  modal.classList.add('is-open')
  modal.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
  // Focus first focusable element
  const focusable = modal.querySelector<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )
  focusable?.focus()
}

export function closeModal(id: string): void {
  const modal = document.querySelector<HTMLElement>(`[data-alive-modal="${id}"]`)
  if (!modal) return
  modal.classList.remove('is-open')
  modal.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

// ── Drawer ────────────────────────────────────────────────────────────────────

function wireDrawer(drawer: Element, root: Element): void {
  const id = drawer.getAttribute('data-alive-drawer')
  if (!id) return

  const openers = document.querySelectorAll<HTMLElement>(`[data-alive-open="${id}"]`)
  openers.forEach(opener => {
    const cleanup = addListener(opener, 'click', () => openDrawer(id))
    registerCleanup(root, cleanup)
  })

  drawer.querySelectorAll<HTMLElement>('[data-alive-close]').forEach(closer => {
    const cleanup = addListener(closer, 'click', () => closeDrawer(id))
    registerCleanup(root, cleanup)
  })

  const backdropCleanup = addListener(drawer, 'click', (e) => {
    if (e.target === drawer) closeDrawer(id)
  })
  registerCleanup(root, backdropCleanup)

  const escCleanup = addListener(document, 'keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer(id)
  })
  registerCleanup(root, escCleanup)
}

export function openDrawer(id: string): void {
  const drawer = document.querySelector<HTMLElement>(`[data-alive-drawer="${id}"]`)
  if (!drawer) return
  drawer.classList.add('is-open')
  drawer.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
}

export function closeDrawer(id: string): void {
  const drawer = document.querySelector<HTMLElement>(`[data-alive-drawer="${id}"]`)
  if (!drawer) return
  drawer.classList.remove('is-open')
  drawer.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

// ── Dropdown ──────────────────────────────────────────────────────────────────

function wireDropdown(container: Element, root: Element): void {
  const trigger = container.querySelector<HTMLElement>('[data-alive-trigger]')
  const menu = container.querySelector<HTMLElement>('[data-alive-dropdown-menu]')
  if (!trigger || !menu) return

  const toggleCleanup = addListener(trigger, 'click', (e) => {
    e.stopPropagation()
    toggleDropdown(container)
  })
  registerCleanup(root, toggleCleanup)

  // Close on outside click
  const outsideCleanup = addListener(document, 'click', (e) => {
    if (!container.contains(e.target as Node)) {
      menu.classList.remove('is-open')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })
  registerCleanup(root, outsideCleanup)

  // Close on ESC
  const escCleanup = addListener(document, 'keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open')
      trigger.setAttribute('aria-expanded', 'false')
      trigger.focus()
    }
  })
  registerCleanup(root, escCleanup)
}

export function toggleDropdown(container: Element): void {
  const trigger = container.querySelector<HTMLElement>('[data-alive-trigger]')
  const menu = container.querySelector<HTMLElement>('[data-alive-dropdown-menu]')
  if (!menu) return
  const isOpen = menu.classList.toggle('is-open')
  trigger?.setAttribute('aria-expanded', String(isOpen))
  if (isOpen) {
    // Focus first item
    menu.querySelector<HTMLElement>('[role="menuitem"], button, a')?.focus()
  }
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

function wireTabs(container: Element, root: Element): void {
  const tabs = container.querySelectorAll<HTMLElement>('[data-alive-tab]')
  tabs.forEach(tab => {
    const cleanup = addListener(tab, 'click', () => {
      const panelId = tab.getAttribute('data-alive-tab')
      if (!panelId) return
      activateTab(container, panelId)
    })
    registerCleanup(root, cleanup)

    // Keyboard navigation
    const keyCleanup = addListener(tab, 'keydown', (e) => {
      const allTabs = [...container.querySelectorAll<HTMLElement>('[data-alive-tab]')]
      const idx = allTabs.indexOf(tab)
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        allTabs[(idx + 1) % allTabs.length]?.focus()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        allTabs[(idx - 1 + allTabs.length) % allTabs.length]?.focus()
      }
    })
    registerCleanup(root, keyCleanup)
  })
}

function activateTab(container: Element, panelId: string): void {
  // Deactivate all tabs + panels within this tabs container
  container.querySelectorAll('[data-alive-tab]').forEach(t => {
    t.classList.remove('is-active')
    t.setAttribute('aria-selected', 'false')
    t.setAttribute('tabindex', '-1')
  })

  // Find panels — look in the container, then in the whole document
  const searchRoot = container.closest('[data-alive-tabs-panels]') ?? document
  searchRoot.querySelectorAll('[data-alive-panel]').forEach(p => {
    p.classList.remove('is-active')
    p.setAttribute('aria-hidden', 'true')
  })

  // Activate the selected tab
  const activeTab = container.querySelector<HTMLElement>(`[data-alive-tab="${panelId}"]`)
  activeTab?.classList.add('is-active')
  activeTab?.setAttribute('aria-selected', 'true')
  activeTab?.setAttribute('tabindex', '0')

  // Activate the matching panel
  const activePanel = searchRoot.querySelector<HTMLElement>(`[data-alive-panel="${panelId}"]`)
  activePanel?.classList.add('is-active')
  activePanel?.setAttribute('aria-hidden', 'false')
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Wire all data-alive-* components within `root` (defaults to document.documentElement).
 * Safe to call multiple times — existing listeners are tracked and replaced on `destroy()`.
 */
export function init(root: Element = document.documentElement): void {
  // Accordion
  root.querySelectorAll('[data-alive-accordion]').forEach(el => wireAccordion(el, root))

  // Modal
  root.querySelectorAll('[data-alive-modal]').forEach(el => wireModal(el, root))

  // Drawer
  root.querySelectorAll('[data-alive-drawer]').forEach(el => wireDrawer(el, root))

  // Dropdown
  root.querySelectorAll('[data-alive-dropdown]').forEach(el => wireDropdown(el, root))

  // Tabs
  root.querySelectorAll('[data-alive-tabs]').forEach(el => wireTabs(el, root))
}

/**
 * Remove all event listeners registered by `init(root)`.
 */
export function destroy(root: Element = document.documentElement): void {
  const cleanups = cleanupRegistry.get(root) ?? []
  cleanups.forEach(fn => fn())
  cleanupRegistry.delete(root)
}
