/* eslint-disable prefer-destructuring */
import { css } from 'styled-components'
import { fluidRange, math, rem } from 'polished'
import { COLORS } from 'Root/constants'

export const MAX_CONTENT_WIDTH = rem('1120px')

export const getTransition = (property) =>
  `${property} 0.5s cubic-bezier(0.77,0.2,0.05,1.0)`

export const fontStack = `"Montserrat", sans-serif;`

export const colors = {
  text: COLORS.SHADOWED_STEEL,
  secondaryText: COLORS.CODEX_GREY,
  heading: COLORS.LEAD,
  lightBg: COLORS.ZHEN_ZHU_BAI_PEARL,
  white: COLORS.WHITE,
}

export const BOXSHADOWS = {
  TOOLTIP: ` 0px 13px 38px 0px rgba(32, 32, 32, 0.1)`,
  LIGHT: '0px -1px 2px rgba(143, 133, 165, 0.24)',
  DARK: '0px 1px 2px rgba(13, 64, 128, 0.19)',
  INNER: 'inset 1px 1px 4px rgba(0, 0, 0, 0.08)',
  CARD:
    '0px 2px 8px rgba(66, 149, 165, 0.2), 0px 2px 2px rgba(66, 149, 165, 0.25)',
}

export const space = {
  xxs: rem(2),
  xs: rem(4),
  s: rem(8),
  m: rem(16),
  l: rem(32),
  xl: rem(64),
  xxl: rem(128),
  xxxl: rem(256),
  xxxxl: rem(400),
}

export const fontSizes = {
  xxs: rem(10),
  xs: rem(12),
  s: rem(14),
  m: rem(16),
  l: rem(18),
  xl: rem(20),
  xxl: rem(30),
  xxxl: rem(40),
  xxxxl: rem(45),
}

export const fontWeights = {
  extra_thin: 300,
  thin: 400,
  normal: 500,
  semi_bold: 600,
  bold: 700,
}

export const radius = {
  m: '4px',
  l: '10px',
  xl: '30px',
  circle: '50%',
  pill: '9999px',
}

export const border = `1px solid ${COLORS.ROCK_BLUE}`

export const globalStyles = css`
  :root {
    --reach-dialog: 1; /* https://reacttraining.com/reach-ui/styling/#skip-including-styles */
  }
  html,
  body {
    min-width: 320px;
    margin: 0;
  }
  html {
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '13px',
        toSize: '18px',
      },
      '320px',
      '2200px'
    )}
    cursor: initial;
  }
  body {
    font-family: ${fontStack};
    letter-spacing: -${1 / 32}em;
    color: ${COLORS.BLUE_ZODIAC};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 0.5em 0;
  }
  h1,
  h2,
  h3 {
    line-height: 1.3;
  }
  h4,
  h5,
  h6 {
    line-height: 1.5;
  }
  p {
    margin: 0;
  }
  ol {
    margin: 0;
    padding: 0;
  }
  input,
  textarea,
  button {
    font-family: inherit;
    font-size: ${fontSizes.m};
    letter-spacing: inherit;
    box-sizing: border-box;
  }
  input::placeholder {
    font-size: inherit;
  }
  button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  input[type='number'] {
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  code,
  kbd,
  samp,
  pre {
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  :focus {
    outline: none;
  }
`

const devices = {
  mobile: '0',
  tablet: '768px',
  desktop: '1024px',
  tv: '1440px',
}

export const breakpoints = [
  devices.mobile,
  devices.tablet,
  devices.desktop,
  devices.tv,
]

breakpoints.mobile = breakpoints[0]
breakpoints.tablet = breakpoints[1]
breakpoints.desktop = breakpoints[2]
breakpoints.tv = breakpoints[3]

const mediaQuery = ({ mobileFirst = true }) =>
  Object.entries(devices).reduce(
    (deviceMediaQueries, [label, breakpoint]) => ({
      ...deviceMediaQueries,
      [label]: (...args) => css`
        @media screen and (${mobileFirst ? 'min-width' : 'max-width'}: ${math(
        `${breakpoint} - 0.1px`
      )}) {
          ${css(...args)}
        }
      `,
    }),
    {}
  )

export const mq = {
  to: mediaQuery({ mobileFirst: false }),
  from: mediaQuery({ mobileFirst: true }),
}

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  breakpoints,
}
