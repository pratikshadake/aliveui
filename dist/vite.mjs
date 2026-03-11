var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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

// src/theme/colors.ts
var defaultColors;
var init_colors = __esm({
  "src/theme/colors.ts"() {
    "use strict";
    defaultColors = {
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
  }
});

// src/theme/default.ts
var defaultTheme;
var init_default = __esm({
  "src/theme/default.ts"() {
    "use strict";
    init_colors();
    defaultTheme = {
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
  }
});

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
var init_config = __esm({
  "src/config.ts"() {
    "use strict";
    init_default();
  }
});

// src/scanner.ts
import { readFileSync } from "fs";
import glob from "fast-glob";
async function scanContent(config) {
  if (config.content.length === 0) return /* @__PURE__ */ new Set();
  const files = await glob(config.content, {
    absolute: true,
    ignore: ["**/node_modules/**", "**/.git/**", "**/dist/**"]
  });
  const classes = /* @__PURE__ */ new Set();
  for (const file of files) {
    try {
      const content = readFileSync(file, "utf-8");
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
  const rawTokenRegex = /(?:^|[\s"'`{(,])(-?[a-z][a-z0-9]*(?:-[a-z0-9./]+)*(?:-\[[^\]]*\])?(?::[a-z][a-z0-9]*(?:-[a-z0-9./]+)*(?:-\[[^\]]*\])?)*)/g;
  let rawMatch;
  while ((rawMatch = rawTokenRegex.exec(content)) !== null) {
    const token = rawMatch[1];
    if (token && isLikelyClass(token)) {
      classes.add(token);
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
  if (!token || token.length < 1 || token.length > 120) return false;
  if (!/^-?[a-z]/.test(token)) return false;
  if (/\s/.test(token)) return false;
  if (token.includes("://")) return false;
  if (token.startsWith("http")) return false;
  const openBrackets = (token.match(/\[/g) ?? []).length;
  const closeBrackets = (token.match(/\]/g) ?? []).length;
  if (openBrackets !== closeBrackets) return false;
  if (JS_PROTOTYPE_PROPS.has(token)) return false;
  return true;
}
var CLASS_EXTRACTION_REGEX, TOKEN_REGEX, JS_PROTOTYPE_PROPS;
var init_scanner = __esm({
  "src/scanner.ts"() {
    "use strict";
    CLASS_EXTRACTION_REGEX = /(?:class|className)(?:\s*=\s*|\s*:\s*)(?:"([^"]+)"|'([^']+)'|`([^`]+)`|\{[^}]*['"`]([^'"`]+)['"`][^}]*\})/g;
    TOKEN_REGEX = /[`'"]([\w\s/[\]#%.-]+)[`'"]/g;
    JS_PROTOTYPE_PROPS = /* @__PURE__ */ new Set([
      "constructor",
      "prototype",
      "toString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "__proto__",
      "__defineGetter__",
      "__defineSetter__",
      "__lookupGetter__",
      "__lookupSetter__"
    ]);
  }
});

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
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
}

body {
  margin: 0;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  background-image: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}

:disabled {
  cursor: default;
}

button,
select {
  text-transform: none;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
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

/* \u2500\u2500 Scroll-reveal (data-alive-scroll) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

[data-alive-scroll] {
  opacity: 0;
  transform: translateY(8px);
}
[data-alive-scroll].is-visible {
  animation: alive-fade-up var(--alive-duration-slow) var(--alive-ease-emphasized) both;
}
[data-alive-scroll="fade"] {
  opacity: 0;
  transform: none;
}
[data-alive-scroll="fade"].is-visible {
  animation: alive-fade-in var(--alive-duration-normal) var(--alive-ease-standard) both;
}
[data-alive-scroll="scale"] {
  opacity: 0;
  transform: scale(0.94);
}
[data-alive-scroll="scale"].is-visible {
  animation: alive-scale-in var(--alive-duration-slow) var(--alive-ease-emphasized) both;
}

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

  [data-alive-scroll],
  [data-alive-scroll="fade"],
  [data-alive-scroll="scale"] {
    opacity: 1;
    transform: none;
  }
  [data-alive-scroll].is-visible,
  [data-alive-scroll="fade"].is-visible,
  [data-alive-scroll="scale"].is-visible {
    animation: none;
  }

  /* depth system \u2014 disable hover lift and active press */
  .d2,
  .d2:hover,
  .d2:active {
    transform: none;
    transition: none;
    box-shadow: var(--alive-shadow-d2);
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

/* \u2500\u2500 JS Runtime: is-open / is-active state helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Modal and Drawer: hidden by default, shown when .is-open is added by runtime */
[data-alive-modal],
[data-alive-drawer] {
  display: none;
}
[data-alive-modal].is-open,
[data-alive-drawer].is-open {
  display: flex;
}

/* Dropdown: hidden by default */
[data-alive-dropdown-menu] {
  display: none;
}
[data-alive-dropdown-menu].is-open {
  display: block;
}

/* Accordion content: collapsed by default, expanded when parent has .is-open */
[data-alive-content] {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--alive-duration-normal) var(--alive-ease-standard);
}
[data-alive-content] > * {
  overflow: hidden;
}
[data-alive-accordion-item].is-open [data-alive-content] {
  grid-template-rows: 1fr;
}

/* Tabs: panels hidden by default, shown when .is-active */
[data-alive-panel] {
  display: none;
}
[data-alive-panel].is-active {
  display: block;
}
[data-alive-tab].is-active {
  color: rgba(0,0,0,0.9);
  border-bottom-color: rgba(0,0,0,0.9);
}

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

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   AliveUI Build \u2014 Display & marketing components
   Browser frame \xB7 Phone frame \xB7 Stat card \xB7 Checklist \xB7 Dot grid
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500 Browser Frame \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-browser {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1);
  background: #fff;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06);
}
.alive-browser-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #f3f3f3;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  flex-shrink: 0;
}
.alive-browser-dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.alive-browser-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.85;
}
.alive-browser-dot:nth-child(1) { background: #ff5f57; }
.alive-browser-dot:nth-child(2) { background: #febc2e; }
.alive-browser-dot:nth-child(3) { background: #28c840; }
.alive-browser-url {
  flex: 1;
  max-width: 280px;
  margin: 0 auto;
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.08);
  font-size: 0.7rem;
  color: rgba(0,0,0,0.35);
  text-align: center;
  font-family: ui-monospace, monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}
.alive-browser-body {
  overflow: hidden;
}
/* Dark variant */
.alive-browser-dark {
  border-color: rgba(255,255,255,0.1);
  background: #0f0f0f;
  box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4);
}
.alive-browser-dark .alive-browser-bar {
  background: #161616;
  border-bottom-color: rgba(255,255,255,0.07);
}
.alive-browser-dark .alive-browser-url {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.2);
}

/* \u2500\u2500 Phone Frame \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-phone {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  border-radius: 40px;
  border: 8px solid #1c1c1e;
  background: #fff;
  overflow: hidden;
  box-shadow:
    0 32px 80px rgba(0,0,0,0.35),
    inset 0 0 0 1px rgba(255,255,255,0.1),
    0 0 0 1px rgba(0,0,0,0.5);
}
.alive-phone::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 22px;
  background: #1c1c1e;
  border-radius: 11px;
  z-index: 10;
}
.alive-phone-screen {
  width: 100%;
  overflow: hidden;
  flex: 1;
}
.alive-phone-dark {
  background: #0f0f0f;
}
.alive-phone-dark .alive-phone-screen {
  background: #0f0f0f;
}
/* Sizes */
.alive-phone-sm  { width: 220px; border-radius: 32px; border-width: 6px; }
.alive-phone-sm::before { width: 70px; height: 18px; border-radius: 9px; }
.alive-phone-lg  { width: 340px; border-radius: 48px; border-width: 10px; }
.alive-phone-lg::before { width: 110px; height: 26px; border-radius: 13px; }

/* \u2500\u2500 Stat Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-stat {
  padding: 1.5rem;
  border-radius: 12px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.07);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.alive-stat-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(0,0,0,0.4);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.alive-stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  color: rgba(0,0,0,0.9);
  margin-bottom: 0.5rem;
  font-variant-numeric: tabular-nums;
}
.alive-stat-change {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8125rem;
  font-weight: 600;
}
.alive-stat-up   { color: #16a34a; }
.alive-stat-down { color: #dc2626; }
/* Dark variant */
.alive-stat-dark {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.09);
  box-shadow: none;
}
.alive-stat-dark .alive-stat-label { color: rgba(255,255,255,0.35); }
.alive-stat-dark .alive-stat-value { color: #ffffff; }

/* \u2500\u2500 Feature Checklist \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-checklist {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.alive-checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: rgba(0,0,0,0.75);
  line-height: 1.45;
}
.alive-checklist-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(74,222,128,0.15);
  border: 1.5px solid rgba(74,222,128,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
.alive-checklist-icon::after {
  content: '';
  display: block;
  width: 5px;
  height: 9px;
  border-right: 2px solid #16a34a;
  border-bottom: 2px solid #16a34a;
  transform: rotate(45deg) translate(-1px, -1px);
}
/* Dark variant */
.alive-checklist-dark .alive-checklist-item { color: rgba(255,255,255,0.75); }
.alive-checklist-dark .alive-checklist-icon {
  background: rgba(74,222,128,0.12);
  border-color: rgba(74,222,128,0.3);
}

/* \u2500\u2500 Dot Grid Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-dot-grid {
  background-image: radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px);
  background-size: 24px 24px;
}
.alive-dot-grid-sm { background-size: 16px 16px; }
.alive-dot-grid-lg { background-size: 32px 32px; }
.alive-dot-grid-dark {
  background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
}

/* \u2500\u2500 Terminal / Code Block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-terminal {
  border-radius: 10px;
  overflow: hidden;
  background: #0f0f0f;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
  font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
}
.alive-terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #161616;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
}
.alive-terminal-body {
  padding: 1.25rem 1.5rem;
  font-size: 0.8125rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.75);
  overflow: auto;
}
.alive-terminal-prompt {
  color: rgba(255,255,255,0.25);
  user-select: none;
}
.alive-terminal-cmd { color: #60a5fa; }
.alive-terminal-out { color: rgba(255,255,255,0.45); }
.alive-terminal-ok  { color: #4ade80; }
.alive-terminal-err { color: #f87171; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   AliveUI Video Blocks \u2014 cinematic building blocks for product videos
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500 Gradient Mesh Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-mesh-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.alive-gradient-mesh {
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 25%,
    #06b6d4 50%,
    #6366f1 75%,
    #8b5cf6 100%
  );
  background-size: 300% 300%;
  animation: alive-mesh-shift 8s ease infinite;
}
.alive-gradient-mesh-warm {
  background: linear-gradient(
    135deg,
    #f59e0b 0%,
    #ef4444 25%,
    #ec4899 50%,
    #f59e0b 75%,
    #ef4444 100%
  );
  background-size: 300% 300%;
  animation: alive-mesh-shift 8s ease infinite;
}
.alive-gradient-mesh-cool {
  background: linear-gradient(
    135deg,
    #0ea5e9 0%,
    #6366f1 25%,
    #14b8a6 50%,
    #0ea5e9 75%,
    #6366f1 100%
  );
  background-size: 300% 300%;
  animation: alive-mesh-shift 8s ease infinite;
}
.alive-gradient-mesh-dark {
  background: linear-gradient(
    135deg,
    #1e1b4b 0%,
    #312e81 20%,
    #1e3a5f 40%,
    #0f172a 60%,
    #1e1b4b 80%,
    #312e81 100%
  );
  background-size: 300% 300%;
  animation: alive-mesh-shift 10s ease infinite;
}
/* Noise overlay layer \u2014 place over any bg */
.alive-gradient-mesh::after,
.alive-gradient-mesh-warm::after,
.alive-gradient-mesh-cool::after,
.alive-gradient-mesh-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* \u2500\u2500 Counter \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-count-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.alive-counter {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.alive-counter-value {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  animation: alive-count-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-counter-label {
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.55;
}
.alive-counter-prefix,
.alive-counter-suffix {
  font-size: 1.25rem;
  font-weight: 700;
  opacity: 0.7;
  align-self: flex-start;
  margin-top: 6px;
}
/* JS-driven counter \u2014 add data-target="4200" and call aliveCounter() */
[data-alive-counter] { counter-reset: none; }

/* \u2500\u2500 Toast Notification \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-toast-loop {
  0%   { opacity: 0; transform: translateY(16px) scale(0.95); }
  8%   { opacity: 1; transform: translateY(0) scale(1); }
  70%  { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 0; transform: translateY(-10px) scale(0.97); }
  100% { opacity: 0; transform: translateY(16px) scale(0.95); }
}
.alive-toast {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 14px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 32px rgba(0,0,0,0.24), 0 1px 0 rgba(255,255,255,0.06) inset;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  animation: alive-toast-loop 5s cubic-bezier(0.22, 1, 0.36, 1) infinite both;
}
.alive-toast-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
  background: rgba(255,255,255,0.1);
}
.alive-toast-title { font-weight: 600; font-size: 0.875rem; }
.alive-toast-body  { font-size: 0.8125rem; opacity: 0.65; margin-top: 1px; }
.alive-toast-content { display: flex; flex-direction: column; }
/* variants */
.alive-toast-success { border-color: rgba(74,222,128,0.3); background: rgba(74,222,128,0.08); }
.alive-toast-success .alive-toast-icon { background: rgba(74,222,128,0.15); color: #4ade80; }
.alive-toast-error   { border-color: rgba(248,113,113,0.3); background: rgba(248,113,113,0.08); }
.alive-toast-error   .alive-toast-icon { background: rgba(248,113,113,0.15); color: #f87171; }
.alive-toast-info    { border-color: rgba(99,102,241,0.35); background: rgba(99,102,241,0.08); }
.alive-toast-info    .alive-toast-icon { background: rgba(99,102,241,0.15); color: #818cf8; }
.alive-toast-warning { border-color: rgba(251,191,36,0.3); background: rgba(251,191,36,0.08); }
.alive-toast-warning .alive-toast-icon { background: rgba(251,191,36,0.15); color: #fbbf24; }
/* light bg variant */
.alive-toast-light {
  background: #fff;
  border-color: rgba(0,0,0,0.08);
  color: #111;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Typewriter \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
@keyframes alive-type-in {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
}
.alive-typewriter {
  display: inline-block;
  white-space: nowrap;
  border-right: 2px solid currentColor;
  animation:
    alive-type-in 2s steps(40, end) both,
    alive-blink 0.8s step-end infinite;
}
.alive-typewriter-fast {
  animation:
    alive-type-in 1s steps(30, end) both,
    alive-blink 0.8s step-end infinite;
}
.alive-typewriter-slow {
  animation:
    alive-type-in 3.5s steps(60, end) both,
    alive-blink 0.8s step-end infinite;
}
.alive-typewriter-no-cursor {
  border-right: none;
  animation: alive-type-in 2s steps(40, end) both;
}

/* \u2500\u2500 Word Reveal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-word-in {
  from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
@keyframes alive-word-in-up {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes alive-word-in-scale {
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
}
/* paused by default \u2014 add .alive-run to the wrapper to trigger */
.alive-word-reveal > * {
  display: inline-block;
  opacity: 0;
  animation: alive-word-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-play-state: paused;
}
.alive-word-reveal.alive-run > * {
  animation-play-state: running;
}
/* stagger helpers \u2014 add these to children */
.alive-delay-1  { animation-delay: 0.1s; }
.alive-delay-2  { animation-delay: 0.2s; }
.alive-delay-3  { animation-delay: 0.3s; }
.alive-delay-4  { animation-delay: 0.4s; }
.alive-delay-5  { animation-delay: 0.5s; }
.alive-delay-6  { animation-delay: 0.6s; }
.alive-delay-7  { animation-delay: 0.7s; }
.alive-delay-8  { animation-delay: 0.8s; }
.alive-delay-9  { animation-delay: 0.9s; }
.alive-delay-10 { animation-delay: 1.0s; }
.alive-delay-12 { animation-delay: 1.2s; }
.alive-delay-15 { animation-delay: 1.5s; }
/* char-by-char variant */
.alive-char-reveal > * {
  display: inline-block;
  opacity: 0;
  animation: alive-word-in-scale 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-play-state: paused;
}
.alive-char-reveal.alive-run > * {
  animation-play-state: running;
}

/* \u2500\u2500 Animated Light Beam \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-beam-sweep {
  0%   { transform: translateX(-100%) rotate(25deg); opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateX(200%) rotate(25deg); opacity: 0; }
}
@keyframes alive-beam-pulse {
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 0.7; }
}
.alive-beam {
  position: relative;
  overflow: hidden;
}
.alive-beam::before {
  content: '';
  position: absolute;
  top: -50%;
  left: 0;
  width: 60%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255,255,255,0.06) 40%,
    rgba(255,255,255,0.12) 50%,
    rgba(255,255,255,0.06) 60%,
    transparent 100%
  );
  animation: alive-beam-sweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 1s;
  pointer-events: none;
}
/* radial glow beam from top */
.alive-beam-glow::after {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 50%;
  background: radial-gradient(ellipse at top, rgba(99,102,241,0.35) 0%, transparent 70%);
  animation: alive-beam-pulse 3s ease-in-out infinite;
  pointer-events: none;
}

/* \u2500\u2500 Noise / Film Grain \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-noise-shift {
  0%   { transform: translate(0, 0); }
  10%  { transform: translate(-2%, -2%); }
  20%  { transform: translate(2%, 2%); }
  30%  { transform: translate(-1%, 1%); }
  40%  { transform: translate(1%, -1%); }
  50%  { transform: translate(-2%, 1%); }
  60%  { transform: translate(2%, -2%); }
  70%  { transform: translate(-1%, -1%); }
  80%  { transform: translate(1%, 2%); }
  90%  { transform: translate(-2%, 2%); }
  100% { transform: translate(0, 0); }
}
.alive-noise {
  position: relative;
}
.alive-noise::after {
  content: '';
  position: absolute;
  inset: -10%;
  width: 120%;
  height: 120%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.04;
  animation: alive-noise-shift 0.3s steps(1) infinite;
  pointer-events: none;
  z-index: 10;
}
.alive-noise-subtle::after { opacity: 0.025; }
.alive-noise-strong::after { opacity: 0.07; }

/* \u2500\u2500 Animated Grid Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-grid-scroll {
  from { background-position: 0 0; }
  to   { background-position: 40px 40px; }
}
@keyframes alive-grid-fade {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.8; }
}
.alive-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: alive-grid-scroll 4s linear infinite;
}
.alive-grid-dark {
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
.alive-grid-light {
  background-image:
    linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}
.alive-grid-sm { background-size: 20px 20px; }
.alive-grid-lg { background-size: 60px 60px; }
/* center fade \u2014 vignette over the grid */
.alive-grid-vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%);
  pointer-events: none;
}

/* \u2500\u2500 Spotlight \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-spotlight-in {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
.alive-spotlight {
  position: relative;
}
.alive-spotlight::before {
  content: '';
  position: absolute;
  inset: -24px;
  border-radius: inherit;
  background: radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 50%, transparent 70%);
  animation: alive-spotlight-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  pointer-events: none;
  z-index: -1;
}
.alive-spotlight-ring::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  border: 1px solid rgba(99,102,241,0.4);
  box-shadow: 0 0 24px rgba(99,102,241,0.3), 0 0 48px rgba(99,102,241,0.15);
  animation: alive-spotlight-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  pointer-events: none;
}
.alive-spotlight-white::before {
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.06) 50%, transparent 70%);
}

/* \u2500\u2500 Badge Pulse / Live Indicator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-pulse-ring {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(2.5); opacity: 0; }
}
@keyframes alive-badge-in {
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
}
.alive-badge-pulse {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px 5px 8px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  animation: alive-badge-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-badge-pulse .alive-badge-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.alive-badge-pulse .alive-badge-dot::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: alive-pulse-ring 1.4s cubic-bezier(0, 0, 0.2, 1) infinite;
  background: inherit;
}
/* color variants */
.alive-badge-live {
  background: rgba(239,68,68,0.12);
  color: #ef4444;
  border: 1px solid rgba(239,68,68,0.2);
}
.alive-badge-live .alive-badge-dot { background: #ef4444; }
.alive-badge-online {
  background: rgba(34,197,94,0.12);
  color: #22c55e;
  border: 1px solid rgba(34,197,94,0.2);
}
.alive-badge-online .alive-badge-dot { background: #22c55e; }
.alive-badge-recording {
  background: rgba(239,68,68,0.1);
  color: #f87171;
  border: 1px solid rgba(239,68,68,0.15);
}
.alive-badge-recording .alive-badge-dot { background: #f87171; }
.alive-badge-beta {
  background: rgba(99,102,241,0.12);
  color: #818cf8;
  border: 1px solid rgba(99,102,241,0.2);
}
.alive-badge-beta .alive-badge-dot { background: #818cf8; }

/* \u2500\u2500 Code Block (Syntax Highlight) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-code-reveal {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes alive-code-scan {
  0%   { top: 0%;    opacity: 0; }
  5%   { opacity: 1; }
  95%  { opacity: 1; }
  100% { top: 100%;  opacity: 0; }
}
@keyframes alive-code-glow {
  0%, 100% { box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
  50%       { box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2), 0 0 24px rgba(99,102,241,0.1); }
}
.alive-code-block {
  border-radius: 12px;
  overflow: hidden;
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  font-family: ui-monospace, 'Cascadia Code', 'Fira Code', 'JetBrains Mono', monospace;
  animation: alive-code-reveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) both, alive-code-glow 4s ease-in-out 1s infinite;
  position: relative;
}
/* scanning line \u2014 active code highlight */
.alive-code-block::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1.75rem;
  background: linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.07) 50%, transparent 100%);
  animation: alive-code-scan 3s ease-in-out 1s infinite;
  pointer-events: none;
}
.alive-code-block-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #161b22;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.alive-code-block-dots {
  display: flex;
  gap: 6px;
}
.alive-code-block-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.alive-code-block-dots span:nth-child(1) { background: #ff5f57; }
.alive-code-block-dots span:nth-child(2) { background: #febc2e; }
.alive-code-block-dots span:nth-child(3) { background: #28c840; }
.alive-code-block-filename {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.35);
  font-family: inherit;
}
.alive-code-block-lang {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.25);
}
.alive-code-block-body {
  padding: 1.25rem 1.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  overflow: auto;
}
/* line-by-line reveal \u2014 add alive-delay-* to each line */
.alive-code-block-body .line {
  display: block;
  animation: alive-code-reveal 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* syntax tokens */
.alive-token-keyword  { color: #ff7b72; }
.alive-token-string   { color: #a5d6ff; }
.alive-token-number   { color: #79c0ff; }
.alive-token-comment  { color: rgba(255,255,255,0.3); font-style: italic; }
.alive-token-fn       { color: #d2a8ff; }
.alive-token-var      { color: #ffa657; }
.alive-token-op       { color: rgba(255,255,255,0.55); }
.alive-token-type     { color: #79c0ff; }
.alive-token-punct    { color: rgba(255,255,255,0.4); }

/* \u2500\u2500 Testimonial Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-card-in {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes alive-float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
}
.alive-testimonial {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  animation: alive-card-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both, alive-float 4s ease-in-out 0.5s infinite;
  max-width: 400px;
}
.alive-testimonial-quote {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.85);
  font-weight: 400;
}
.alive-testimonial-quote::before { content: '\u201C'; }
.alive-testimonial-quote::after  { content: '\u201D'; }
.alive-testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.alive-testimonial-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  flex-shrink: 0;
  overflow: hidden;
}
.alive-testimonial-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
}
.alive-testimonial-role {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
  margin-top: 1px;
}
.alive-testimonial-stars {
  display: flex;
  gap: 3px;
  color: #fbbf24;
  font-size: 0.75rem;
  margin-bottom: 4px;
}
/* light variant */
.alive-testimonial-light {
  background: #fff;
  border-color: rgba(0,0,0,0.06);
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
}
.alive-testimonial-light .alive-testimonial-quote { color: #1a1a1a; }
.alive-testimonial-light .alive-testimonial-name  { color: #111; }
.alive-testimonial-light .alive-testimonial-role  { color: rgba(0,0,0,0.4); }

/* \u2500\u2500 Metric Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-metric-in {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes alive-bar-grow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes alive-bar-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes alive-value-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.75; }
}
.alive-metric-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  animation: alive-metric-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  min-width: 160px;
}
.alive-metric-card-label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: rgba(255,255,255,0.4);
}
.alive-metric-card-value {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: #fff;
}
.alive-metric-card-change {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 6px;
  width: fit-content;
}
.alive-metric-card-up   { color: #4ade80; background: rgba(74,222,128,0.12); }
.alive-metric-card-down { color: #f87171; background: rgba(248,113,113,0.12); }
.alive-metric-card-bar {
  height: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,0.08);
  margin-top: 4px;
  overflow: hidden;
}
.alive-metric-card-bar-fill {
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
  background-size: 200% auto;
  transform-origin: left;
  animation:
    alive-bar-grow 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both,
    alive-bar-shimmer 2.5s linear 1.3s infinite;
}
/* light variant */
.alive-metric-card-light {
  background: #fff;
  border-color: rgba(0,0,0,0.06);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.alive-metric-card-light .alive-metric-card-label { color: rgba(0,0,0,0.4); }
.alive-metric-card-light .alive-metric-card-value { color: #111; }

/* \u2500\u2500 Logo Marquee \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes alive-marquee-reverse {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
.alive-marquee {
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
}
/* fade edges */
.alive-marquee::before,
.alive-marquee::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.alive-marquee::before { left: 0;  background: linear-gradient(to right, rgba(0,0,0,0.8), transparent); }
.alive-marquee::after  { right: 0; background: linear-gradient(to left,  rgba(0,0,0,0.8), transparent); }
.alive-marquee-track {
  display: flex;
  gap: 40px;
  align-items: center;
  flex-shrink: 0;
  animation: alive-marquee 20s linear infinite;
  will-change: transform;
}
.alive-marquee-track-slow   { animation-duration: 35s; }
.alive-marquee-track-fast   { animation-duration: 12s; }
.alive-marquee-track-reverse { animation-name: alive-marquee-reverse; }
.alive-marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 32px;
  opacity: 0.45;
  filter: grayscale(1);
  transition: opacity 0.2s, filter 0.2s;
}
.alive-marquee-item:hover { opacity: 0.8; filter: grayscale(0); }
.alive-marquee-item img { height: 100%; width: auto; object-fit: contain; }
/* light bg variant */
.alive-marquee-light::before { background: linear-gradient(to right, rgba(255,255,255,0.9), transparent); }
.alive-marquee-light::after  { background: linear-gradient(to left,  rgba(255,255,255,0.9), transparent); }
.alive-marquee-light .alive-marquee-item { filter: grayscale(1) invert(1); opacity: 0.35; }

/* \u2500\u2500 Glitch Text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-glitch-1 {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-3px, 0); }
  20%       { clip-path: inset(20% 0 60% 0); transform: translate(3px, 0); }
  40%       { clip-path: inset(50% 0 30% 0); transform: translate(-3px, 0); }
  60%       { clip-path: inset(80% 0 5% 0);  transform: translate(3px, 0); }
  80%       { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 0); }
}
@keyframes alive-glitch-2 {
  0%, 100% { clip-path: inset(50% 0 30% 0); transform: translate(3px, 0);  }
  25%       { clip-path: inset(10% 0 70% 0); transform: translate(-3px, 0); }
  50%       { clip-path: inset(70% 0 10% 0); transform: translate(2px, 0);  }
  75%       { clip-path: inset(30% 0 50% 0); transform: translate(-2px, 0); }
}
@keyframes alive-glitch-shake {
  0%, 100% { transform: translate(0); }
  10%  { transform: translate(-2px, 1px); }
  20%  { transform: translate(2px, -1px); }
  30%  { transform: translate(-1px, 2px); }
  40%  { transform: translate(1px, -2px); }
  50%  { transform: translate(-2px, -1px); }
}
.alive-glitch {
  position: relative;
  display: inline-block;
}
.alive-glitch::before,
.alive-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.alive-glitch::before {
  color: #ff2d78;
  animation: alive-glitch-1 2.5s infinite linear alternate-reverse;
}
.alive-glitch::after {
  color: #00f5d4;
  animation: alive-glitch-2 2s infinite linear alternate-reverse;
}
.alive-glitch-shake {
  animation: alive-glitch-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
}

/* \u2500\u2500 Scene Transitions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Usage: stack two scene layers (position:absolute, same inset).
   Add  .alive-transition-*-out  to the LEAVING layer.
   Add  .alive-transition-*-in   to the ENTERING layer.
   Both run for --alive-tr-dur (default 600ms).
   For video export: render each layer separately and composite.
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-transition-fade-out,
.alive-transition-fade-in,
.alive-transition-wipe-left-out,
.alive-transition-wipe-left-in,
.alive-transition-wipe-right-out,
.alive-transition-wipe-right-in,
.alive-transition-wipe-up-out,
.alive-transition-wipe-up-in,
.alive-transition-wipe-down-out,
.alive-transition-wipe-down-in,
.alive-transition-slide-left-out,
.alive-transition-slide-left-in,
.alive-transition-slide-right-out,
.alive-transition-slide-right-in,
.alive-transition-slide-up-out,
.alive-transition-slide-up-in,
.alive-transition-slide-down-out,
.alive-transition-slide-down-in,
.alive-transition-zoom-in-out,
.alive-transition-zoom-in-in,
.alive-transition-zoom-out-out,
.alive-transition-zoom-out-in,
.alive-transition-blur-out,
.alive-transition-blur-in,
.alive-transition-flip-out,
.alive-transition-flip-in,
.alive-transition-clock-out,
.alive-transition-clock-in {
  --alive-tr-dur: 600ms;
  --alive-tr-ease: cubic-bezier(0.4, 0, 0.2, 1);
  animation-duration: var(--alive-tr-dur);
  animation-timing-function: var(--alive-tr-ease);
  animation-fill-mode: both;
}

/* \u2500\u2500 Fade \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}
@keyframes alive-tr-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.alive-transition-fade-out { animation-name: alive-tr-fade-out; }
.alive-transition-fade-in  { animation-name: alive-tr-fade-in; }

/* \u2500\u2500 Wipe left (reveal from right) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-wipe-left-out {
  from { clip-path: inset(0 0 0 0); }
  to   { clip-path: inset(0 100% 0 0); }
}
@keyframes alive-tr-wipe-left-in {
  from { clip-path: inset(0 0 0 100%); }
  to   { clip-path: inset(0 0 0 0); }
}
.alive-transition-wipe-left-out { animation-name: alive-tr-wipe-left-out; }
.alive-transition-wipe-left-in  { animation-name: alive-tr-wipe-left-in; }

/* \u2500\u2500 Wipe right (reveal from left) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-wipe-right-out {
  from { clip-path: inset(0 0 0 0); }
  to   { clip-path: inset(0 0 0 100%); }
}
@keyframes alive-tr-wipe-right-in {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
.alive-transition-wipe-right-out { animation-name: alive-tr-wipe-right-out; }
.alive-transition-wipe-right-in  { animation-name: alive-tr-wipe-right-in; }

/* \u2500\u2500 Wipe up (reveal from bottom) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-wipe-up-out {
  from { clip-path: inset(0 0 0 0); }
  to   { clip-path: inset(100% 0 0 0); }
}
@keyframes alive-tr-wipe-up-in {
  from { clip-path: inset(0 0 100% 0); }
  to   { clip-path: inset(0 0 0 0); }
}
.alive-transition-wipe-up-out { animation-name: alive-tr-wipe-up-out; }
.alive-transition-wipe-up-in  { animation-name: alive-tr-wipe-up-in; }

/* \u2500\u2500 Wipe down (reveal from top) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-wipe-down-out {
  from { clip-path: inset(0 0 0 0); }
  to   { clip-path: inset(0 0 100% 0); }
}
@keyframes alive-tr-wipe-down-in {
  from { clip-path: inset(100% 0 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
.alive-transition-wipe-down-out { animation-name: alive-tr-wipe-down-out; }
.alive-transition-wipe-down-in  { animation-name: alive-tr-wipe-down-in; }

/* \u2500\u2500 Slide left (new scene pushes in from right) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-slide-left-out {
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(-40%); opacity: 0; }
}
@keyframes alive-tr-slide-left-in {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
.alive-transition-slide-left-out { animation-name: alive-tr-slide-left-out; }
.alive-transition-slide-left-in  { animation-name: alive-tr-slide-left-in; }

/* \u2500\u2500 Slide right (new scene pushes in from left) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-slide-right-out {
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(40%); opacity: 0; }
}
@keyframes alive-tr-slide-right-in {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
.alive-transition-slide-right-out { animation-name: alive-tr-slide-right-out; }
.alive-transition-slide-right-in  { animation-name: alive-tr-slide-right-in; }

/* \u2500\u2500 Slide up (new scene pushes in from bottom) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-slide-up-out {
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(-40%); opacity: 0; }
}
@keyframes alive-tr-slide-up-in {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
.alive-transition-slide-up-out { animation-name: alive-tr-slide-up-out; }
.alive-transition-slide-up-in  { animation-name: alive-tr-slide-up-in; }

/* \u2500\u2500 Slide down (new scene pushes in from top) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-slide-down-out {
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(40%); opacity: 0; }
}
@keyframes alive-tr-slide-down-in {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
.alive-transition-slide-down-out { animation-name: alive-tr-slide-down-out; }
.alive-transition-slide-down-in  { animation-name: alive-tr-slide-down-in; }

/* \u2500\u2500 Zoom in (old scene shrinks away) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-zoom-in-out {
  from { transform: scale(1); opacity: 1; }
  to   { transform: scale(0.75); opacity: 0; }
}
@keyframes alive-tr-zoom-in-in {
  from { transform: scale(1.25); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
.alive-transition-zoom-in-out { animation-name: alive-tr-zoom-in-out; }
.alive-transition-zoom-in-in  { animation-name: alive-tr-zoom-in-in; }

/* \u2500\u2500 Zoom out (old scene blows up) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-zoom-out-out {
  from { transform: scale(1); opacity: 1; }
  to   { transform: scale(1.3); opacity: 0; }
}
@keyframes alive-tr-zoom-out-in {
  from { transform: scale(0.7); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
.alive-transition-zoom-out-out { animation-name: alive-tr-zoom-out-out; }
.alive-transition-zoom-out-in  { animation-name: alive-tr-zoom-out-in; }

/* \u2500\u2500 Blur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-blur-out {
  from { filter: blur(0px); opacity: 1; transform: scale(1); }
  to   { filter: blur(20px); opacity: 0; transform: scale(1.05); }
}
@keyframes alive-tr-blur-in {
  from { filter: blur(20px); opacity: 0; transform: scale(0.95); }
  to   { filter: blur(0px); opacity: 1; transform: scale(1); }
}
.alive-transition-blur-out { animation-name: alive-tr-blur-out; }
.alive-transition-blur-in  { animation-name: alive-tr-blur-in; }

/* \u2500\u2500 Flip (3-D card flip on Y axis) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-flip-out {
  from { transform: perspective(800px) rotateY(0deg); opacity: 1; }
  to   { transform: perspective(800px) rotateY(-90deg); opacity: 0; }
}
@keyframes alive-tr-flip-in {
  from { transform: perspective(800px) rotateY(90deg); opacity: 0; }
  to   { transform: perspective(800px) rotateY(0deg); opacity: 1; }
}
.alive-transition-flip-out { animation-name: alive-tr-flip-out; }
.alive-transition-flip-in  { animation-name: alive-tr-flip-in; }

/* \u2500\u2500 Clock wipe (radial reveal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-tr-clock-out {
  from { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%); opacity: 1; }
  to   { clip-path: polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%); opacity: 0; }
}
@keyframes alive-tr-clock-in {
  from { clip-path: polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%); }
  to   { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%); }
}
.alive-transition-clock-out { animation-name: alive-tr-clock-out; }
.alive-transition-clock-in  { animation-name: alive-tr-clock-in; }

/* \u2500\u2500 Duration overrides \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-tr-fast   { --alive-tr-dur: 300ms; }
.alive-tr-slow   { --alive-tr-dur: 900ms; }
.alive-tr-xslow  { --alive-tr-dur: 1400ms; }

/* \u2500\u2500 3D Scenes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   CSS 3D building blocks for cinematic product videos.
   Most require a perspective parent (.alive-3d-scene).
   Note: opacity/filter/clip-path on a parent flatten preserve-3d
   contexts \u2014 keep 3D wrappers free of those properties.
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Foundation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-3d-scene {
  perspective: var(--alive-3d-perspective, 900px);
  perspective-origin: 50% 40%;
}
.alive-3d-preserve   { transform-style: preserve-3d; }
.alive-3d-backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }

/* \u2500\u2500 Spinning cube \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-cube-spin {
  from { transform: rotateX(-18deg) rotateY(0deg); }
  to   { transform: rotateX(-18deg) rotateY(360deg); }
}
.alive-3d-cube {
  --alive-cube-size: 80px;
  width: var(--alive-cube-size);
  height: var(--alive-cube-size);
  transform-style: preserve-3d;
  animation: alive-cube-spin 8s linear infinite;
  position: relative;
}
.alive-3d-cube .face {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(4px);
}
.alive-3d-cube .face-front  { transform: translateZ(calc(var(--alive-cube-size) / 2)); background: rgba(99,102,241,0.22); }
.alive-3d-cube .face-back   { transform: rotateY(180deg)  translateZ(calc(var(--alive-cube-size) / 2)); background: rgba(99,102,241,0.08); }
.alive-3d-cube .face-left   { transform: rotateY(-90deg)  translateZ(calc(var(--alive-cube-size) / 2)); background: rgba(139,92,246,0.16); }
.alive-3d-cube .face-right  { transform: rotateY(90deg)   translateZ(calc(var(--alive-cube-size) / 2)); background: rgba(139,92,246,0.16); }
.alive-3d-cube .face-top    { transform: rotateX(90deg)   translateZ(calc(var(--alive-cube-size) / 2)); background: rgba(167,139,250,0.24); }
.alive-3d-cube .face-bottom { transform: rotateX(-90deg)  translateZ(calc(var(--alive-cube-size) / 2)); background: rgba(99,102,241,0.06); }
.alive-3d-cube-sm { --alive-cube-size: 56px; }
.alive-3d-cube-lg { --alive-cube-size: 120px; }
/* Slow/fast spin */
.alive-3d-cube.alive-tr-slow { animation-duration: 16s; }
.alive-3d-cube.alive-tr-fast { animation-duration: 4s; }

/* \u2500\u2500 Card flip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-3d-flip-loop {
  0%, 35%  { transform: rotateY(0deg); }
  50%, 85% { transform: rotateY(180deg); }
  100%     { transform: rotateY(360deg); }
}
.alive-3d-flip {
  transform-style: preserve-3d;
  animation: alive-3d-flip-loop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  position: relative;
}
.alive-3d-flip-front,
.alive-3d-flip-back {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.alive-3d-flip-back {
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
}
/* Flip on X axis variant */
@keyframes alive-3d-flip-x-loop {
  0%, 35%  { transform: rotateX(0deg); }
  50%, 85% { transform: rotateX(180deg); }
  100%     { transform: rotateX(360deg); }
}
.alive-3d-flip-x {
  transform-style: preserve-3d;
  animation: alive-3d-flip-x-loop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  position: relative;
}
.alive-3d-flip-x .alive-3d-flip-back {
  transform: rotateX(180deg);
}

/* \u2500\u2500 Stacked deck of cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-3d-stack {
  transform-style: preserve-3d;
  position: relative;
}
.alive-3d-stack > *:nth-child(1) {
  position: relative;
  transform: translateZ(0px) rotateX(0deg);
  z-index: 3;
}
.alive-3d-stack > *:nth-child(2) {
  position: absolute; inset: 0;
  transform: translateZ(-20px) translateY(10px) scale(0.96);
  z-index: 2;
}
.alive-3d-stack > *:nth-child(3) {
  position: absolute; inset: 0;
  transform: translateZ(-40px) translateY(20px) scale(0.92);
  z-index: 1;
}

/* \u2500\u2500 Float layers (parallax Z depth) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-3d-float-anim {
  0%, 100% { transform: translateZ(var(--alive-z, 0px)) translateY(0px); }
  50%      { transform: translateZ(var(--alive-z, 0px)) translateY(-10px); }
}
.alive-3d-float-layer { animation: alive-3d-float-anim 4s ease-in-out infinite; }
.alive-3d-float-near  { --alive-z: 80px;   animation-delay: 0s; }
.alive-3d-float-mid   { --alive-z: 40px;   animation-delay: -0.6s; }
.alive-3d-float-base  { --alive-z: 0px;    animation-delay: -1.2s; }
.alive-3d-float-far   { --alive-z: -30px;  animation-delay: -1.8s; }

/* \u2500\u2500 Extruded 3D text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.alive-3d-text {
  text-shadow:
    1px 1px 0 rgba(0,0,0,0.28),
    2px 2px 0 rgba(0,0,0,0.22),
    3px 3px 0 rgba(0,0,0,0.18),
    4px 4px 0 rgba(0,0,0,0.14),
    5px 5px 0 rgba(0,0,0,0.10),
    6px 6px 16px rgba(0,0,0,0.3);
}
.alive-3d-text-indigo {
  text-shadow:
    1px 1px 0 rgba(79,70,229,0.7),
    2px 2px 0 rgba(79,70,229,0.6),
    3px 3px 0 rgba(79,70,229,0.5),
    4px 4px 0 rgba(79,70,229,0.4),
    5px 5px 0 rgba(79,70,229,0.3),
    6px 6px 20px rgba(99,102,241,0.5);
}
.alive-3d-text-glow {
  text-shadow:
    1px 1px 0 rgba(0,0,0,0.3),
    2px 2px 0 rgba(0,0,0,0.22),
    3px 3px 0 rgba(0,0,0,0.14),
    0 0 40px rgba(99,102,241,0.7),
    0 0 80px rgba(99,102,241,0.3);
}

/* \u2500\u2500 Looping perspective tilt \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-3d-tilt-loop {
  0%   { transform: rotateX(0deg)  rotateY(0deg); }
  25%  { transform: rotateX(8deg)  rotateY(10deg); }
  50%  { transform: rotateX(0deg)  rotateY(0deg); }
  75%  { transform: rotateX(-8deg) rotateY(-10deg); }
  100% { transform: rotateX(0deg)  rotateY(0deg); }
}
@keyframes alive-3d-tilt-loop-sm {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  25%  { transform: rotateX(4deg) rotateY(5deg); }
  50%  { transform: rotateX(0deg) rotateY(0deg); }
  75%  { transform: rotateX(-4deg) rotateY(-5deg); }
  100% { transform: rotateX(0deg) rotateY(0deg); }
}
.alive-3d-tilt    { transform-style: preserve-3d; animation: alive-3d-tilt-loop    6s ease-in-out infinite; }
.alive-3d-tilt-sm { transform-style: preserve-3d; animation: alive-3d-tilt-loop-sm 6s ease-in-out infinite; }

/* \u2500\u2500 Continuous axis rotations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-rotate-y { from { transform: rotateY(0deg); }  to { transform: rotateY(360deg); } }
@keyframes alive-rotate-x { from { transform: rotateX(0deg); }  to { transform: rotateX(360deg); } }
@keyframes alive-rotate-z { from { transform: rotateZ(0deg); }  to { transform: rotateZ(360deg); } }
.alive-3d-rotate-y { animation: alive-rotate-y 6s  linear infinite; transform-style: preserve-3d; }
.alive-3d-rotate-x { animation: alive-rotate-x 8s  linear infinite; transform-style: preserve-3d; }
.alive-3d-rotate-z { animation: alive-rotate-z 6s  linear infinite; }
.alive-3d-rotate-y.alive-tr-fast { animation-duration: 3s; }
.alive-3d-rotate-y.alive-tr-slow { animation-duration: 12s; }
.alive-3d-rotate-x.alive-tr-fast { animation-duration: 4s; }
.alive-3d-rotate-x.alive-tr-slow { animation-duration: 16s; }

/* \u2500\u2500 3D Carousel (6-item ring) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-carousel-spin {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(-360deg); }
}
.alive-3d-carousel {
  transform-style: preserve-3d;
  animation: alive-carousel-spin 12s linear infinite;
  position: relative;
  width: 100%;
  height: 100%;
}
.alive-3d-carousel > * { position: absolute; top: 50%; left: 50%; }
.alive-3d-carousel > *:nth-child(1) { transform: translate(-50%,-50%) rotateY(0deg)   translateZ(var(--alive-carousel-r, 140px)); }
.alive-3d-carousel > *:nth-child(2) { transform: translate(-50%,-50%) rotateY(60deg)  translateZ(var(--alive-carousel-r, 140px)); }
.alive-3d-carousel > *:nth-child(3) { transform: translate(-50%,-50%) rotateY(120deg) translateZ(var(--alive-carousel-r, 140px)); }
.alive-3d-carousel > *:nth-child(4) { transform: translate(-50%,-50%) rotateY(180deg) translateZ(var(--alive-carousel-r, 140px)); }
.alive-3d-carousel > *:nth-child(5) { transform: translate(-50%,-50%) rotateY(240deg) translateZ(var(--alive-carousel-r, 140px)); }
.alive-3d-carousel > *:nth-child(6) { transform: translate(-50%,-50%) rotateY(300deg) translateZ(var(--alive-carousel-r, 140px)); }
/* 4-item variant */
.alive-3d-carousel-4 > *:nth-child(1) { transform: translate(-50%,-50%) rotateY(0deg)   translateZ(var(--alive-carousel-r, 120px)); }
.alive-3d-carousel-4 > *:nth-child(2) { transform: translate(-50%,-50%) rotateY(90deg)  translateZ(var(--alive-carousel-r, 120px)); }
.alive-3d-carousel-4 > *:nth-child(3) { transform: translate(-50%,-50%) rotateY(180deg) translateZ(var(--alive-carousel-r, 120px)); }
.alive-3d-carousel-4 > *:nth-child(4) { transform: translate(-50%,-50%) rotateY(270deg) translateZ(var(--alive-carousel-r, 120px)); }
.alive-3d-carousel.alive-tr-slow { animation-duration: 24s; }
.alive-3d-carousel.alive-tr-fast { animation-duration: 6s; }

/* \u2500\u2500 Charts & Data Visualization \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-bar-grow {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}
@keyframes alive-bar-shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.alive-bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 100px;
}
.alive-bar {
  flex: 1;
  transform-origin: bottom;
  border-radius: 4px 4px 0 0;
  animation: alive-bar-grow 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  background: linear-gradient(180deg, rgba(99,102,241,0.9) 0%, rgba(99,102,241,0.5) 100%);
  position: relative;
  overflow: hidden;
}
.alive-bar::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: alive-bar-shimmer 2s ease-in-out infinite;
  animation-delay: inherit;
}
.alive-bar:nth-child(1) { animation-delay: 0ms; }
.alive-bar:nth-child(2) { animation-delay: 80ms; }
.alive-bar:nth-child(3) { animation-delay: 160ms; }
.alive-bar:nth-child(4) { animation-delay: 240ms; }
.alive-bar:nth-child(5) { animation-delay: 320ms; }
.alive-bar:nth-child(6) { animation-delay: 400ms; }
.alive-bar:nth-child(7) { animation-delay: 480ms; }
/* Color variants */
.alive-bar-indigo  { background: linear-gradient(180deg, rgba(99,102,241,0.9),  rgba(99,102,241,0.4)); }
.alive-bar-violet  { background: linear-gradient(180deg, rgba(139,92,246,0.9),  rgba(139,92,246,0.4)); }
.alive-bar-sky     { background: linear-gradient(180deg, rgba(14,165,233,0.9),   rgba(14,165,233,0.4)); }
.alive-bar-emerald { background: linear-gradient(180deg, rgba(16,185,129,0.9),  rgba(16,185,129,0.4)); }
.alive-bar-rose    { background: linear-gradient(180deg, rgba(244,63,94,0.9),   rgba(244,63,94,0.4)); }
.alive-bar-amber   { background: linear-gradient(180deg, rgba(251,191,36,0.9),  rgba(251,191,36,0.4)); }
/* Chart axis / labels */
.alive-chart-axis {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 6px;
  margin-top: 4px;
}
.alive-chart-label {
  flex: 1;
  text-align: center;
  font-size: 0.625rem;
  color: rgba(255,255,255,0.35);
  font-weight: 500;
}
/* Donut / ring chart \u2014 use SVG stroke-dashoffset */
@keyframes alive-donut-fill {
  from { stroke-dashoffset: var(--alive-donut-circ, 283); }
  to   { stroke-dashoffset: var(--alive-donut-gap, 0); }
}
.alive-donut-arc {
  fill: none;
  stroke-linecap: round;
  animation: alive-donut-fill 1s cubic-bezier(0.22, 1, 0.36, 1) both;
  transform-origin: center;
  transform: rotate(-90deg);
}
/* Line chart path draw */
@keyframes alive-line-draw {
  from { stroke-dashoffset: var(--alive-line-len, 500); }
  to   { stroke-dashoffset: 0; }
}
.alive-line-path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: alive-line-draw 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* Area fill under line */
@keyframes alive-area-fill {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.alive-area-fill {
  animation: alive-area-fill 1.2s ease 0.3s both;
}

/* \u2500\u2500 Device Frames \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Browser */
.alive-device-browser {
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.4);
}
.alive-device-browser-bar {
  height: 38px;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 14px;
  flex-shrink: 0;
}
.alive-device-browser-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.alive-device-browser-dot:nth-child(1) { background: rgba(255,95,87,0.8); }
.alive-device-browser-dot:nth-child(2) { background: rgba(254,188,46,0.8); }
.alive-device-browser-dot:nth-child(3) { background: rgba(40,200,64,0.8); }
.alive-device-browser-url {
  flex: 1;
  height: 20px;
  background: rgba(255,255,255,0.07);
  border-radius: 5px;
  margin: 0 10px;
}
.alive-device-browser-screen {
  overflow: hidden;
}
/* Phone */
.alive-device-phone {
  border-radius: 36px;
  border: 1.5px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03);
  padding: 44px 10px 28px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
}
.alive-device-phone::before {
  content: '';
  position: absolute;
  top: 14px; left: 50%; transform: translateX(-50%);
  width: 64px; height: 20px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
}
.alive-device-phone::after {
  content: '';
  position: absolute;
  bottom: 10px; left: 50%; transform: translateX(-50%);
  width: 80px; height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.25);
}
.alive-device-phone-screen {
  border-radius: 24px;
  overflow: hidden;
}
/* Tablet */
.alive-device-tablet {
  border-radius: 20px;
  border: 1.5px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03);
  padding: 32px 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.4);
}
.alive-device-tablet::after {
  content: '';
  position: absolute;
  right: 6px; top: 50%; transform: translateY(-50%);
  width: 3px; height: 36px;
  border-radius: 2px;
  background: rgba(255,255,255,0.15);
}
/* Laptop */
.alive-device-laptop {
  position: relative;
}
.alive-device-laptop-screen {
  border-radius: 12px 12px 0 0;
  border: 1.5px solid rgba(255,255,255,0.12);
  border-bottom: none;
  background: rgba(255,255,255,0.03);
  padding: 6px;
  overflow: hidden;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.3);
}
.alive-device-laptop-base {
  height: 16px;
  background: rgba(255,255,255,0.06);
  border-radius: 0 0 4px 4px;
  border: 1px solid rgba(255,255,255,0.08);
  border-top: none;
  position: relative;
}
.alive-device-laptop-base::after {
  content: '';
  position: absolute;
  top: 4px; left: 50%; transform: translateX(-50%);
  width: 40px; height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.12);
}

/* \u2500\u2500 Cursor & Interactions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
@keyframes alive-click-ripple {
  0%   { transform: scale(0); opacity: 0.8; }
  100% { transform: scale(3); opacity: 0; }
}
@keyframes alive-cursor-appear {
  from { transform: scale(0.5) translateY(-8px); opacity: 0; }
  to   { transform: scale(1) translateY(0); opacity: 1; }
}
.alive-cursor {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 0 1.5px rgba(0,0,0,0.3);
  animation: alive-cursor-appear 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-cursor-ring {
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.6);
  position: absolute;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-10px, -10px);
  transition: transform 0.1s ease;
}
.alive-click-ripple {
  width: 24px; height: 24px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  position: absolute;
  pointer-events: none;
  animation: alive-click-ripple 0.6s ease-out forwards;
}
/* Hover highlight glow */
@keyframes alive-hover-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
  50%      { box-shadow: 0 0 0 8px rgba(99,102,241,0); }
}
.alive-hover-glow {
  animation: alive-hover-pulse 2s ease-in-out infinite;
}
/* Text cursor (caret) */
@keyframes alive-caret-blink {
  0%, 100% { border-right-color: currentColor; }
  50%       { border-right-color: transparent; }
}
.alive-text-cursor {
  border-right: 2px solid currentColor;
  animation: alive-caret-blink 1s step-end infinite;
}
/* Scroll indicator */
@keyframes alive-scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50%       { transform: translateY(6px); opacity: 0.4; }
}
.alive-scroll-indicator {
  animation: alive-scroll-bounce 1.5s ease-in-out infinite;
}

/* \u2500\u2500 Lower Thirds \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-lower-third-in {
  from { transform: translateX(-40px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
@keyframes alive-lower-third-bar {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.alive-lower-third {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 16px 10px 14px;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(12px);
  border-left: 3px solid #6366f1;
  border-radius: 0 8px 8px 0;
  animation: alive-lower-third-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-lower-third-name {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
}
.alive-lower-third-title {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
  font-weight: 500;
  animation: alive-lower-third-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) 80ms both;
}
/* variants */
.alive-lower-third-indigo { border-left-color: #6366f1; }
.alive-lower-third-sky    { border-left-color: #0ea5e9; }
.alive-lower-third-emerald{ border-left-color: #10b981; }
.alive-lower-third-rose   { border-left-color: #f43f5e; }
.alive-lower-third-amber  { border-left-color: #f59e0b; }
/* light variant */
.alive-lower-third-light {
  background: rgba(255,255,255,0.92);
}
.alive-lower-third-light .alive-lower-third-name  { color: #111; }
.alive-lower-third-light .alive-lower-third-title { color: rgba(0,0,0,0.5); }
/* News ticker */
@keyframes alive-ticker-scroll {
  from { transform: translateX(100%); }
  to   { transform: translateX(-100%); }
}
.alive-ticker {
  overflow: hidden;
  white-space: nowrap;
  background: rgba(99,102,241,0.9);
  padding: 8px 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.01em;
}
.alive-ticker-track {
  display: inline-block;
  animation: alive-ticker-scroll 18s linear infinite;
  padding-right: 4rem;
}
.alive-ticker-sep {
  display: inline-block;
  margin: 0 1.5rem;
  opacity: 0.5;
}
/* Chapter / scene title card */
@keyframes alive-title-card-in {
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
.alive-title-card {
  text-align: center;
  animation: alive-title-card-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-title-card-eyebrow {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #818cf8;
  margin-bottom: 6px;
  animation: alive-title-card-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) 80ms both;
}
.alive-title-card-heading {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1.1;
  animation: alive-title-card-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) 140ms both;
}

/* \u2500\u2500 Callouts & Annotations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes alive-callout-in {
  from { transform: scale(0.8) translateY(8px); opacity: 0; }
  to   { transform: scale(1) translateY(0); opacity: 1; }
}
@keyframes alive-highlight-draw {
  from { clip-path: inset(0 100% 0 0 round 6px); }
  to   { clip-path: inset(0 0% 0 0 round 6px); }
}
@keyframes alive-line-draw-in {
  from { stroke-dashoffset: 100; }
  to   { stroke-dashoffset: 0; }
}
/* Callout bubble */
.alive-callout {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.35);
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #a5b4fc;
  animation: alive-callout-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-callout-arrow {
  display: inline-block;
  animation: alive-callout-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) 60ms both;
}
/* Highlight box around an element */
.alive-highlight-box {
  position: absolute;
  border: 2px solid #6366f1;
  border-radius: 8px;
  pointer-events: none;
  animation: alive-callout-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
  box-shadow: 0 0 0 4px rgba(99,102,241,0.15);
}
/* Underline highlight (text marker) */
.alive-underline-highlight {
  position: relative;
  display: inline-block;
}
.alive-underline-highlight::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
  transform-origin: left;
  animation: alive-lower-third-bar 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}
/* Step marker */
@keyframes alive-step-in {
  from { transform: scale(0) rotate(-90deg); opacity: 0; }
  to   { transform: scale(1) rotate(0deg); opacity: 1; }
}
.alive-step-marker {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: #6366f1;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.8125rem; color: #fff;
  flex-shrink: 0;
  animation: alive-step-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.alive-step-marker-outline {
  background: transparent;
  border: 2px solid #6366f1;
  color: #818cf8;
}
/* Zoom lens */
.alive-zoom-lens {
  border-radius: 50%;
  border: 2px solid rgba(99,102,241,0.5);
  box-shadow: 0 0 0 4px rgba(99,102,241,0.1), 0 8px 32px rgba(0,0,0,0.3);
  overflow: hidden;
  animation: alive-callout-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* SVG annotation line */
.alive-annotation-line {
  stroke-dasharray: 100;
  animation: alive-line-draw-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* \u2500\u2500 Kinetic Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Slam \u2014 drops from above, impacts with squash */
@keyframes alive-kinetic-slam {
  0%   { transform: translateY(-60px) scaleY(1.3); opacity: 0; }
  55%  { transform: translateY(6px) scaleY(0.88); opacity: 1; }
  75%  { transform: translateY(-3px) scaleY(1.04); }
  100% { transform: translateY(0) scaleY(1); }
}
.alive-kinetic-slam {
  display: inline-block;
  animation: alive-kinetic-slam 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* Pop \u2014 scale in with overshoot */
@keyframes alive-kinetic-pop {
  0%   { transform: scale(0); opacity: 0; }
  55%  { transform: scale(1.15); opacity: 1; }
  75%  { transform: scale(0.92); }
  100% { transform: scale(1); }
}
.alive-kinetic-pop {
  display: inline-block;
  animation: alive-kinetic-pop 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* Roll \u2014 comes from below with perspective */
@keyframes alive-kinetic-roll {
  from { transform: translateY(80%) rotateX(60deg); opacity: 0; }
  to   { transform: translateY(0) rotateX(0deg); opacity: 1; }
}
.alive-kinetic-roll {
  display: inline-block;
  transform-style: preserve-3d;
  animation: alive-kinetic-roll 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* Stretch \u2014 squishes then stretches to final size */
@keyframes alive-kinetic-stretch {
  0%   { transform: scaleX(0.1) scaleY(1.5); opacity: 0; }
  40%  { transform: scaleX(1.1) scaleY(0.9); opacity: 1; }
  70%  { transform: scaleX(0.96) scaleY(1.04); }
  100% { transform: scaleX(1) scaleY(1); }
}
.alive-kinetic-stretch {
  display: inline-block;
  animation: alive-kinetic-stretch 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* Neon flicker */
@keyframes alive-kinetic-neon {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 6px rgba(99,102,241,0.9),
      0 0 16px rgba(99,102,241,0.7),
      0 0 32px rgba(99,102,241,0.5),
      0 0 64px rgba(99,102,241,0.3);
  }
  20%, 24%, 55% { text-shadow: none; }
}
.alive-kinetic-neon {
  animation: alive-kinetic-neon 2.5s ease-in-out infinite;
  color: #a5b4fc;
}
/* Wave \u2014 each character waves */
@keyframes alive-kinetic-wave-char {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
.alive-kinetic-wave > span {
  display: inline-block;
  animation: alive-kinetic-wave-char 1s ease-in-out infinite;
}
.alive-kinetic-wave > span:nth-child(1)  { animation-delay: 0ms; }
.alive-kinetic-wave > span:nth-child(2)  { animation-delay: 80ms; }
.alive-kinetic-wave > span:nth-child(3)  { animation-delay: 160ms; }
.alive-kinetic-wave > span:nth-child(4)  { animation-delay: 240ms; }
.alive-kinetic-wave > span:nth-child(5)  { animation-delay: 320ms; }
.alive-kinetic-wave > span:nth-child(6)  { animation-delay: 400ms; }
.alive-kinetic-wave > span:nth-child(7)  { animation-delay: 480ms; }
.alive-kinetic-wave > span:nth-child(8)  { animation-delay: 560ms; }
.alive-kinetic-wave > span:nth-child(9)  { animation-delay: 640ms; }
.alive-kinetic-wave > span:nth-child(10) { animation-delay: 720ms; }
/* Scramble placeholder \u2014 apply class, JS runtime handles character cycling */
.alive-kinetic-scramble {
  font-family: ui-monospace, monospace;
  letter-spacing: 0.02em;
}
/* Gradient text animation */
@keyframes alive-text-gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.alive-kinetic-gradient {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #0ea5e9, #6366f1);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: alive-text-gradient-shift 4s ease infinite;
}

/* \u2500\u2500 Scene Backgrounds \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Aurora */
@keyframes alive-aurora-drift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.alive-aurora {
  background: linear-gradient(135deg,
    rgba(99,102,241,0.5) 0%,
    rgba(14,165,233,0.4) 20%,
    rgba(139,92,246,0.5) 40%,
    rgba(16,185,129,0.35) 60%,
    rgba(99,102,241,0.5) 80%,
    rgba(14,165,233,0.4) 100%
  );
  background-size: 400% 400%;
  animation: alive-aurora-drift 10s ease infinite;
}
.alive-aurora-dark {
  background: linear-gradient(135deg,
    rgba(49,46,129,0.8) 0%,
    rgba(7,89,133,0.7) 25%,
    rgba(76,29,149,0.8) 50%,
    rgba(6,78,59,0.6) 75%,
    rgba(49,46,129,0.8) 100%
  );
  background-size: 400% 400%;
  animation: alive-aurora-drift 12s ease infinite;
}
/* Bokeh \u2014 blurred orbs */
@keyframes alive-bokeh-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(20px, -15px) scale(1.1); }
  66%       { transform: translate(-15px, 10px) scale(0.9); }
}
.alive-bokeh {
  position: relative;
  overflow: hidden;
}
.alive-bokeh::before,
.alive-bokeh::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: alive-bokeh-drift 8s ease-in-out infinite;
}
.alive-bokeh::before {
  width: 200px; height: 200px;
  background: rgba(99,102,241,0.35);
  top: -50px; left: -50px;
}
.alive-bokeh::after {
  width: 160px; height: 160px;
  background: rgba(139,92,246,0.3);
  bottom: -40px; right: -40px;
  animation-delay: -4s;
  animation-direction: reverse;
}
/* Light rays / crepuscular */
@keyframes alive-rays-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.alive-rays {
  background: conic-gradient(
    rgba(99,102,241,0.12) 0deg,   transparent 25deg,
    rgba(99,102,241,0.08) 50deg,  transparent 75deg,
    rgba(99,102,241,0.12) 100deg, transparent 125deg,
    rgba(99,102,241,0.08) 150deg, transparent 175deg,
    rgba(99,102,241,0.12) 200deg, transparent 225deg,
    rgba(99,102,241,0.08) 250deg, transparent 275deg,
    rgba(99,102,241,0.12) 300deg, transparent 325deg,
    rgba(99,102,241,0.08) 350deg, transparent 360deg
  );
  animation: alive-rays-spin 24s linear infinite;
}
/* Starfield \u2014 dot pattern with twinkle */
@keyframes alive-star-twinkle {
  0%, 100% { opacity: 0.8; }
  50%       { opacity: 0.2; }
}
.alive-starfield {
  position: relative;
  overflow: hidden;
}
.alive-starfield::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1px 1px at 55% 70%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 35% 45%, rgba(255,255,255,0.9) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 60% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 5% 40%,  rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 95% 35%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 48% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 72% 65%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 20% 5%,  rgba(255,255,255,0.8) 0%, transparent 100%);
  animation: alive-star-twinkle 4s ease-in-out infinite;
}
.alive-starfield::after {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(1px 1px at 8% 55%,  rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 30% 75%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 45% 20%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 65% 40%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 85% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
    radial-gradient(1px 1px at 92% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 18% 95%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1px 1px at 75% 88%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 3%  25%, rgba(255,255,255,0.5) 0%, transparent 100%);
  animation: alive-star-twinkle 6s ease-in-out infinite reverse;
  animation-delay: -2s;
}
/* Noise overlay */
.alive-film-grain {
  position: relative;
}
.alive-film-grain::after {
  content: '';
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.35;
}

/* \u2500\u2500 Particles & FX \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Energy ring pulse */
@keyframes alive-ring-expand {
  0%   { transform: scale(0.6); opacity: 0.9; }
  100% { transform: scale(2.2); opacity: 0; }
}
.alive-energy-ring {
  border-radius: 50%;
  border: 2px solid rgba(99,102,241,0.7);
  position: relative;
  animation: alive-ring-expand 2s ease-out infinite;
}
.alive-energy-ring::before,
.alive-energy-ring::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(99,102,241,0.5);
  animation: alive-ring-expand 2s ease-out infinite;
}
.alive-energy-ring::before { animation-delay: 0.65s; border-color: rgba(139,92,246,0.5); }
.alive-energy-ring::after  { animation-delay: 1.3s;  border-color: rgba(99,102,241,0.3); }
/* Glow burst */
@keyframes alive-glow-burst {
  0%   { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
.alive-glow-burst {
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(99,102,241,0.3) 40%, transparent 70%);
  animation: alive-glow-burst 1.5s ease-out infinite;
}
/* Floating orb */
@keyframes alive-orb-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(12px, -16px) scale(1.08); }
  66%       { transform: translate(-8px, 8px) scale(0.94); }
}
.alive-orb {
  border-radius: 50%;
  filter: blur(var(--alive-orb-blur, 20px));
  animation: alive-orb-drift 6s ease-in-out infinite;
}
.alive-orb-indigo  { background: rgba(99,102,241,0.6);  --alive-orb-blur: 24px; }
.alive-orb-violet  { background: rgba(139,92,246,0.6);  --alive-orb-blur: 28px; animation-delay: -2s; }
.alive-orb-sky     { background: rgba(14,165,233,0.5);  --alive-orb-blur: 20px; animation-delay: -4s; }
.alive-orb-emerald { background: rgba(16,185,129,0.5);  --alive-orb-blur: 22px; animation-delay: -1s; }
.alive-orb-rose    { background: rgba(244,63,94,0.5);   --alive-orb-blur: 26px; animation-delay: -3s; }
/* Sparkle star */
@keyframes alive-sparkle-burst {
  0%   { transform: scale(0) rotate(0deg); opacity: 0; }
  40%  { transform: scale(1.2) rotate(120deg); opacity: 1; }
  80%  { transform: scale(0.8) rotate(240deg); opacity: 0.6; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
}
.alive-sparkle {
  display: inline-block;
  color: #fbbf24;
  animation: alive-sparkle-burst 1.8s ease-in-out infinite;
}
.alive-sparkle:nth-child(2) { animation-delay: 0.3s; color: #818cf8; }
.alive-sparkle:nth-child(3) { animation-delay: 0.6s; color: #34d399; }
.alive-sparkle:nth-child(4) { animation-delay: 0.9s; color: #f472b6; }
.alive-sparkle:nth-child(5) { animation-delay: 1.2s; color: #60a5fa; }
/* Confetti pieces */
@keyframes alive-confetti-fall {
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120px) rotate(720deg); opacity: 0; }
}
.alive-confetti-piece {
  position: absolute;
  width: 8px; height: 8px;
  border-radius: 2px;
  animation: alive-confetti-fall 2s ease-in infinite;
}
.alive-confetti-piece:nth-child(1)  { left: 10%; background: #6366f1; animation-delay: 0s;    animation-duration: 2.1s; }
.alive-confetti-piece:nth-child(2)  { left: 20%; background: #f43f5e; animation-delay: 0.2s;  animation-duration: 1.8s; width: 6px; height: 10px; }
.alive-confetti-piece:nth-child(3)  { left: 30%; background: #fbbf24; animation-delay: 0.4s;  animation-duration: 2.3s; border-radius: 50%; }
.alive-confetti-piece:nth-child(4)  { left: 42%; background: #10b981; animation-delay: 0.1s;  animation-duration: 1.9s; width: 10px; height: 6px; }
.alive-confetti-piece:nth-child(5)  { left: 53%; background: #8b5cf6; animation-delay: 0.5s;  animation-duration: 2.2s; }
.alive-confetti-piece:nth-child(6)  { left: 63%; background: #0ea5e9; animation-delay: 0.3s;  animation-duration: 1.7s; border-radius: 50%; }
.alive-confetti-piece:nth-child(7)  { left: 72%; background: #f97316; animation-delay: 0.6s;  animation-duration: 2.4s; width: 6px; height: 10px; }
.alive-confetti-piece:nth-child(8)  { left: 83%; background: #ec4899; animation-delay: 0.15s; animation-duration: 2.0s; }
.alive-confetti-piece:nth-child(9)  { left: 91%; background: #6366f1; animation-delay: 0.45s; animation-duration: 1.85s; border-radius: 50%; }
.alive-confetti-piece:nth-child(10) { left: 5%;  background: #34d399; animation-delay: 0.7s;  animation-duration: 2.15s; width: 10px; height: 6px; }
.alive-confetti { position: relative; overflow: hidden; }
/* Meteor / shooting star */
@keyframes alive-meteor {
  0%   { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
  70%  { opacity: 1; }
  100% { transform: translateX(200px) translateY(200px) rotate(-45deg); opacity: 0; }
}
.alive-meteor {
  position: absolute;
  width: 60px; height: 1.5px;
  background: linear-gradient(90deg, rgba(255,255,255,0.9), transparent);
  border-radius: 1px;
  animation: alive-meteor 2s ease-in infinite;
}
.alive-meteor:nth-child(1) { top: 10%; left: 5%;  animation-delay: 0s;   animation-duration: 2.2s; }
.alive-meteor:nth-child(2) { top: 25%; left: 30%; animation-delay: 0.8s; animation-duration: 1.8s; width: 40px; }
.alive-meteor:nth-child(3) { top: 5%;  left: 60%; animation-delay: 1.5s; animation-duration: 2.5s; }
.alive-meteor:nth-child(4) { top: 40%; left: 75%; animation-delay: 0.4s; animation-duration: 1.6s; width: 80px; }
`;
}
var init_base = __esm({
  "src/generator/base.ts"() {
    "use strict";
  }
});

// src/generator/utils.ts
function escapeSelector(cls) {
  let result = cls.replace(/\./g, "\\.").replace(/:/g, "\\:").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\//g, "\\/").replace(/#/g, "\\#").replace(/%/g, "\\%");
  if (result.startsWith("-")) {
    result = "\\" + result;
  }
  return result;
}
function resolveColor(colors, name, shade) {
  if (!Object.prototype.hasOwnProperty.call(colors, name)) return null;
  const entry = colors[name];
  if (typeof entry === "string") return entry;
  if (!shade) return null;
  if (!Object.prototype.hasOwnProperty.call(entry, shade)) return null;
  return entry[shade] ?? null;
}
function applyOpacity(value, opacity) {
  const alpha = +(opacity / 100).toFixed(3);
  const hexMatch = value.match(/^#([0-9a-fA-F]{3,6})$/);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `color-mix(in srgb, ${value} ${opacity}%, transparent)`;
}
function parseVariants(cls) {
  const variants = [];
  let depth = 0;
  let current = "";
  for (const ch of cls) {
    if (ch === "[") depth++;
    else if (ch === "]") depth--;
    else if (ch === ":" && depth === 0) {
      variants.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  return { variants, base: current };
}
var init_utils = __esm({
  "src/generator/utils.ts"() {
    "use strict";
  }
});

// src/generator/colors.ts
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
      return `.${escapeSelector(cls)} {
  background-color: ${value};${transitioned("background-color")}
}`;
    }
  }
  const textColorMatch = cls.match(/^text-([a-z]+)(?:-(\d+))?$/);
  if (textColorMatch) {
    const value = resolveColor(colors, textColorMatch[1], textColorMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  color: ${value};${transitioned("color")}
}`;
    }
  }
  const borderColorMatch = cls.match(/^border-([a-z]+)(?:-(\d+))?$/);
  if (borderColorMatch) {
    const value = resolveColor(colors, borderColorMatch[1], borderColorMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  border-color: ${value};${transitioned("border-color")}
}`;
    }
  }
  const ringColorMatch = cls.match(/^ring-([a-z]+)(?:-(\d+))?$/);
  if (ringColorMatch) {
    const value = resolveColor(colors, ringColorMatch[1], ringColorMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  --alive-ring-color: ${value};
}`;
    }
  }
  const outlineColorMatch = cls.match(/^outline-([a-z]+)(?:-(\d+))?$/);
  if (outlineColorMatch) {
    const value = resolveColor(colors, outlineColorMatch[1], outlineColorMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  outline-color: ${value};
}`;
    }
  }
  const fillMatch = cls.match(/^fill-([a-z]+)(?:-(\d+))?$/);
  if (fillMatch) {
    const value = resolveColor(colors, fillMatch[1], fillMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  fill: ${value};
}`;
    }
  }
  const strokeMatch = cls.match(/^stroke-([a-z]+)(?:-(\d+))?$/);
  if (strokeMatch) {
    const value = resolveColor(colors, strokeMatch[1], strokeMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  stroke: ${value};
}`;
    }
  }
  const decorationMatch = cls.match(/^decoration-([a-z]+)(?:-(\d+))?$/);
  if (decorationMatch) {
    const value = resolveColor(colors, decorationMatch[1], decorationMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  text-decoration-color: ${value};
}`;
    }
  }
  const caretMatch = cls.match(/^caret-([a-z]+)(?:-(\d+))?$/);
  if (caretMatch) {
    const value = resolveColor(colors, caretMatch[1], caretMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  caret-color: ${value};
}`;
    }
  }
  const accentMatch = cls.match(/^accent-([a-z]+)(?:-(\d+))?$/);
  if (accentMatch) {
    const value = resolveColor(colors, accentMatch[1], accentMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  accent-color: ${value};
}`;
    }
  }
  const shadowColorMatch = cls.match(/^shadow-([a-z]+)-(\d+)$/);
  if (shadowColorMatch) {
    const value = resolveColor(colors, shadowColorMatch[1], shadowColorMatch[2]);
    if (value) {
      return `.${escapeSelector(cls)} {
  --alive-shadow-color: ${value};
}`;
    }
  }
  const arbBgMatch = cls.match(/^bg-\[(.+)\](?:\/(\d+))?$/);
  if (arbBgMatch) {
    const [, val, opStr] = arbBgMatch;
    const escaped = escapeSelector(cls);
    if (val.startsWith("url(") || val.startsWith("linear-gradient") || val.startsWith("radial-gradient")) {
      return `.${escaped} {
  background-image: ${val};${transitioned("background-image")}
}`;
    }
    const colorVal = opStr ? applyOpacity(val, parseInt(opStr)) : val;
    return `.${escaped} {
  background-color: ${colorVal};${transitioned("background-color")}
}`;
  }
  const arbTextMatch = cls.match(/^text-\[(.+)\](?:\/(\d+))?$/);
  if (arbTextMatch) {
    const [, val, opStr] = arbTextMatch;
    const isSizeValue = val.endsWith("px") || val.endsWith("em") || val.endsWith("rem") || val.endsWith("%") || val.endsWith("vw") || val.endsWith("vh") || val.endsWith("ch") || val.endsWith("ex") || val.endsWith("dvh") || /^[\d.]/.test(val) || /^(calc|clamp|min|max)\(/.test(val);
    if (isSizeValue) {
      return `.${escapeSelector(cls)} {
  font-size: ${val};
}`;
    }
    const colorVal = opStr ? applyOpacity(val, parseInt(opStr)) : val;
    return `.${escapeSelector(cls)} {
  color: ${colorVal};${transitioned("color")}
}`;
  }
  const arbBorderColorMatch = cls.match(/^border-\[(.+)\](?:\/(\d+))?$/);
  if (arbBorderColorMatch) {
    const [, val, opStr] = arbBorderColorMatch;
    const looksLikeColor = val.startsWith("#") || val.startsWith("rgb") || val.startsWith("hsl") || val.startsWith("oklch") || val.startsWith("var(") || val === "transparent" || val === "currentColor";
    if (looksLikeColor) {
      const colorVal = opStr ? applyOpacity(val, parseInt(opStr)) : val;
      return `.${escapeSelector(cls)} {
  border-color: ${colorVal};${transitioned("border-color")}
}`;
    }
  }
  const arbRingColorMatch = cls.match(/^ring-\[(.+)\](?:\/(\d+))?$/);
  if (arbRingColorMatch) {
    const [, val, opStr] = arbRingColorMatch;
    const colorVal = opStr ? applyOpacity(val, parseInt(opStr)) : val;
    return `.${escapeSelector(cls)} {
  --alive-ring-color: ${colorVal};
}`;
  }
  const arbFillMatch = cls.match(/^fill-\[(.+)\](?:\/(\d+))?$/);
  if (arbFillMatch) {
    const [, val, opStr] = arbFillMatch;
    const colorVal = opStr ? applyOpacity(val, parseInt(opStr)) : val;
    return `.${escapeSelector(cls)} {
  fill: ${colorVal};
}`;
  }
  const arbStrokeMatch = cls.match(/^stroke-\[(.+)\](?:\/(\d+))?$/);
  if (arbStrokeMatch) {
    const [, val, opStr] = arbStrokeMatch;
    const colorVal = opStr ? applyOpacity(val, parseInt(opStr)) : val;
    return `.${escapeSelector(cls)} {
  stroke: ${colorVal};
}`;
  }
  return null;
}
var TRANSITIONED;
var init_colors2 = __esm({
  "src/generator/colors.ts"() {
    "use strict";
    init_utils();
    TRANSITIONED = `
  transition-property: {prop};
  transition-duration: var(--alive-duration, 0ms);
  transition-timing-function: var(--alive-ease, linear);`;
  }
});

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
function has(obj, key) {
  return typeof obj[key] === "string";
}
function matchSpacing(cls, spacing) {
  const pMatch = cls.match(/^p-(.+)$/);
  if (pMatch && has(spacing, pMatch[1])) {
    return `.${escapeSelector(cls)} { padding: ${spacing[pMatch[1]]}; }`;
  }
  const pxMatch = cls.match(/^px-(.+)$/);
  if (pxMatch && has(spacing, pxMatch[1])) {
    return `.${escapeSelector(cls)} { padding-left: ${spacing[pxMatch[1]]}; padding-right: ${spacing[pxMatch[1]]}; }`;
  }
  const pyMatch = cls.match(/^py-(.+)$/);
  if (pyMatch && has(spacing, pyMatch[1])) {
    return `.${escapeSelector(cls)} { padding-top: ${spacing[pyMatch[1]]}; padding-bottom: ${spacing[pyMatch[1]]}; }`;
  }
  const ptMatch = cls.match(/^pt-(.+)$/);
  if (ptMatch && has(spacing, ptMatch[1])) {
    return `.${escapeSelector(cls)} { padding-top: ${spacing[ptMatch[1]]}; }`;
  }
  const prMatch = cls.match(/^pr-(.+)$/);
  if (prMatch && has(spacing, prMatch[1])) {
    return `.${escapeSelector(cls)} { padding-right: ${spacing[prMatch[1]]}; }`;
  }
  const pbMatch = cls.match(/^pb-(.+)$/);
  if (pbMatch && has(spacing, pbMatch[1])) {
    return `.${escapeSelector(cls)} { padding-bottom: ${spacing[pbMatch[1]]}; }`;
  }
  const plMatch = cls.match(/^pl-(.+)$/);
  if (plMatch && has(spacing, plMatch[1])) {
    return `.${escapeSelector(cls)} { padding-left: ${spacing[plMatch[1]]}; }`;
  }
  const mMatch = cls.match(/^m-(.+)$/);
  if (mMatch) {
    if (mMatch[1] === "auto") return `.${escapeSelector(cls)} { margin: auto; }`;
    if (has(spacing, mMatch[1])) return `.${escapeSelector(cls)} { margin: ${spacing[mMatch[1]]}; }`;
  }
  const mxMatch = cls.match(/^mx-(.+)$/);
  if (mxMatch) {
    if (mxMatch[1] === "auto") return `.${escapeSelector(cls)} { margin-left: auto; margin-right: auto; }`;
    if (has(spacing, mxMatch[1])) return `.${escapeSelector(cls)} { margin-left: ${spacing[mxMatch[1]]}; margin-right: ${spacing[mxMatch[1]]}; }`;
  }
  const myMatch = cls.match(/^my-(.+)$/);
  if (myMatch) {
    if (myMatch[1] === "auto") return `.${escapeSelector(cls)} { margin-top: auto; margin-bottom: auto; }`;
    if (has(spacing, myMatch[1])) return `.${escapeSelector(cls)} { margin-top: ${spacing[myMatch[1]]}; margin-bottom: ${spacing[myMatch[1]]}; }`;
  }
  const mtMatch = cls.match(/^mt-(.+)$/);
  if (mtMatch) {
    if (mtMatch[1] === "auto") return `.${escapeSelector(cls)} { margin-top: auto; }`;
    if (has(spacing, mtMatch[1])) return `.${escapeSelector(cls)} { margin-top: ${spacing[mtMatch[1]]}; }`;
  }
  const mrMatch = cls.match(/^mr-(.+)$/);
  if (mrMatch) {
    if (mrMatch[1] === "auto") return `.${escapeSelector(cls)} { margin-right: auto; }`;
    if (has(spacing, mrMatch[1])) return `.${escapeSelector(cls)} { margin-right: ${spacing[mrMatch[1]]}; }`;
  }
  const mbMatch = cls.match(/^mb-(.+)$/);
  if (mbMatch) {
    if (mbMatch[1] === "auto") return `.${escapeSelector(cls)} { margin-bottom: auto; }`;
    if (has(spacing, mbMatch[1])) return `.${escapeSelector(cls)} { margin-bottom: ${spacing[mbMatch[1]]}; }`;
  }
  const mlMatch = cls.match(/^ml-(.+)$/);
  if (mlMatch) {
    if (mlMatch[1] === "auto") return `.${escapeSelector(cls)} { margin-left: auto; }`;
    if (has(spacing, mlMatch[1])) return `.${escapeSelector(cls)} { margin-left: ${spacing[mlMatch[1]]}; }`;
  }
  const gapMatch = cls.match(/^gap-(.+)$/);
  if (gapMatch && has(spacing, gapMatch[1])) {
    return `.${escapeSelector(cls)} { gap: ${spacing[gapMatch[1]]}; }`;
  }
  const gapXMatch = cls.match(/^gap-x-(.+)$/);
  if (gapXMatch && has(spacing, gapXMatch[1])) {
    return `.${escapeSelector(cls)} { column-gap: ${spacing[gapXMatch[1]]}; }`;
  }
  const gapYMatch = cls.match(/^gap-y-(.+)$/);
  if (gapYMatch && has(spacing, gapYMatch[1])) {
    return `.${escapeSelector(cls)} { row-gap: ${spacing[gapYMatch[1]]}; }`;
  }
  const spaceXMatch = cls.match(/^space-x-(.+)$/);
  if (spaceXMatch && has(spacing, spaceXMatch[1])) {
    return `.${escapeSelector(cls)}> * + * { margin-left: ${spacing[spaceXMatch[1]]}; }`;
  }
  const spaceYMatch = cls.match(/^space-y-(.+)$/);
  if (spaceYMatch && has(spacing, spaceYMatch[1])) {
    return `.${escapeSelector(cls)}> * + * { margin-top: ${spacing[spaceYMatch[1]]}; }`;
  }
  const insetMatch = cls.match(/^inset-(.+)$/);
  if (insetMatch) {
    if (insetMatch[1] === "auto") return `.${escapeSelector(cls)} { inset: auto; }`;
    if (insetMatch[1] === "0") return `.${escapeSelector(cls)} { inset: 0px; }`;
    if (has(spacing, insetMatch[1])) return `.${escapeSelector(cls)} { inset: ${spacing[insetMatch[1]]}; }`;
  }
  const insetXMatch = cls.match(/^inset-x-(.+)$/);
  if (insetXMatch) {
    const val = insetXMatch[1] === "auto" ? "auto" : insetXMatch[1] === "0" ? "0px" : has(spacing, insetXMatch[1]) ? spacing[insetXMatch[1]] : void 0;
    if (val) return `.${escapeSelector(cls)} { left: ${val}; right: ${val}; }`;
  }
  const insetYMatch = cls.match(/^inset-y-(.+)$/);
  if (insetYMatch) {
    const val = insetYMatch[1] === "auto" ? "auto" : insetYMatch[1] === "0" ? "0px" : has(spacing, insetYMatch[1]) ? spacing[insetYMatch[1]] : void 0;
    if (val) return `.${escapeSelector(cls)} { top: ${val}; bottom: ${val}; }`;
  }
  const topMatch = cls.match(/^top-(.+)$/);
  if (topMatch) {
    if (topMatch[1] === "auto") return `.${escapeSelector(cls)} { top: auto; }`;
    if (topMatch[1] === "0") return `.${escapeSelector(cls)} { top: 0px; }`;
    if (has(spacing, topMatch[1])) return `.${escapeSelector(cls)} { top: ${spacing[topMatch[1]]}; }`;
  }
  const rightMatch = cls.match(/^right-(.+)$/);
  if (rightMatch) {
    if (rightMatch[1] === "auto") return `.${escapeSelector(cls)} { right: auto; }`;
    if (rightMatch[1] === "0") return `.${escapeSelector(cls)} { right: 0px; }`;
    if (has(spacing, rightMatch[1])) return `.${escapeSelector(cls)} { right: ${spacing[rightMatch[1]]}; }`;
  }
  const bottomMatch = cls.match(/^bottom-(.+)$/);
  if (bottomMatch) {
    if (bottomMatch[1] === "auto") return `.${escapeSelector(cls)} { bottom: auto; }`;
    if (bottomMatch[1] === "0") return `.${escapeSelector(cls)} { bottom: 0px; }`;
    if (has(spacing, bottomMatch[1])) return `.${escapeSelector(cls)} { bottom: ${spacing[bottomMatch[1]]}; }`;
  }
  const leftMatch = cls.match(/^left-(.+)$/);
  if (leftMatch) {
    if (leftMatch[1] === "auto") return `.${escapeSelector(cls)} { left: auto; }`;
    if (leftMatch[1] === "0") return `.${escapeSelector(cls)} { left: 0px; }`;
    if (has(spacing, leftMatch[1])) return `.${escapeSelector(cls)} { left: ${spacing[leftMatch[1]]}; }`;
  }
  const negMMatch = cls.match(/^-m-(.+)$/);
  if (negMMatch && has(spacing, negMMatch[1])) {
    return `.${escapeSelector(cls)} { margin: -${spacing[negMMatch[1]]}; }`;
  }
  const negMxMatch = cls.match(/^-mx-(.+)$/);
  if (negMxMatch && has(spacing, negMxMatch[1])) {
    return `.${escapeSelector(cls)} { margin-left: -${spacing[negMxMatch[1]]}; margin-right: -${spacing[negMxMatch[1]]}; }`;
  }
  const negMyMatch = cls.match(/^-my-(.+)$/);
  if (negMyMatch && has(spacing, negMyMatch[1])) {
    return `.${escapeSelector(cls)} { margin-top: -${spacing[negMyMatch[1]]}; margin-bottom: -${spacing[negMyMatch[1]]}; }`;
  }
  const negMtMatch = cls.match(/^-mt-(.+)$/);
  if (negMtMatch && has(spacing, negMtMatch[1])) {
    return `.${escapeSelector(cls)} { margin-top: -${spacing[negMtMatch[1]]}; }`;
  }
  const negMrMatch = cls.match(/^-mr-(.+)$/);
  if (negMrMatch && has(spacing, negMrMatch[1])) {
    return `.${escapeSelector(cls)} { margin-right: -${spacing[negMrMatch[1]]}; }`;
  }
  const negMbMatch = cls.match(/^-mb-(.+)$/);
  if (negMbMatch && has(spacing, negMbMatch[1])) {
    return `.${escapeSelector(cls)} { margin-bottom: -${spacing[negMbMatch[1]]}; }`;
  }
  const negMlMatch = cls.match(/^-ml-(.+)$/);
  if (negMlMatch && has(spacing, negMlMatch[1])) {
    return `.${escapeSelector(cls)} { margin-left: -${spacing[negMlMatch[1]]}; }`;
  }
  const negInsetMatch = cls.match(/^-inset-(.+)$/);
  if (negInsetMatch && has(spacing, negInsetMatch[1])) {
    return `.${escapeSelector(cls)} { inset: -${spacing[negInsetMatch[1]]}; }`;
  }
  const negInsetXMatch = cls.match(/^-inset-x-(.+)$/);
  if (negInsetXMatch && has(spacing, negInsetXMatch[1])) {
    return `.${escapeSelector(cls)} { left: -${spacing[negInsetXMatch[1]]}; right: -${spacing[negInsetXMatch[1]]}; }`;
  }
  const negInsetYMatch = cls.match(/^-inset-y-(.+)$/);
  if (negInsetYMatch && has(spacing, negInsetYMatch[1])) {
    return `.${escapeSelector(cls)} { top: -${spacing[negInsetYMatch[1]]}; bottom: -${spacing[negInsetYMatch[1]]}; }`;
  }
  const negTopMatch = cls.match(/^-top-(.+)$/);
  if (negTopMatch && has(spacing, negTopMatch[1])) {
    return `.${escapeSelector(cls)} { top: -${spacing[negTopMatch[1]]}; }`;
  }
  const negRightMatch = cls.match(/^-right-(.+)$/);
  if (negRightMatch && has(spacing, negRightMatch[1])) {
    return `.${escapeSelector(cls)} { right: -${spacing[negRightMatch[1]]}; }`;
  }
  const negBottomMatch = cls.match(/^-bottom-(.+)$/);
  if (negBottomMatch && has(spacing, negBottomMatch[1])) {
    return `.${escapeSelector(cls)} { bottom: -${spacing[negBottomMatch[1]]}; }`;
  }
  const negLeftMatch = cls.match(/^-left-(.+)$/);
  if (negLeftMatch && has(spacing, negLeftMatch[1])) {
    return `.${escapeSelector(cls)} { left: -${spacing[negLeftMatch[1]]}; }`;
  }
  const arbSpacingMatch = cls.match(/^(w|h|p|m|pt|pr|pb|pl|px|py|mt|mr|mb|ml|mx|my|gap|gap-x|gap-y|top|right|bottom|left|inset|inset-x|inset-y)-\[(.+)\]$/);
  if (arbSpacingMatch) {
    const [, prop, val] = arbSpacingMatch;
    const escaped = escapeSelector(cls);
    switch (prop) {
      case "w":
        return `.${escaped} { width: ${val}; }`;
      case "h":
        return `.${escaped} { height: ${val}; }`;
      case "p":
        return `.${escaped} { padding: ${val}; }`;
      case "m":
        return `.${escaped} { margin: ${val}; }`;
      case "pt":
        return `.${escaped} { padding-top: ${val}; }`;
      case "pr":
        return `.${escaped} { padding-right: ${val}; }`;
      case "pb":
        return `.${escaped} { padding-bottom: ${val}; }`;
      case "pl":
        return `.${escaped} { padding-left: ${val}; }`;
      case "px":
        return `.${escaped} { padding-left: ${val}; padding-right: ${val}; }`;
      case "py":
        return `.${escaped} { padding-top: ${val}; padding-bottom: ${val}; }`;
      case "mt":
        return `.${escaped} { margin-top: ${val}; }`;
      case "mr":
        return `.${escaped} { margin-right: ${val}; }`;
      case "mb":
        return `.${escaped} { margin-bottom: ${val}; }`;
      case "ml":
        return `.${escaped} { margin-left: ${val}; }`;
      case "mx":
        return `.${escaped} { margin-left: ${val}; margin-right: ${val}; }`;
      case "my":
        return `.${escaped} { margin-top: ${val}; margin-bottom: ${val}; }`;
      case "gap":
        return `.${escaped} { gap: ${val}; }`;
      case "gap-x":
        return `.${escaped} { column-gap: ${val}; }`;
      case "gap-y":
        return `.${escaped} { row-gap: ${val}; }`;
      case "top":
        return `.${escaped} { top: ${val}; }`;
      case "right":
        return `.${escaped} { right: ${val}; }`;
      case "bottom":
        return `.${escaped} { bottom: ${val}; }`;
      case "left":
        return `.${escaped} { left: ${val}; }`;
      case "inset":
        return `.${escaped} { inset: ${val}; }`;
      case "inset-x":
        return `.${escaped} { left: ${val}; right: ${val}; }`;
      case "inset-y":
        return `.${escaped} { top: ${val}; bottom: ${val}; }`;
    }
  }
  return null;
}
var init_spacing = __esm({
  "src/generator/spacing.ts"() {
    "use strict";
    init_utils();
  }
});

// src/generator/typography.ts
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
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
  if (textSizeMatch && hasOwn(fontSize, textSizeMatch[1])) {
    const [size, lh] = fontSize[textSizeMatch[1]];
    return `.${escapeSelector(cls)} {
  font-size: ${size};
  line-height: ${lh};
}`;
  }
  const fontWeightMatch = cls.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/);
  if (fontWeightMatch && hasOwn(fontWeight, fontWeightMatch[1])) {
    return `.${escapeSelector(cls)} { font-weight: ${fontWeight[fontWeightMatch[1]]}; }`;
  }
  if (cls === "font-sans") return `.${escapeSelector(cls)} { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }`;
  if (cls === "font-serif") return `.${escapeSelector(cls)} { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }`;
  if (cls === "font-mono") return `.${escapeSelector(cls)} { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }`;
  const leadingMatch = cls.match(/^leading-(.+)$/);
  if (leadingMatch && hasOwn(lineHeight, leadingMatch[1])) {
    return `.${escapeSelector(cls)} { line-height: ${lineHeight[leadingMatch[1]]}; }`;
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
  if (trackingMatch && Object.prototype.hasOwnProperty.call(trackingMap, trackingMatch[1])) {
    return `.${escapeSelector(cls)} { letter-spacing: ${trackingMap[trackingMatch[1]]}; }`;
  }
  if (cls === "text-left") return `.${escapeSelector(cls)} { text-align: left; }`;
  if (cls === "text-center") return `.${escapeSelector(cls)} { text-align: center; }`;
  if (cls === "text-right") return `.${escapeSelector(cls)} { text-align: right; }`;
  if (cls === "text-justify") return `.${escapeSelector(cls)} { text-align: justify; }`;
  if (cls === "text-start") return `.${escapeSelector(cls)} { text-align: start; }`;
  if (cls === "text-end") return `.${escapeSelector(cls)} { text-align: end; }`;
  if (cls === "uppercase") return `.${escapeSelector(cls)} { text-transform: uppercase; }`;
  if (cls === "lowercase") return `.${escapeSelector(cls)} { text-transform: lowercase; }`;
  if (cls === "capitalize") return `.${escapeSelector(cls)} { text-transform: capitalize; }`;
  if (cls === "normal-case") return `.${escapeSelector(cls)} { text-transform: none; }`;
  if (cls === "underline") return `.${escapeSelector(cls)} { text-decoration-line: underline; }`;
  if (cls === "overline") return `.${escapeSelector(cls)} { text-decoration-line: overline; }`;
  if (cls === "line-through") return `.${escapeSelector(cls)} { text-decoration-line: line-through; }`;
  if (cls === "no-underline") return `.${escapeSelector(cls)} { text-decoration-line: none; }`;
  if (cls === "truncate") return `.${escapeSelector(cls)} { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
  if (cls === "text-ellipsis") return `.${escapeSelector(cls)} { text-overflow: ellipsis; }`;
  if (cls === "text-clip") return `.${escapeSelector(cls)} { text-overflow: clip; }`;
  if (cls === "whitespace-normal") return `.${escapeSelector(cls)} { white-space: normal; }`;
  if (cls === "whitespace-nowrap") return `.${escapeSelector(cls)} { white-space: nowrap; }`;
  if (cls === "whitespace-pre") return `.${escapeSelector(cls)} { white-space: pre; }`;
  if (cls === "whitespace-pre-line") return `.${escapeSelector(cls)} { white-space: pre-line; }`;
  if (cls === "whitespace-pre-wrap") return `.${escapeSelector(cls)} { white-space: pre-wrap; }`;
  if (cls === "whitespace-break-spaces") return `.${escapeSelector(cls)} { white-space: break-spaces; }`;
  if (cls === "italic") return `.${escapeSelector(cls)} { font-style: italic; }`;
  if (cls === "not-italic") return `.${escapeSelector(cls)} { font-style: normal; }`;
  if (cls === "tabular-nums") return `.${escapeSelector(cls)} { font-variant-numeric: tabular-nums; }`;
  if (cls === "oldstyle-nums") return `.${escapeSelector(cls)} { font-variant-numeric: oldstyle-nums; }`;
  if (cls === "list-none") return `.${escapeSelector(cls)} { list-style-type: none; }`;
  if (cls === "list-disc") return `.${escapeSelector(cls)} { list-style-type: disc; }`;
  if (cls === "list-decimal") return `.${escapeSelector(cls)} { list-style-type: decimal; }`;
  if (cls === "break-normal") return `.${escapeSelector(cls)} { overflow-wrap: normal; word-break: normal; }`;
  if (cls === "break-words") return `.${escapeSelector(cls)} { overflow-wrap: break-word; }`;
  if (cls === "break-all") return `.${escapeSelector(cls)} { word-break: break-all; }`;
  if (cls === "break-keep") return `.${escapeSelector(cls)} { word-break: keep-all; }`;
  return null;
}
var init_typography = __esm({
  "src/generator/typography.ts"() {
    "use strict";
    init_utils();
  }
});

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
  if (displayMap[cls]) return `.${escapeSelector(cls)} { ${displayMap[cls]} }`;
  const posMap = {
    static: "position: static;",
    relative: "position: relative;",
    absolute: "position: absolute;",
    fixed: "position: fixed;",
    sticky: "position: sticky;"
  };
  if (posMap[cls]) return `.${escapeSelector(cls)} { ${posMap[cls]} }`;
  if (cls === "flex-row") return `.${escapeSelector(cls)} { flex-direction: row; }`;
  if (cls === "flex-row-reverse") return `.${escapeSelector(cls)} { flex-direction: row-reverse; }`;
  if (cls === "flex-col") return `.${escapeSelector(cls)} { flex-direction: column; }`;
  if (cls === "flex-col-reverse") return `.${escapeSelector(cls)} { flex-direction: column-reverse; }`;
  if (cls === "flex-wrap") return `.${escapeSelector(cls)} { flex-wrap: wrap; }`;
  if (cls === "flex-nowrap") return `.${escapeSelector(cls)} { flex-wrap: nowrap; }`;
  if (cls === "flex-wrap-reverse") return `.${escapeSelector(cls)} { flex-wrap: wrap-reverse; }`;
  if (cls === "flex-1") return `.${escapeSelector(cls)} { flex: 1 1 0%; }`;
  if (cls === "flex-auto") return `.${escapeSelector(cls)} { flex: 1 1 auto; }`;
  if (cls === "flex-initial") return `.${escapeSelector(cls)} { flex: 0 1 auto; }`;
  if (cls === "flex-none") return `.${escapeSelector(cls)} { flex: none; }`;
  if (cls === "flex-grow") return `.${escapeSelector(cls)} { flex-grow: 1; }`;
  if (cls === "flex-grow-0") return `.${escapeSelector(cls)} { flex-grow: 0; }`;
  if (cls === "flex-shrink") return `.${escapeSelector(cls)} { flex-shrink: 1; }`;
  if (cls === "flex-shrink-0") return `.${escapeSelector(cls)} { flex-shrink: 0; }`;
  if (cls === "grow") return `.${escapeSelector(cls)} { flex-grow: 1; }`;
  if (cls === "grow-0") return `.${escapeSelector(cls)} { flex-grow: 0; }`;
  if (cls === "shrink") return `.${escapeSelector(cls)} { flex-shrink: 1; }`;
  if (cls === "shrink-0") return `.${escapeSelector(cls)} { flex-shrink: 0; }`;
  if (cls === "items-start") return `.${escapeSelector(cls)} { align-items: flex-start; }`;
  if (cls === "items-end") return `.${escapeSelector(cls)} { align-items: flex-end; }`;
  if (cls === "items-center") return `.${escapeSelector(cls)} { align-items: center; }`;
  if (cls === "items-baseline") return `.${escapeSelector(cls)} { align-items: baseline; }`;
  if (cls === "items-stretch") return `.${escapeSelector(cls)} { align-items: stretch; }`;
  if (cls === "self-auto") return `.${escapeSelector(cls)} { align-self: auto; }`;
  if (cls === "self-start") return `.${escapeSelector(cls)} { align-self: flex-start; }`;
  if (cls === "self-end") return `.${escapeSelector(cls)} { align-self: flex-end; }`;
  if (cls === "self-center") return `.${escapeSelector(cls)} { align-self: center; }`;
  if (cls === "self-stretch") return `.${escapeSelector(cls)} { align-self: stretch; }`;
  if (cls === "self-baseline") return `.${escapeSelector(cls)} { align-self: baseline; }`;
  if (cls === "justify-start") return `.${escapeSelector(cls)} { justify-content: flex-start; }`;
  if (cls === "justify-end") return `.${escapeSelector(cls)} { justify-content: flex-end; }`;
  if (cls === "justify-center") return `.${escapeSelector(cls)} { justify-content: center; }`;
  if (cls === "justify-between") return `.${escapeSelector(cls)} { justify-content: space-between; }`;
  if (cls === "justify-around") return `.${escapeSelector(cls)} { justify-content: space-around; }`;
  if (cls === "justify-evenly") return `.${escapeSelector(cls)} { justify-content: space-evenly; }`;
  if (cls === "justify-stretch") return `.${escapeSelector(cls)} { justify-content: stretch; }`;
  if (cls === "justify-items-start") return `.${escapeSelector(cls)} { justify-items: start; }`;
  if (cls === "justify-items-end") return `.${escapeSelector(cls)} { justify-items: end; }`;
  if (cls === "justify-items-center") return `.${escapeSelector(cls)} { justify-items: center; }`;
  if (cls === "justify-items-stretch") return `.${escapeSelector(cls)} { justify-items: stretch; }`;
  if (cls === "justify-self-auto") return `.${escapeSelector(cls)} { justify-self: auto; }`;
  if (cls === "justify-self-start") return `.${escapeSelector(cls)} { justify-self: start; }`;
  if (cls === "justify-self-end") return `.${escapeSelector(cls)} { justify-self: end; }`;
  if (cls === "justify-self-center") return `.${escapeSelector(cls)} { justify-self: center; }`;
  if (cls === "justify-self-stretch") return `.${escapeSelector(cls)} { justify-self: stretch; }`;
  if (cls === "content-normal") return `.${escapeSelector(cls)} { align-content: normal; }`;
  if (cls === "content-center") return `.${escapeSelector(cls)} { align-content: center; }`;
  if (cls === "content-start") return `.${escapeSelector(cls)} { align-content: flex-start; }`;
  if (cls === "content-end") return `.${escapeSelector(cls)} { align-content: flex-end; }`;
  if (cls === "content-between") return `.${escapeSelector(cls)} { align-content: space-between; }`;
  if (cls === "content-around") return `.${escapeSelector(cls)} { align-content: space-around; }`;
  if (cls === "content-evenly") return `.${escapeSelector(cls)} { align-content: space-evenly; }`;
  if (cls === "content-stretch") return `.${escapeSelector(cls)} { align-content: stretch; }`;
  if (cls === "content-baseline") return `.${escapeSelector(cls)} { align-content: baseline; }`;
  const gridColsMatch = cls.match(/^grid-cols-(\d+)$/);
  if (gridColsMatch) {
    const n = parseInt(gridColsMatch[1]);
    return `.${escapeSelector(cls)} { grid-template-columns: repeat(${n}, minmax(0, 1fr)); }`;
  }
  if (cls === "grid-cols-none") return `.${escapeSelector(cls)} { grid-template-columns: none; }`;
  const gridRowsMatch = cls.match(/^grid-rows-(\d+)$/);
  if (gridRowsMatch) {
    const n = parseInt(gridRowsMatch[1]);
    return `.${escapeSelector(cls)} { grid-template-rows: repeat(${n}, minmax(0, 1fr)); }`;
  }
  if (cls === "grid-rows-none") return `.${escapeSelector(cls)} { grid-template-rows: none; }`;
  const colSpanMatch = cls.match(/^col-span-(\d+)$/);
  if (colSpanMatch) return `.${escapeSelector(cls)} { grid-column: span ${colSpanMatch[1]} / span ${colSpanMatch[1]}; }`;
  if (cls === "col-span-full") return `.${escapeSelector(cls)} { grid-column: 1 / -1; }`;
  if (cls === "col-auto") return `.${escapeSelector(cls)} { grid-column: auto; }`;
  const rowSpanMatch = cls.match(/^row-span-(\d+)$/);
  if (rowSpanMatch) return `.${escapeSelector(cls)} { grid-row: span ${rowSpanMatch[1]} / span ${rowSpanMatch[1]}; }`;
  if (cls === "row-span-full") return `.${escapeSelector(cls)} { grid-row: 1 / -1; }`;
  if (cls === "row-auto") return `.${escapeSelector(cls)} { grid-row: auto; }`;
  const colStartMatch = cls.match(/^col-start-(\d+)$/);
  if (colStartMatch) return `.${escapeSelector(cls)} { grid-column-start: ${colStartMatch[1]}; }`;
  const colEndMatch = cls.match(/^col-end-(\d+)$/);
  if (colEndMatch) return `.${escapeSelector(cls)} { grid-column-end: ${colEndMatch[1]}; }`;
  const rowStartMatch = cls.match(/^row-start-(\d+)$/);
  if (rowStartMatch) return `.${escapeSelector(cls)} { grid-row-start: ${rowStartMatch[1]}; }`;
  const rowEndMatch = cls.match(/^row-end-(\d+)$/);
  if (rowEndMatch) return `.${escapeSelector(cls)} { grid-row-end: ${rowEndMatch[1]}; }`;
  const orderMatch = cls.match(/^order-(-?\d+)$/);
  if (orderMatch) return `.${escapeSelector(cls)} { order: ${orderMatch[1]}; }`;
  if (cls === "order-first") return `.${escapeSelector(cls)} { order: -9999; }`;
  if (cls === "order-last") return `.${escapeSelector(cls)} { order: 9999; }`;
  if (cls === "order-none") return `.${escapeSelector(cls)} { order: 0; }`;
  if (cls === "float-right") return `.${escapeSelector(cls)} { float: right; }`;
  if (cls === "float-left") return `.${escapeSelector(cls)} { float: left; }`;
  if (cls === "float-none") return `.${escapeSelector(cls)} { float: none; }`;
  if (cls === "clearfix") return `.${cls}::after { content: ""; display: table; clear: both; }`;
  if (cls === "overflow-auto") return `.${escapeSelector(cls)} { overflow: auto; }`;
  if (cls === "overflow-hidden") return `.${escapeSelector(cls)} { overflow: hidden; }`;
  if (cls === "overflow-clip") return `.${escapeSelector(cls)} { overflow: clip; }`;
  if (cls === "overflow-visible") return `.${escapeSelector(cls)} { overflow: visible; }`;
  if (cls === "overflow-scroll") return `.${escapeSelector(cls)} { overflow: scroll; }`;
  if (cls === "overflow-x-auto") return `.${escapeSelector(cls)} { overflow-x: auto; }`;
  if (cls === "overflow-x-hidden") return `.${escapeSelector(cls)} { overflow-x: hidden; }`;
  if (cls === "overflow-x-scroll") return `.${escapeSelector(cls)} { overflow-x: scroll; }`;
  if (cls === "overflow-y-auto") return `.${escapeSelector(cls)} { overflow-y: auto; }`;
  if (cls === "overflow-y-hidden") return `.${escapeSelector(cls)} { overflow-y: hidden; }`;
  if (cls === "overflow-y-scroll") return `.${escapeSelector(cls)} { overflow-y: scroll; }`;
  if (cls === "visible") return `.${escapeSelector(cls)} { visibility: visible; }`;
  if (cls === "invisible") return `.${escapeSelector(cls)} { visibility: hidden; }`;
  if (cls === "collapse") return `.${escapeSelector(cls)} { visibility: collapse; }`;
  if (cls === "pointer-events-none") return `.${escapeSelector(cls)} { pointer-events: none; }`;
  if (cls === "pointer-events-auto") return `.${escapeSelector(cls)} { pointer-events: auto; }`;
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
  if (cursorMap[cls]) return `.${escapeSelector(cls)} { cursor: ${cursorMap[cls]}; }`;
  if (cls === "select-none") return `.${escapeSelector(cls)} { user-select: none; }`;
  if (cls === "select-text") return `.${escapeSelector(cls)} { user-select: text; }`;
  if (cls === "select-all") return `.${escapeSelector(cls)} { user-select: all; }`;
  if (cls === "select-auto") return `.${escapeSelector(cls)} { user-select: auto; }`;
  if (cls === "object-contain") return `.${escapeSelector(cls)} { object-fit: contain; }`;
  if (cls === "object-cover") return `.${escapeSelector(cls)} { object-fit: cover; }`;
  if (cls === "object-fill") return `.${escapeSelector(cls)} { object-fit: fill; }`;
  if (cls === "object-none") return `.${escapeSelector(cls)} { object-fit: none; }`;
  if (cls === "object-scale-down") return `.${escapeSelector(cls)} { object-fit: scale-down; }`;
  if (cls === "aspect-auto") return `.${escapeSelector(cls)} { aspect-ratio: auto; }`;
  if (cls === "aspect-square") return `.${escapeSelector(cls)} { aspect-ratio: 1 / 1; }`;
  if (cls === "aspect-video") return `.${escapeSelector(cls)} { aspect-ratio: 16 / 9; }`;
  if (cls === "container") {
    return `.${escapeSelector(cls)} {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}`;
  }
  if (cls === "box-border") return `.${escapeSelector(cls)} { box-sizing: border-box; }`;
  if (cls === "box-content") return `.${escapeSelector(cls)} { box-sizing: content-box; }`;
  if (cls === "isolate") return `.${escapeSelector(cls)} { isolation: isolate; }`;
  if (cls === "isolation-auto") return `.${escapeSelector(cls)} { isolation: auto; }`;
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
  if (mixBlendMap[cls]) return `.${escapeSelector(cls)} { mix-blend-mode: ${mixBlendMap[cls]}; }`;
  if (cls === "bg-auto") return `.${escapeSelector(cls)} { background-size: auto; }`;
  if (cls === "bg-cover") return `.${escapeSelector(cls)} { background-size: cover; }`;
  if (cls === "bg-contain") return `.${escapeSelector(cls)} { background-size: contain; }`;
  if (cls === "bg-center") return `.${escapeSelector(cls)} { background-position: center; }`;
  if (cls === "bg-top") return `.${escapeSelector(cls)} { background-position: top; }`;
  if (cls === "bg-bottom") return `.${escapeSelector(cls)} { background-position: bottom; }`;
  if (cls === "bg-left") return `.${escapeSelector(cls)} { background-position: left; }`;
  if (cls === "bg-right") return `.${escapeSelector(cls)} { background-position: right; }`;
  if (cls === "bg-left-top") return `.${escapeSelector(cls)} { background-position: left top; }`;
  if (cls === "bg-left-bottom") return `.${escapeSelector(cls)} { background-position: left bottom; }`;
  if (cls === "bg-right-top") return `.${escapeSelector(cls)} { background-position: right top; }`;
  if (cls === "bg-right-bottom") return `.${escapeSelector(cls)} { background-position: right bottom; }`;
  if (cls === "bg-repeat") return `.${escapeSelector(cls)} { background-repeat: repeat; }`;
  if (cls === "bg-no-repeat") return `.${escapeSelector(cls)} { background-repeat: no-repeat; }`;
  if (cls === "bg-repeat-x") return `.${escapeSelector(cls)} { background-repeat: repeat-x; }`;
  if (cls === "bg-repeat-y") return `.${escapeSelector(cls)} { background-repeat: repeat-y; }`;
  if (cls === "bg-repeat-round") return `.${escapeSelector(cls)} { background-repeat: round; }`;
  if (cls === "bg-repeat-space") return `.${escapeSelector(cls)} { background-repeat: space; }`;
  if (cls === "bg-fixed") return `.${escapeSelector(cls)} { background-attachment: fixed; }`;
  if (cls === "bg-local") return `.${escapeSelector(cls)} { background-attachment: local; }`;
  if (cls === "bg-scroll") return `.${escapeSelector(cls)} { background-attachment: scroll; }`;
  if (cls === "bg-origin-border") return `.${escapeSelector(cls)} { background-origin: border-box; }`;
  if (cls === "bg-origin-padding") return `.${escapeSelector(cls)} { background-origin: padding-box; }`;
  if (cls === "bg-origin-content") return `.${escapeSelector(cls)} { background-origin: content-box; }`;
  if (cls === "bg-clip-border") return `.${escapeSelector(cls)} { background-clip: border-box; }`;
  if (cls === "bg-clip-padding") return `.${escapeSelector(cls)} { background-clip: padding-box; }`;
  if (cls === "bg-clip-content") return `.${escapeSelector(cls)} { background-clip: content-box; }`;
  if (cls === "bg-clip-text") return `.${escapeSelector(cls)} { background-clip: text; -webkit-background-clip: text; }`;
  return null;
}
var init_layout = __esm({
  "src/generator/layout.ts"() {
    "use strict";
    init_utils();
  }
});

// src/generator/sizing.ts
function has2(obj, key) {
  return typeof obj[key] === "string";
}
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
    if (key === "auto") return `.${escapeSelector(cls)} { width: auto; }`;
    if (key === "full") return `.${escapeSelector(cls)} { width: 100%; }`;
    if (key === "screen") return `.${escapeSelector(cls)} { width: 100vw; }`;
    if (key === "svw") return `.${escapeSelector(cls)} { width: 100svw; }`;
    if (key === "min") return `.${escapeSelector(cls)} { width: min-content; }`;
    if (key === "max") return `.${escapeSelector(cls)} { width: max-content; }`;
    if (key === "fit") return `.${escapeSelector(cls)} { width: fit-content; }`;
    if (has2(fractions, key)) return `.${escapeSelector(cls)} { width: ${fractions[key]}; }`;
    if (has2(spacing, key)) return `.${escapeSelector(cls)} { width: ${spacing[key]}; }`;
  }
  const minWMatch = cls.match(/^min-w-(.+)$/);
  if (minWMatch) {
    const key = minWMatch[1];
    if (key === "0") return `.${escapeSelector(cls)} { min-width: 0px; }`;
    if (key === "full") return `.${escapeSelector(cls)} { min-width: 100%; }`;
    if (key === "min") return `.${escapeSelector(cls)} { min-width: min-content; }`;
    if (key === "max") return `.${escapeSelector(cls)} { min-width: max-content; }`;
    if (key === "fit") return `.${escapeSelector(cls)} { min-width: fit-content; }`;
    if (has2(spacing, key)) return `.${escapeSelector(cls)} { min-width: ${spacing[key]}; }`;
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
  if (maxWMatch && has2(maxWMap, maxWMatch[1])) {
    return `.${escapeSelector(cls)} { max-width: ${maxWMap[maxWMatch[1]]}; }`;
  }
  const hMatch = cls.match(/^h-(.+)$/);
  if (hMatch) {
    const key = hMatch[1];
    if (key === "auto") return `.${escapeSelector(cls)} { height: auto; }`;
    if (key === "full") return `.${escapeSelector(cls)} { height: 100%; }`;
    if (key === "screen") return `.${escapeSelector(cls)} { height: 100vh; }`;
    if (key === "svh") return `.${escapeSelector(cls)} { height: 100svh; }`;
    if (key === "dvh") return `.${escapeSelector(cls)} { height: 100dvh; }`;
    if (key === "min") return `.${escapeSelector(cls)} { height: min-content; }`;
    if (key === "max") return `.${escapeSelector(cls)} { height: max-content; }`;
    if (key === "fit") return `.${escapeSelector(cls)} { height: fit-content; }`;
    if (has2(fractions, key)) return `.${escapeSelector(cls)} { height: ${fractions[key]}; }`;
    if (has2(spacing, key)) return `.${escapeSelector(cls)} { height: ${spacing[key]}; }`;
  }
  const minHMatch = cls.match(/^min-h-(.+)$/);
  if (minHMatch) {
    const key = minHMatch[1];
    if (key === "0") return `.${escapeSelector(cls)} { min-height: 0px; }`;
    if (key === "full") return `.${escapeSelector(cls)} { min-height: 100%; }`;
    if (key === "screen") return `.${escapeSelector(cls)} { min-height: 100vh; }`;
    if (key === "svh") return `.${escapeSelector(cls)} { min-height: 100svh; }`;
    if (key === "dvh") return `.${escapeSelector(cls)} { min-height: 100dvh; }`;
    if (key === "fit") return `.${escapeSelector(cls)} { min-height: fit-content; }`;
    if (has2(spacing, key)) return `.${escapeSelector(cls)} { min-height: ${spacing[key]}; }`;
  }
  const maxHMatch = cls.match(/^max-h-(.+)$/);
  if (maxHMatch) {
    const key = maxHMatch[1];
    if (key === "none") return `.${escapeSelector(cls)} { max-height: none; }`;
    if (key === "full") return `.${escapeSelector(cls)} { max-height: 100%; }`;
    if (key === "screen") return `.${escapeSelector(cls)} { max-height: 100vh; }`;
    if (key === "svh") return `.${escapeSelector(cls)} { max-height: 100svh; }`;
    if (key === "dvh") return `.${escapeSelector(cls)} { max-height: 100dvh; }`;
    if (key === "fit") return `.${escapeSelector(cls)} { max-height: fit-content; }`;
    if (has2(spacing, key)) return `.${escapeSelector(cls)} { max-height: ${spacing[key]}; }`;
  }
  const basisMatch = cls.match(/^basis-(.+)$/);
  if (basisMatch) {
    const key = basisMatch[1];
    if (key === "auto") return `.${escapeSelector(cls)} { flex-basis: auto; }`;
    if (key === "full") return `.${escapeSelector(cls)} { flex-basis: 100%; }`;
    if (key === "0") return `.${escapeSelector(cls)} { flex-basis: 0px; }`;
    if (has2(fractions, key)) return `.${escapeSelector(cls)} { flex-basis: ${fractions[key]}; }`;
    if (has2(spacing, key)) return `.${escapeSelector(cls)} { flex-basis: ${spacing[key]}; }`;
  }
  return null;
}
var init_sizing = __esm({
  "src/generator/sizing.ts"() {
    "use strict";
    init_utils();
  }
});

// src/generator/effects.ts
function has3(obj, key) {
  return typeof obj[key] === "string";
}
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
  if (opacityMatch && has3(opacity, opacityMatch[1])) {
    return `.${escapeSelector(cls)} {
  opacity: ${opacity[opacityMatch[1]]};
  transition-property: opacity;
  transition-duration: var(--alive-duration, 0ms);
  transition-timing-function: var(--alive-ease, linear);
}`;
  }
  const zMatch = cls.match(/^z-(.+)$/);
  if (zMatch && has3(zIndex, zMatch[1])) {
    return `.${escapeSelector(cls)} { z-index: ${zIndex[zMatch[1]]}; }`;
  }
  const shadowMatch = cls.match(/^shadow(?:-(.+))?$/);
  if (shadowMatch) {
    const key = shadowMatch[1] ?? "DEFAULT";
    if (has3(boxShadow, key)) {
      return `.${escapeSelector(cls)} { box-shadow: ${boxShadow[key]}; }`;
    }
    if (!shadowMatch[1] && has3(boxShadow, "DEFAULT")) {
      return `.${escapeSelector(cls)} { box-shadow: ${boxShadow["DEFAULT"]}; }`;
    }
  }
  const roundedMatch = cls.match(/^rounded(?:-(.+))?$/);
  if (roundedMatch) {
    const key = roundedMatch[1] ?? "DEFAULT";
    if (has3(borderRadius, key)) return `.${escapeSelector(cls)} { border-radius: ${borderRadius[key]}; }`;
    if (!roundedMatch[1] && has3(borderRadius, "DEFAULT")) return `.${escapeSelector(cls)} { border-radius: ${borderRadius["DEFAULT"]}; }`;
  }
  const roundedTMatch = cls.match(/^rounded-t(?:-(.+))?$/);
  if (roundedTMatch) {
    const rkey = roundedTMatch[1] ?? "DEFAULT";
    const val = has3(borderRadius, rkey) ? borderRadius[rkey] : has3(borderRadius, "DEFAULT") ? borderRadius["DEFAULT"] : null;
    if (val) return `.${escapeSelector(cls)} { border-top-left-radius: ${val}; border-top-right-radius: ${val}; }`;
  }
  const roundedBMatch = cls.match(/^rounded-b(?:-(.+))?$/);
  if (roundedBMatch) {
    const rkey = roundedBMatch[1] ?? "DEFAULT";
    const val = has3(borderRadius, rkey) ? borderRadius[rkey] : has3(borderRadius, "DEFAULT") ? borderRadius["DEFAULT"] : null;
    if (val) return `.${escapeSelector(cls)} { border-bottom-left-radius: ${val}; border-bottom-right-radius: ${val}; }`;
  }
  const roundedLMatch = cls.match(/^rounded-l(?:-(.+))?$/);
  if (roundedLMatch) {
    const rkey = roundedLMatch[1] ?? "DEFAULT";
    const val = has3(borderRadius, rkey) ? borderRadius[rkey] : has3(borderRadius, "DEFAULT") ? borderRadius["DEFAULT"] : null;
    if (val) return `.${escapeSelector(cls)} { border-top-left-radius: ${val}; border-bottom-left-radius: ${val}; }`;
  }
  const roundedRMatch = cls.match(/^rounded-r(?:-(.+))?$/);
  if (roundedRMatch) {
    const rkey = roundedRMatch[1] ?? "DEFAULT";
    const val = has3(borderRadius, rkey) ? borderRadius[rkey] : has3(borderRadius, "DEFAULT") ? borderRadius["DEFAULT"] : null;
    if (val) return `.${escapeSelector(cls)} { border-top-right-radius: ${val}; border-bottom-right-radius: ${val}; }`;
  }
  if (cls === "border") return `.${escapeSelector(cls)} { border-width: 1px; border-style: solid; }`;
  if (cls === "border-0") return `.${escapeSelector(cls)} { border-width: 0px; }`;
  if (cls === "border-2") return `.${escapeSelector(cls)} { border-width: 2px; border-style: solid; }`;
  if (cls === "border-4") return `.${escapeSelector(cls)} { border-width: 4px; border-style: solid; }`;
  if (cls === "border-8") return `.${escapeSelector(cls)} { border-width: 8px; border-style: solid; }`;
  if (cls === "border-t") return `.${escapeSelector(cls)} { border-top-width: 1px; border-top-style: solid; }`;
  if (cls === "border-r") return `.${escapeSelector(cls)} { border-right-width: 1px; border-right-style: solid; }`;
  if (cls === "border-b") return `.${escapeSelector(cls)} { border-bottom-width: 1px; border-bottom-style: solid; }`;
  if (cls === "border-l") return `.${escapeSelector(cls)} { border-left-width: 1px; border-left-style: solid; }`;
  if (cls === "border-t-0") return `.${escapeSelector(cls)} { border-top-width: 0px; }`;
  if (cls === "border-r-0") return `.${escapeSelector(cls)} { border-right-width: 0px; }`;
  if (cls === "border-b-0") return `.${escapeSelector(cls)} { border-bottom-width: 0px; }`;
  if (cls === "border-l-0") return `.${escapeSelector(cls)} { border-left-width: 0px; }`;
  if (cls === "border-solid") return `.${escapeSelector(cls)} { border-style: solid; }`;
  if (cls === "border-dashed") return `.${escapeSelector(cls)} { border-style: dashed; }`;
  if (cls === "border-dotted") return `.${escapeSelector(cls)} { border-style: dotted; }`;
  if (cls === "border-double") return `.${escapeSelector(cls)} { border-style: double; }`;
  if (cls === "border-hidden") return `.${escapeSelector(cls)} { border-style: hidden; }`;
  if (cls === "border-none") return `.${escapeSelector(cls)} { border-style: none; }`;
  if (cls === "outline-none") return `.${escapeSelector(cls)} { outline: 2px solid transparent; outline-offset: 2px; }`;
  if (cls === "outline") return `.${escapeSelector(cls)} { outline-style: solid; }`;
  if (cls === "outline-dashed") return `.${escapeSelector(cls)} { outline-style: dashed; }`;
  if (cls === "outline-dotted") return `.${escapeSelector(cls)} { outline-style: dotted; }`;
  if (cls === "outline-double") return `.${escapeSelector(cls)} { outline-style: double; }`;
  const outlineWidthMatch = cls.match(/^outline-(\d+)$/);
  if (outlineWidthMatch) return `.${escapeSelector(cls)} { outline-width: ${outlineWidthMatch[1]}px; }`;
  const outlineOffsetMatch = cls.match(/^outline-offset-(\d+)$/);
  if (outlineOffsetMatch) return `.${escapeSelector(cls)} { outline-offset: ${outlineOffsetMatch[1]}px; }`;
  const ringMatch = cls.match(/^ring(?:-(\d+))?$/);
  if (ringMatch) {
    const width = ringMatch[1] ?? "3";
    return `.${escapeSelector(cls)} { box-shadow: 0 0 0 ${width}px var(--alive-ring-color, rgba(59, 130, 246, 0.5)); }`;
  }
  if (cls === "ring-inset") return `.${escapeSelector(cls)} { --alive-ring-inset: inset; }`;
  const ringOffsetMatch = cls.match(/^ring-offset-(\d+)$/);
  if (ringOffsetMatch) return `.${escapeSelector(cls)} { --alive-ring-offset: ${ringOffsetMatch[1]}px; }`;
  if (cls === "transform") return `.${escapeSelector(cls)} { transform: translateX(var(--alive-tx,0)) translateY(var(--alive-ty,0)) rotate(var(--alive-rotate,0)) scaleX(var(--alive-sx,1)) scaleY(var(--alive-sy,1)) skewX(var(--alive-skew-x,0)) skewY(var(--alive-skew-y,0)); }`;
  if (cls === "transform-none") return `.${escapeSelector(cls)} { transform: none; }`;
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
  if (scaleMatch && has3(scaleMap, scaleMatch[1])) {
    return `.${escapeSelector(cls)} { transform: scale(${scaleMap[scaleMatch[1]]}); }`;
  }
  const scaleXMatch = cls.match(/^scale-x-(\d+)$/);
  if (scaleXMatch && has3(scaleMap, scaleXMatch[1])) {
    return `.${escapeSelector(cls)} { transform: scaleX(${scaleMap[scaleXMatch[1]]}); }`;
  }
  const scaleYMatch = cls.match(/^scale-y-(\d+)$/);
  if (scaleYMatch && has3(scaleMap, scaleYMatch[1])) {
    return `.${escapeSelector(cls)} { transform: scaleY(${scaleMap[scaleYMatch[1]]}); }`;
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
  if (cls === "transition-none") return `.${escapeSelector(cls)} { transition: none; }`;
  if (cls === "transition-all") return `.${escapeSelector(cls)} { transition: all var(--alive-duration-normal) var(--alive-ease-standard); }`;
  if (cls === "transition-colors") return `.${escapeSelector(cls)} { transition: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  if (cls === "transition-opacity") return `.${escapeSelector(cls)} { transition: opacity; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  if (cls === "transition-shadow") return `.${escapeSelector(cls)} { transition: box-shadow; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
  if (cls === "transition-transform") return `.${escapeSelector(cls)} { transition: transform; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`;
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
    if (has3(blurMap, key)) return `.${escapeSelector(cls)} { filter: blur(${blurMap[key]}); }`;
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
    if (has3(blurMap, key)) return `.${escapeSelector(cls)} { backdrop-filter: blur(${blurMap[key]}); }`;
  }
  const arbOpacityMatch = cls.match(/^opacity-\[(.+)\]$/);
  if (arbOpacityMatch) {
    const escaped = escapeSelector(cls);
    return `.${escaped} {
  opacity: ${arbOpacityMatch[1]};
  transition-property: opacity;
  transition-duration: var(--alive-duration, 0ms);
  transition-timing-function: var(--alive-ease, linear);
}`;
  }
  const arbZMatch = cls.match(/^z-\[(.+)\]$/);
  if (arbZMatch) {
    return `.${escapeSelector(cls)} { z-index: ${arbZMatch[1]}; }`;
  }
  const arbRoundedMatch = cls.match(/^rounded-\[(.+)\]$/);
  if (arbRoundedMatch) {
    return `.${escapeSelector(cls)} { border-radius: ${arbRoundedMatch[1]}; }`;
  }
  const arbBorderMatch = cls.match(/^border-\[(.+)\]$/);
  if (arbBorderMatch) {
    return `.${escapeSelector(cls)} { border-width: ${arbBorderMatch[1]}; border-style: solid; }`;
  }
  const arbShadowMatch = cls.match(/^shadow-\[(.+)\]$/);
  if (arbShadowMatch) {
    return `.${escapeSelector(cls)} { box-shadow: ${arbShadowMatch[1]}; }`;
  }
  const arbBlurMatch = cls.match(/^blur-\[(.+)\]$/);
  if (arbBlurMatch) {
    return `.${escapeSelector(cls)} { filter: blur(${arbBlurMatch[1]}); }`;
  }
  const arbScaleMatch = cls.match(/^scale-\[(.+)\]$/);
  if (arbScaleMatch) {
    return `.${escapeSelector(cls)} { transform: scale(${arbScaleMatch[1]}); }`;
  }
  const arbRotateMatch = cls.match(/^rotate-\[(.+)\]$/);
  if (arbRotateMatch) {
    return `.${escapeSelector(cls)} { transform: rotate(${arbRotateMatch[1]}); }`;
  }
  const arbTranslateXMatch = cls.match(/^translate-x-\[(.+)\]$/);
  if (arbTranslateXMatch) {
    return `.${escapeSelector(cls)} { transform: translateX(${arbTranslateXMatch[1]}); }`;
  }
  const arbTranslateYMatch = cls.match(/^translate-y-\[(.+)\]$/);
  if (arbTranslateYMatch) {
    return `.${escapeSelector(cls)} { transform: translateY(${arbTranslateYMatch[1]}); }`;
  }
  return null;
}
var init_effects = __esm({
  "src/generator/effects.ts"() {
    "use strict";
    init_utils();
  }
});

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
      const selectorMatch = r.match(/^\.((?:\\.|[^ {>+~:])*)/);
      if (selectorMatch && selectorMatch[1]) {
        const key = selectorMatch[1].replace(/\\(.)/g, "$1");
        baseRuleMap.set(key, r);
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
        case "file":
          selector += "::file-selector-button";
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
    if (cls === "animate-none") {
      rules.push(`.${escapeSelector(cls)} { animation: none; }`);
      continue;
    }
    if (cls === "animate-spin") {
      rules.push(`.${escapeSelector(cls)} { animation: alive-spin 1s linear infinite; }`);
      continue;
    }
    if (cls === "animate-ping") {
      rules.push(`.${escapeSelector(cls)} { animation: alive-ping 1s cubic-bezier(0,0,0.2,1) infinite; }`);
      continue;
    }
    if (cls === "animate-pulse") {
      rules.push(`.${escapeSelector(cls)} { animation: alive-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }`);
      continue;
    }
    if (cls === "animate-bounce") {
      rules.push(`.${escapeSelector(cls)} { animation: alive-bounce 1s infinite; }`);
      continue;
    }
    if (cls === "animate-shimmer") {
      rules.push(`.${escapeSelector(cls)} { animation: alive-shimmer 1.5s linear infinite; }`);
      continue;
    }
    if (cls === "ease-linear") {
      rules.push(`.${escapeSelector(cls)} { transition-timing-function: linear; }`);
      continue;
    }
    if (cls === "ease-in") {
      rules.push(`.${escapeSelector(cls)} { transition-timing-function: cubic-bezier(0.4,0,1,1); }`);
      continue;
    }
    if (cls === "ease-out") {
      rules.push(`.${escapeSelector(cls)} { transition-timing-function: cubic-bezier(0,0,0.2,1); }`);
      continue;
    }
    if (cls === "ease-in-out") {
      rules.push(`.${escapeSelector(cls)} { transition-timing-function: cubic-bezier(0.4,0,0.2,1); }`);
      continue;
    }
    if (cls === "group") {
      rules.push(`.${escapeSelector(cls)} {}`);
      continue;
    }
    const staggerMatch = cls.match(/^stagger-(\d+)$/);
    if (staggerMatch) {
      rules.push(`.${escapeSelector(cls)} { --alive-stagger-gap: ${staggerMatch[1]}ms; }`);
      continue;
    }
    const indexMatch = cls.match(/^alive-index-(\d+)$/);
    if (indexMatch) {
      rules.push(`.${escapeSelector(cls)} { --alive-index: ${indexMatch[1]}; }`);
      continue;
    }
    const durationMatch = cls.match(/^duration-(\d+)$/);
    if (durationMatch) {
      rules.push(`.${escapeSelector(cls)} { --alive-duration: ${durationMatch[1]}ms; }`);
      continue;
    }
    const delayMatch = cls.match(/^delay-(\d+)$/);
    if (delayMatch) {
      rules.push(`.${escapeSelector(cls)} { animation-delay: ${delayMatch[1]}ms; }`);
      continue;
    }
    const motionMsMatch = cls.match(/^motion-(\d+)$/);
    if (motionMsMatch) {
      rules.push(`.${escapeSelector(cls)} { --alive-duration: ${motionMsMatch[1]}ms !important; }`);
      continue;
    }
    if (cls === "divide-x") {
      rules.push(`.${escapeSelector(cls)}> * + * { border-left-width: 1px; border-left-style: solid; }`);
      continue;
    }
    if (cls === "divide-y") {
      rules.push(`.${escapeSelector(cls)}> * + * { border-top-width: 1px; border-top-style: solid; }`);
      continue;
    }
    const divideColorMatch = cls.match(/^divide-([a-z]+)(?:-(\d+))?$/);
    if (divideColorMatch) {
      rules.push(`.${escapeSelector(cls)}> * + * { border-color: inherit; }`);
      continue;
    }
    if (cls === "appearance-none") {
      rules.push(`.${escapeSelector(cls)} { appearance: none; }`);
      continue;
    }
    if (cls === "appearance-auto") {
      rules.push(`.${escapeSelector(cls)} { appearance: auto; }`);
      continue;
    }
    if (cls === "resize-none") {
      rules.push(`.${escapeSelector(cls)} { resize: none; }`);
      continue;
    }
    if (cls === "resize") {
      rules.push(`.${escapeSelector(cls)} { resize: both; }`);
      continue;
    }
    if (cls === "resize-y") {
      rules.push(`.${escapeSelector(cls)} { resize: vertical; }`);
      continue;
    }
    if (cls === "resize-x") {
      rules.push(`.${escapeSelector(cls)} { resize: horizontal; }`);
      continue;
    }
    if (cls === "snap-none") {
      rules.push(`.${escapeSelector(cls)} { scroll-snap-type: none; }`);
      continue;
    }
    if (cls === "snap-x") {
      rules.push(`.${escapeSelector(cls)} { scroll-snap-type: x mandatory; }`);
      continue;
    }
    if (cls === "snap-y") {
      rules.push(`.${escapeSelector(cls)} { scroll-snap-type: y mandatory; }`);
      continue;
    }
    if (cls === "snap-start") {
      rules.push(`.${escapeSelector(cls)} { scroll-snap-align: start; }`);
      continue;
    }
    if (cls === "snap-center") {
      rules.push(`.${escapeSelector(cls)} { scroll-snap-align: center; }`);
      continue;
    }
    if (cls === "snap-end") {
      rules.push(`.${escapeSelector(cls)} { scroll-snap-align: end; }`);
      continue;
    }
    if (cls === "pointer-events-none") {
      rules.push(`.${escapeSelector(cls)} { pointer-events: none; }`);
      continue;
    }
    if (cls === "pointer-events-auto") {
      rules.push(`.${escapeSelector(cls)} { pointer-events: auto; }`);
      continue;
    }
    if (cls === "sr-only") {
      rules.push(`.${escapeSelector(cls)} { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }`);
      continue;
    }
    if (cls === "not-sr-only") {
      rules.push(`.${escapeSelector(cls)} { position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; }`);
      continue;
    }
    if (cls === "will-change-auto") {
      rules.push(`.${escapeSelector(cls)} { will-change: auto; }`);
      continue;
    }
    if (cls === "will-change-transform") {
      rules.push(`.${escapeSelector(cls)} { will-change: transform; }`);
      continue;
    }
    if (cls === "will-change-opacity") {
      rules.push(`.${escapeSelector(cls)} { will-change: opacity; }`);
      continue;
    }
    const lineClampMatch = cls.match(/^line-clamp-(\d+)$/);
    if (lineClampMatch) {
      const n = lineClampMatch[1];
      rules.push(`.${escapeSelector(cls)} { overflow: hidden; display: -webkit-box; -webkit-line-clamp: ${n}; -webkit-box-orient: vertical; }`);
      continue;
    }
    if (cls === "aspect-square") {
      rules.push(`.${escapeSelector(cls)} { aspect-ratio: 1 / 1; }`);
      continue;
    }
    if (cls === "aspect-video") {
      rules.push(`.${escapeSelector(cls)} { aspect-ratio: 16 / 9; }`);
      continue;
    }
    if (cls === "aspect-auto") {
      rules.push(`.${escapeSelector(cls)} { aspect-ratio: auto; }`);
      continue;
    }
    if (cls === "object-contain") {
      rules.push(`.${escapeSelector(cls)} { object-fit: contain; }`);
      continue;
    }
    if (cls === "object-cover") {
      rules.push(`.${escapeSelector(cls)} { object-fit: cover; }`);
      continue;
    }
    if (cls === "object-fill") {
      rules.push(`.${escapeSelector(cls)} { object-fit: fill; }`);
      continue;
    }
    if (cls === "object-none") {
      rules.push(`.${escapeSelector(cls)} { object-fit: none; }`);
      continue;
    }
    if (cls === "object-scale") {
      rules.push(`.${escapeSelector(cls)} { object-fit: scale-down; }`);
      continue;
    }
    if (cls === "mix-blend-multiply") {
      rules.push(`.${escapeSelector(cls)} { mix-blend-mode: multiply; }`);
      continue;
    }
    if (cls === "mix-blend-screen") {
      rules.push(`.${escapeSelector(cls)} { mix-blend-mode: screen; }`);
      continue;
    }
    if (cls === "mix-blend-overlay") {
      rules.push(`.${escapeSelector(cls)} { mix-blend-mode: overlay; }`);
      continue;
    }
    if (cls === "mix-blend-normal") {
      rules.push(`.${escapeSelector(cls)} { mix-blend-mode: normal; }`);
      continue;
    }
    if (cls === "isolate") {
      rules.push(`.${escapeSelector(cls)} { isolation: isolate; }`);
      continue;
    }
    if (cls === "isolation-auto") {
      rules.push(`.${escapeSelector(cls)} { isolation: auto; }`);
      continue;
    }
    if (cls === "touch-auto") {
      rules.push(`.${escapeSelector(cls)} { touch-action: auto; }`);
      continue;
    }
    if (cls === "touch-none") {
      rules.push(`.${escapeSelector(cls)} { touch-action: none; }`);
      continue;
    }
    if (cls === "touch-pan-x") {
      rules.push(`.${escapeSelector(cls)} { touch-action: pan-x; }`);
      continue;
    }
    if (cls === "touch-pan-y") {
      rules.push(`.${escapeSelector(cls)} { touch-action: pan-y; }`);
      continue;
    }
    if (cls === "touch-manipulation") {
      rules.push(`.${escapeSelector(cls)} { touch-action: manipulation; }`);
      continue;
    }
    if (cls === "select-none") {
      rules.push(`.${escapeSelector(cls)} { user-select: none; }`);
      continue;
    }
    if (cls === "select-text") {
      rules.push(`.${escapeSelector(cls)} { user-select: text; }`);
      continue;
    }
    if (cls === "select-all") {
      rules.push(`.${escapeSelector(cls)} { user-select: all; }`);
      continue;
    }
    if (cls === "select-auto") {
      rules.push(`.${escapeSelector(cls)} { user-select: auto; }`);
      continue;
    }
    if (cls === "break-normal") {
      rules.push(`.${escapeSelector(cls)} { overflow-wrap: normal; word-break: normal; }`);
      continue;
    }
    if (cls === "break-words") {
      rules.push(`.${escapeSelector(cls)} { overflow-wrap: break-word; }`);
      continue;
    }
    if (cls === "break-all") {
      rules.push(`.${escapeSelector(cls)} { word-break: break-all; }`);
      continue;
    }
    if (cls === "break-keep") {
      rules.push(`.${escapeSelector(cls)} { word-break: keep-all; }`);
      continue;
    }
  }
  return rules;
}
var init_generator = __esm({
  "src/generator/index.ts"() {
    "use strict";
    init_base();
    init_colors2();
    init_spacing();
    init_typography();
    init_layout();
    init_sizing();
    init_effects();
    init_utils();
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  generateBase: () => generateBase,
  generateUtilities: () => generateUtilities,
  resolveConfig: () => resolveConfig,
  scanContent: () => scanContent
});
var aliveui, src_default;
var init_src = __esm({
  "src/index.ts"() {
    "use strict";
    init_config();
    init_scanner();
    init_generator();
    init_config();
    init_generator();
    init_scanner();
    aliveui = (userConfig = {}) => {
      const config = resolveConfig(userConfig);
      return {
        postcssPlugin: "aliveui",
        async Once(root, { result, postcss }) {
          const classes = await scanContent(config);
          const hasAliveDirective = root.some((node) => node.type === "atrule" && node.name === "aliveui");
          if (hasAliveDirective) {
            const layerDecl = postcss.atRule({ name: "layer", params: "aliveui.base, aliveui.utilities" });
            root.prepend(layerDecl);
          }
          root.walkAtRules("aliveui", (atRule) => {
            const param = atRule.params.trim();
            if (param === "base") {
              const css = `@layer aliveui.base {
${generateBase(config)}
}`;
              const parsed = postcss.parse(css, { from: atRule.source?.input.file });
              atRule.replaceWith(parsed.nodes);
            } else if (param === "utilities") {
              const css = `@layer aliveui.utilities {
${generateUtilities(classes, config)}
}`;
              const parsed = postcss.parse(css, { from: atRule.source?.input.file });
              atRule.replaceWith(parsed.nodes);
            } else {
              result.warn(`Unknown @aliveui directive: "${param}". Use "base" or "utilities".`, {
                node: atRule
              });
              atRule.remove();
            }
          });
        }
      };
    };
    aliveui.postcss = true;
    src_default = aliveui;
    if (typeof module !== "undefined") {
      module.exports = aliveui;
      module.exports.default = aliveui;
    }
  }
});

// src/vite.ts
function aliveUIVite(config) {
  return {
    name: "vite-plugin-aliveui",
    config() {
      const aliveui2 = (init_src(), __toCommonJS(src_exports));
      return {
        css: {
          postcss: {
            plugins: [aliveui2.default(config)]
          }
        }
      };
    }
  };
}
var vite_default = aliveUIVite;
export {
  aliveUIVite,
  vite_default as default
};
//# sourceMappingURL=vite.mjs.map