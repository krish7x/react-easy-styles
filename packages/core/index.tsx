import {
  getStitchesTheme,
  createTheme,
  createThemeBase,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  reset,
  config,
  theme,
  DefaultTheme,
  CSS,
  ScaleValue,
  VariantProps,
  PropertyValue,
  CustomThemeConfig,
  ThemeConfig,
} from './stitches.config'

export * from './types'
export {
  getStitchesTheme,
  createTheme,
  createThemeBase,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  reset,
  config,
  theme,
}
export type { DefaultTheme as Theme, CSS, ScaleValue, VariantProps, PropertyValue, CustomThemeConfig, ThemeConfig }
export * as colors from './theme/colors'
export { Provider } from './provider'
