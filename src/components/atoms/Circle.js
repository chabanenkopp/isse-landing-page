import styled from 'styled-components'
import { rem } from 'polished'
import { fontSizes, space, BOXSHADOWS, radius } from 'Theme'
import { COLORS } from '../../constants'

const borderOnHover = `0.5px solid ${COLORS.SCAMPI}`
const borderDisabled = `0.5px solid ${COLORS.PALE_ORCHID}`
export const BUTTON_HEIGHT = rem('40px')
const ROUND_BUTTON_HEIGHT = rem('32px')

const ButtonBase = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${radius.m};
  min-width: ${rem(62)};
  background-color: ${COLORS.WHITE};
  ${({ isBlock }) => isBlock && `width: 100%`};
`

ButtonBase.defaultProps = {
  type: 'button',
}

const pillActiveStyle = `
  box-shadow: none;
  background-color: ${COLORS.PALE_ORCHID};
  border: ${borderOnHover};
  box-shadow: ${BOXSHADOWS.INNER};
`

const Pill = styled(ButtonBase)`
  font-size: ${fontSizes.s};
  height: ${ROUND_BUTTON_HEIGHT};
  min-width: ${rem('46px')};
  padding: 0 ${space.m};
  border-radius: ${radius.pill};
  color: ${COLORS.VANISHING};
  background-color: ${COLORS.WHITE};
  box-shadow: ${BOXSHADOWS.DARK};
  border: ${borderDisabled};
  :hover {
    border: ${borderOnHover};
  }
  :active {
    ${pillActiveStyle}
  }
  :disabled {
    box-shadow: none;
    background-color: ${COLORS.LYNX_WHITE};
    color: ${COLORS.DAYBREAK};
    border: ${borderDisabled};
  }

  ${({ isActive }) => isActive && pillActiveStyle}

  ${({ isOutlined, isActive }) =>
    isOutlined &&
    !isActive &&
    `
      &:not(:hover):not(:disabled) {
        box-shadow: ${BOXSHADOWS.DARK}, inset 0 0 0 1.5px ${COLORS.SCAMPI};
        border-color: transparent;
      }
    `}
`

const Circle = styled(Pill)`
  overflow: hidden;

  flex: none;
  width: ${ROUND_BUTTON_HEIGHT};
  min-width: 0;
  padding: 0 ${space.xs};

  font-size: ${fontSizes.m};
`

export default Circle
