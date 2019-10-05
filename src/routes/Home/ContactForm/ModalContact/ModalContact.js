import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/atoms/Typography'
import { COLORS, TEL_NUMBER } from 'Root/constants'
import { Flex } from 'components/atoms/Layout'
import { pxToRem } from 'helpers'
import Modal from 'components/molecules/Modal'

const fontSizeText = ['xs', 's', 'l']
const fontSizeHeading = ['xxl', 'xxl', 'xxxl']
const lineHeightText = pxToRem(30)
const modalTextFontFamily = 'Lato'

const ModalTitle = () => (
  <Text
    fontSize={fontSizeHeading}
    color={COLORS.MAJOLICA_BLUE}
    textAlign="center"
    fontWeight="bold"
    lineHeight={pxToRem(44)}
  >
    Thank You For Your Interest!
  </Text>
)

const ModalBody = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      We will contact you regarding the
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      conference as soon as possible
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      If you don't want to wait, you can call us directly at:
    </Text>
    <Text
      as="a"
      href={`tel:${TEL_NUMBER}`}
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      {TEL_NUMBER}
    </Text>
  </Flex>
)

const ModalContact = ({ onClose, isModalOpen }) => (
  <Modal
    onClose={onClose}
    onClick={onClose}
    isVisible={isModalOpen}
    buttonLabel="CONTINUE"
    title={<ModalTitle />}
    body={<ModalBody />}
  />
)

ModalContact.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalContact
