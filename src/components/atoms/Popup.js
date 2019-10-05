import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize } from 'polished'
import { radius, getTransition, fontWeights } from 'Theme'
import { Text } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Layout'
import { pxToRem, scrollIntoView } from 'helpers'
import { COLORS } from 'Root/constants'
import Transition from 'components/atoms/Transition'
import iconClose from 'assets/images/icon-close-black.svg'

const TRANSITION_TIMEOUT = 300

const Container = styled(Flex)`
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isInfo }) =>
    isInfo
      ? `bottom: 2.5%; background-color: ${COLORS.WHITE}; border-radius: ${radius.l}; width: 85%;`
      : `bottom: 50%;  background-color: ${transparentize(
          0.1,
          COLORS.RED_ORANGE_JUICE
        )}; height: ${pxToRem(50)}; border-radius: ${
          radius.pill
        }; width: 96%;`};
  transition: all 0.5s ease-in-out;
  box-shadow: ${transparentize(0.85, COLORS.SHADOWED_STEEL)} 0 0.7rem 5rem 0;
  opacity: 0;
  transition: ${getTransition('opacity')};
  z-index: 1;
  ${({ state }) =>
    state === Transition.STATE.ENTERING ||
    (state === Transition.STATE.ENTERED && `opacity: 1;`)}
`

const CloseModalIcon = styled.img`
  height: ${pxToRem(10)};
  cursor: pointer;
  margin-bottom: ${pxToRem(10)};
`

const ButtonText = styled(Text)`
  text-align: center;
  cursor: pointer;
  font-weight: ${fontWeights.bold};
  transition: color 0.5s;
  color: ${COLORS.ATHENA_BLUE};
  :hover {
    color: ${COLORS.AMERICAN_PINK};
  }
`

const Popup = ({ isVisible, message, isInfo, onClose, buttonText }) => (
  <Transition
    in={isVisible}
    timeout={TRANSITION_TIMEOUT}
    mountOnEnter
    unmountOnExit
  >
    {(state) => (
      <Flex justifyContent="center">
        <Container
          state={state}
          isInfo={isInfo}
          p={isInfo ? pxToRem(15) : pxToRem(6)}
        >
          {isInfo && (
            <Flex justifyContent="flex-end" width="100%">
              <CloseModalIcon
                src={iconClose}
                onClick={onClose}
                alt="closePopup"
              />
            </Flex>
          )}
          <Text
            fontSize={['xs', 's', 'l']}
            textAlign="center"
            fontWeight={fontWeights.semi_bold}
            color={isInfo ? COLORS.MAJOLICA_BLUE : COLORS.WHITE}
            px="m"
          >
            {message}
          </Text>
          {isInfo && (
            <ButtonText
              onClick={() => scrollIntoView('price-list')}
              fontSize={['xs', 's', 'l']}
              px="m"
              pt="s"
            >
              {buttonText}
            </ButtonText>
          )}
        </Container>
      </Flex>
    )}
  </Transition>
)

Popup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isInfo: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Popup
