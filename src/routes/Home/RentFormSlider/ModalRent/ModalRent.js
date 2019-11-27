import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/atoms/Typography'
import { COLORS, TEL_NUMBER } from 'Root/constants'
import { Flex } from 'components/atoms/Layout'
import { pxToRem, scrollIntoView } from 'helpers'
import Modal from 'components/molecules/Modal'

const fontSizeText = ['m', 'm', 'l']
const fontSizeHeading = ['xxl', 'xxl', 'xxxl']
const lineHeightText = pxToRem(30)
const modalTextFontFamily = 'Lato'

const ModalTextFailure = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
      fontFamily={modalTextFontFamily}
    >
      Our starter package is KILO for €900
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      mb="m"
      lineHeight={lineHeightText}
    >
      Try again!
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      If you'd like, you can call us directly at:
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
const ModalTextSuccess = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      If you'd like to learn more about an
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      opportunity to become our sponsor
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      leave us your contact information
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      and we will be with you shortly!
    </Text>
  </Flex>
)

const ModalHeadingFailure = () => (
  <Text
    fontSize={fontSizeHeading}
    color={COLORS.MAJOLICA_BLUE}
    textAlign="center"
    fontWeight="bold"
    lineHeight={pxToRem(44)}
  >
    Thank You!
  </Text>
)
const ModalHeadingSuccess = ({ packageType }) => (
  <React.Fragment>
    <Text
      fontSize={fontSizeHeading}
      color={COLORS.MAJOLICA_BLUE}
      textAlign="center"
      fontWeight="bold"
      lineHeight={pxToRem(44)}
    >
      Congratulations!
    </Text>
    <Text
      fontSize={fontSizeHeading}
      color={COLORS.MAJOLICA_BLUE}
      textAlign="center"
      fontWeight="bold"
      lineHeight={pxToRem(44)}
    >
      You've chosen <font color={COLORS.FLAX_FLOWER_BLUE}>{packageType}</font>
    </Text>
  </React.Fragment>
)

ModalHeadingSuccess.propTypes = {
  packageType: PropTypes.string.isRequired,
}

const ModalRent = ({
  onCloseModalButtonClick,
  isModalOpen,
  isSuccess,
  packageType,
}) => (
  <Modal
    onClose={onCloseModalButtonClick}
    onClick={
      isSuccess
        ? () => {
            onCloseModalButtonClick()
            scrollIntoView('contact-form')
          }
        : onCloseModalButtonClick
    }
    isVisible={isModalOpen}
    buttonLabel={isSuccess ? 'CONTINUE' : 'RECALCULATE'}
    title={
      isSuccess ? (
        <ModalHeadingSuccess packageType={packageType} />
      ) : (
        <ModalHeadingFailure />
      )
    }
    body={isSuccess ? <ModalTextSuccess /> : <ModalTextFailure />}
  />
)

ModalRent.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  packageType: PropTypes.string.isRequired,
  onCloseModalButtonClick: PropTypes.func.isRequired,
}

export default ModalRent
