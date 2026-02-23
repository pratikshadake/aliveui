// src/runtime.ts
var cleanupRegistry = /* @__PURE__ */ new WeakMap();
function registerCleanup(root, fn) {
  const existing = cleanupRegistry.get(root) ?? [];
  existing.push(fn);
  cleanupRegistry.set(root, existing);
}
function addListener(el, type, handler, options) {
  el.addEventListener(type, handler, options);
  return () => el.removeEventListener(type, handler, options);
}
function wireAccordion(container, root) {
  const triggers = container.querySelectorAll("[data-alive-trigger]");
  triggers.forEach((trigger) => {
    const item = trigger.closest("[data-alive-accordion-item]") ?? trigger.parentElement;
    if (!item) return;
    const cleanup = addListener(trigger, "click", () => {
      const isOpen = item.classList.contains("is-open");
      if (!container.hasAttribute("data-alive-multi")) {
        container.querySelectorAll("[data-alive-accordion-item]").forEach((i) => {
          i.classList.remove("is-open");
          i.querySelector("[data-alive-trigger]")?.setAttribute("aria-expanded", "false");
        });
      }
      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
    registerCleanup(root, cleanup);
  });
}
function wireModal(modal, root) {
  const id = modal.getAttribute("data-alive-modal");
  if (!id) return;
  const openers = document.querySelectorAll(`[data-alive-open="${id}"]`);
  openers.forEach((opener) => {
    const cleanup2 = addListener(opener, "click", () => openModal(id));
    registerCleanup(root, cleanup2);
  });
  modal.querySelectorAll("[data-alive-close]").forEach((closer) => {
    const cleanup2 = addListener(closer, "click", () => closeModal(id));
    registerCleanup(root, cleanup2);
  });
  const cleanup = addListener(modal, "click", (e) => {
    if (e.target === modal) closeModal(id);
  });
  registerCleanup(root, cleanup);
  const escCleanup = addListener(document, "keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal(id);
  });
  registerCleanup(root, escCleanup);
}
function openModal(id) {
  const modal = document.querySelector(`[data-alive-modal="${id}"]`);
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const focusable = modal.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  focusable?.focus();
}
function closeModal(id) {
  const modal = document.querySelector(`[data-alive-modal="${id}"]`);
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function wireDrawer(drawer, root) {
  const id = drawer.getAttribute("data-alive-drawer");
  if (!id) return;
  const openers = document.querySelectorAll(`[data-alive-open="${id}"]`);
  openers.forEach((opener) => {
    const cleanup = addListener(opener, "click", () => openDrawer(id));
    registerCleanup(root, cleanup);
  });
  drawer.querySelectorAll("[data-alive-close]").forEach((closer) => {
    const cleanup = addListener(closer, "click", () => closeDrawer(id));
    registerCleanup(root, cleanup);
  });
  const backdropCleanup = addListener(drawer, "click", (e) => {
    if (e.target === drawer) closeDrawer(id);
  });
  registerCleanup(root, backdropCleanup);
  const escCleanup = addListener(document, "keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer(id);
  });
  registerCleanup(root, escCleanup);
}
function openDrawer(id) {
  const drawer = document.querySelector(`[data-alive-drawer="${id}"]`);
  if (!drawer) return;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeDrawer(id) {
  const drawer = document.querySelector(`[data-alive-drawer="${id}"]`);
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function wireDropdown(container, root) {
  const trigger = container.querySelector("[data-alive-trigger]");
  const menu = container.querySelector("[data-alive-dropdown-menu]");
  if (!trigger || !menu) return;
  const toggleCleanup = addListener(trigger, "click", (e) => {
    e.stopPropagation();
    toggleDropdown(container);
  });
  registerCleanup(root, toggleCleanup);
  const outsideCleanup = addListener(document, "click", (e) => {
    if (!container.contains(e.target)) {
      menu.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
  registerCleanup(root, outsideCleanup);
  const escCleanup = addListener(document, "keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });
  registerCleanup(root, escCleanup);
}
function toggleDropdown(container) {
  const trigger = container.querySelector("[data-alive-trigger]");
  const menu = container.querySelector("[data-alive-dropdown-menu]");
  if (!menu) return;
  const isOpen = menu.classList.toggle("is-open");
  trigger?.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    menu.querySelector('[role="menuitem"], button, a')?.focus();
  }
}
function wireTabs(container, root) {
  const tabs = container.querySelectorAll("[data-alive-tab]");
  tabs.forEach((tab) => {
    const cleanup = addListener(tab, "click", () => {
      const panelId = tab.getAttribute("data-alive-tab");
      if (!panelId) return;
      activateTab(container, panelId);
    });
    registerCleanup(root, cleanup);
    const keyCleanup = addListener(tab, "keydown", (e) => {
      const allTabs = [...container.querySelectorAll("[data-alive-tab]")];
      const idx = allTabs.indexOf(tab);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        allTabs[(idx + 1) % allTabs.length]?.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        allTabs[(idx - 1 + allTabs.length) % allTabs.length]?.focus();
      }
    });
    registerCleanup(root, keyCleanup);
  });
}
function activateTab(container, panelId) {
  container.querySelectorAll("[data-alive-tab]").forEach((t) => {
    t.classList.remove("is-active");
    t.setAttribute("aria-selected", "false");
    t.setAttribute("tabindex", "-1");
  });
  const searchRoot = container.closest("[data-alive-tabs-panels]") ?? document;
  searchRoot.querySelectorAll("[data-alive-panel]").forEach((p) => {
    p.classList.remove("is-active");
    p.setAttribute("aria-hidden", "true");
  });
  const activeTab = container.querySelector(`[data-alive-tab="${panelId}"]`);
  activeTab?.classList.add("is-active");
  activeTab?.setAttribute("aria-selected", "true");
  activeTab?.setAttribute("tabindex", "0");
  const activePanel = searchRoot.querySelector(`[data-alive-panel="${panelId}"]`);
  activePanel?.classList.add("is-active");
  activePanel?.setAttribute("aria-hidden", "false");
}
function init(root = document.documentElement) {
  root.querySelectorAll("[data-alive-accordion]").forEach((el) => wireAccordion(el, root));
  root.querySelectorAll("[data-alive-modal]").forEach((el) => wireModal(el, root));
  root.querySelectorAll("[data-alive-drawer]").forEach((el) => wireDrawer(el, root));
  root.querySelectorAll("[data-alive-dropdown]").forEach((el) => wireDropdown(el, root));
  root.querySelectorAll("[data-alive-tabs]").forEach((el) => wireTabs(el, root));
}
function destroy(root = document.documentElement) {
  const cleanups = cleanupRegistry.get(root) ?? [];
  cleanups.forEach((fn) => fn());
  cleanupRegistry.delete(root);
}
export {
  closeDrawer,
  closeModal,
  destroy,
  init,
  openDrawer,
  openModal,
  toggleDropdown
};
//# sourceMappingURL=runtime.mjs.map