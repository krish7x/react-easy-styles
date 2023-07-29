import { defaultThemeMap as defaultStitchesThemeMap, PropertyValue } from '@stitches/react'
import * as colors from './colors'

export const defaultTokens = {
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",
  },
  fontSizes: {
    1: '12px',
    2: '13px',
    3: '15px',
    4: '17px',
    5: '19px',
    6: '21px',
    7: '27px',
    8: '35px',
    9: '59px',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  space: {
    1: '5px',
    2: '10px',
    3: '15px',
    4: '20px',
    5: '25px',
    6: '35px',
    7: '45px',
    8: '55px',
    9: '65px',
  },
  sizes: {
    1: '5px',
    2: '10px',
    3: '15px',
    4: '20px',
    5: '25px',
    6: '35px',
    7: '45px',
    8: '55px',
    9: '65px',
  },
  radii: {
    1: '4px',
    2: '6px',
    3: '8px',
    4: '12px',
    round: '50%',
    pill: '9999px',
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999',
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px',
  },
  transitions: {
    default: 'all 250ms ease',
    button:
      'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
    avatar: 'box-shadow 0.25s ease 0s, opacity 0.25s ease 0s',
    link: 'opacity 0.25s ease 0s, background 0.25s ease 0s',
    card: 'transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s',
    dropdownItem:
      'background 0.25s ease, transform 0.25s ease, color 0.15s ease, box-shadow 0.25s ease 0s',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
}

export const defaultColors = colors;

export const defaultMedia = {
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xxl: `(min-width: ${defaultTokens.breakpoints.xxl})`,
  smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
  lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
  xxlMax: `(max-width: ${defaultTokens.breakpoints.xxl})`,
  motion: '(prefers-reduced-motion: reduce)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
}

// export const defaultUtils = {
//   truncateText: (value: PropertyValue<'width'>) => ({
//     maxWidth: value,
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   }),
// }

export const defaultThemeMap = {
  ...defaultStitchesThemeMap,
  borderWidth: 'borderWeights',
}

export default {
  prefix: 'react-easy-styles',
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: {},
    dropShadows: {}
  },
  media: defaultMedia,
  themeMap: defaultThemeMap,
}
