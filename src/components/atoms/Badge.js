import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem } from 'polished'
import {
  BORDER_WIDTH,
  BOXSHADOWS,
  radius,
  space,
  fontSizes,
  fontWeights,
} from 'Theme'
import { COLORS } from 'Root/constants'
import { Box } from 'components/atoms/Layout'
import TickIcon from 'assets/images/badge-tick.inline.svg'

const BadgeBase = styled(Box)`
  white-space: nowrap;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  height: ${rem(20)};
  border-radius: ${radius.s};
  font-size: ${fontSizes.xxs};
  font-weight: ${fontWeights.semi_bold};
  box-shadow: ${({ boxShadow }) => boxShadow};
  padding: 0 ${space.xs};
`

const Badge = styled(BadgeBase)`
  color: ${({ color }) => color || COLORS.DAYBREAK};
  border: ${BORDER_WIDTH} solid ${COLORS.PALE_ORCHID};
  border-bottom-color: ${COLORS.VIOLET_BOUQUET};
  background-color: ${COLORS.WHITE};
`

const Filled = styled(BadgeBase)`
  color: ${COLORS.WHITE};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLORS.DAYBREAK};
`

Filled.defaultProps = {
  boxShadow: BOXSHADOWS.DARK,
}

Badge.Filled = Filled

const Icon = styled(TickIcon)`
  height: ${rem(10)};
  margin-right: ${space.xs};
`

const Success = ({ children, ...props }) => (
  <Filled
    color={COLORS.WHITE}
    backgroundColor={COLORS.EXPLORATION_GREEN}
    {...props}
  >
    <div>
      <Icon />
      {children}
    </div>
  </Filled>
)

Badge.Success = Success

Success.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Badge
