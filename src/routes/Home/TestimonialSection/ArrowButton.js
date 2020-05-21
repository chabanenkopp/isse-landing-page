import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'swiper/css/swiper.css'
import { rem } from 'polished'
import { BOXSHADOWS, radius } from 'Theme'
import { COLORS } from 'Root/constants'
import arrowIcon from 'assets/images/arrow-carousel.svg'

const DIRECTIONS = {
  LEFT: `transform: rotate(0deg);`,
  RIGHT: `transform: rotate(180deg);`,
}

const ArrowImg = styled('img')`
  height: ${rem(15)};
  ${({ direction }) => DIRECTIONS[direction]}
`

const BUTTON_SIZE = rem(32)

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  outline: none;
  cursor: pointer;
  border-radius: ${radius.circle};
  background-color: ${COLORS.WHITE};
  box-shadow: ${BOXSHADOWS.DARK};
  transition: opacity 0.3s;
  border: ${rem(1)} solid ${COLORS.PALE_ORCHID};
`

const ArrowButton = ({ onClick, direction }) => (
  <Button onClick={onClick}>
    <ArrowImg src={arrowIcon} direction={direction} />
  </Button>
)

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
}

export default ArrowButton
