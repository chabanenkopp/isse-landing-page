import React, { useState, Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { theme, radius, fontSizes, fontWeights } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS, TEL_NUMBER, CONTACT } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const fadeInAnimation = keyframes`${fadeIn}`

const FadeInBox = styled(Box)`
  animation: 1s ${fadeInAnimation};
`

const FloatingContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 0;
  z-index: 1;
  height: ${pxToRem(220)};
  transition: width 0.4s;
  width: ${({ isHovered }) => (isHovered ? pxToRem(200) : pxToRem(70))};
  background-color: ${COLORS.WHITE};
  border-top-right-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  box-shadow: 1px 1px ${pxToRem(27)} ${pxToRem(-20)} rgba(0, 0, 0, 0.75);
`

const InitialText = styled(Flex)`
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  color: ${COLORS.MAJOLICA_BLUE};
`

const TextLink = styled(Text)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: ${COLORS.MAJOLICA_BLUE};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.semi_bold};
`

class HiddenText extends Component {
  state = {
    isComponentRendered: false,
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isComponentRendered: true }), 200)
  }
  render() {
    const { isComponentRendered } = this.state
    if (!isComponentRendered) return null
    return (
      <Box>
        <TextLink as="a" mb="l" href={`tel:${TEL_NUMBER}`}>
          TEL: {TEL_NUMBER}
        </TextLink>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          fontSize="s"
          fontWeight={theme.fontWeights.semi_bold}
        >
          EMAIL:
        </Text>
        <TextLink
          as="a"
          href={`mailto: ${CONTACT.EMAIL}`}
          color={COLORS.MAJOLICA_BLUE}
          fontSize="s"
          fontWeight="semi_bold"
        >
          {CONTACT.EMAIL.toUpperCase()}
        </TextLink>
      </Box>
    )
  }
}

const FloatingBadge = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <FadeInBox display={['none', 'none', 'block']}>
      <FloatingContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        {isHovered ? (
          <HiddenText />
        ) : (
          <InitialText>
            <Text
              color={COLORS.MAJOLICA_BLUE}
              fontWeight={theme.fontWeights.semi_bold}
            >
              CONTACT US
            </Text>
          </InitialText>
        )}
      </FloatingContainer>
    </FadeInBox>
  )
}

export default FloatingBadge
