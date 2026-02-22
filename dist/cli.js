#!/usr/bin/env node
#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli.ts
var import_commander = require("commander");
var import_chokidar = require("chokidar");
var import_fs2 = require("fs");
var import_path = require("path");

// src/theme/colors.ts
var defaultColors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};

// src/theme/default.ts
var defaultTheme = {
  colors: defaultColors,
  spacing: {
    px: "1px",
    "0": "0px",
    "0.5": "0.125rem",
    "1": "0.25rem",
    "1.5": "0.375rem",
    "2": "0.5rem",
    "2.5": "0.625rem",
    "3": "0.75rem",
    "3.5": "0.875rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem"
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  fontSize: {
    xs: ["0.75rem", "1rem"],
    sm: ["0.875rem", "1.25rem"],
    base: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "1.75rem"],
    "2xl": ["1.5rem", "2rem"],
    "3xl": ["1.875rem", "2.25rem"],
    "4xl": ["2.25rem", "2.5rem"],
    "5xl": ["3rem", "1"],
    "6xl": ["3.75rem", "1"],
    "7xl": ["4.5rem", "1"],
    "8xl": ["6rem", "1"],
    "9xl": ["8rem", "1"]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  opacity: {
    "0": "0",
    "5": "0.05",
    "10": "0.1",
    "15": "0.15",
    "20": "0.2",
    "25": "0.25",
    "30": "0.3",
    "40": "0.4",
    "50": "0.5",
    "60": "0.6",
    "70": "0.7",
    "75": "0.75",
    "80": "0.8",
    "90": "0.9",
    "95": "0.95",
    "100": "1"
  },
  zIndex: {
    auto: "auto",
    "0": "0",
    "10": "10",
    "20": "20",
    "30": "30",
    "40": "40",
    "50": "50"
  },
  boxShadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
    none: "none"
  },
  darkMode: "media"
};

// src/config.ts
function resolveConfig(userConfig = {}) {
  const userTheme = userConfig.theme;
  const theme = mergeTheme(defaultTheme, userTheme ?? {});
  return {
    content: userConfig.content ?? [],
    output: userConfig.output ?? "alive.css",
    theme
  };
}
function mergeTheme(base, overrides) {
  return {
    colors: { ...base.colors, ...overrides.colors ?? {} },
    spacing: { ...base.spacing, ...overrides.spacing ?? {} },
    borderRadius: { ...base.borderRadius, ...overrides.borderRadius ?? {} },
    fontSize: { ...base.fontSize, ...overrides.fontSize ?? {} },
    fontWeight: { ...base.fontWeight, ...overrides.fontWeight ?? {} },
    lineHeight: { ...base.lineHeight, ...overrides.lineHeight ?? {} },
    screens: { ...base.screens, ...overrides.screens ?? {} },
    opacity: { ...base.opacity, ...overrides.opacity ?? {} },
    zIndex: { ...base.zIndex, ...overrides.zIndex ?? {} },
    boxShadow: { ...base.boxShadow, ...overrides.boxShadow ?? {} },
    darkMode: overrides.darkMode ?? base.darkMode
  };
}

// src/scanner.ts
var import_fs = require("fs");
var import_fast_glob = __toESM(require("fast-glob"));
var CLASS_EXTRACTION_REGEX = /(?:class|className)(?:\s*=\s*|\s*:\s*)(?:"([^"]+)"|'([^']+)'|`([^`]+)`|\{[^}]*['"`]([^'"`]+)['"`][^}]*\})/g;
var TOKEN_REGEX = /[`'"]([\w\s/-]+)[`'"]/g;
async function scanContent(config) {
  if (config.content.length === 0) return /* @__PURE__ */ new Set();
  const files = await (0, import_fast_glob.default)(config.content, {
    absolute: true,
    ignore: ["**/node_modules/**", "**/.git/**", "**/dist/**"]
  });
  const classes = /* @__PURE__ */ new Set();
  for (const file of files) {
    try {
      const content = (0, import_fs.readFileSync)(file, "utf-8");
      extractClasses(content, classes);
    } catch {
    }
  }
  return classes;
}
function extractClasses(content, classes) {
  let match;
  CLASS_EXTRACTION_REGEX.lastIndex = 0;
  while ((match = CLASS_EXTRACTION_REGEX.exec(content)) !== null) {
    const value = match[1] ?? match[2] ?? match[3] ?? match[4];
    if (value) {
      splitAndAdd(value, classes);
    }
  }
  TOKEN_REGEX.lastIndex = 0;
  while ((match = TOKEN_REGEX.exec(content)) !== null) {
    if (match[1]) {
      splitAndAdd(match[1], classes);
    }
  }
  const rawTokens = content.match(/\b([a-z][a-z0-9]*(?:-[a-z0-9./]+)*(?::[a-z][a-z0-9]*(?:-[a-z0-9./]+)*)*)\b/g);
  if (rawTokens) {
    for (const token of rawTokens) {
      if (isLikelyClass(token)) {
        classes.add(token);
      }
    }
  }
}
function splitAndAdd(value, classes) {
  const tokens = value.split(/[\s\n\r\t]+/);
  for (const token of tokens) {
    const clean = token.trim();
    if (clean && isLikelyClass(clean)) {
      classes.add(clean);
    }
  }
}
function isLikelyClass(token) {
  if (!token || token.length < 1 || token.length > 60) return false;
  if (!/^[a-z-]/.test(token)) return false;
  if (/\s/.test(token)) return false;
  if (token.includes("://")) return false;
  if (token.startsWith("http")) return false;
  return true;
}

// src/generator/base.ts
function generateBase(_config) {
  return `/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   AliveUI \u2014 Motion-first CSS framework
   Base layer: tokens \xB7 depth \xB7 animations \xB7 components
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500 Reset \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
*,
::before,
::after {
  box-sizing: border-box;
}

/* \u2500\u2500 Design tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

  /* Inherited depth context \u2014 overridden by .d1/.d2/.d3 */
  --alive-duration: 0ms;
  --alive-ease:     linear;
}

/* \u2500\u2500 Depth system \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* d1 \u2014 base surface: flat, color-only transitions */
.d1 {
  --alive-depth:    1;
  --alive-duration: var(--alive-duration-normal);
  --alive-ease:     var(--alive-ease-standard);
}

/* d2 \u2014 elevated interactive: lifts and scales on hover */
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

/* d3 \u2014 floating layer: strong shadow, emphasized entrance */
.d3 {
  --alive-depth:    3;
  --alive-duration: var(--alive-duration-slow);
  --alive-ease:     var(--alive-ease-emphasized);
  box-shadow: var(--alive-shadow-d3);
}

/* \u2500\u2500 Keyframe animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Entrance classes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Exit classes (apply dynamically when removing elements) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Loop animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-loop-pulse  { animation: alive-pulse  2s ease-in-out infinite; }
.alive-loop-spin   { animation: alive-spin   1s linear infinite; }
.alive-loop-ping   { animation: alive-ping   1s cubic-bezier(0, 0, 0.2, 1) infinite; }
.alive-loop-bounce { animation: alive-bounce 1s infinite; }

/* Reduced motion \u2014 respect system preference */
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

/* \u2500\u2500 Motion override utilities \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.motion-fast   { --alive-duration: var(--alive-duration-fast)   !important; }
.motion-normal { --alive-duration: var(--alive-duration-normal) !important; }
.motion-slow   { --alive-duration: var(--alive-duration-slow)   !important; }
.motion-none   { --alive-duration: 0ms                          !important; }

.ease-standard   { --alive-ease: var(--alive-ease-standard)   !important; }
.ease-emphasized { --alive-ease: var(--alive-ease-emphasized)  !important; }
.ease-exit       { --alive-ease: var(--alive-ease-exit)        !important; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   COMPONENT PRIMITIVES
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500 Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-card {
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: var(--alive-card-bg, #ffffff);
  border: 1px solid var(--alive-card-border, rgba(0,0,0,0.06));
}
.alive-card-flush  { padding: 0; }
.alive-card-sm     { padding: 1rem; border-radius: 0.5rem; }
.alive-card-lg     { padding: 2rem; border-radius: 1rem; }

/* \u2500\u2500 Button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Textarea \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Select \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Checkbox / Radio \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Switch / Toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Avatar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* Avatar group \u2014 overlapping stack */
.alive-avatar-group {
  display: flex;
}
.alive-avatar-group .alive-avatar {
  box-shadow: 0 0 0 2px rgba(0,0,0,0.06);
  margin-left: -0.5rem;
}
.alive-avatar-group .alive-avatar:first-child {
  margin-left: 0;
}

/* \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Progress \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Separator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Alert \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Tooltip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Drawer / Sheet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Navigation bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Dropdown / Menu \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Chip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Stack \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-stack   { display: flex; }
.alive-stack-v { flex-direction: column; }
.alive-stack-h { flex-direction: row; }

/* \u2500\u2500 Container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Cluster (responsive flex wrap) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* \u2500\u2500 Focus ring \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-focus-ring:focus-visible {
  outline: 2px solid rgba(0,0,0,0.75);
  outline-offset: 2px;
}

/* \u2500\u2500 Overlays & surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* \u2500\u2500 Toast / Snackbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Command palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Popover \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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

/* \u2500\u2500 Utility: visually hidden (screen reader) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

/* \u2500\u2500 Kbd \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.1875rem 0.4375rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  color: rgba(0,0,0,0.65);
  background: rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.14);
  border-bottom-width: 2px;
  border-radius: 0.3125rem;
  white-space: nowrap;
  user-select: none;
}

/* \u2500\u2500 Form group \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.alive-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0,0,0,0.8);
}
.alive-label-required::after {
  content: ' *';
  color: #dc2626;
}
.alive-helper {
  font-size: 0.8125rem;
  color: rgba(0,0,0,0.45);
  line-height: 1.4;
}
.alive-error-msg {
  font-size: 0.8125rem;
  color: #dc2626;
  line-height: 1.4;
}

/* \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: rgba(0,0,0,0.45);
  list-style: none;
  margin: 0;
  padding: 0;
}
.alive-breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.alive-breadcrumb-item a {
  color: rgba(0,0,0,0.55);
  text-decoration: none;
  transition: color var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-breadcrumb-item a:hover { color: rgba(0,0,0,0.9); }
.alive-breadcrumb-item[aria-current="page"] { color: rgba(0,0,0,0.85); font-weight: 500; }
.alive-breadcrumb-sep {
  color: rgba(0,0,0,0.25);
  user-select: none;
  font-size: 0.8125rem;
}

/* \u2500\u2500 Accordion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-accordion {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 0.75rem;
  overflow: hidden;
}
.alive-accordion-item {
  border-bottom: 1px solid rgba(0,0,0,0.07);
}
.alive-accordion-item:last-child { border-bottom: none; }
.alive-accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(0,0,0,0.8);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 0.75rem;
  transition: background var(--alive-duration-fast) var(--alive-ease-standard), color var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-accordion-trigger:hover { background: rgba(0,0,0,0.025); color: rgba(0,0,0,0.9); }
.alive-accordion-icon {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  color: rgba(0,0,0,0.35);
  transition: transform var(--alive-duration-normal) var(--alive-ease-emphasized);
}
.alive-accordion-item.is-open .alive-accordion-icon { transform: rotate(180deg); }
.alive-accordion-content {
  overflow: hidden;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(0,0,0,0.6);
}
.alive-accordion-content-inner { padding: 0 1.25rem 1.25rem; }

/* \u2500\u2500 Pagination \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.alive-pagination {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.alive-page-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  color: rgba(0,0,0,0.55);
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  user-select: none;
  transition:
    background    var(--alive-duration-fast) var(--alive-ease-standard),
    border-color  var(--alive-duration-fast) var(--alive-ease-standard),
    color         var(--alive-duration-fast) var(--alive-ease-standard);
}
.alive-page-item:hover { background: rgba(0,0,0,0.05); color: rgba(0,0,0,0.85); }
.alive-page-item.is-active {
  background: rgba(0,0,0,0.08);
  border-color: rgba(0,0,0,0.14);
  color: rgba(0,0,0,0.9);
  font-weight: 600;
  cursor: default;
}
.alive-page-item:disabled,
.alive-page-item.is-disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}
.alive-page-gap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  font-size: 0.875rem;
  color: rgba(0,0,0,0.3);
  user-select: none;
}
`;
}

// src/generator/utils.ts
function escapeSelector(cls) {
  return cls.replace(/\./g, "\\.").replace(/:/g, "\\:").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\//g, "\\/").replace(/#/g, "\\#").replace(/%/g, "\\%");
}
function resolveColor(colors, name, shade) {
  const entry = colors[name];
  if (!entry) return null;
  if (typeof entry === "string") return entry;
  if (!shade) return null;
  return entry[shade] ?? null;
}
function parseVariants(cls) {
  const parts = cls.split(":");
  return {
    variants: parts.slice(0, -1),
    base: parts[parts.length - 1]
  };
}

// src/generator/colors.ts
var TRANSITIONED = `
  transition-property: {prop};
  transition-duration: var(--alive-duration, 0ms);
  transition-timing-function: var(--alive-ease, linear);`;
function transitioned(prop) {
  return TRANSITIONED.replace("{prop}", prop);
}
function generateColors(classes, config) {
  const { colors } = config.theme;
  const rules = [];
  for (const cls of classes) {
    const generated = matchColor(cls, colors);
    if (generated) rules.push(generated);
  }
  return rules;
}
function matchColor(cls, colors) {
  const bgMatch = cls.match(/^bg-([a-z]+)(?:-(\d+))?$/);
  if (bgMatch) {
    const value = resolveColor(colors, bgMatch[1], bgMatch[2]);
    if (value) {
      return `.${cls} {
  background-color: ${value};${transitioned("background-color")}
}`;
    }
  }
  const textColorMatch = cls.match(/^text-([a-z]+)(?:-(\d+))?$/);
  if (textColorMatch) {
    const value = resolveColor(colors, textColorMatch[1], textColorMatch[2]);
    if (value) {
      return `.${cls} {
  color: ${value};${transitioned("color")}
}`;
    }
  }
  const borderColorMatch = cls.match(/^border-([a-z]+)(?:-(\d+))?$/);
  if (borderColorMatch) {
    const value = resolveColor(colors, borderColorMatch[1], borderColorMatch[2]);
    if (value) {
      return `.${cls} {
  border-color: ${value};${transitioned("border-color")}
}`;
    }
  }
  const ringColorMatch = cls.match(/^ring-([a-z]+)(?:-(\d+))?$/);
  if (ringColorMatch) {
    const value = resolveColor(colors, ringColorMatch[1], ringColorMatch[2]);
    if (value) {
      return `.${cls} {
  --alive-ring-color: ${value};
}`;
    }
  }
  const outlineColorMatch = cls.match(/^outline-([a-z]+)(?:-(\d+))?$/);
  if (outlineColorMatch) {
    const value = resolveColor(colors, outlineColorMatch[1], outlineColorMatch[2]);
    if (value) {
      return `.${cls} {
  outline-color: ${value};
}`;
    }
  }
  const fillMatch = cls.match(/^fill-([a-z]+)(?:-(\d+))?$/);
  if (fillMatch) {
    const value = resolveColor(colors, fillMatch[1], fillMatch[2]);
    if (value) {
      return `.${cls} {
  fill: ${value};
}`;
    }
  }
  const strokeMatch = cls.match(/^stroke-([a-z]+)(?:-(\d+))?$/);
  if (strokeMatch) {
    const value = resolveColor(colors, strokeMatch[1], strokeMatch[2]);
    if (value) {
      return `.${cls} {
  stroke: ${value};
}`;
    }
  }
  const decorationMatch = cls.match(/^decoration-([a-z]+)(?:-(\d+))?$/);
  if (decorationMatch) {
    const value = resolveColor(colors, decorationMatch[1], decorationMatch[2]);
    if (value) {
      return `.${cls} {
  text-decoration-color: ${value};
}`;
    }
  }
  const caretMatch = cls.match(/^caret-([a-z]+)(?:-(\d+))?$/);
  if (caretMatch) {
    const value = resolveColor(colors, caretMatch[1], caretMatch[2]);
    if (value) {
      return `.${cls} {
  caret-color: ${value};
}`;
    }
  }
  const accentMatch = cls.match(/^accent-([a-z]+)(?:-(\d+))?$/);
  if (accentMatch) {
    const value = resolveColor(colors, accentMatch[1], accentMatch[2]);
    if (value) {
      return `.${cls} {
  accent-color: ${value};
}`;
    }
  }
  const shadowColorMatch = cls.match(/^shadow-([a-z]+)-(\d+)$/);
  if (shadowColorMatch) {
    const value = resolveColor(colors, shadowColorMatch[1], shadowColorMatch[2]);
    if (value) {
      return `.${cls} {
  --alive-shadow-color: ${value};
}`;
    }
  }
  return null;
}

// src/generator/spacing.ts
function generateSpacing(classes, config) {
  const { spacing } = config.theme;
  const rules = [];
  for (const cls of classes) {
    const generated = matchSpacing(cls, spacing);
    if (generated) rules.push(generated);
  }
  return rules;
}
function matchSpacing(cls, spacing) {
  const pMatch = cls.match(/^p-(.+)$/);
  if (pMatch && spacing[pMatch[1]]) {
    return `.${cls} { padding: ${spacing[pMatch[1]]}; }`;
  }
  const pxMatch = cls.match(/^px-(.+)$/);
  if (pxMatch && spacing[pxMatch[1]]) {
    return `.${cls} { padding-left: ${spacing[pxMatch[1]]}; padding-right: ${spacing[pxMatch[1]]}; }`;
  }
  const pyMatch = cls.match(/^py-(.+)$/);
  if (pyMatch && spacing[pyMatch[1]]) {
    return `.${cls} { padding-top: ${spacing[pyMatch[1]]}; padding-bottom: ${spacing[pyMatch[1]]}; }`;
  }
  const ptMatch = cls.match(/^pt-(.+)$/);
  if (ptMatch && spacing[ptMatch[1]]) {
    return `.${cls} { padding-top: ${spacing[ptMatch[1]]}; }`;
  }
  const prMatch = cls.match(/^pr-(.+)$/);
  if (prMatch && spacing[prMatch[1]]) {
    return `.${cls} { padding-right: ${spacing[prMatch[1]]}; }`;
  }
  const pbMatch = cls.match(/^pb-(.+)$/);
  if (pbMatch && spacing[pbMatch[1]]) {
    return `.${cls} { padding-bottom: ${spacing[pbMatch[1]]}; }`;
  }
  const plMatch = cls.match(/^pl-(.+)$/);
  if (plMatch && spacing[plMatch[1]]) {
    return `.${cls} { padding-left: ${spacing[plMatch[1]]}; }`;
  }
  const mMatch = cls.match(/^m-(.+)$/);
  if (mMatch) {
    if (mMatch[1] === "auto") return `.${cls} { margin: auto; }`;
    if (spacing[mMatch[1]]) return `.${cls} { margin: ${spacing[mMatch[1]]}; }`;
  }
  const mxMatch = cls.match(/^mx-(.+)$/);
  if (mxMatch) {
    if (mxMatch[1] === "auto") return `.${cls} { margin-left: auto; margin-right: auto; }`;
    if (spacing[mxMatch[1]]) return `.${cls} { margin-left: ${spacing[mxMatch[1]]}; margin-right: ${spacing[mxMatch[1]]}; }`;
  }
  const myMatch = cls.match(/^my-(.+)$/);
  if (myMatch) {
    if (myMatch[1] === "auto") return `.${cls} { margin-top: auto; margin-bottom: auto; }`;
    if (spacing[myMatch[1]]) return `.${cls} { margin-top: ${spacing[myMatch[1]]}; margin-bottom: ${spacing[myMatch[1]]}; }`;
  }
  const mtMatch = cls.match(/^mt-(.+)$/);
  if (mtMatch) {
    if (mtMatch[1] === "auto") return `.${cls} { margin-top: auto; }`;
    if (spacing[mtMatch[1]]) return `.${cls} { margin-top: ${spacing[mtMatch[1]]}; }`;
  }
  const mrMatch = cls.match(/^mr-(.+)$/);
  if (mrMatch) {
    if (mrMatch[1] === "auto") return `.${cls} { margin-right: auto; }`;
    if (spacing[mrMatch[1]]) return `.${cls} { margin-right: ${spacing[mrMatch[1]]}; }`;
  }
  const mbMatch = cls.match(/^mb-(.+)$/);
  if (mbMatch) {
    if (mbMatch[1] === "auto") return `.${cls} { margin-bottom: auto; }`;
    if (spacing[mbMatch[1]]) return `.${cls} { margin-bottom: ${spacing[mbMatch[1]]}; }`;
  }
  const mlMatch = cls.match(/^ml-(.+)$/);
  if (mlMatch) {
    if (mlMatch[1] === "auto") return `.${cls} { margin-left: auto; }`;
    if (spacing[mlMatch[1]]) return `.${cls} { margin-left: ${spacing[mlMatch[1]]}; }`;
  }
  const gapMatch = cls.match(/^gap-(.+)$/);
  if (gapMatch && spacing[gapMatch[1]]) {
    return `.${cls} { gap: ${spacing[gapMatch[1]]}; }`;
  }
  const gapXMatch = cls.match(/^gap-x-(.+)$/);
  if (gapXMatch && spacing[gapXMatch[1]]) {
    return `.${cls} { column-gap: ${spacing[gapXMatch[1]]}; }`;
  }
  const gapYMatch = cls.match(/^gap-y-(.+)$/);
  if (gapYMatch && spacing[gapYMatch[1]]) {
    return `.${cls} { row-gap: ${spacing[gapYMatch[1]]}; }`;
  }
  const spaceXMatch = cls.match(/^space-x-(.+)$/);
  if (spaceXMatch && spacing[spaceXMatch[1]]) {
    return `.${cls} > * + * { margin-left: ${spacing[spaceXMatch[1]]}; }`;
  }
  const spaceYMatch = cls.match(/^space-y-(.+)$/);
  if (spaceYMatch && spacing[spaceYMatch[1]]) {
    return `.${cls} > * + * { margin-top: ${spacing[spaceYMatch[1]]}; }`;
  }
  const insetMatch = cls.match(/^inset-(.+)$/);
  if (insetMatch) {
    if (insetMatch[1] === "auto") return `.${cls} { inset: auto; }`;
    if (insetMatch[1] === "0") return `.${cls} { inset: 0px; }`;
    if (spacing[insetMatch[1]]) return `.${cls} { inset: ${spacing[insetMatch[1]]}; }`;
  }
  const insetXMatch = cls.match(/^inset-x-(.+)$/);
  if (insetXMatch) {
    const val = insetXMatch[1] === "auto" ? "auto" : insetXMatch[1] === "0" ? "0px" : spacing[insetXMatch[1]];
    if (val) return `.${cls} { left: ${val}; right: ${val}; }`;
  }
  const insetYMatch = cls.match(/^inset-y-(.+)$/);
  if (insetYMatch) {
    const val = insetYMatch[1] === "auto" ? "auto" : insetYMatch[1] === "0" ? "0px" : spacing[insetYMatch[1]];
    if (val) return `.${cls} { top: ${val}; bottom: ${val}; }`;
  }
  const topMatch = cls.match(/^top-(.+)$/);
  if (topMatch) {
    if (topMatch[1] === "auto") return `.${cls} { top: auto; }`;
    if (topMatch[1] === "0") return `.${cls} { top: 0px; }`;
    if (spacing[topMatch[1]]) return `.${cls} { top: ${spacing[topMatch[1]]}; }`;
  }
  const rightMatch = cls.match(/^right-(.+)$/);
  if (rightMatch) {
    if (rightMatch[1] === "auto") return `.${cls} { right: auto; }`;
    if (rightMatch[1] === "0") return `.${cls} { right: 0px; }`;
    if (spacing[rightMatch[1]]) return `.${cls} { right: ${spacing[rightMatch[1]]}; }`;
  }
  const bottomMatch = cls.match(/^bottom-(.+)$/);
  if (bottomMatch) {
    if (bottomMatch[1] === "auto") return `.${cls} { bottom: auto; }`;
    if (bottomMatch[1] === "0") return `.${cls} { bottom: 0px; }`;
    if (spacing[bottomMatch[1]]) return `.${cls} { bottom: ${spacing[bottomMatch[1]]}; }`;
  }
  const leftMatch = cls.match(/^left-(.+)$/);
  if (leftMatch) {
    if (leftMatch[1] === "auto") return `.${cls} { left: auto; }`;
    if (leftMatch[1] === "0") return `.${cls} { left: 0px; }`;
    if (spacing[leftMatch[1]]) return `.${cls} { left: ${spacing[leftMatch[1]]}; }`;
  }
  return null;
}

// src/generator/typography.ts
function generateTypography(classes, config) {
  const { fontSize, fontWeight, lineHeight } = config.theme;
  const rules = [];
  for (const cls of classes) {
    const generated = matchTypography(cls, fontSize, fontWeight, lineHeight);
    if (generated) rules.push(generated);
  }
  return rules;
}
function matchTypography(cls, fontSize, fontWeight, lineHeight) {
  const textSizeMatch = cls.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/);
  if (textSizeMatch && fontSize[textSizeMatch[1]]) {
    const [size, lh] = fontSize[textSizeMatch[1]];
    return `.${cls} {
  font-size: ${size};
  line-height: ${lh};
}`;
  }
  const fontWeightMatch = cls.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/);
  if (fontWeightMatch && fontWeight[fontWeightMatch[1]]) {
    return `.${cls} { font-weight: ${fontWeight[fontWeightMatch[1]]}; }`;
  }
  if (cls === "font-sans") return `.${cls} { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }`;
  if (cls === "font-serif") return `.${cls} { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }`;
  if (cls === "font-mono") return `.${cls} { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }`;
  const leadingMatch = cls.match(/^leading-(.+)$/);
  if (leadingMatch && lineHeight[leadingMatch[1]]) {
    return `.${cls} { line-height: ${lineHeight[leadingMatch[1]]}; }`;
  }
  const trackingMap = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  };
  const trackingMatch = cls.match(/^tracking-(.+)$/);
  if (trackingMatch && trackingMap[trackingMatch[1]]) {
    return `.${cls} { letter-spacing: ${trackingMap[trackingMatch[1]]}; }`;
  }
  if (cls === "text-left") return `.${cls} { text-align: left; }`;
  if (cls === "text-center") return `.${cls} { text-align: center; }`;
  if (cls === "text-right") return `.${cls} { text-align: right; }`;
  if (cls === "text-justify") return `.${cls} { text-align: justify; }`;
  if (cls === "text-start") return `.${cls} { text-align: start; }`;
  if (cls === "text-end") return `.${cls} { text-align: end; }`;
  if (cls === "uppercase") return `.${cls} { text-transform: uppercase; }`;
  if (cls === "lowercase") return `.${cls} { text-transform: lowercase; }`;
  if (cls === "capitalize") return `.${cls} { text-transform: capitalize; }`;
  if (cls === "normal-case") return `.${cls} { text-transform: none; }`;
  if (cls === "underline") return `.${cls} { text-decoration-line: underline; }`;
  if (cls === "overline") return `.${cls} { text-decoration-line: overline; }`;
  if (cls === "line-through") return `.${cls} { text-decoration-line: line-through; }`;
  if (cls === "no-underline") return `.${cls} { text-decoration-line: none; }`;
  if (cls === "truncate") return `.${cls} { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
  if (cls === "text-ellipsis") return `.${cls} { text-overflow: ellipsis; }`;
  if (cls === "text-clip") return `.${cls} { text-overflow: clip; }`;
  if (cls === "whitespace-normal") return `.${cls} { white-space: normal; }`;
  if (cls === "whitespace-nowrap") return `.${cls} { white-space: nowrap; }`;
  if (cls === "whitespace-pre") return `.${cls} { white-space: pre; }`;
  if (cls === "whitespace-pre-line") return `.${cls} { white-space: pre-line; }`;
  if (cls === "whitespace-pre-wrap") return `.${cls} { white-space: pre-wrap; }`;
  if (cls === "whitespace-break-spaces") return `.${cls} { white-space: break-spaces; }`;
  if (cls === "italic") return `.${cls} { font-style: italic; }`;
  if (cls === "not-italic") return `.${cls} { font-style: normal; }`;
  if (cls === "tabular-nums") return `.${cls} { font-variant-numeric: tabular-nums; }`;
  if (cls === "oldstyle-nums") return `.${cls} { font-variant-numeric: oldstyle-nums; }`;
  if (cls === "list-none") return `.${cls} { list-style-type: none; }`;
  if (cls === "list-disc") return `.${cls} { list-style-type: disc; }`;
  if (cls === "list-decimal") return `.${cls} { list-style-type: decimal; }`;
  if (cls === "break-normal") return `.${cls} { overflow-wrap: normal; word-break: normal; }`;
  if (cls === "break-words") return `.${cls} { overflow-wrap: break-word; }`;
  if (cls === "break-all") return `.${cls} { word-break: break-all; }`;
  if (cls === "break-keep") return `.${cls} { word-break: keep-all; }`;
  return null;
}

// src/generator/layout.ts
function generateLayout(classes, _config) {
  const rules = [];
  for (const cls of classes) {
    const generated = matchLayout(cls);
    if (generated) rules.push(generated);
  }
  return rules;
}
function matchLayout(cls) {
  const displayMap = {
    block: "display: block;",
    inline: "display: inline;",
    "inline-block": "display: inline-block;",
    flex: "display: flex;",
    "inline-flex": "display: inline-flex;",
    grid: "display: grid;",
    "inline-grid": "display: inline-grid;",
    table: "display: table;",
    hidden: "display: none;",
    contents: "display: contents;"
  };
  if (displayMap[cls]) return `.${cls} { ${displayMap[cls]} }`;
  const posMap = {
    static: "position: static;",
    relative: "position: relative;",
    absolute: "position: absolute;",
    fixed: "position: fixed;",
    sticky: "position: sticky;"
  };
  if (posMap[cls]) return `.${cls} { ${posMap[cls]} }`;
  if (cls === "flex-row") return `.${cls} { flex-direction: row; }`;
  if (cls === "flex-row-reverse") return `.${cls} { flex-direction: row-reverse; }`;
  if (cls === "flex-col") return `.${cls} { flex-direction: column; }`;
  if (cls === "flex-col-reverse") return `.${cls} { flex-direction: column-reverse; }`;
  if (cls === "flex-wrap") return `.${cls} { flex-wrap: wrap; }`;
  if (cls === "flex-nowrap") return `.${cls} { flex-wrap: nowrap; }`;
  if (cls === "flex-wrap-reverse") return `.${cls} { flex-wrap: wrap-reverse; }`;
  if (cls === "flex-1") return `.${cls} { flex: 1 1 0%; }`;
  if (cls === "flex-auto") return `.${cls} { flex: 1 1 auto; }`;
  if (cls === "flex-initial") return `.${cls} { flex: 0 1 auto; }`;
  if (cls === "flex-none") return `.${cls} { flex: none; }`;
  if (cls === "flex-grow") return `.${cls} { flex-grow: 1; }`;
  if (cls === "flex-grow-0") return `.${cls} { flex-grow: 0; }`;
  if (cls === "flex-shrink") return `.${cls} { flex-shrink: 1; }`;
  if (cls === "flex-shrink-0") return `.${cls} { flex-shrink: 0; }`;
  if (cls === "items-start") return `.${cls} { align-items: flex-start; }`;
  if (cls === "items-end") return `.${cls} { align-items: flex-end; }`;
  if (cls === "items-center") return `.${cls} { align-items: center; }`;
  if (cls === "items-baseline") return `.${cls} { align-items: baseline; }`;
  if (cls === "items-stretch") return `.${cls} { align-items: stretch; }`;
  if (cls === "self-auto") return `.${cls} { align-self: auto; }`;
  if (cls === "self-start") return `.${cls} { align-self: flex-start; }`;
  if (cls === "self-end") return `.${cls} { align-self: flex-end; }`;
  if (cls === "self-center") return `.${cls} { align-self: center; }`;
  if (cls === "self-stretch") return `.${cls} { align-self: stretch; }`;
  if (cls === "self-baseline") return `.${cls} { align-self: baseline; }`;
  if (cls === "justify-start") return `.${cls} { justify-content: flex-start; }`;
  if (cls === "justify-end") return `.${cls} { justify-content: flex-end; }`;
  if (cls === "justify-center") return `.${cls} { justify-content: center; }`;
  if (cls === "justify-between") return `.${cls} { justify-content: space-between; }`;
  if (cls === "justify-around") return `.${cls} { justify-content: space-around; }`;
  if (cls === "justify-evenly") return `.${cls} { justify-content: space-evenly; }`;
  if (cls === "justify-stretch") return `.${cls} { justify-content: stretch; }`;
  if (cls === "justify-items-start") return `.${cls} { justify-items: start; }`;
  if (cls === "justify-items-end") return `.${cls} { justify-items: end; }`;
  if (cls === "justify-items-center") return `.${cls} { justify-items: center; }`;
  if (cls === "justify-items-stretch") return `.${cls} { justify-items: stretch; }`;
  if (cls === "justify-self-auto") return `.${cls} { justify-self: auto; }`;
  if (cls === "justify-self-start") return `.${cls} { justify-self: start; }`;
  if (cls === "justify-self-end") return `.${cls} { justify-self: end; }`;
  if (cls === "justify-self-center") return `.${cls} { justify-self: center; }`;
  if (cls === "justify-self-stretch") return `.${cls} { justify-self: stretch; }`;
  if (cls === "content-normal") return `.${cls} { align-content: normal; }`;
  if (cls === "content-center") return `.${cls} { align-content: center; }`;
  if (cls === "content-start") return `.${cls} { align-content: flex-start; }`;
  if (cls === "content-end") return `.${cls} { align-content: flex-end; }`;
  if (cls === "content-between") return `.${cls} { align-content: space-between; }`;
  if (cls === "content-around") return `.${cls} { align-content: space-around; }`;
  if (cls === "content-evenly") return `.${cls} { align-content: space-evenly; }`;
  if (cls === "content-stretch") return `.${cls} { align-content: stretch; }`;
  if (cls === "content-baseline") return `.${cls} { align-content: baseline; }`;
  const gridColsMatch = cls.match(/^grid-cols-(\d+)$/);
  if (gridColsMatch) {
    const n = parseInt(gridColsMatch[1]);
    return `.${cls} { grid-template-columns: repeat(${n}, minmax(0, 1fr)); }`;
  }
  if (cls === "grid-cols-none") return `.${cls} { grid-template-columns: none; }`;
  const gridRowsMatch = cls.match(/^grid-rows-(\d+)$/);
  if (gridRowsMatch) {
    const n = parseInt(gridRowsMatch[1]);
    return `.${cls} { grid-template-rows: repeat(${n}, minmax(0, 1fr)); }`;
  }
  if (cls === "grid-rows-none") return `.${cls} { grid-template-rows: none; }`;
  const colSpanMatch = cls.match(/^col-span-(\d+)$/);
  if (colSpanMatch) return `.${cls} { grid-column: span ${colSpanMatch[1]} / span ${colSpanMatch[1]}; }`;
  if (cls === "col-span-full") return `.${cls} { grid-column: 1 / -1; }`;
  if (cls === "col-auto") return `.${cls} { grid-column: auto; }`;
  const rowSpanMatch = cls.match(/^row-span-(\d+)$/);
  if (rowSpanMatch) return `.${cls} { grid-row: span ${rowSpanMatch[1]} / span ${rowSpanMatch[1]}; }`;
  if (cls === "row-span-full") return `.${cls} { grid-row: 1 / -1; }`;
  if (cls === "row-auto") return `.${cls} { grid-row: auto; }`;
  const colStartMatch = cls.match(/^col-start-(\d+)$/);
  if (colStartMatch) return `.${cls} { grid-column-start: ${colStartMatch[1]}; }`;
  const colEndMatch = cls.match(/^col-end-(\d+)$/);
  if (colEndMatch) return `.${cls} { grid-column-end: ${colEndMatch[1]}; }`;
  const rowStartMatch = cls.match(/^row-start-(\d+)$/);
  if (rowStartMatch) return `.${cls} { grid-row-start: ${rowStartMatch[1]}; }`;
  const rowEndMatch = cls.match(/^row-end-(\d+)$/);
  if (rowEndMatch) return `.${cls} { grid-row-end: ${rowEndMatch[1]}; }`;
  const orderMatch = cls.match(/^order-(-?\d+)$/);
  if (orderMatch) return `.${cls} { order: ${orderMatch[1]}; }`;
  if (cls === "order-first") return `.${cls} { order: -9999; }`;
  if (cls === "order-last") return `.${cls} { order: 9999; }`;
  if (cls === "order-none") return `.${cls} { order: 0; }`;
  if (cls === "float-right") return `.${cls} { float: right; }`;
  if (cls === "float-left") return `.${cls} { float: left; }`;
  if (cls === "float-none") return `.${cls} { float: none; }`;
  if (cls === "clearfix") return `.${cls}::after { content: ""; display: table; clear: both; }`;
  if (cls === "overflow-auto") return `.${cls} { overflow: auto; }`;
  if (cls === "overflow-hidden") return `.${cls} { overflow: hidden; }`;
  if (cls === "overflow-clip") return `.${cls} { overflow: clip; }`;
  if (cls === "overflow-visible") return `.${cls} { overflow: visible; }`;
  if (cls === "overflow-scroll") return `.${cls} { overflow: scroll; }`;
  if (cls === "overflow-x-auto") return `.${cls} { overflow-x: auto; }`;
  if (cls === "overflow-x-hidden") return `.${cls} { overflow-x: hidden; }`;
  if (cls === "overflow-x-scroll") return `.${cls} { overflow-x: scroll; }`;
  if (cls === "overflow-y-auto") return `.${cls} { overflow-y: auto; }`;
  if (cls === "overflow-y-hidden") return `.${cls} { overflow-y: hidden; }`;
  if (cls === "overflow-y-scroll") return `.${cls} { overflow-y: scroll; }`;
  if (cls === "visible") return `.${cls} { visibility: visible; }`;
  if (cls === "invisible") return `.${cls} { visibility: hidden; }`;
  if (cls === "collapse") return `.${cls} { visibility: collapse; }`;
  if (cls === "pointer-events-none") return `.${cls} { pointer-events: none; }`;
  if (cls === "pointer-events-auto") return `.${cls} { pointer-events: auto; }`;
  const cursorMap = {
    "cursor-auto": "auto",
    "cursor-default": "default",
    "cursor-pointer": "pointer",
    "cursor-wait": "wait",
    "cursor-text": "text",
    "cursor-move": "move",
    "cursor-not-allowed": "not-allowed",
    "cursor-grab": "grab",
    "cursor-grabbing": "grabbing",
    "cursor-crosshair": "crosshair",
    "cursor-help": "help",
    "cursor-none": "none",
    "cursor-zoom-in": "zoom-in",
    "cursor-zoom-out": "zoom-out"
  };
  if (cursorMap[cls]) return `.${cls} { cursor: ${cursorMap[cls]}; }`;
  if (cls === "select-none") return `.${cls} { user-select: none; }`;
  if (cls === "select-text") return `.${cls} { user-select: text; }`;
  if (cls === "select-all") return `.${cls} { user-select: all; }`;
  if (cls === "select-auto") return `.${cls} { user-select: auto; }`;
  if (cls === "object-contain") return `.${cls} { object-fit: contain; }`;
  if (cls === "object-cover") return `.${cls} { object-fit: cover; }`;
  if (cls === "object-fill") return `.${cls} { object-fit: fill; }`;
  if (cls === "object-none") return `.${cls} { object-fit: none; }`;
  if (cls === "object-scale-down") return `.${cls} { object-fit: scale-down; }`;
  if (cls === "aspect-auto") return `.${cls} { aspect-ratio: auto; }`;
  if (cls === "aspect-square") return `.${cls} { aspect-ratio: 1 / 1; }`;
  if (cls === "aspect-video") return `.${cls} { aspect-ratio: 16 / 9; }`;
  if (cls === "container") {
    return `.${cls} {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}`;
  }
  if (cls === "box-border") return `.${cls} { box-sizing: border-box; }`;
  if (cls === "box-content") return `.${cls} { box-sizing: content-box; }`;
  if (cls === "isolate") return `.${cls} { isolation: isolate; }`;
  if (cls === "isolation-auto") return `.${cls} { isolation: auto; }`;
  const mixBlendMap = {
    "mix-blend-normal": "normal",
    "mix-blend-multiply": "multiply",
    "mix-blend-screen": "screen",
    "mix-blend-overlay": "overlay",
    "mix-blend-darken": "darken",
    "mix-blend-lighten": "lighten",
    "mix-blend-color-dodge": "color-dodge",
    "mix-blend-color-burn": "color-burn",
    "mix-blend-hard-light": "hard-light",
    "mix-blend-soft-light": "soft-light",
    "mix-blend-difference": "difference",
    "mix-blend-exclusion": "exclusion"
  };
  if (mixBlendMap[cls]) return `.${cls} { mix-blend-mode: ${mixBlendMap[cls]}; }`;
  return null;
}

// src/generator/sizing.ts
function generateSizing(classes, config) {
  const { spacing } = config.theme;
  const rules = [];
  for (const cls of classes) {
    const generated = matchSizing(cls, spacing);
    if (generated) rules.push(generated);
  }
  return rules;
}
function matchSizing(cls, spacing) {
  const fractions = {
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%"
  };
  const wMatch = cls.match(/^w-(.+)$/);
  if (wMatch) {
    const key = wMatch[1];
    if (key === "auto") return `.${cls} { width: auto; }`;
    if (key === "full") return `.${cls} { width: 100%; }`;
    if (key === "screen") return `.${cls} { width: 100vw; }`;
    if (key === "svw") return `.${cls} { width: 100svw; }`;
    if (key === "min") return `.${cls} { width: min-content; }`;
    if (key === "max") return `.${cls} { width: max-content; }`;
    if (key === "fit") return `.${cls} { width: fit-content; }`;
    if (fractions[key]) return `.${cls} { width: ${fractions[key]}; }`;
    if (spacing[key]) return `.${cls} { width: ${spacing[key]}; }`;
  }
  const minWMatch = cls.match(/^min-w-(.+)$/);
  if (minWMatch) {
    const key = minWMatch[1];
    if (key === "0") return `.${cls} { min-width: 0px; }`;
    if (key === "full") return `.${cls} { min-width: 100%; }`;
    if (key === "min") return `.${cls} { min-width: min-content; }`;
    if (key === "max") return `.${cls} { min-width: max-content; }`;
    if (key === "fit") return `.${cls} { min-width: fit-content; }`;
    if (spacing[key]) return `.${cls} { min-width: ${spacing[key]}; }`;
  }
  const maxWMap = {
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch",
    "screen-sm": "640px",
    "screen-md": "768px",
    "screen-lg": "1024px",
    "screen-xl": "1280px",
    "screen-2xl": "1536px"
  };
  const maxWMatch = cls.match(/^max-w-(.+)$/);
  if (maxWMatch && maxWMap[maxWMatch[1]]) {
    return `.${cls} { max-width: ${maxWMap[maxWMatch[1]]}; }`;
  }
  const hMatch = cls.match(/^h-(.+)$/);
  if (hMatch) {
    const key = hMatch[1];
    if (key === "auto") return `.${cls} { height: auto; }`;
    if (key === "full") return `.${cls} { height: 100%; }`;
    if (key === "screen") return `.${cls} { height: 100vh; }`;
    if (key === "svh") return `.${cls} { height: 100svh; }`;
    if (key === "dvh") return `.${cls} { height: 100dvh; }`;
    if (key === "min") return `.${cls} { height: min-content; }`;
    if (key === "max") return `.${cls} { height: max-content; }`;
    if (key === "fit") return `.${cls} { height: fit-content; }`;
    if (fractions[key]) return `.${cls} { height: ${fractions[key]}; }`;
    if (spacing[key]) return `.${cls} { height: ${spacing[key]}; }`;
  }
  const minHMatch = cls.match(/^min-h-(.+)$/);
  if (minHMatch) {
    const key = minHMatch[1];
    if (key === "0") return `.${cls} { min-height: 0px; }`;
    if (key === "full") return `.${cls} { min-height: 100%; }`;
    if (key === "screen") return `.${cls} { min-height: 100vh; }`;
    if (key === "svh") return `.${cls} { min-height: 100svh; }`;
    if (key === "dvh") return `.${cls} { min-height: 100dvh; }`;
    if (key === "fit") return `.${cls} { min-height: fit-content; }`;
    if (spacing[key]) return `.${cls} { min-height: ${spacing[key]}; }`;
  }
  const maxHMatch = cls.match(/^max-h-(.+)$/);
  if (maxHMatch) {
    const key = maxHMatch[1];
    if (key === "none") return `.${cls} { max-height: none; }`;
    if (key === "full") return `.${cls} { max-height: 100%; }`;
    if (key === "screen") return `.${cls} { max-height: 100vh; }`;
    if (key === "svh") return `.${cls} { max-height: 100svh; }`;
    if (key === "dvh") return `.${cls} { max-height: 100dvh; }`;
    if (key === "fit") return `.${cls} { max-height: fit-content; }`;
    if (spacing[key]) return `.${cls} { max-height: ${spacing[key]}; }`;
  }
  return null;
}

// src/generator/effects.ts
function generateEffects(classes, config) {
  const { opacity, zIndex, boxShadow, borderRadius } = config.theme;
  const rules = [];
  for (const cls of classes) {
    const generated = matchEffects(cls, opacity, zIndex, boxShadow, borderRadius);
    if (generated) rules.push(generated);
  }
  return rules;
}
function matchEffects(cls, opacity, zIndex, boxShadow, borderRadius) {
  const opacityMatch = cls.match(/^opacity-(.+)$/);
  if (opacityMatch && opacity[opacityMatch[1]]) {
    return `.${cls} {
  opacity: ${opacity[opacityMatch[1]]};
  transition-property: opacity;
  transition-duration: var(--alive-duration, 0ms);
  transition-timing-function: var(--alive-ease, linear);
}`;
  }
  const zMatch = cls.match(/^z-(.+)$/);
  if (zMatch && zIndex[zMatch[1]]) {
    return `.${cls} { z-index: ${zIndex[zMatch[1]]}; }`;
  }
  const shadowMatch = cls.match(/^shadow(?:-(.+))?$/);
  if (shadowMatch) {
    const key = shadowMatch[1] ?? "DEFAULT";
    if (boxShadow[key]) {
      return `.${cls} { box-shadow: ${boxShadow[key]}; }`;
    }
    if (!shadowMatch[1]) {
      return `.${cls} { box-shadow: ${boxShadow["DEFAULT"]}; }`;
    }
  }
  const roundedMatch = cls.match(/^rounded(?:-(.+))?$/);
  if (roundedMatch) {
    const key = roundedMatch[1] ?? "DEFAULT";
    if (borderRadius[key]) return `.${cls} { border-radius: ${borderRadius[key]}; }`;
    if (!roundedMatch[1]) return `.${cls} { border-radius: ${borderRadius["DEFAULT"]}; }`;
  }
  const roundedTMatch = cls.match(/^rounded-t(?:-(.+))?$/);
  if (roundedTMatch) {
    const val = borderRadius[roundedTMatch[1] ?? "DEFAULT"] ?? borderRadius["DEFAULT"];
    if (val) return `.${cls} { border-top-left-radius: ${val}; border-top-right-radius: ${val}; }`;
  }
  const roundedBMatch = cls.match(/^rounded-b(?:-(.+))?$/);
  if (roundedBMatch) {
    const val = borderRadius[roundedBMatch[1] ?? "DEFAULT"] ?? borderRadius["DEFAULT"];
    if (val) return `.${cls} { border-bottom-left-radius: ${val}; border-bottom-right-radius: ${val}; }`;
  }
  const roundedLMatch = cls.match(/^rounded-l(?:-(.+))?$/);
  if (roundedLMatch) {
    const val = borderRadius[roundedLMatch[1] ?? "DEFAULT"] ?? borderRadius["DEFAULT"];
    if (val) return `.${cls} { border-top-left-radius: ${val}; border-bottom-left-radius: ${val}; }`;
  }
  const roundedRMatch = cls.match(/^rounded-r(?:-(.+))?$/);
  if (roundedRMatch) {
    const val = borderRadius[roundedRMatch[1] ?? "DEFAULT"] ?? borderRadius["DEFAULT"];
    if (val) return `.${cls} { border-top-right-radius: ${val}; border-bottom-right-radius: ${val}; }`;
  }
  if (cls === "border") return `.${cls} { border-width: 1px; border-style: solid; }`;
  if (cls === "border-0") return `.${cls} { border-width: 0px; }`;
  if (cls === "border-2") return `.${cls} { border-width: 2px; border-style: solid; }`;
  if (cls === "border-4") return `.${cls} { border-width: 4px; border-style: solid; }`;
  if (cls === "border-8") return `.${cls} { border-width: 8px; border-style: solid; }`;
  if (cls === "border-t") return `.${cls} { border-top-width: 1px; border-top-style: solid; }`;
  if (cls === "border-r") return `.${cls} { border-right-width: 1px; border-right-style: solid; }`;
  if (cls === "border-b") return `.${cls} { border-bottom-width: 1px; border-bottom-style: solid; }`;
  if (cls === "border-l") return `.${cls} { border-left-width: 1px; border-left-style: solid; }`;
  if (cls === "border-t-0") return `.${cls} { border-top-width: 0px; }`;
  if (cls === "border-r-0") return `.${cls} { border-right-width: 0px; }`;
  if (cls === "border-b-0") return `.${cls} { border-bottom-width: 0px; }`;
  if (cls === "border-l-0") return `.${cls} { border-left-width: 0px; }`;
  if (cls === "border-solid") return `.${cls} { border-style: solid; }`;
  if (cls === "border-dashed") return `.${cls} { border-style: dashed; }`;
  if (cls === "border-dotted") return `.${cls} { border-style: dotted; }`;
  if (cls === "border-double") return `.${cls} { border-style: double; }`;
  if (cls === "border-hidden") return `.${cls} { border-style: hidden; }`;
  if (cls === "border-none") return `.${cls} { border-style: none; }`;
  if (cls === "outline-none") return `.${cls} { outline: 2px solid transparent; outline-offset: 2px; }`;
  if (cls === "outline") return `.${cls} { outline-style: solid; }`;
  if (cls === "outline-dashed") return `.${cls} { outline-style: dashed; }`;
  if (cls === "outline-dotted") return `.${cls} { outline-style: dotted; }`;
  if (cls === "outline-double") return `.${cls} { outline-style: double; }`;
  const outlineWidthMatch = cls.match(/^outline-(\d+)$/);
  if (outlineWidthMatch) return `.${cls} { outline-width: ${outlineWidthMatch[1]}px; }`;
  const outlineOffsetMatch = cls.match(/^outline-offset-(\d+)$/);
  if (outlineOffsetMatch) return `.${cls} { outline-offset: ${outlineOffsetMatch[1]}px; }`;
  const ringMatch = cls.match(/^ring(?:-(\d+))?$/);
  if (ringMatch) {
    const width = ringMatch[1] ?? "3";
    return `.${cls} { box-shadow: 0 0 0 ${width}px var(--alive-ring-color, rgba(59, 130, 246, 0.5)); }`;
  }
  if (cls === "ring-inset") return `.${cls} { --alive-ring-inset: inset; }`;
  const ringOffsetMatch = cls.match(/^ring-offset-(\d+)$/);
  if (ringOffsetMatch) return `.${cls} { --alive-ring-offset: ${ringOffsetMatch[1]}px; }`;
  if (cls === "transform") return `.${cls} { transform: translateX(var(--alive-tx,0)) translateY(var(--alive-ty,0)) rotate(var(--alive-rotate,0)) scaleX(var(--alive-sx,1)) scaleY(var(--alive-sy,1)) skewX(var(--alive-skew-x,0)) skewY(var(--alive-skew-y,0)); }`;
  if (cls === "transform-none") return `.${cls} { transform: none; }`;
  const scaleMap = {
    "0": "0",
    "50": ".5",
    "75": ".75",
    "90": ".9",
    "95": ".95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.5"
  };
  const scaleMatch = cls.match(/^scale-(\d+)$/);
  if (scaleMatch && scaleMap[scaleMatch[1]]) {
    return `.${cls} { transform: scale(${scaleMap[scaleMatch[1]]}); }`;
  }
  const scaleXMatch = cls.match(/^scale-x-(\d+)$/);
  if (scaleXMatch && scaleMap[scaleXMatch[1]]) {
    return `.${cls} { transform: scaleX(${scaleMap[scaleXMatch[1]]}); }`;
  }
  const scaleYMatch = cls.match(/^scale-y-(\d+)$/);
  if (scaleYMatch && scaleMap[scaleYMatch[1]]) {
    return `.${cls} { transform: scaleY(${scaleMap[scaleYMatch[1]]}); }`;
  }
  const rotateMatch = cls.match(/^-?rotate-(\d+)$/);
  if (rotateMatch) {
    const neg = cls.startsWith("-") ? "-" : "";
    return `.${cls.replace(/^-/, "\\-")} { transform: rotate(${neg}${rotateMatch[1]}deg); }`;
  }
  const translateXMatch = cls.match(/^-?translate-x-(.+)$/);
  if (translateXMatch) {
    const neg = cls.startsWith("-") ? "-" : "";
    const key = translateXMatch[1];
    const fractions = { "1/2": "50%", "full": "100%" };
    const val = fractions[key] ?? null;
    if (val) return `.${cls.replace(/^-/, "\\-")} { transform: translateX(${neg}${val}); }`;
  }
  const translateYMatch = cls.match(/^-?translate-y-(.+)$/);
  if (translateYMatch) {
    const neg = cls.startsWith("-") ? "-" : "";
    const key = translateYMatch[1];
    const fractions = { "1/2": "50%", "full": "100%" };
    const val = fractions[key] ?? null;
    if (val) return `.${cls.replace(/^-/, "\\-")} { transform: translateY(${neg}${val}); }`;
  }
  if (cls === "transition-none") return `.${cls} { transition: none; }`;
  if (cls === "transition-all") return `.${cls} { transition: all var(--alive-duration-normal) var(--alive-ease-standard); }`;
  if (cls === "transition-colors") return `.${cls} { transition: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  if (cls === "transition-opacity") return `.${cls} { transition: opacity; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  if (cls === "transition-shadow") return `.${cls} { transition: box-shadow; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  if (cls === "transition-transform") return `.${cls} { transition: transform; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  const blurMatch = cls.match(/^blur(?:-(.+))?$/);
  if (blurMatch) {
    const blurMap = {
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    };
    const key = blurMatch[1] ?? "DEFAULT";
    if (blurMap[key]) return `.${cls} { filter: blur(${blurMap[key]}); }`;
  }
  const backdropBlurMatch = cls.match(/^backdrop-blur(?:-(.+))?$/);
  if (backdropBlurMatch) {
    const blurMap = {
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    };
    const key = backdropBlurMatch[1] ?? "DEFAULT";
    if (blurMap[key]) return `.${cls} { backdrop-filter: blur(${blurMap[key]}); }`;
  }
  return null;
}

// src/generator/index.ts
function generateUtilities(classes, config) {
  const variantMap = /* @__PURE__ */ new Map();
  const baseClasses = /* @__PURE__ */ new Set();
  for (const cls of classes) {
    const { variants, base } = parseVariants(cls);
    baseClasses.add(base);
    variantMap.set(cls, { base, variants, original: cls });
  }
  const generators = [
    generateColors,
    generateSpacing,
    generateTypography,
    generateLayout,
    generateSizing,
    generateEffects,
    generateAliveSpecific
  ];
  const baseRuleMap = /* @__PURE__ */ new Map();
  for (const gen of generators) {
    const rules = gen(baseClasses, config);
    for (const r of rules) {
      const selectorMatch = r.match(/^\.([\w-]+)/);
      if (selectorMatch) {
        baseRuleMap.set(selectorMatch[1], r);
      }
    }
  }
  const baseOutput = [];
  const mediaOutput = /* @__PURE__ */ new Map();
  for (const [original, { base, variants }] of variantMap) {
    const baseRule = baseRuleMap.get(base);
    if (!baseRule) continue;
    if (variants.length === 0) {
      baseOutput.push(baseRule);
      continue;
    }
    const responsiveVariants = variants.filter((v) => config.theme.screens[v]);
    const stateVariants = variants.filter((v) => !config.theme.screens[v]);
    const declMatch = baseRule.match(/\{([\s\S]*)\}/);
    if (!declMatch) continue;
    let selector = `.${escapeSelector(original)}`;
    for (const sv of stateVariants) {
      switch (sv) {
        case "hover":
          selector += ":hover";
          break;
        case "focus":
          selector += ":focus";
          break;
        case "focus-visible":
          selector += ":focus-visible";
          break;
        case "active":
          selector += ":active";
          break;
        case "disabled":
          selector += ":disabled";
          break;
        case "visited":
          selector += ":visited";
          break;
        case "first":
          selector += ":first-child";
          break;
        case "last":
          selector += ":last-child";
          break;
        case "odd":
          selector += ":nth-child(odd)";
          break;
        case "even":
          selector += ":nth-child(even)";
          break;
        case "placeholder":
          selector += "::placeholder";
          break;
        case "group-hover":
          selector = `.group:hover ${selector}`;
          break;
        case "dark":
          if (config.theme.darkMode === "class") {
            selector = `.dark ${selector}`;
          }
          break;
      }
    }
    const wrappedRule = `${selector} {${declMatch[1]}}`;
    if (responsiveVariants.length === 0) {
      if (stateVariants.includes("dark") && config.theme.darkMode === "media") {
        const mq = "@media (prefers-color-scheme: dark)";
        const existing = mediaOutput.get(mq) ?? [];
        mediaOutput.set(mq, [...existing, wrappedRule]);
      } else {
        baseOutput.push(wrappedRule);
      }
    } else {
      const screen = config.theme.screens[responsiveVariants[0]];
      const mq = `@media (min-width: ${screen})`;
      const existing = mediaOutput.get(mq) ?? [];
      mediaOutput.set(mq, [...existing, wrappedRule]);
    }
  }
  const sortedMedia = [...mediaOutput.entries()].sort((a, b) => {
    const aSize = parseInt(a[0].match(/\d+/)?.[0] ?? "0");
    const bSize = parseInt(b[0].match(/\d+/)?.[0] ?? "0");
    return aSize - bSize;
  });
  const mediaCSS = sortedMedia.map(([mq, rules]) => `${mq} {
${rules.map((r) => "  " + r.split("\n").join("\n  ")).join("\n")}
}`).join("\n\n");
  const parts = [
    "/* AliveUI Utilities */",
    ...dedupe(baseOutput),
    mediaCSS
  ].filter(Boolean);
  return parts.join("\n\n");
}
function dedupe(rules) {
  const seen = /* @__PURE__ */ new Set();
  return rules.filter((r) => {
    if (seen.has(r)) return false;
    seen.add(r);
    return true;
  });
}
function generateAliveSpecific(classes, _config) {
  const rules = [];
  for (const cls of classes) {
    if (cls === "d1" || cls === "d2" || cls === "d3") continue;
    const aliveBasePrefixes = [
      "alive-enter",
      "alive-exit",
      "alive-loop",
      "alive-card",
      "alive-button",
      "alive-badge",
      "alive-input",
      "alive-textarea",
      "alive-select",
      "alive-checkbox",
      "alive-radio",
      "alive-switch",
      "alive-avatar",
      "alive-skeleton",
      "alive-progress",
      "alive-separator",
      "alive-alert",
      "alive-tooltip",
      "alive-modal",
      "alive-drawer",
      "alive-nav",
      "alive-tabs",
      "alive-tab",
      "alive-dropdown",
      "alive-table",
      "alive-chip",
      "alive-stack",
      "alive-container",
      "alive-cluster",
      "alive-focus",
      "alive-overlay",
      "alive-toast",
      "alive-command",
      "alive-popover",
      "alive-sidebar",
      "alive-backdrop",
      "alive-sr-only"
    ];
    if (aliveBasePrefixes.some((p) => cls === p || cls.startsWith(p + "-"))) continue;
    if (cls === "group") {
      rules.push(`.${cls} {}`);
      continue;
    }
    const staggerMatch = cls.match(/^stagger-(\d+)$/);
    if (staggerMatch) {
      rules.push(`.${cls} { --alive-stagger-gap: ${staggerMatch[1]}ms; }`);
      continue;
    }
    const indexMatch = cls.match(/^alive-index-(\d+)$/);
    if (indexMatch) {
      rules.push(`.${cls} { --alive-index: ${indexMatch[1]}; }`);
      continue;
    }
    const durationMatch = cls.match(/^duration-(\d+)$/);
    if (durationMatch) {
      rules.push(`.${cls} { --alive-duration: ${durationMatch[1]}ms; }`);
      continue;
    }
    const delayMatch = cls.match(/^delay-(\d+)$/);
    if (delayMatch) {
      rules.push(`.${cls} { animation-delay: ${delayMatch[1]}ms; }`);
      continue;
    }
    const motionMsMatch = cls.match(/^motion-(\d+)$/);
    if (motionMsMatch) {
      rules.push(`.${cls} { --alive-duration: ${motionMsMatch[1]}ms !important; }`);
      continue;
    }
    if (cls === "divide-x") {
      rules.push(`.${cls} > * + * { border-left-width: 1px; border-left-style: solid; }`);
      continue;
    }
    if (cls === "divide-y") {
      rules.push(`.${cls} > * + * { border-top-width: 1px; border-top-style: solid; }`);
      continue;
    }
    const divideColorMatch = cls.match(/^divide-([a-z]+)(?:-(\d+))?$/);
    if (divideColorMatch) {
      rules.push(`.${cls} > * + * { border-color: inherit; }`);
      continue;
    }
    if (cls === "appearance-none") {
      rules.push(`.${cls} { appearance: none; }`);
      continue;
    }
    if (cls === "appearance-auto") {
      rules.push(`.${cls} { appearance: auto; }`);
      continue;
    }
    if (cls === "resize-none") {
      rules.push(`.${cls} { resize: none; }`);
      continue;
    }
    if (cls === "resize") {
      rules.push(`.${cls} { resize: both; }`);
      continue;
    }
    if (cls === "resize-y") {
      rules.push(`.${cls} { resize: vertical; }`);
      continue;
    }
    if (cls === "resize-x") {
      rules.push(`.${cls} { resize: horizontal; }`);
      continue;
    }
    if (cls === "snap-none") {
      rules.push(`.${cls} { scroll-snap-type: none; }`);
      continue;
    }
    if (cls === "snap-x") {
      rules.push(`.${cls} { scroll-snap-type: x mandatory; }`);
      continue;
    }
    if (cls === "snap-y") {
      rules.push(`.${cls} { scroll-snap-type: y mandatory; }`);
      continue;
    }
    if (cls === "snap-start") {
      rules.push(`.${cls} { scroll-snap-align: start; }`);
      continue;
    }
    if (cls === "snap-center") {
      rules.push(`.${cls} { scroll-snap-align: center; }`);
      continue;
    }
    if (cls === "snap-end") {
      rules.push(`.${cls} { scroll-snap-align: end; }`);
      continue;
    }
    if (cls === "pointer-events-none") {
      rules.push(`.${cls} { pointer-events: none; }`);
      continue;
    }
    if (cls === "pointer-events-auto") {
      rules.push(`.${cls} { pointer-events: auto; }`);
      continue;
    }
    if (cls === "sr-only") {
      rules.push(`.${cls} { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }`);
      continue;
    }
    if (cls === "not-sr-only") {
      rules.push(`.${cls} { position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; }`);
      continue;
    }
    if (cls === "will-change-auto") {
      rules.push(`.${cls} { will-change: auto; }`);
      continue;
    }
    if (cls === "will-change-transform") {
      rules.push(`.${cls} { will-change: transform; }`);
      continue;
    }
    if (cls === "will-change-opacity") {
      rules.push(`.${cls} { will-change: opacity; }`);
      continue;
    }
    const lineClampMatch = cls.match(/^line-clamp-(\d+)$/);
    if (lineClampMatch) {
      const n = lineClampMatch[1];
      rules.push(`.${cls} { overflow: hidden; display: -webkit-box; -webkit-line-clamp: ${n}; -webkit-box-orient: vertical; }`);
      continue;
    }
    if (cls === "aspect-square") {
      rules.push(`.${cls} { aspect-ratio: 1 / 1; }`);
      continue;
    }
    if (cls === "aspect-video") {
      rules.push(`.${cls} { aspect-ratio: 16 / 9; }`);
      continue;
    }
    if (cls === "aspect-auto") {
      rules.push(`.${cls} { aspect-ratio: auto; }`);
      continue;
    }
    if (cls === "object-contain") {
      rules.push(`.${cls} { object-fit: contain; }`);
      continue;
    }
    if (cls === "object-cover") {
      rules.push(`.${cls} { object-fit: cover; }`);
      continue;
    }
    if (cls === "object-fill") {
      rules.push(`.${cls} { object-fit: fill; }`);
      continue;
    }
    if (cls === "object-none") {
      rules.push(`.${cls} { object-fit: none; }`);
      continue;
    }
    if (cls === "object-scale") {
      rules.push(`.${cls} { object-fit: scale-down; }`);
      continue;
    }
    if (cls === "mix-blend-multiply") {
      rules.push(`.${cls} { mix-blend-mode: multiply; }`);
      continue;
    }
    if (cls === "mix-blend-screen") {
      rules.push(`.${cls} { mix-blend-mode: screen; }`);
      continue;
    }
    if (cls === "mix-blend-overlay") {
      rules.push(`.${cls} { mix-blend-mode: overlay; }`);
      continue;
    }
    if (cls === "mix-blend-normal") {
      rules.push(`.${cls} { mix-blend-mode: normal; }`);
      continue;
    }
    if (cls === "isolate") {
      rules.push(`.${cls} { isolation: isolate; }`);
      continue;
    }
    if (cls === "isolation-auto") {
      rules.push(`.${cls} { isolation: auto; }`);
      continue;
    }
    if (cls === "touch-auto") {
      rules.push(`.${cls} { touch-action: auto; }`);
      continue;
    }
    if (cls === "touch-none") {
      rules.push(`.${cls} { touch-action: none; }`);
      continue;
    }
    if (cls === "touch-pan-x") {
      rules.push(`.${cls} { touch-action: pan-x; }`);
      continue;
    }
    if (cls === "touch-pan-y") {
      rules.push(`.${cls} { touch-action: pan-y; }`);
      continue;
    }
    if (cls === "touch-manipulation") {
      rules.push(`.${cls} { touch-action: manipulation; }`);
      continue;
    }
    if (cls === "select-none") {
      rules.push(`.${cls} { user-select: none; }`);
      continue;
    }
    if (cls === "select-text") {
      rules.push(`.${cls} { user-select: text; }`);
      continue;
    }
    if (cls === "select-all") {
      rules.push(`.${cls} { user-select: all; }`);
      continue;
    }
    if (cls === "select-auto") {
      rules.push(`.${cls} { user-select: auto; }`);
      continue;
    }
    if (cls === "break-normal") {
      rules.push(`.${cls} { overflow-wrap: normal; word-break: normal; }`);
      continue;
    }
    if (cls === "break-words") {
      rules.push(`.${cls} { overflow-wrap: break-word; }`);
      continue;
    }
    if (cls === "break-all") {
      rules.push(`.${cls} { word-break: break-all; }`);
      continue;
    }
    if (cls === "break-keep") {
      rules.push(`.${cls} { word-break: keep-all; }`);
      continue;
    }
  }
  return rules;
}

// src/cli.ts
var program = new import_commander.Command();
program.name("aliveui").description("AliveUI \u2014 motion-first CSS framework").version("1.0.0-beta.1");
program.command("init").description("Create an aliveui.config.js in the current directory").action(() => {
  const configPath = (0, import_path.resolve)(process.cwd(), "aliveui.config.js");
  if ((0, import_fs2.existsSync)(configPath)) {
    console.log("aliveui.config.js already exists.");
    process.exit(1);
  }
  const template = `/** @type {import('aliveui').AliveUIConfig} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  output: './public/alive.css',
  theme: {
    // Override default tokens here
    // colors: { brand: '#your-color' },
  },
}
`;
  (0, import_fs2.writeFileSync)(configPath, template, "utf-8");
  console.log("Created aliveui.config.js");
  console.log("\nNext steps:");
  console.log("  1. Add your content paths to aliveui.config.js");
  console.log("  2. Run: aliveui build");
  console.log("  3. Link the output CSS in your HTML");
});
program.command("build").description("Scan content and generate alive.css").option("-c, --config <path>", "Path to config file", "aliveui.config.js").option("-o, --output <path>", "Output CSS file path").option("--minify", "Minify output").action(async (opts) => {
  const start = Date.now();
  try {
    const { config, outputPath } = loadConfig(opts);
    const css = await buildCSS(config);
    const final = opts.minify ? minify(css) : css;
    ensureDir(outputPath);
    (0, import_fs2.writeFileSync)(outputPath, final, "utf-8");
    const elapsed = Date.now() - start;
    const sizeKb = (Buffer.byteLength(final, "utf-8") / 1024).toFixed(1);
    console.log(`Built ${outputPath} (${sizeKb} kB) in ${elapsed}ms`);
  } catch (err) {
    console.error("Build failed:", err instanceof Error ? err.message : err);
    process.exit(1);
  }
});
program.command("watch").description("Watch content files and rebuild on changes").option("-c, --config <path>", "Path to config file", "aliveui.config.js").option("-o, --output <path>", "Output CSS file path").action(async (opts) => {
  const { config, outputPath } = loadConfig(opts);
  const rebuild = async () => {
    try {
      const start = Date.now();
      const css = await buildCSS(config);
      ensureDir(outputPath);
      (0, import_fs2.writeFileSync)(outputPath, css, "utf-8");
      const elapsed = Date.now() - start;
      console.log(`Rebuilt ${outputPath} in ${elapsed}ms`);
    } catch (err) {
      console.error("Rebuild failed:", err instanceof Error ? err.message : err);
    }
  };
  await rebuild();
  const patterns = config.content.length > 0 ? config.content : ["./src/**/*"];
  const watcher = (0, import_chokidar.watch)(patterns, {
    ignoreInitial: true,
    ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"]
  });
  watcher.on("all", () => rebuild());
  console.log(`Watching ${patterns.join(", ")} for changes...`);
  console.log("Press Ctrl+C to stop.");
});
function loadConfig(opts) {
  const configPath = (0, import_path.resolve)(process.cwd(), opts.config);
  let userConfig = {};
  if ((0, import_fs2.existsSync)(configPath)) {
    try {
      delete require.cache[configPath];
      userConfig = require(configPath);
    } catch (err) {
      console.warn(`Could not load ${opts.config}:`, err instanceof Error ? err.message : err);
    }
  } else {
    console.warn(`No config found at ${opts.config}. Using defaults.`);
  }
  const config = resolveConfig(userConfig);
  const outputPath = (0, import_path.resolve)(process.cwd(), opts.output ?? config.output);
  return { config, outputPath };
}
async function buildCSS(config) {
  const classes = await scanContent(config);
  const base = generateBase(config);
  const utilities = generateUtilities(classes, config);
  return `${base}

${utilities}
`;
}
function ensureDir(filePath) {
  const dir = (0, import_path.dirname)(filePath);
  (0, import_fs2.mkdirSync)(dir, { recursive: true });
}
function minify(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*{\s*/g, "{").replace(/\s*}\s*/g, "}").replace(/\s*:\s*/g, ":").replace(/\s*;\s*/g, ";").replace(/;\}/g, "}").trim();
}
program.parse(process.argv);
