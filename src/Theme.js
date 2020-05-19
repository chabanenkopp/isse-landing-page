/* eslint-disable prefer-destructuring */
import { css } from 'styled-components'
import { fluidRange, math } from 'polished'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'

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
  xxs: pxToRem(2),
  xs: pxToRem(4),
  s: pxToRem(8),
  m: pxToRem(16),
  l: pxToRem(32),
  xl: pxToRem(64),
  xxl: pxToRem(128),
  xxxl: pxToRem(256),
  xxxxl: pxToRem(400),
}

export const fontSizes = {
  xxs: pxToRem(10),
  xs: pxToRem(12),
  s: pxToRem(14),
  m: pxToRem(16),
  l: pxToRem(18),
  xl: pxToRem(20),
  xxl: pxToRem(30),
  xxxl: pxToRem(40),
  xxxxl: pxToRem(45),
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
  html {
    ${fluidRange({
      prop: 'font-size',
      fromSize: '14px',
      toSize: '18px',
    })}
  }
  body {
    font-family: ${fontStack};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    min-width: 320px;
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
breakpoints.desktop = breakpoints[3]

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

// export const breakpoints = ['375px', '850px']

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  breakpoints,
}
