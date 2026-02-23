#!/usr/bin/env node
import { Command } from 'commander'
import { watch as chokidarWatch } from 'chokidar'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { resolveConfig } from './config'
import { scanContent } from './scanner'
import { generateBase, generateUtilities } from './generator'
import type { AliveUIConfig } from './types'

const program = new Command()

program
  .name('aliveui')
  .description('AliveUI — motion-first CSS framework')
  .version('1.0.0')

// ─── init ────────────────────────────────────────────────────────────────────
program
  .command('init')
  .description('Create an aliveui.config.js in the current directory')
  .action(() => {
    const configPath = resolve(process.cwd(), 'aliveui.config.js')
    if (existsSync(configPath)) {
      console.log('aliveui.config.js already exists.')
      process.exit(1)
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
`
    writeFileSync(configPath, template, 'utf-8')
    console.log('Created aliveui.config.js')
    console.log('\nNext steps:')
    console.log('  1. Add your content paths to aliveui.config.js')
    console.log('  2. Run: aliveui build')
    console.log('  3. Link the output CSS in your HTML')
  })

// ─── build ───────────────────────────────────────────────────────────────────
program
  .command('build')
  .description('Scan content and generate alive.css')
  .option('-c, --config <path>', 'Path to config file', 'aliveui.config.js')
  .option('-o, --output <path>', 'Output CSS file path')
  .option('--minify', 'Minify output')
  .action(async opts => {
    const start = Date.now()
    try {
      const { config, outputPath } = loadConfig(opts)
      const css = await buildCSS(config)
      const final = opts.minify ? minify(css) : css

      ensureDir(outputPath)
      writeFileSync(outputPath, final, 'utf-8')

      const elapsed = Date.now() - start
      const sizeKb = (Buffer.byteLength(final, 'utf-8') / 1024).toFixed(1)
      console.log(`Built ${outputPath} (${sizeKb} kB) in ${elapsed}ms`)
    } catch (err) {
      console.error('Build failed:', err instanceof Error ? err.message : err)
      process.exit(1)
    }
  })

// ─── watch ───────────────────────────────────────────────────────────────────
program
  .command('watch')
  .description('Watch content files and rebuild on changes')
  .option('-c, --config <path>', 'Path to config file', 'aliveui.config.js')
  .option('-o, --output <path>', 'Output CSS file path')
  .action(async opts => {
    const { config, outputPath } = loadConfig(opts)

    const rebuild = async () => {
      try {
        const start = Date.now()
        const css = await buildCSS(config)
        ensureDir(outputPath)
        writeFileSync(outputPath, css, 'utf-8')
        const elapsed = Date.now() - start
        console.log(`Rebuilt ${outputPath} in ${elapsed}ms`)
      } catch (err) {
        console.error('Rebuild failed:', err instanceof Error ? err.message : err)
      }
    }

    // Initial build
    await rebuild()

    const patterns = config.content.length > 0 ? config.content : ['./src/**/*']
    const watcher = chokidarWatch(patterns, {
      ignoreInitial: true,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    })

    watcher.on('all', () => rebuild())
    console.log(`Watching ${patterns.join(', ')} for changes...`)
    console.log('Press Ctrl+C to stop.')
  })

// ─── Helpers ─────────────────────────────────────────────────────────────────
function loadConfig(opts: { config: string; output?: string }) {
  const configPath = resolve(process.cwd(), opts.config)
  let userConfig: Partial<AliveUIConfig> = {}

  if (existsSync(configPath)) {
    try {
      // Clear require cache to allow re-reading on watch
      delete require.cache[configPath]
      userConfig = require(configPath)
    } catch (err) {
      console.warn(`Could not load ${opts.config}:`, err instanceof Error ? err.message : err)
    }
  } else {
    console.warn(`No config found at ${opts.config}. Using defaults.`)
  }

  const config = resolveConfig(userConfig)

  // CLI --output flag overrides config output
  const outputPath = resolve(process.cwd(), opts.output ?? config.output)

  return { config, outputPath }
}

async function buildCSS(config: ReturnType<typeof resolveConfig>): Promise<string> {
  const classes = await scanContent(config)
  const base = generateBase(config)
  const utilities = generateUtilities(classes, config)
  return `${base}\n\n${utilities}\n`
}

function ensureDir(filePath: string): void {
  const dir = dirname(filePath)
  mkdirSync(dir, { recursive: true })
}

function minify(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ')              // Collapse whitespace
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/;\}/g, '}')
    .trim()
}

program.parse(process.argv)
