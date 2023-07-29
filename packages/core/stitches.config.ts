import {
  createStitches,
  VariantProps as StitchesVariantProps,
  ScaleValue as StitchesScaleValue,
  PropertyValue as StitchesPropertyValue,
  CSS as StitchesCSS,
} from '@stitches/react'
import type {
  CSSProperties,
  CSS as UtilCSS,
} from '@stitches/react/types/css-util'
import merge from 'lodash.merge'
import commonTheme from './theme/common'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import { Theme, BaseTheme } from './types'

export const getStitchesTheme = (targetTheme: BaseTheme): BaseTheme => {
  return merge(targetTheme, commonTheme.theme)
}

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    shadows: {
      ...lightTheme.shadows,
    },
    dropShadows: {
      ...lightTheme.dropShadows,
    },
    colors: {
      ...commonTheme.theme.colors,
      ...lightTheme.colors,
    },
  },
})

export const createThemeBase = stitches.createTheme
export const styled = stitches.styled
export const css = stitches.css
export const globalCss = stitches.globalCss
export const keyframes = stitches.keyframes
export const getCssText = stitches.getCssText
export const reset = stitches.reset
export const theme = stitches.theme
export const config= stitches.config

export type ThemeConfig = typeof config

export type CustomThemeConfig<T = ThemeConfig['theme']> = UtilCSS<
  ThemeConfig['media'],
  T,
  ThemeConfig['themeMap'],
  ThemeConfig['utils']
>

export type VariantProps<T extends {[key: symbol | string]: any}> = StitchesVariantProps<T>
export type ScaleValue<T, Config = ThemeConfig> = StitchesScaleValue<T, Config>
export type PropertyValue<
  T extends keyof CSSProperties,
  Config = ThemeConfig,
> = StitchesPropertyValue<T, Config>

export type CSS = StitchesCSS<ThemeConfig>
export type DefaultTheme = typeof theme

export const createTheme = ({ type, theme, className }: Theme) => {
  if (!type) {
    throw new Error('Theme type is required')
  }
  return createThemeBase(
    className || `${type}-theme`,
    merge(type === 'dark' ? darkTheme : lightTheme, theme),
  )
}
