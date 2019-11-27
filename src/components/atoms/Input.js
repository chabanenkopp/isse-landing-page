import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize } from 'polished'
import { theme, border, radius } from 'Theme'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import { space, height, fontSize, width, maxWidth } from 'styled-system'

const inputFuncs = [space, height, width, maxWidth, fontSize]

const Input = styled.input`
  height: ${pxToRem(56)};
  border-radius: ${radius.xl};
  color: ${COLORS.LUXURY};
  font-size: 16px;
  display: block;
  background-color: ${({ isValid }) =>
    isValid ? `unset` : transparentize(0.85, COLORS.RED_ORANGE_JUICE)};
  :focus {
    border-color: ${COLORS.ROCK_BLUE};
    outline: none;
  }
  ::placeholder {
    color: ${COLORS.LUXURY};
    font-family: Lato;
    font-size: ${theme.fontSizes.m};
  }
  border: ${({ borderParams }) => borderParams || border};
  ${inputFuncs}
`

Input.propTypes = {
  isValid: PropTypes.bool,
  borderParams: PropTypes.string,
}

const TextArea = styled.textarea`
  height: ${pxToRem(80)};
  border-radius: ${radius.xl};
  color: ${COLORS.LUXURY};
  font-size: 16px;
  display: block;
  background-color: ${({ isValid }) =>
    isValid ? `unset` : transparentize(0.85, COLORS.RED_ORANGE_JUICE)};
  :focus {
    border-color: ${COLORS.ROCK_BLUE};
    outline: none;
  }
  ::placeholder {
    color: ${COLORS.LUXURY};
    font-family: Lato;
    font-size: ${theme.fontSizes.m};
  }
  border: ${({ borderParams }) => borderParams || border};
  ${inputFuncs}
`

TextArea.propTypes = {
  isValid: PropTypes.bool,
  borderParams: PropTypes.string,
}

Input.TextArea = TextArea

Input.defaultProps = {
  isValid: true,
}

export default Input
