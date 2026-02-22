import type { ResolvedConfig } from '../types'

// Generates the @aliveui base block:
// CSS custom properties (motion tokens, depth shadows) + reset + all component primitives
export function generateBase(_config: ResolvedConfig): string {
  return `/* ═══════════════════════════════════════════════════════════════
   AliveUI — Motion-first CSS framework
   Base layer: tokens · depth · animations · components
   ═══════════════════════════════════════════════════════════════ */

/* ── Reset ─────────────────────────────────────────────────────── */
*,
::before,
::after {
  box-sizing: border-box;
}

/* ── Design tokens ──────────────────────────────────────────────── */
:root {
  /* Motion durations */
  --alive-duration-fast:   120ms;
  --alive-duration-normal: 200ms;
  --alive-duration-slow:   320ms;

  /* Easing curves */
  --alive-ease-standard:   cubic-bezier(0.2, 0, 0, 1);
  --alive-ease-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1);
  --alive-ease-exit:       cubic-bezier(0.3, 0, 0.8, 0.15);

  /* Depth shadows */
  --alive-shadow-d1:       none;
  --alive-shadow-d2:       0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --alive-shadow-d2-hover: 0 4px 16px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06);
  --alive-shadow-d3:       0 8px 40px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08);

  /* Stagger defaults */
  --alive-stagger-gap: 60ms;
  --alive-index: 0;

  /* Inherited depth context — overridden by .d1/.d2/.d3 */
  --alive-duration: 0ms;
  --alive-ease:     linear;
}

/* ── Depth system ───────────────────────────────────────────────── */

/* d1 — base surface: flat, color-only transitions */
.d1 {
  --alive-depth:    1;
  --alive-duration: var(--alive-duration-normal);
  --alive-ease:     var(--alive-ease-standard);
}

/* d2 — elevated interactive: lifts and scales on hover */
.d2 {
  --alive-depth:    2;
  --alive-duration: var(--alive-duration-normal);
  --alive-ease:     var(--alive-ease-standard);
  box-shadow: var(--alive-shadow-d2);
  transition:
    box-shadow var(--alive-duration-normal) var(--alive-ease-standard),
    transform   var(--alive-duration-normal) var(--alive-ease-standard);
}
.d2:hover {
  box-shadow: var(--alive-shadow-d2-hover);
  transform: translateY(-1px) scale(1.004);
}
.d2:active {
  box-shadow: var(--alive-shadow-d2);
  transform: translateY(0) scale(0.998);
  transition-duration: var(--alive-duration-fast);
}

/* d3 — floating layer: strong shadow, emphasized entrance */
.d3 {
  --alive-depth:    3;
  --alive-duration: var(--alive-duration-slow);
  --alive-ease:     var(--alive-ease-emphasized);
  box-shadow: var(--alive-shadow-d3);
}

/* ── Keyframe animations ─────────────────────────────────────────── */

/* Entrances */
@keyframes alive-fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes alive-fade-down {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes alive-fade-right {
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes alive-fade-left {
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes alive-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes alive-scale-in {
  from { opacity: 0; transform: scale(0.94); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes alive-scale-up {
  from { opacity: 0; transform: scale(0.92) translateY(4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Exits */
@keyframes alive-exit-down {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(8px); }
}
@keyframes alive-exit-up {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-8px); }
}
@keyframes alive-exit-left {
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(-12px); }
}
@keyframes alive-exit-right {
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(12px); }
}
@keyframes alive-exit-scale {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.94); }
}

/* Loop animations */
@keyframes alive-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.45; }
}
@keyframes alive-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes alive-ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
@keyframes alive-bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
@keyframes alive-shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

/* ── Entrance classes ────────────────────────────────────────────── */

.alive-enter {
  animation: alive-fade-up var(--alive-duration-slow) var(--alive-ease-emphasized) both;
  animation-delay: calc(var(--alive-stagger-gap, 60ms) * var(--alive-index, 0));
}
.alive-enter-down {
  animation: alive-fade-down var(--alive-duration-slow) var(--alive-ease-emphasized) both;
  animation-delay: calc(var(--alive-stagger-gap, 60ms) * var(--alive-index, 0));
}
.alive-enter-right {
  animation: alive-fade-right var(--alive-duration-slow) var(--alive-ease-emphasized) both;
  animation-delay: calc(var(--alive-stagger-gap, 60ms) * var(--alive-index, 0));
}
.alive-enter-left {
  animation: alive-fade-left var(--alive-duration-slow) var(--alive-ease-emphasized) both;
  animation-delay: calc(var(--alive-stagger-gap, 60ms) * var(--alive-index, 0));
}
.alive-enter-fade {
  animation: alive-fade-in var(--alive-duration-normal) var(--alive-ease-standard) both;
  animation-delay: calc(var(--alive-stagger-gap, 60ms) * var(--alive-index, 0));
}
.alive-enter-scale {
  animation: alive-scale-in var(--alive-duration-normal) var(--alive-ease-emphasized) both;
  animation-delay: calc(var(--alive-stagger-gap, 60ms) * var(--alive-index, 0));
}

/* ── Exit classes (apply dynamically when removing elements) ─────── */

.alive-exit {
  animation: alive-exit-down var(--alive-duration-normal) var(--alive-ease-exit) both;
}
.alive-exit-up {
  animation: alive-exit-up var(--alive-duration-normal) var(--alive-ease-exit) both;
}
.alive-exit-left {
  animation: alive-exit-left var(--alive-duration-normal) var(--alive-ease-exit) both;
}
.alive-exit-right {
  animation: alive-exit-right var(--alive-duration-normal) var(--alive-ease-exit) both;
}
.alive-exit-scale {
  animation: alive-exit-scale var(--alive-duration-fast) var(--alive-ease-exit) both;
}

/* ── Loop animations ─────────────────────────────────────────────── */

.alive-loop-pulse  { animation: alive-pulse  2s ease-in-out infinite; }
.alive-loop-spin   { animation: alive-spin   1s linear infinite; }
.alive-loop-ping   { animation: alive-ping   1s cubic-bezier(0, 0, 0.2, 1) infinite; }
.alive-loop-bounce { animation: alive-bounce 1s infinite; }

/* Reduced motion — respect system preference */
@media (prefers-reduced-motion: reduce) {
  .alive-enter,
  .alive-enter-down,
  .alive-enter-right,
  .alive-enter-left,
  .alive-enter-fade,
  .alive-enter-scale,
  .alive-exit,
  .alive-exit-up,
  .alive-exit-left,
  .alive-exit-right,
  .alive-exit-scale,
  .alive-loop-pulse,
  .alive-loop-spin,
  .alive-loop-ping,
  .alive-loop-bounce {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* ── Motion override utilities ───────────────────────────────────── */

.motion-fast   { --alive-duration: var(--alive-duration-fast)   !important; }
.motion-normal { --alive-duration: var(--alive-duration-normal) !important; }
.motion-slow   { --alive-duration: var(--alive-duration-slow)   !important; }
.motion-none   { --alive-duration: 0ms                          !important; }

.ease-standard   { --alive-ease: var(--alive-ease-standard)   !important; }
.ease-emphasized { --alive-ease: var(--alive-ease-emphasized)  !important; }
.ease-exit       { --alive-ease: var(--alive-ease-exit)        !important; }

/* ══════════════════════════════════════════════════════════════════
   COMPONENT PRIMITIVES
   ══════════════════════════════════════════════════════════════════ */

/* ── Card ────────────────────────────────────────────────────────── */

.alive-card {
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: var(--alive-card-bg, #ffffff);
  border: 1px solid var(--alive-card-border, rgba(0,0,0,0.06));
}
.alive-card-flush  { padding: 0; }
.alive-card-sm     { padding: 1rem; border-radius: 0.5rem; }
.alive-card-lg     { padding: 2rem; border-radius: 1rem; }

/* ── Button ──────────────────────────────────────────────────────── */

.alive-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  text-decoration: none;
  transition:
    background-color var(--alive-duration-fast) var(--alive-ease-standard),
    color            var(--alive-duration-fast) var(--alive-ease-standard),
    border-color     var(--alive-duration-fast) var(--alive-ease-standard),
    box-shadow       var(--alive-duration-fast) var(--alive-ease-standard),
    transform        var(--alive-duration-fast) var(--alive-ease-standard),
    opacity          var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-button:active {
  transform: scale(0.97);
  transition-duration: calc(var(--alive-duration-fast) / 2);
}
.alive-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.alive-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Button variants */
.alive-button-primary {
  background-color: #0a0a0a;
  color: #ffffff;
  border-color: #0a0a0a;
}
.alive-button-primary:hover { background-color: #1a1a1a; }

.alive-button-secondary {
  background-color: transparent;
  color: #0a0a0a;
  border-color: #e4e4e4;
}
.alive-button-secondary:hover {
  background-color: #f4f4f4;
  border-color: #d4d4d4;
}

.alive-button-ghost {
  background-color: transparent;
  color: #4b4b4b;
  border-color: transparent;
}
.alive-button-ghost:hover {
  background-color: #f4f4f4;
  color: #0a0a0a;
}

.alive-button-destructive {
  background-color: #dc2626;
  color: #ffffff;
  border-color: #dc2626;
}
.alive-button-destructive:hover { background-color: #b91c1c; }

/* Button sizes */
.alive-button-xs  { padding: 0.25rem 0.625rem; font-size: 0.75rem;   border-radius: 0.375rem; }
.alive-button-sm  { padding: 0.375rem 0.875rem; font-size: 0.8125rem; border-radius: 0.375rem; }
.alive-button-lg  { padding: 0.75rem 1.75rem;   font-size: 0.9375rem; border-radius: 0.625rem; }
.alive-button-xl  { padding: 0.875rem 2rem;     font-size: 1rem;      border-radius: 0.75rem;  }
.alive-button-icon {
  padding: 0.625rem;
  aspect-ratio: 1;
}

/* ── Badge ───────────────────────────────────────────────────────── */

.alive-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  border-radius: 9999px;
  border: 1px solid transparent;
  white-space: nowrap;
}

/* Badge sizes */
.alive-badge-sm { padding: 0.125rem 0.5rem; font-size: 0.6875rem; }
.alive-badge-lg { padding: 0.375rem 0.75rem; font-size: 0.8125rem; }

/* Badge colors */
.alive-badge-gray    { background: rgba(0,0,0,0.06);        color: #525252; border-color: rgba(0,0,0,0.1); }
.alive-badge-green   { background: rgba(74,222,128,0.12);   color: #16a34a; border-color: rgba(74,222,128,0.25); }
.alive-badge-red     { background: rgba(239,68,68,0.1);     color: #dc2626; border-color: rgba(239,68,68,0.2); }
.alive-badge-yellow  { background: rgba(234,179,8,0.1);     color: #ca8a04; border-color: rgba(234,179,8,0.25); }
.alive-badge-blue    { background: rgba(96,165,250,0.1);    color: #2563eb; border-color: rgba(96,165,250,0.22); }
.alive-badge-purple  { background: rgba(167,139,250,0.12);  color: #7c3aed; border-color: rgba(167,139,250,0.25); }
.alive-badge-orange  { background: rgba(251,146,60,0.1);    color: #ea580c; border-color: rgba(251,146,60,0.22); }

/* Badge with status dot */
.alive-badge-dot::before {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}

/* ── Input ───────────────────────────────────────────────────────── */

.alive-input {
  display: block;
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: inherit;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.14);
  border-radius: 0.5rem;
  outline: none;
  transition:
    border-color var(--alive-duration-fast) var(--alive-ease-standard),
    box-shadow   var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-input::placeholder { opacity: 0.4; }
.alive-input:hover { border-color: rgba(0,0,0,0.24); }
.alive-input:focus {
  border-color: rgba(0,0,0,0.5);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.07);
}
.alive-input:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  background: rgba(0,0,0,0.03);
}
.alive-input-error         { border-color: rgba(239,68,68,0.55); }
.alive-input-error:hover   { border-color: rgba(239,68,68,0.7);  }
.alive-input-error:focus   {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
}
.alive-input-sm  { padding: 0.4375rem 0.75rem;   font-size: 0.8125rem; }
.alive-input-lg  { padding: 0.75rem 1rem;         font-size: 0.9375rem; }

/* ── Textarea ────────────────────────────────────────────────────── */

.alive-textarea {
  display: block;
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: inherit;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.14);
  border-radius: 0.5rem;
  outline: none;
  resize: vertical;
  min-height: 6rem;
  transition:
    border-color var(--alive-duration-fast) var(--alive-ease-standard),
    box-shadow   var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-textarea::placeholder { opacity: 0.4; }
.alive-textarea:hover { border-color: rgba(0,0,0,0.24); }
.alive-textarea:focus {
  border-color: rgba(0,0,0,0.5);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.07);
}
.alive-textarea:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  background: rgba(0,0,0,0.03);
}

/* ── Select ──────────────────────────────────────────────────────── */

.alive-select {
  display: block;
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: inherit;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;
  background-size: 1.25rem;
  border: 1px solid rgba(0,0,0,0.14);
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  transition:
    border-color var(--alive-duration-fast) var(--alive-ease-standard),
    box-shadow   var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-select:hover { border-color: rgba(0,0,0,0.24); }
.alive-select:focus {
  border-color: rgba(0,0,0,0.5);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.07);
}
.alive-select:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

/* ── Checkbox / Radio ────────────────────────────────────────────── */

.alive-checkbox,
.alive-radio {
  width: 1rem;
  height: 1rem;
  border: 1.5px solid rgba(0,0,0,0.25);
  border-radius: 0.25rem;
  background: transparent;
  cursor: pointer;
  appearance: none;
  transition:
    background   var(--alive-duration-fast) var(--alive-ease-standard),
    border-color var(--alive-duration-fast) var(--alive-ease-standard),
    box-shadow   var(--alive-duration-fast) var(--alive-ease-standard);
  flex-shrink: 0;
}
.alive-radio { border-radius: 50%; }

.alive-checkbox:checked,
.alive-radio:checked {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.75rem;
}
.alive-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
.alive-checkbox:focus-visible,
.alive-radio:focus-visible {
  box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
}

/* ── Switch / Toggle ─────────────────────────────────────────────── */

.alive-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 2.75rem;
  height: 1.5rem;
  border-radius: 9999px;
  background: rgba(0,0,0,0.15);
  cursor: pointer;
  flex-shrink: 0;
  transition: background var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-switch::after {
  content: '';
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: transform var(--alive-duration-normal) var(--alive-ease-emphasized);
}
.alive-switch[aria-checked="true"],
.alive-switch.is-checked {
  background: #22c55e;
}
.alive-switch[aria-checked="true"]::after,
.alive-switch.is-checked::after {
  transform: translateX(1.25rem);
}
.alive-switch[aria-checked="false"][data-pending],
.alive-switch.is-pending {
  opacity: 0.7;
  cursor: wait;
}
/* Sizes */
.alive-switch-sm {
  width: 2.25rem;
  height: 1.25rem;
}
.alive-switch-sm::after { width: 0.875rem; height: 0.875rem; }
.alive-switch-sm[aria-checked="true"]::after,
.alive-switch-sm.is-checked::after { transform: translateX(1rem); }

.alive-switch-lg {
  width: 3.5rem;
  height: 2rem;
}
.alive-switch-lg::after { width: 1.5rem; height: 1.5rem; }
.alive-switch-lg[aria-checked="true"]::after,
.alive-switch-lg.is-checked::after { transform: translateX(1.5rem); }

/* ── Avatar ──────────────────────────────────────────────────────── */

.alive-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(0,0,0,0.08);
  color: rgba(0,0,0,0.5);
  user-select: none;
}
.alive-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.alive-avatar-xs { width: 1.5rem;  height: 1.5rem;  font-size: 0.625rem; }
.alive-avatar-sm { width: 2rem;    height: 2rem;    font-size: 0.75rem;  }
.alive-avatar-lg { width: 3rem;    height: 3rem;    font-size: 1rem;     }
.alive-avatar-xl { width: 4rem;    height: 4rem;    font-size: 1.25rem;  }
.alive-avatar-2xl { width: 5rem;   height: 5rem;    font-size: 1.5rem;   }

/* Avatar group — overlapping stack */
.alive-avatar-group {
  display: flex;
}
.alive-avatar-group .alive-avatar {
  border: 2px solid var(--alive-avatar-ring, #fff);
  margin-left: -0.5rem;
}
.alive-avatar-group .alive-avatar:first-child {
  margin-left: 0;
}

/* ── Skeleton ────────────────────────────────────────────────────── */

.alive-skeleton {
  border-radius: 0.375rem;
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.06) 25%,
    rgba(0,0,0,0.1)  50%,
    rgba(0,0,0,0.06) 75%
  );
  background-size: 200% 100%;
  animation: alive-shimmer 1.6s ease-in-out infinite;
}
.alive-skeleton-text   { height: 1em; border-radius: 0.25rem; }
.alive-skeleton-circle { border-radius: 9999px; }
.alive-skeleton-sm { animation-duration: 1.2s; }
.alive-skeleton-lg { animation-duration: 2s; }

/* ── Progress ────────────────────────────────────────────────────── */

.alive-progress {
  display: block;
  width: 100%;
  height: 0.5rem;
  border-radius: 9999px;
  background: rgba(0,0,0,0.08);
  overflow: hidden;
}
.alive-progress-bar {
  height: 100%;
  border-radius: 9999px;
  background: #0a0a0a;
  transition: width var(--alive-duration-slow) var(--alive-ease-standard);
}
.alive-progress-xs  { height: 0.125rem; }
.alive-progress-sm  { height: 0.25rem;  }
.alive-progress-lg  { height: 0.75rem;  }
.alive-progress-xl  { height: 1rem;     }
.alive-progress-indeterminate .alive-progress-bar {
  width: 40% !important;
  animation: alive-progress-indeterminate 1.5s ease-in-out infinite;
}
@keyframes alive-progress-indeterminate {
  0%   { transform: translateX(-150%); }
  100% { transform: translateX(400%); }
}

/* ── Separator ───────────────────────────────────────────────────── */

.alive-separator {
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.08);
  border: none;
  margin: 0;
}
.alive-separator-v {
  display: inline-block;
  width: 1px;
  height: 1em;
  vertical-align: middle;
  background: rgba(0,0,0,0.08);
  margin: 0 0.5rem;
}
.alive-separator-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: rgba(0,0,0,0.4);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.alive-separator-label::before,
.alive-separator-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(0,0,0,0.08);
}

/* ── Alert ───────────────────────────────────────────────────────── */

.alive-alert {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  line-height: 1.55;
}
.alive-alert-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.alive-alert-info    { background: rgba(96,165,250,0.08);  border-color: rgba(96,165,250,0.2);  color: #1d4ed8; }
.alive-alert-success { background: rgba(74,222,128,0.08);  border-color: rgba(74,222,128,0.22); color: #15803d; }
.alive-alert-warning { background: rgba(251,191,36,0.10);  border-color: rgba(251,191,36,0.25); color: #92400e; }
.alive-alert-error   { background: rgba(239,68,68,0.08);   border-color: rgba(239,68,68,0.2);   color: #dc2626; }

/* ── Tooltip ─────────────────────────────────────────────────────── */

.alive-tooltip-wrap {
  position: relative;
  display: inline-flex;
}
.alive-tooltip {
  position: absolute;
  z-index: 50;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  color: #fff;
  background: rgba(10,10,10,0.92);
  border-radius: 0.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.14);
  pointer-events: none;
  opacity: 0;
  transition:
    opacity   var(--alive-duration-fast) var(--alive-ease-standard),
    transform var(--alive-duration-fast) var(--alive-ease-emphasized);
}
.alive-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(10,10,10,0.92);
}
.alive-tooltip-wrap:hover .alive-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Tooltip placements */
.alive-tooltip-bottom {
  top: calc(100% + 8px);
  bottom: auto;
  transform: translateX(-50%) translateY(-4px);
}
.alive-tooltip-bottom::after {
  top: auto;
  bottom: 100%;
  border-top-color: transparent;
  border-bottom-color: rgba(10,10,10,0.92);
}
.alive-tooltip-wrap:hover .alive-tooltip-bottom {
  transform: translateX(-50%) translateY(0);
}

/* ── Modal ───────────────────────────────────────────────────────── */

.alive-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  animation: alive-fade-in var(--alive-duration-normal) var(--alive-ease-standard) both;
}
.alive-modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
}
.alive-modal-content {
  position: relative;
  width: 100%;
  max-width: 32rem;
  max-height: calc(100dvh - 2rem);
  overflow-y: auto;
  border-radius: 1rem;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow:
    0 24px 64px rgba(0,0,0,0.18),
    0 8px 24px rgba(0,0,0,0.10);
  animation: alive-scale-up var(--alive-duration-slow) var(--alive-ease-emphasized) both;
}
.alive-modal-sm .alive-modal-content { max-width: 24rem; }
.alive-modal-lg .alive-modal-content { max-width: 48rem; }
.alive-modal-xl .alive-modal-content { max-width: 64rem; }
.alive-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.alive-modal-body    { padding: 1.5rem; }
.alive-modal-footer  {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.06);
}

/* ── Drawer / Sheet ──────────────────────────────────────────────── */

.alive-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  max-width: 24rem;
  background: #fff;
  border-left: 1px solid rgba(0,0,0,0.08);
  box-shadow: -8px 0 40px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  animation: alive-fade-left var(--alive-duration-slow) var(--alive-ease-emphasized) both;
}
.alive-drawer-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.06); }
.alive-drawer-body   { flex: 1; overflow-y: auto; padding: 1.5rem; }
.alive-drawer-footer { padding: 1rem 1.5rem; border-top: 1px solid rgba(0,0,0,0.06); }

/* ── Navigation bar ──────────────────────────────────────────────── */

.alive-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  gap: 1rem;
}
.alive-nav-brand {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  color: inherit;
}
.alive-nav-items {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
}
.alive-nav-end {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}
.alive-nav-link {
  padding: 0.4375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  color: rgba(0,0,0,0.55);
  transition: background var(--alive-duration-fast) var(--alive-ease-standard), color var(--alive-duration-fast) var(--alive-ease-standard);
  cursor: pointer;
}
.alive-nav-link:hover { background: rgba(0,0,0,0.05); color: rgba(0,0,0,0.85); }
.alive-nav-link.is-active { background: rgba(0,0,0,0.07); color: rgba(0,0,0,0.9); }

/* ── Tabs ────────────────────────────────────────────────────────── */

.alive-tabs {
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  gap: 0;
  position: relative;
}
.alive-tab {
  padding: 0.6875rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0,0,0,0.45);
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-tab:hover { color: rgba(0,0,0,0.72); }
.alive-tab.is-active {
  color: rgba(0,0,0,0.9);
  border-bottom-color: rgba(0,0,0,0.9);
}
/* Sliding indicator variant */
.alive-tabs-indicator {
  position: absolute;
  bottom: -1px;
  height: 2px;
  background: #0a0a0a;
  border-radius: 2px 2px 0 0;
  transition:
    left  var(--alive-duration-normal) var(--alive-ease-emphasized),
    width var(--alive-duration-normal) var(--alive-ease-emphasized);
}

/* Pill tabs variant */
.alive-tabs-pills {
  border-bottom: none;
  gap: 0.25rem;
  background: rgba(0,0,0,0.05);
  padding: 0.25rem;
  border-radius: 0.625rem;
}
.alive-tabs-pills .alive-tab {
  border-radius: 0.375rem;
  border-bottom: none;
  margin-bottom: 0;
}
.alive-tabs-pills .alive-tab.is-active {
  background: #fff;
  color: rgba(0,0,0,0.9);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-bottom-color: transparent;
}

/* ── Dropdown / Menu ─────────────────────────────────────────────── */

.alive-dropdown {
  position: absolute;
  z-index: 50;
  min-width: 12rem;
  padding: 0.375rem;
  border-radius: 0.75rem;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow:
    0 8px 32px rgba(0,0,0,0.1),
    0 2px 8px rgba(0,0,0,0.06);
  animation: alive-scale-up var(--alive-duration-fast) var(--alive-ease-emphasized) both;
  transform-origin: top left;
}
.alive-dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0.5625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(0,0,0,0.75);
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  transition: background var(--alive-duration-fast) var(--alive-ease-standard), color var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-dropdown-item:hover {
  background: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.9);
}
.alive-dropdown-item.is-active {
  background: rgba(0,0,0,0.07);
  color: rgba(0,0,0,0.9);
  font-weight: 500;
}
.alive-dropdown-item-destructive { color: #dc2626; }
.alive-dropdown-item-destructive:hover { background: rgba(239,68,68,0.08); color: #dc2626; }
.alive-dropdown-separator {
  height: 1px;
  background: rgba(0,0,0,0.07);
  margin: 0.25rem 0;
  border: none;
}
.alive-dropdown-label {
  padding: 0.375rem 0.75rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.35);
}

/* ── Table ───────────────────────────────────────────────────────── */

.alive-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  text-align: left;
}
.alive-table th {
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.45);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  white-space: nowrap;
}
.alive-table td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.75);
  transition: background var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-table tr:hover td { background: rgba(0,0,0,0.02); }
.alive-table tr:last-child td { border-bottom: none; }

/* Table variants */
.alive-table-striped tr:nth-child(even) td { background: rgba(0,0,0,0.018); }
.alive-table-bordered td,
.alive-table-bordered th { border: 1px solid rgba(0,0,0,0.07); }

/* ── Chip ────────────────────────────────────────────────────────── */

.alive-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.3125rem 0.75rem;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 9999px;
  background: rgba(0,0,0,0.06);
  color: rgba(0,0,0,0.65);
  border: 1px solid rgba(0,0,0,0.1);
  cursor: default;
  user-select: none;
  transition:
    background     var(--alive-duration-fast) var(--alive-ease-standard),
    border-color   var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-chip:hover { background: rgba(0,0,0,0.09); border-color: rgba(0,0,0,0.16); }
.alive-chip.is-selected {
  background: rgba(0,0,0,0.1);
  color: rgba(0,0,0,0.85);
  border-color: rgba(0,0,0,0.2);
}
.alive-chip-dismiss {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity var(--alive-duration-fast) var(--alive-ease-standard), background var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-chip-dismiss:hover { opacity: 1; background: rgba(0,0,0,0.12); }

/* ── Stack ───────────────────────────────────────────────────────── */

.alive-stack   { display: flex; }
.alive-stack-v { flex-direction: column; }
.alive-stack-h { flex-direction: row; }

/* ── Container ───────────────────────────────────────────────────── */

.alive-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 640px)  { .alive-container { max-width: 640px;  padding-left: 1.5rem;  padding-right: 1.5rem;  } }
@media (min-width: 768px)  { .alive-container { max-width: 768px;  } }
@media (min-width: 1024px) { .alive-container { max-width: 1024px; padding-left: 2rem;    padding-right: 2rem;    } }
@media (min-width: 1280px) { .alive-container { max-width: 1280px; } }
@media (min-width: 1536px) { .alive-container { max-width: 1536px; } }

/* ── Cluster (responsive flex wrap) ─────────────────────────────── */

.alive-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* ── Focus ring ──────────────────────────────────────────────────── */

.alive-focus-ring:focus-visible {
  outline: 2px solid rgba(0,0,0,0.75);
  outline-offset: 2px;
}

/* ── Overlays & surfaces ─────────────────────────────────────────── */

.alive-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* ── Toast / Snackbar ────────────────────────────────────────────── */

.alive-toast-region {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: none;
}
.alive-toast {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.125rem;
  border-radius: 0.75rem;
  background: rgba(10,10,10,0.94);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.1);
  pointer-events: auto;
  min-width: 16rem;
  max-width: 24rem;
  animation: alive-fade-right var(--alive-duration-slow) var(--alive-ease-emphasized) both;
}
.alive-toast-icon { flex-shrink: 0; }
.alive-toast-body { flex: 1; min-width: 0; }
.alive-toast-title { font-weight: 600; }
.alive-toast-desc  { font-size: 0.8125rem; opacity: 0.7; margin-top: 0.125rem; }
.alive-toast-close {
  flex-shrink: 0;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-toast-close:hover { opacity: 1; }

/* Toast variants */
.alive-toast-success { border-color: rgba(74,222,128,0.3); }
.alive-toast-error   { border-color: rgba(239,68,68,0.3); }
.alive-toast-warning { border-color: rgba(251,191,36,0.3); }

/* ── Command palette ─────────────────────────────────────────────── */

.alive-command {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
}
.alive-command-panel {
  width: 100%;
  max-width: 38rem;
  border-radius: 1rem;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow:
    0 24px 80px rgba(0,0,0,0.22),
    0 8px 24px rgba(0,0,0,0.12);
  overflow: hidden;
  animation: alive-scale-up var(--alive-duration-slow) var(--alive-ease-emphasized) both;
}
.alive-command-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.alive-command-input {
  flex: 1;
  font-size: 1rem;
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
}
.alive-command-list {
  max-height: 24rem;
  overflow-y: auto;
  padding: 0.375rem;
}
.alive-command-group-label {
  padding: 0.5rem 0.75rem 0.25rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.35);
}
.alive-command-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: rgba(0,0,0,0.75);
  transition: background var(--alive-duration-fast) var(--alive-ease-standard), color var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-command-item:hover,
.alive-command-item.is-active {
  background: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.9);
}
.alive-command-shortcut {
  margin-left: auto;
  font-size: 0.75rem;
  opacity: 0.4;
  font-family: ui-monospace, monospace;
}

/* ── Popover ─────────────────────────────────────────────────────── */

.alive-popover {
  position: absolute;
  z-index: 50;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow:
    0 8px 32px rgba(0,0,0,0.1),
    0 2px 8px rgba(0,0,0,0.06);
  animation: alive-scale-up var(--alive-duration-fast) var(--alive-ease-emphasized) both;
}

/* ── Sidebar ─────────────────────────────────────────────────────── */

.alive-sidebar {
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 100%;
  border-right: 1px solid rgba(0,0,0,0.07);
  background: #fafafa;
  overflow-y: auto;
  flex-shrink: 0;
}
.alive-sidebar-section {
  padding: 1rem 0.75rem;
}
.alive-sidebar-section + .alive-sidebar-section {
  border-top: 1px solid rgba(0,0,0,0.06);
}
.alive-sidebar-label {
  padding: 0 0.5rem 0.375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.35);
}
.alive-sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 0.5rem;
  color: rgba(0,0,0,0.6);
  cursor: pointer;
  text-decoration: none;
  transition: background var(--alive-duration-fast) var(--alive-ease-standard), color var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-sidebar-item:hover { background: rgba(0,0,0,0.05); color: rgba(0,0,0,0.85); }
.alive-sidebar-item.is-active {
  background: rgba(0,0,0,0.08);
  color: rgba(0,0,0,0.9);
  font-weight: 500;
}

/* ── Utility: visually hidden (screen reader) ────────────────────── */
.alive-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}
`
}
