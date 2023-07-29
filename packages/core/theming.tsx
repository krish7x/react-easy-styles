import React from 'react'
import { theme } from './stitches.config'
import { ThemeContext } from './types'

export const defaultContext: ThemeContext = {
  isDark: false,
  theme,
  type: 'light',
}

const ThemeContext: React.Context<ThemeContext> =
  React.createContext<ThemeContext>(defaultContext)

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext'
}

export default ThemeContext
