"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/runtime.ts
var runtime_exports = {};
__export(runtime_exports, {
  closeDrawer: () => closeDrawer,
  closeModal: () => closeModal,
  destroy: () => destroy,
  init: () => init,
  openDrawer: () => openDrawer,
  openModal: () => openModal,
  toggleDropdown: () => toggleDropdown
});
module.exports = __toCommonJS(runtime_exports);
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
function wireScroll(el, root) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  obs.observe(el);
  registerCleanup(root, () => obs.disconnect());
}
function wireStagger(container) {
  const children = [...container.children];
  children.forEach((child, i) => {
    child.style.setProperty("--alive-index", String(i));
  });
}
function wireTilt(el, root) {
  const htmlEl = el;
  const STRENGTH = 8;
  const moveCleanup = addListener(htmlEl, "mousemove", (e) => {
    const rect = htmlEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    htmlEl.style.transform = `perspective(800px) rotateY(${x * STRENGTH}deg) rotateX(${-y * STRENGTH}deg) scale(1.01)`;
    htmlEl.style.transition = "transform 0.1s ease-out";
  });
  const leaveCleanup = addListener(htmlEl, "mouseleave", () => {
    htmlEl.style.transform = "";
    htmlEl.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  });
  registerCleanup(root, moveCleanup);
  registerCleanup(root, leaveCleanup);
}
function wireMagnetic(el, root) {
  const htmlEl = el;
  const PULL = 0.35;
  const moveCleanup = addListener(htmlEl, "mousemove", (e) => {
    const rect = htmlEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * PULL;
    const dy = (e.clientY - cy) * PULL;
    htmlEl.style.transform = `translate(${dx}px, ${dy}px)`;
    htmlEl.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)";
  });
  const leaveCleanup = addListener(htmlEl, "mouseleave", () => {
    htmlEl.style.transform = "";
    htmlEl.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  });
  registerCleanup(root, moveCleanup);
  registerCleanup(root, leaveCleanup);
}
function init(root = document.documentElement) {
  root.querySelectorAll("[data-alive-accordion]").forEach((el) => wireAccordion(el, root));
  root.querySelectorAll("[data-alive-modal]").forEach((el) => wireModal(el, root));
  root.querySelectorAll("[data-alive-drawer]").forEach((el) => wireDrawer(el, root));
  root.querySelectorAll("[data-alive-dropdown]").forEach((el) => wireDropdown(el, root));
  root.querySelectorAll("[data-alive-tabs]").forEach((el) => wireTabs(el, root));
  root.querySelectorAll("[data-alive-scroll]").forEach((el) => wireScroll(el, root));
  root.querySelectorAll("[data-alive-stagger]").forEach((el) => wireStagger(el));
  root.querySelectorAll("[data-alive-tilt]").forEach((el) => wireTilt(el, root));
  root.querySelectorAll("[data-alive-magnetic]").forEach((el) => wireMagnetic(el, root));
}
function destroy(root = document.documentElement) {
  const cleanups = cleanupRegistry.get(root) ?? [];
  cleanups.forEach((fn) => fn());
  cleanupRegistry.delete(root);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  closeDrawer,
  closeModal,
  destroy,
  init,
  openDrawer,
  openModal,
  toggleDropdown
});
//# sourceMappingURL=runtime.js.map