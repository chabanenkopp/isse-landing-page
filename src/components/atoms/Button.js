import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, height, fontSize } from 'styled-system'
import { COLORS } from 'Root/constants'
import { theme, radius } from 'Theme'
import { pxToRem } from 'helpers'

const getShadow = (isVisible) =>
  isVisible &&
  `box-shadow: 0 ${pxToRem(10)} ${pxToRem(35)} ${pxToRem(10)} rgba(0,0,0,.1);`

const getCustomShadow = (color, isVisible) =>
  color &&
  isVisible &&
  `box-shadow: ${color} 0 ${pxToRem(10)} ${pxToRem(16)} ${pxToRem(-8)};`

const buttonFuncs = [space, height, fontSize]

const ButtonBase = styled.button`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: ${theme.space.m};
  padding-right: ${theme.space.m};
  height: ${pxToRem(46)};
  min-width: ${theme.space.xxl};
  background-color: ${COLORS.WHITE};
  font-weight: ${theme.fontWeights.bold};
  border-radius: ${radius.m};
  text-decoration: none;
  :focus {
    outline: 0;
  }
`

const Outlined = styled(ButtonBase)`
  ${({ color, borderColor, isShadow, borderRadius }) => `
    border: 1.5px solid ${borderColor};
    color: ${color};
    border-radius: ${borderRadius}
    ${getShadow(isShadow)}}
  `}
  ${({ isTransparent }) => isTransparent && `background-color: transparent;`}
  ${buttonFuncs}
`

Outlined.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  isShadow: PropTypes.bool,
  borderRadius: PropTypes.string,
  isTransparent: PropTypes.bool,
}

Outlined.defaultProps = {
  borderColor: COLORS.ARAGON_GREEN,
  color: COLORS.ENAMELLED_DRAGON,
}

const Filled = styled(ButtonBase)`
  padding-left: ${theme.space.l};
  padding-right: ${theme.space.l};
  ${({ borderRadius }) => `border-radius: ${borderRadius}`};
  color: ${({ color }) => color || COLORS.WHITE};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLORS.ARAGON_GREEN};
  background-image: ${({ gradientFromColor, gradientToColor }) =>
    `linear-gradient(90deg, ${gradientFromColor}, ${gradientToColor})`};
  ${({ gradientFromColor, isShadow }) =>
    getCustomShadow(gradientFromColor, isShadow)};
  ${buttonFuncs};
  transition: background-color 0.5s, transform 0.5s;
  :hover {
    transform: translateY(${pxToRem(6)});
  }
`

Filled.propTypes = {
  isShadow: PropTypes.bool,
  color: PropTypes.string,
  gradientFromColor: PropTypes.string,
  gradientToColor: PropTypes.string,
  borderRadius: PropTypes.string,
}

Filled.defaultProps = {
  gradientFromColor: COLORS.PERICALLIS_HYBRIDA,
  gradientToColor: COLORS.ULTRA_PINK,
}

export default {
  Outlined,
  Filled,
}
