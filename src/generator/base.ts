import type { ResolvedConfig } from '../types'

// Generates the @aliveui base block:
// CSS custom properties (motion tokens, depth shadows) + minimal reset
export function generateBase(_config: ResolvedConfig): string {
  return `/* AliveUI Base — motion tokens & depth primitives */
*,
::before,
::after {
  box-sizing: border-box;
}

:root {
  /* Motion durations */
  --alive-duration-fast: 120ms;
  --alive-duration-normal: 200ms;
  --alive-duration-slow: 320ms;

  /* Easing curves */
  --alive-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --alive-ease-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1);
  --alive-ease-exit: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* Depth shadows */
  --alive-shadow-d1: none;
  --alive-shadow-d2: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
  --alive-shadow-d2-hover: 0 4px 16px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 0, 0, 0.06);
  --alive-shadow-d3: 0 8px 40px rgba(0, 0, 0, 0.14), 0 4px 16px rgba(0, 0, 0, 0.08);

  /* Depth context — inherited by all utilities */
  --alive-duration: 0ms;
  --alive-ease: linear;
}

/* Depth context: d1 */
.d1 {
  --alive-depth: 1;
  --alive-duration: var(--alive-duration-normal);
  --alive-ease: var(--alive-ease-standard);
}

/* Depth context: d2 — elevated interactive surface */
.d2 {
  --alive-depth: 2;
  --alive-duration: var(--alive-duration-normal);
  --alive-ease: var(--alive-ease-standard);
  box-shadow: var(--alive-shadow-d2);
  transition:
    box-shadow var(--alive-duration-normal) var(--alive-ease-standard),
    transform var(--alive-duration-normal) var(--alive-ease-standard);
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

/* Depth context: d3 — floating layer */
.d3 {
  --alive-depth: 3;
  --alive-duration: var(--alive-duration-slow);
  --alive-ease: var(--alive-ease-emphasized);
  box-shadow: var(--alive-shadow-d3);
}

/* Entrance animations */
@keyframes alive-fade-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes alive-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes alive-scale-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.alive-enter {
  animation: alive-fade-up var(--alive-duration-slow) var(--alive-ease-emphasized) both;
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

/* Motion override utilities */
.motion-fast  { --alive-duration: var(--alive-duration-fast) !important; }
.motion-normal { --alive-duration: var(--alive-duration-normal) !important; }
.motion-slow  { --alive-duration: var(--alive-duration-slow) !important; }
.motion-none  { --alive-duration: 0ms !important; }

.ease-standard   { --alive-ease: var(--alive-ease-standard) !important; }
.ease-emphasized { --alive-ease: var(--alive-ease-emphasized) !important; }
.ease-exit       { --alive-ease: var(--alive-ease-exit) !important; }

/* AliveUI component primitives */
.alive-card {
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: var(--alive-card-bg, #ffffff);
  border: 1px solid var(--alive-card-border, rgba(0, 0, 0, 0.06));
}

.alive-card-flush {
  padding: 0;
}

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
    color var(--alive-duration-fast) var(--alive-ease-standard),
    border-color var(--alive-duration-fast) var(--alive-ease-standard),
    box-shadow var(--alive-duration-fast) var(--alive-ease-standard),
    transform var(--alive-duration-fast) var(--alive-ease-standard),
    opacity var(--alive-duration-fast) var(--alive-ease-standard);
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

.alive-button-sm {
  padding: 0.375rem 0.875rem;
  font-size: 0.8125rem;
  border-radius: 0.375rem;
}

.alive-button-lg {
  padding: 0.75rem 1.75rem;
  font-size: 0.9375rem;
  border-radius: 0.625rem;
}

.alive-stack {
  display: flex;
}

.alive-stack-v { flex-direction: column; }
.alive-stack-h { flex-direction: row; }
`
}
