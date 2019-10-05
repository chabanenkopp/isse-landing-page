import React, { Component } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { theme, fontWeights, border, radius } from 'Theme'
import { COLORS, REGEX } from 'Root/constants'
import { pxToRem } from 'helpers'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import ModalRent from './ModalRent'
import DollarImage from './DollarImage'

const Label = styled.label`
  font-size: ${theme.fontSizes.s};
  font-weight: ${fontWeights.semi_bold};
  color: ${COLORS.MAJOLICA_BLUE};
`

const InputFlex = styled(Flex)`
  border: ${border};
  border-radius: ${radius.m};
  background-color: ${({ isValid }) =>
    isValid ? COLORS.WHITE : transparentize(0.85, COLORS.RED_ORANGE_JUICE)};
`

class RentForm extends Component {
  state = {
    rentPerMonth: '',
    isInputValid: true,
    isModalOpen: false,
    isSuccess: false,
    imageColor: COLORS.CODEX_GREY,
  }
  handleSubmitForm = (e) => {
    e.preventDefault()
    const { rentPerMonth } = this.state
    if (Number(rentPerMonth.split(',').join('')) >= 2000) {
      this.setState({
        rentPerMonth: '',
        isSuccess: true,
      })
      this.handleToggleModal()
    } else {
      this.setState({
        rentPerMonth: '',
        isSuccess: false,
      })
      this.handleToggleModal()
    }
  }
  handleUpdateInput = ({ target: { name, value } }) => {
    let valueCopy = value
    valueCopy = valueCopy.split(',').join('')
    if (!REGEX.NUM_INPUT_VAL.test(valueCopy) && valueCopy !== '') return
    this.setState(
      {
        [name]: valueCopy.replace(REGEX.NUM_COMMA_SEPARATOR, '$1,'),
      },
      () => this.handleBlur()
    )
  }
  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }
  handleBlur = () => {
    const { rentPerMonth, isModalOpen } = this.state
    this.setState(
      rentPerMonth === '' && !isModalOpen
        ? { isInputValid: false }
        : { isInputValid: true }
    )
  }

  handleColorChange = () => {
    const { imageColor } = this.state
    this.setState({
      imageColor:
        imageColor === COLORS.CODEX_GREY
          ? COLORS.BUTTERSCOTCH
          : COLORS.CODEX_GREY,
    })
  }
  render() {
    const {
      isModalOpen,
      rentPerMonth,
      isSuccess,
      isInputValid,
      imageColor,
    } = this.state
    return (
      <Box>
        <Box mb="l" px="l">
          <Box textAlign="center">
            {/* <Text
              color={COLORS.RED_ORANGE_JUICE}
              fontWeight={fontWeights.semi_bold}
              fontSize="s"
            >
              LOREM IPSUM
            </Text> */}
            <Text
              color={COLORS.MAJOLICA_BLUE}
              fontWeight={fontWeights.bold}
              fontSize={['xxl', 'xxxl', 'xxxxl']}
            >
              How Much Do You Pay For Rent?
            </Text>
          </Box>
        </Box>
        <form onSubmit={this.handleSubmitForm}>
          <Flex justifyContent="center">
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mr={[0, 0, pxToRem(30)]}>
                <Label>
                  <Flex justifyContent="space-between">
                    RENT PER MONTH
                    {!isInputValid && (
                      <Text fontSize="xs" color={COLORS.RED_ORANGE_JUICE}>
                        Please enter your monthly rent
                      </Text>
                    )}
                  </Flex>
                  <InputFlex isValid={isInputValid}>
                    <DollarImage color={imageColor} />
                    <Input
                      borderParams="none"
                      onChange={this.handleUpdateInput}
                      onBlur={() => {
                        this.handleBlur()
                        this.handleColorChange()
                      }}
                      onFocus={this.handleColorChange}
                      isValid
                      type="text"
                      value={rentPerMonth}
                      name="rentPerMonth"
                      required
                      width={[pxToRem(350), pxToRem(400), pxToRem(540)]}
                      pl="m"
                    />
                  </InputFlex>
                </Label>
                {/* <Text color={COLORS.LUXURY} fontSize="xs" mt="m">
                  *This will not affect your credit score
                </Text> */}
              </Box>
              <Flex flexDirection="column" mt={pxToRem(20)}>
                <Button.Filled
                  type="submit"
                  fontSize="m"
                  height={pxToRem(56)}
                  px={(0, 0, [pxToRem(50)])}
                >
                  CONTINUE
                </Button.Filled>
              </Flex>
            </Flex>
          </Flex>
        </form>
        <ModalRent
          onCloseModalButtonClick={this.handleToggleModal}
          isModalOpen={isModalOpen}
          isSuccess={isSuccess}
        />
      </Box>
    )
  }
}

export default RentForm
