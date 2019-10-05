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
import RelatedText from './RelatedText'
import ModalContact from './ModalContact'

const INPUT_WIDTH = [pxToRem(350), pxToRem(400), pxToRem(460)]

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

const { FIRST_NAME, LAST_NAME, EMAIL, TEL } = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  TEL: 'tel',
}

const validateInput = (inputValue, isModalOpen) => {
  if (!inputValue && isModalOpen) return true
  if (inputValue) return true
  return false
}

const initialState = {
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [EMAIL]: '',
  [TEL]: '',
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
      firstName,
      lastName,
    } = this.state
    if (isWarningVisible) return
    if ((isEmailValid && email !== '') || (isTelValid && tel !== '')) {
      this.setState(initialState)
      db.collection(FIREBASE_COLLECTIONS.USERS)
        .add({
          firstName,
          lastName,
          email,
          tel,
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
      email,
      tel,
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
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            alignItems="center"
            justifyContent="center"
          >
            <Box mr={['0', '0', 'xl']}>
              <ScrollTo name="contact-form">
                <Form onSubmit={this.handleSubmitForm}>
                  <Box p={['10px', 'm', 'l']}>
                    <Label>
                      FIRST NAME
                      <Input
                        placeholder="First Name"
                        value={this.state[FIRST_NAME]}
                        name={FIRST_NAME}
                        onChange={this.handleInputChange}
                        width={INPUT_WIDTH}
                        py="m"
                        pl="m"
                      />
                    </Label>
                    <Box mt="l">
                      <Label>
                        LAST NAME
                        <Input
                          placeholder="Last Name"
                          value={this.state[LAST_NAME]}
                          name={LAST_NAME}
                          onChange={this.handleInputChange}
                          width={INPUT_WIDTH}
                          py="m"
                          pl="m"
                        />
                      </Label>
                    </Box>
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
