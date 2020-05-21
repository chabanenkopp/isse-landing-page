import React, { Component } from 'react'
import { rem } from 'polished'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { fontWeights, radius, space } from 'Theme'
import { COLORS } from 'Root/constants'
import Button from 'components/atoms/Button'
import InputRange from 'components/molecules/InputRange'
import ModalRent from './ModalRent'

const CONTAINER_WIDTH = {
  mobile: `calc(100vw - ${space.m} * 2)`,
  tablet: rem(450),
  desktop: rem(790),
}
const INPUT_WIDTH = {
  mobile: `calc(100vw - ${space.m} * 2)`,
  tablet: rem(450),
  dsktop: rem(600),
}

const HEADING_SIZE = {
  mobile: 'xxl',
  tablet: 'xxxl',
  desktop: 'xxxxl',
}

export default class RentFormSlider extends Component {
  state = {
    payment: 0,
    packageType: 'not available',
    isModalOpen: false,
    isSuccess: false,
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ payment: value })
    switch (true) {
      case value < 900:
        this.setState({ packageType: 'not available' })
        break
      case value >= 900 && value < 1000:
        this.setState({ packageType: 'KILO' })
        break
      case value >= 1000 && value < 1500:
        this.setState({ packageType: 'MEGA' })
        break
      case value >= 1500 && value < 2500:
        this.setState({ packageType: 'GIGA' })
        break
      case value >= 2500:
        this.setState({ packageType: 'TERA' })
        break
      default:
        break
    }
  }

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    const { payment } = this.state
    this.setState({
      isSuccess: payment >= 900,
    })
    this.handleToggleModal()
  }

  render() {
    const { payment, packageType, isSuccess, isModalOpen } = this.state
    return (
      <Box>
        <Box data-aos="fade-up">
          <Flex justifyContent="center" flexWrap="wrap" mb="xl">
            <Text
              color={COLORS.MAJOLICA_BLUE}
              fontWeight={fontWeights.thin}
              fontSize={HEADING_SIZE}
            >
              Sponsorship&nbsp;
            </Text>
            <Text
              color={COLORS.FLAX_FLOWER_BLUE}
              fontWeight={fontWeights.semi_bold}
              fontSize={HEADING_SIZE}
            >
              Packages
            </Text>
          </Flex>
          <form onSubmit={this.handleSubmitForm}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                flexDirection={{ mobile: 'column', desktop: 'row' }}
                alignItems={{ mobile: 'initial', desktop: 'center' }}
              >
                <InputRange
                  type="range"
                  onChange={this.handleOnChange}
                  width={INPUT_WIDTH}
                  min={0}
                  max={2500}
                  step={100}
                  value={payment}
                />
                <Flex
                  flexDirection="column"
                  ml={{ mobile: 0, desktop: 'm' }}
                  mt={{ mobile: 'm', desktop: 0 }}
                >
                  <Button.Filled
                    type="submit"
                    gradientFromColor={COLORS.FLAX_FLOWER_BLUE}
                    gradientToColor={COLORS.ATHENA_BLUE}
                    borderRadius={radius.pill}
                    isShadow
                    fontSize="m"
                    height={rem(56)}
                    px={{ mobile: 0, desktop: rem(50) }}
                  >
                    CONTINUE
                  </Button.Filled>
                </Flex>
              </Flex>
              <Flex
                justifyContent={{ mobile: 'center', desktop: 'flex-start' }}
                width={CONTAINER_WIDTH}
                mt="m"
              >
                <Text
                  fontWeight={fontWeights.semi_bold}
                  color={COLORS.MAJOLICA_BLUE}
                >
                  AMOUNT TO PAY:
                </Text>
                <Text
                  fontWeight={fontWeights.semi_bold}
                  color={COLORS.AMERICAN_PINK}
                  ml="m"
                >
                  {`€${payment}`}
                </Text>
              </Flex>
              <Flex
                flexDirection={{ mobile: 'column', desktop: 'row' }}
                alignItems={{ mobile: 'center', desktop: 'initial' }}
                width={CONTAINER_WIDTH}
                mt="m"
              >
                <Text
                  fontWeight={fontWeights.semi_bold}
                  color={COLORS.MAJOLICA_BLUE}
                >
                  PACKAGE TYPE:
                </Text>
                <Text
                  fontWeight={fontWeights.semi_bold}
                  color={COLORS.AMERICAN_PINK}
                  ml={{ mobile: 0, desktop: 'm' }}
                >
                  {packageType}
                </Text>
              </Flex>
            </Flex>
          </form>
        </Box>
        <ModalRent
          packageType={packageType}
          onCloseModalButtonClick={this.handleToggleModal}
          isModalOpen={isModalOpen}
          isSuccess={isSuccess}
        />
      </Box>
    )
  }
}
