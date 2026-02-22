# AliveUI

**Motion-first CSS framework. Every surface has depth. Every interaction is alive.**

Modern interfaces are visually structured but temporally dead. AliveUI treats motion, depth, and interaction feedback as first-class primitives — encoded directly into the utility system, not bolted on as an afterthought.

---

## Install

```bash
npm install @pratikshadake/aliveui
```

---

## Two ways to use it

### 1. PostCSS Plugin

Add to `postcss.config.js`:

```js
module.exports = {
  plugins: {
    '@pratikshadake/aliveui': {
      content: ['./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}'],
    },
  },
}
```

In your CSS entry file:

```css
@aliveui base;
@aliveui utilities;
```

### 2. CLI

```bash
# Create config
npx @pratikshadake/aliveui init

# Build once
npx @pratikshadake/aliveui build

# Watch mode
npx @pratikshadake/aliveui watch
```

Config file (`aliveui.config.js`):

```js
/** @type {import('@pratikshadake/aliveui').AliveUIConfig} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  output: './public/alive.css',
  theme: {
    // optional overrides
  },
}
```

---

## Core Concepts

### Depth

Every surface belongs to one of three depth levels. Depth is not just visual — it controls motion behavior.

```html
<!-- d1: base surface — color transitions only -->
<div class="d1 bg-white p-6 rounded-xl">...</div>

<!-- d2: elevated interactive — elevation + scale on hover -->
<div class="d2 bg-white p-6 rounded-xl">...</div>

<!-- d3: floating layer — strong shadow, entrance animations -->
<div class="d3 bg-white p-6 rounded-xl">...</div>
```

The depth context propagates through the DOM via CSS custom properties. Every child utility that involves color or opacity will automatically transition with the correct duration and easing — no `transition-colors duration-200` needed.

```html
<!-- bg-blue-500 inside d2 transitions automatically -->
<div class="d2 rounded-xl p-4">
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
    Automatically animated
  </button>
</div>
```

### Motion Tokens

Three durations. Three easing curves. No arbitrary values.

| Token | Value |
|-------|-------|
| `--alive-duration-fast` | 120ms |
| `--alive-duration-normal` | 200ms |
| `--alive-duration-slow` | 320ms |
| `--alive-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--alive-ease-emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` |
| `--alive-ease-exit` | `cubic-bezier(0.3, 0, 0.8, 0.15)` |

Override on any element:

```html
<div class="d2 motion-fast">Fast elevation</div>
<div class="d2 ease-emphasized">Emphasized hover</div>
```

### Entrance Animations

```html
<div class="alive-enter">Fades up on load</div>
<div class="alive-enter-fade">Fades in on load</div>
<div class="alive-enter-scale">Scales in on load</div>
```

Staggered entrance using CSS custom properties:

```html
<ul>
  <li class="alive-enter" style="--alive-index: 0">First</li>
  <li class="alive-enter" style="--alive-index: 1">Second</li>
  <li class="alive-enter" style="--alive-index: 2">Third</li>
</ul>
```

---

## Utilities

AliveUI ships a full utility set. Class names are intentionally compatible with Tailwind conventions where they overlap.

### Depth & Motion

```
d1  d2  d3
motion-fast  motion-normal  motion-slow  motion-none
ease-standard  ease-emphasized  ease-exit
alive-enter  alive-enter-fade  alive-enter-scale
```

### Layout

```
flex  inline-flex  grid  block  hidden  contents
flex-row  flex-col  flex-wrap  flex-nowrap
flex-1  flex-auto  flex-none
items-start  items-center  items-end  items-stretch
justify-start  justify-center  justify-end  justify-between
grid-cols-{1-12}  grid-rows-{1-6}
col-span-{n}  row-span-{n}
gap-{size}  gap-x-{size}  gap-y-{size}
relative  absolute  fixed  sticky
```

### Spacing

```
p-{size}  px-{size}  py-{size}  pt-{size}  pr-{size}  pb-{size}  pl-{size}
m-{size}  mx-{size}  my-{size}  mt-{size}  mr-{size}  mb-{size}  ml-{size}
top-{size}  right-{size}  bottom-{size}  left-{size}  inset-{size}
```

Size scale: `0 0.5 1 1.5 2 2.5 3 4 5 6 8 10 12 16 20 24 32 40 48 64 96 ...`

### Colors

```
bg-{color}-{shade}    text-{color}-{shade}    border-{color}-{shade}
ring-{color}-{shade}  fill-{color}-{shade}    stroke-{color}-{shade}
```

Colors: `slate gray zinc neutral stone red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose`

Shades: `50 100 200 300 400 500 600 700 800 900 950`

All color utilities that live inside a depth context (`d1`, `d2`, `d3`) automatically transition with the correct motion timing.

### Typography

```
text-{xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl}
font-{thin|extralight|light|normal|medium|semibold|bold|extrabold|black}
font-{sans|serif|mono}
leading-{tight|snug|normal|relaxed|loose}
tracking-{tighter|tight|normal|wide|wider|widest}
text-left  text-center  text-right  text-justify
uppercase  lowercase  capitalize
underline  line-through  no-underline
truncate  whitespace-nowrap
italic
```

### Sizing

```
w-{size}  w-full  w-screen  w-auto  w-min  w-max  w-fit
w-1/2  w-1/3  w-2/3  w-1/4  w-3/4
h-{size}  h-full  h-screen  h-auto
min-w-{size}  max-w-{size|xs|sm|md|lg|xl|2xl|...}
min-h-{size}  max-h-{size}
```

### Effects

```
opacity-{0|5|10|20|25|30|40|50|60|70|75|80|90|95|100}
shadow-{sm|DEFAULT|md|lg|xl|2xl|none}
rounded-{none|sm|DEFAULT|md|lg|xl|2xl|3xl|full}
border  border-{0|2|4|8}  border-{t|r|b|l}
ring  ring-{1|2|4}
blur-{sm|DEFAULT|md|lg|xl}
backdrop-blur-{sm|DEFAULT|md|lg|xl}
scale-{0|50|75|90|95|100|105|110|125|150}
z-{0|10|20|30|40|50}
overflow-{hidden|auto|scroll|visible}
cursor-{pointer|default|not-allowed|wait|text|grab}
select-{none|text|all}
```

### Variants

```
hover:    focus:    focus-visible:    active:    disabled:
dark:     md:       lg:               xl:        2xl:
first:    last:     odd:              even:
group-hover:  (requires class="group" on parent)
```

---

## Components

AliveUI ships three primitive components — thin semantic wrappers for common patterns.

```html
<!-- Card -->
<div class="alive-card d2">
  Content here
</div>

<!-- Button variants -->
<button class="alive-button alive-button-primary">Primary</button>
<button class="alive-button alive-button-secondary">Secondary</button>
<button class="alive-button alive-button-ghost">Ghost</button>

<!-- Button sizes -->
<button class="alive-button alive-button-primary alive-button-sm">Small</button>
<button class="alive-button alive-button-primary alive-button-lg">Large</button>

<!-- Stack layout -->
<div class="alive-stack alive-stack-v gap-4">
  <div>Item one</div>
  <div>Item two</div>
</div>
```

---

## Configuration

```js
/** @type {import('@pratikshadake/aliveui').AliveUIConfig} */
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
  output: './public/alive.css',
  theme: {
    // Add custom colors
    colors: {
      brand: '#6366f1',
    },
    // Add custom spacing
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
    },
    // Dark mode strategy: 'media' (default) or 'class'
    darkMode: 'class',
  },
}
```

---

## Design Rules

These are not conventions. They are the system.

**One primary animated element per view.** AliveUI's motion model is calm, not spectacular.

**No arbitrary durations.** Use `motion-fast` (120ms), `motion-normal` (200ms), or `motion-slow` (320ms).

**No infinite loops.** No parallax. No scroll-triggered chaos.

**Depth determines motion behavior.** `d1` does color shifts. `d2` does elevation. `d3` does entrances.

---

## What AliveUI is NOT

- Not a Tailwind clone — though class names are intentionally familiar
- Not an animation playground — motion is a structural primitive, not decoration
- Not a component library — three primitives, composable with utilities
- Not opinionated about your color palette — use any colors via config

---

## License

MIT
