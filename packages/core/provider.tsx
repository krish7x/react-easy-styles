import React, {
  PropsWithChildren,
  useMemo,
  useState,
} from 'react'
import ThemeContext, { defaultContext } from './theming'
import { ThemeContext as CoreThemeContext, CreateTheme, ThemeType } from './types'
import {  getDocumentCSSTokens, getThemeName } from './utils'
import merge from 'lodash.merge'

const isObject = (target: unknown) => target && typeof target === 'object'

const copyObject = (obj: any) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  return { ...obj }
}

export interface ProviderProps {
  theme?: CreateTheme
}

/**
 * The global provider that must be added to make all Theme components
 * work correctly
 */
export const Provider: React.FC<PropsWithChildren<ProviderProps>> = (
  props,
) => {
  const { children } = props
  const [currentTheme, setCurrentTheme] = useState<ThemeType | string>(
    defaultContext.type,  )

  const providerValue = useMemo<CoreThemeContext>(() => {
    const themeTokens = getDocumentCSSTokens()
    const theme = merge(copyObject(defaultContext.theme), themeTokens)
    const themeName = getThemeName(currentTheme)
    return {
      theme,
      type: themeName,
      isDark: themeName === 'dark',
    }
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}
