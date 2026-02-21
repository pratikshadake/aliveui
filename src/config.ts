import type { AliveUIConfig, ResolvedConfig, AliveUITheme } from './types'
import { defaultTheme } from './theme/default'

export function resolveConfig(userConfig: Partial<AliveUIConfig> = {}): ResolvedConfig {
  const userTheme = userConfig.theme as Partial<AliveUITheme> | undefined
  const theme = mergeTheme(defaultTheme, userTheme ?? {})

  return {
    content: userConfig.content ?? [],
    output: userConfig.output ?? 'alive.css',
    theme,
  }
}

function mergeTheme(base: AliveUITheme, overrides: Partial<AliveUITheme>): AliveUITheme {
  return {
    colors: { ...base.colors, ...(overrides.colors ?? {}) },
    spacing: { ...base.spacing, ...(overrides.spacing ?? {}) },
    borderRadius: { ...base.borderRadius, ...(overrides.borderRadius ?? {}) },
    fontSize: { ...base.fontSize, ...(overrides.fontSize ?? {}) },
    fontWeight: { ...base.fontWeight, ...(overrides.fontWeight ?? {}) },
    lineHeight: { ...base.lineHeight, ...(overrides.lineHeight ?? {}) },
    screens: { ...base.screens, ...(overrides.screens ?? {}) },
    opacity: { ...base.opacity, ...(overrides.opacity ?? {}) },
    zIndex: { ...base.zIndex, ...(overrides.zIndex ?? {}) },
    boxShadow: { ...base.boxShadow, ...(overrides.boxShadow ?? {}) },
    darkMode: overrides.darkMode ?? base.darkMode,
  }
}
