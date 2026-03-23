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

// ── Scroll Reveal ──────────────────────────────────────────────────────────────

function wireScroll(el: Element, root: Element): void {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  )
  obs.observe(el)
  registerCleanup(root, () => obs.disconnect())
}

// ── Auto-Stagger ───────────────────────────────────────────────────────────────

function wireStagger(container: Element): void {
  const children = [...container.children] as HTMLElement[]
  children.forEach((child, i) => {
    child.style.setProperty('--alive-index', String(i))
  })
}

// ── 3D Tilt ────────────────────────────────────────────────────────────────────

function wireTilt(el: Element, root: Element): void {
  const htmlEl = el as HTMLElement
  const STRENGTH = 8

  const moveCleanup = addListener(htmlEl, 'mousemove', (e) => {
    const rect = htmlEl.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    htmlEl.style.transform = `perspective(800px) rotateY(${x * STRENGTH}deg) rotateX(${-y * STRENGTH}deg) scale(1.01)`
    htmlEl.style.transition = 'transform 0.1s ease-out'
  })

  const leaveCleanup = addListener(htmlEl, 'mouseleave', () => {
    htmlEl.style.transform = ''
    htmlEl.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  })

  registerCleanup(root, moveCleanup)
  registerCleanup(root, leaveCleanup)
}

// ── Magnetic Follow ────────────────────────────────────────────────────────────

function wireMagnetic(el: Element, root: Element): void {
  const htmlEl = el as HTMLElement
  const PULL = 0.35

  const moveCleanup = addListener(htmlEl, 'mousemove', (e) => {
    const rect = htmlEl.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * PULL
    const dy = (e.clientY - cy) * PULL
    htmlEl.style.transform = `translate(${dx}px, ${dy}px)`
    htmlEl.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
  })

  const leaveCleanup = addListener(htmlEl, 'mouseleave', () => {
    htmlEl.style.transform = ''
    htmlEl.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  })

  registerCleanup(root, moveCleanup)
  registerCleanup(root, leaveCleanup)
}

// ── Video Scene Sequencer ──────────────────────────────────────────────────────

/**
 * Force-restart CSS animations on all animated children of a scene element.
 * This ensures stagger delays are relative to scene activation, not page load.
 */
function resetSceneAnimations(scene: HTMLElement): void {
  const animated = scene.querySelectorAll<HTMLElement>(
    '[class*="alive-enter"], [class*="alive-loop"], ' +
    '.alive-typewriter, .alive-typewriter-fast, .alive-typewriter-slow, ' +
    '.alive-word-reveal > *, .alive-kinetic-slam, ' +
    '.alive-metric-card, .alive-toast, .alive-badge-pulse, ' +
    '.alive-spotlight, .alive-code-block',
  )
  animated.forEach(el => {
    const saved = el.style.animationName
    el.style.animationName = 'none'
    void el.offsetHeight // force reflow — restarts animation from t=0
    el.style.animationName = saved
  })
}

/**
 * Wire a [data-alive-sequence] container.
 *
 * Markup:
 *   <div data-alive-sequence data-alive-loop style="position:relative; width:800px; height:500px;">
 *     <div data-alive-scene data-alive-duration="3000" data-alive-transition="wipe-left">…</div>
 *     <div data-alive-scene data-alive-duration="2500" data-alive-transition="fade">…</div>
 *   </div>
 *
 * Scene attributes:
 *   data-alive-duration        — how long to show the scene (ms, default 3000)
 *   data-alive-transition      — transition type (default "fade"; matches alive-transition-* classes)
 *   data-alive-trans-duration  — transition animation duration (ms, default 600)
 *
 * Sequence attributes:
 *   data-alive-loop            — loop back to the first scene after the last
 */
function wireVideoSequence(container: Element, root: Element): void {
  const scenes = [...container.querySelectorAll<HTMLElement>(':scope > [data-alive-scene]')]
  if (scenes.length === 0) return

  const loop = container.hasAttribute('data-alive-loop')
  let current = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const containerEl = container as HTMLElement
  if (getComputedStyle(containerEl).position === 'static') {
    containerEl.style.position = 'relative'
  }
  containerEl.style.overflow = 'hidden'

  scenes.forEach(s => {
    s.style.position = 'absolute'
    s.style.inset = '0'
    s.classList.remove('is-active')
  })

  function activate(index: number): void {
    const scene = scenes[index]
    resetSceneAnimations(scene)
    scene.classList.add('is-active')
    scene.style.zIndex = '1'
  }

  function scheduleNext(fromIndex: number): void {
    const scene = scenes[fromIndex]
    const duration = parseInt(scene.getAttribute('data-alive-duration') ?? '3000', 10)

    timeoutId = setTimeout(() => {
      const nextIndex = fromIndex + 1
      const toIndex = nextIndex >= scenes.length ? (loop ? 0 : -1) : nextIndex
      if (toIndex === -1) return
      doTransition(fromIndex, toIndex)
    }, duration)
  }

  function doTransition(fromIndex: number, toIndex: number): void {
    const outScene = scenes[fromIndex]
    const inScene = scenes[toIndex]
    const transType = outScene.getAttribute('data-alive-transition') ?? 'fade'
    const transDur = parseInt(outScene.getAttribute('data-alive-trans-duration') ?? '600', 10)

    const outClass = `alive-transition-${transType}-out`
    const inClass = `alive-transition-${transType}-in`

    // Sync CSS animation duration with the JS timer
    outScene.style.setProperty('--alive-tr-dur', `${transDur}ms`)
    inScene.style.setProperty('--alive-tr-dur', `${transDur}ms`)

    // Outgoing goes on top (required for wipe/clip-path transitions)
    outScene.style.zIndex = '2'
    outScene.classList.add(outClass)

    // Activate incoming beneath, reset its child animations
    inScene.style.zIndex = '1'
    resetSceneAnimations(inScene)
    inScene.classList.add('is-active', inClass)

    timeoutId = setTimeout(() => {
      outScene.classList.remove('is-active', outClass)
      outScene.style.zIndex = ''
      outScene.style.removeProperty('--alive-tr-dur')
      inScene.classList.remove(inClass)
      inScene.style.removeProperty('--alive-tr-dur')
      current = toIndex
      scheduleNext(current)
    }, transDur)
  }

  activate(current)
  scheduleNext(current)

  registerCleanup(root, () => {
    if (timeoutId) clearTimeout(timeoutId)
  })
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

  // Scroll reveal
  root.querySelectorAll('[data-alive-scroll]').forEach(el => wireScroll(el, root))

  // Auto-stagger children
  root.querySelectorAll('[data-alive-stagger]').forEach(el => wireStagger(el))

  // 3D tilt
  root.querySelectorAll('[data-alive-tilt]').forEach(el => wireTilt(el, root))

  // Magnetic follow
  root.querySelectorAll('[data-alive-magnetic]').forEach(el => wireMagnetic(el, root))

  // Video scene sequencer
  root.querySelectorAll('[data-alive-sequence]').forEach(el => wireVideoSequence(el, root))
}

/**
 * Remove all event listeners registered by `init(root)`.
 */
export function destroy(root: Element = document.documentElement): void {
  const cleanups = cleanupRegistry.get(root) ?? []
  cleanups.forEach(fn => fn())
  cleanupRegistry.delete(root)
}
