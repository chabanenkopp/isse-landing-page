import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { transparentize, rem } from 'polished'
import { Box, Flex } from 'components/atoms/Layout'
import { COLORS } from 'Root/constants'
import { fontWeights, radius, space } from 'Theme'
import Button from 'components/atoms/Button'
import Transition from 'components/atoms/Transition'
import iconClose from 'assets/images/icon-close-white.svg'

const TRANSITION_TIMEOUT = 300

const Overlay = styled(DialogOverlay)`
  overflow: auto;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  justify-items: center;
  align-content: center;
  background-color: ${transparentize(0.15, COLORS.GREY_OF_DARKNESS)} !important;
`

const CIRCLE_SIZE = rem(30)

const CloseModalCircle = styled(Box)`
  cursor: pointer;
  border-radius: ${radius.pill};
  width: ${CIRCLE_SIZE};
  height: ${CIRCLE_SIZE};
  background-color: ${COLORS.GREY_OF_DARKNESS};
  line-height: ${rem(28)};
  text-align: center;
  margin-left: 96.7%;
  margin-top: -3%;
`

const CloseModalIcon = styled.img`
  height: ${rem(14)};
`
const ModalContainer = styled(DialogContent)`
  outline: none;
  background-color: ${COLORS.WHITE};
  border-radius: ${radius.l};
  max-width: ${rem(480)};
  margin: 0 ${space.l};
`

const Modal = ({ onClose, onClick, isVisible, title, body, buttonLabel }) => {
  const targetRef = React.createRef()
  if (isVisible) {
    disableBodyScroll(targetRef)
  } else {
    clearAllBodyScrollLocks()
  }
  return (
    <Transition
      in={isVisible}
      timeout={TRANSITION_TIMEOUT}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Overlay state={state} onClick={onClose}>
          <ModalContainer ref={targetRef}>
            <CloseModalCircle onClick={onClose}>
              <CloseModalIcon src={iconClose} alt="closeModal" />
            </CloseModalCircle>
            <Flex flexDirection="column" py="l" px="l" justifyContent="center">
              <Box mb="l">{title}</Box>
              <Box
                width={rem(120)}
                height={rem(3)}
                bg={COLORS.AMERICAN_PINK}
                m="0 auto"
              />
              <Box my="l">{body}</Box>
              <Button.Filled
                onClick={onClick}
                gradientFromColor={COLORS.FLAX_FLOWER_BLUE}
                gradientToColor={COLORS.ATHENA_BLUE}
                borderRadius={radius.pill}
                isShadow
                fontWeight={fontWeights.bold}
                fontSize="s"
                mb="m"
              >
                {buttonLabel}
              </Button.Filled>
            </Flex>
          </ModalContainer>
        </Overlay>
      )}
    </Transition>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}

export default Modal
