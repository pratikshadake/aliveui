import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    sourcemap: true,
  },
  {
    entry: { cli: 'src/cli.ts' },
    format: ['cjs'],
    dts: false,
    banner: { js: '#!/usr/bin/env node' },
  },
  {
    entry: { runtime: 'src/runtime.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
  },
  {
    entry: { vite: 'src/vite.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
  },
])
