import React, { Component } from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { theme, fontWeights, radius } from 'Theme'
import { COLORS, REGEX, FIREBASE_COLLECTIONS } from 'Root/constants'
import { pxToRem } from 'helpers'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import Popup from 'components/atoms/Popup'
import { Element as ScrollTo } from 'react-scroll'
import { db } from 'firebase-config'
import { rem } from 'polished'
import RelatedText from './RelatedText'
import ModalContact from './ModalContact'

const INPUT_WIDTH = '100%'

const WARNING_TEXT = 'You have to enter either a phone number, or an email.'
const SERVER_ERROR_TEXT = 'An unknown network error has occurred'

const Label = styled.label`
  font-size: ${theme.fontSizes.s};
  font-weight: ${fontWeights.semi_bold};
  color: ${COLORS.MAJOLICA_BLUE};
`

const Form = styled.form`
  box-shadow: 7px 3px 35px -20px rgba(0, 0, 0, 0.75);
  border-radius: ${radius.l};
  background-color: ${COLORS.WHITE};
`

const { FULL_NAME, EMAIL, TEL, BODY } = {
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  TEL: 'tel',
  BODY: 'body',
}

const splitName = (name) => {
  const splitName = name.split(' ')
  return {
    firstName: splitName[0],
    lastName: splitName.length > 1 ? splitName[1] : '',
  }
}

const validateInput = (inputValue, isModalOpen) => {
  if (!inputValue && isModalOpen) return true
  if (inputValue) return true
  return false
}

const initialState = {
  [FULL_NAME]: '',
  [EMAIL]: '',
  [TEL]: '',
  [BODY]: '',
  isFullNameValid: true,
  isEmailValid: true,
  isTelValid: true,
  isWarningVisible: false,
  isModalOpen: false,
  isError: false,
}

class ContactForm extends Component {
  state = initialState
  handleWarning = () => {
    this.setState({ isWarningVisible: true })
    setTimeout(() => this.setState({ isWarningVisible: false }), 4000)
  }
  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }
  handleSubmitForm = (e) => {
    e.preventDefault()
    const {
      isEmailValid,
      isTelValid,
      isWarningVisible,
      email,
      tel,
      fullName,
      body,
    } = this.state
    if (isWarningVisible) return
    if ((isEmailValid && email !== '') || (isTelValid && tel !== '')) {
      this.setState(initialState)
      const { firstName, lastName } = splitName(fullName)
      db.collection(FIREBASE_COLLECTIONS.USERS)
        .add({
          firstName,
          lastName,
          email,
          tel,
          body,
        })
        .then(() => this.handleToggleModal())
        .catch(() => {
          this.setState({ isError: true })
          this.handleWarning()
        })
    } else this.handleWarning()
  }
  handleBlur = (value, name) => {
    const { isModalOpen } = this.state
    if (name === EMAIL)
      this.setState({
        isEmailValid: validateInput(REGEX.EMAIL_VAL.test(value), isModalOpen),
      })
    if (name === TEL)
      this.setState({
        isTelValid: validateInput(
          REGEX.TEL_VAL.test(value) && value.length >= 9 && value.length <= 15,
          isModalOpen
        ),
      })
    if (name === FULL_NAME)
      this.setState({
        isFullNameValid: validateInput(
          value.split(' ').length === 2 && value.split(' ')[1] !== '',
          isModalOpen
        ),
      })
  }
  setStateWithInputValueByName = (name, value) => {
    this.setState(
      {
        [name]: value,
      },
      () => this.handleBlur(value, name)
    )
  }
  handleInputChange = ({ target: { name, value } }) => {
    if (name === TEL) {
      if (value === '' || REGEX.NUM_INPUT_VAL.test(value))
        this.setStateWithInputValueByName(name, value)
    } else {
      this.setStateWithInputValueByName(name, value)
    }
  }
  render() {
    const {
      fullName,
      email,
      tel,
      isFullNameValid,
      isEmailValid,
      isTelValid,
      isWarningVisible,
      isModalOpen,
      isError,
    } = this.state
    return (
      <Box>
        <Box data-aos="fade-up">
          <Flex
            flexDirection={{
              mobile: 'column-reverse',
              desktop: 'row',
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              mr={{ mobile: 0, desktop: 'xl' }}
              maxWidth={rem(500)}
              width="100%"
            >
              <ScrollTo name="contact-form">
                <Form onSubmit={this.handleSubmitForm}>
                  <Box p={{ mobile: '10px', tablet: 'm', desktop: 'l' }}>
                    <Label>
                      <Flex justifyContent="space-between">
                        FULL NAME
                        {!isFullNameValid && (
                          <Text fontSize="xs" color={COLORS.RED_ORANGE_JUICE}>
                            invalid name
                          </Text>
                        )}
                      </Flex>
                      <Input
                        onChange={this.handleInputChange}
                        onBlur={() => this.handleBlur(fullName, FULL_NAME)}
                        isValid={isFullNameValid}
                        placeholder="Full Name"
                        value={this.state[FULL_NAME]}
                        name={FULL_NAME}
                        width="100%"
                        p="m"
                      />
                    </Label>
                    <Box mt="l">
                      <Label>
                        <Flex justifyContent="space-between">
                          EMAIL ADDRESS
                          {!isEmailValid && (
                            <Text fontSize="xs" color={COLORS.RED_ORANGE_JUICE}>
                              invalid email
                            </Text>
                          )}
                        </Flex>
                        <Input
                          onChange={this.handleInputChange}
                          onBlur={() => this.handleBlur(email, EMAIL)}
                          isValid={isEmailValid}
                          placeholder="Email Address"
                          type="email"
                          value={this.state[EMAIL]}
                          name={EMAIL}
                          width={INPUT_WIDTH}
                          py="m"
                          pl="m"
                        />
                      </Label>
                    </Box>
                    <Box mt="l">
                      <Label>
                        <Flex justifyContent="space-between">
                          PHONE NUMBER
                          {!isTelValid && (
                            <Text fontSize="xs" color={COLORS.RED_ORANGE_JUICE}>
                              invalid phone number
                            </Text>
                          )}
                        </Flex>
                        <Input
                          onChange={this.handleInputChange}
                          onBlur={() => this.handleBlur(tel, TEL)}
                          isValid={isTelValid}
                          placeholder="Phone number"
                          type="tel"
                          value={this.state[TEL]}
                          name={TEL}
                          width={INPUT_WIDTH}
                          py="m"
                          pl="m"
                        />
                      </Label>
                    </Box>
                    <Box mt="l">
                      <Label>
                        YOUR MESSAGE
                        <Input.TextArea
                          placeholder="Your message"
                          value={this.state[BODY]}
                          name={BODY}
                          onChange={this.handleInputChange}
                          isValid
                          width={INPUT_WIDTH}
                          py="m"
                          pl="m"
                        />
                      </Label>
                    </Box>
                    <Flex flexDirection="column">
                      <Button.Filled
                        type="submit"
                        gradientFromColor={COLORS.FLAX_FLOWER_BLUE}
                        gradientToColor={COLORS.ATHENA_BLUE}
                        borderRadius={radius.pill}
                        isShadow
                        fontSize="m"
                        height={pxToRem(60)}
                        mt="l"
                      >
                        CONTINUE
                      </Button.Filled>
                    </Flex>
                  </Box>
                </Form>
              </ScrollTo>
            </Box>
            <RelatedText />
          </Flex>
        </Box>
        <Popup
          isVisible={isWarningVisible}
          message={isError ? SERVER_ERROR_TEXT : WARNING_TEXT}
        />
        <ModalContact
          onClose={this.handleToggleModal}
          isModalOpen={isModalOpen}
        />
      </Box>
    )
  }
}

export default ContactForm
