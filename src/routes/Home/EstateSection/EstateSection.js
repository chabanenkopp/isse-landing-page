import React, { useState } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { fontWeights, radius } from 'Theme'
import { scrollIntoView, pxToRem } from 'helpers'
import { COLORS, LINKS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Logo from 'components/atoms/Logo'
import Button from 'components/atoms/Button'
import Bb from 'components/atoms/Bb'
import Infotooltip from 'components/molecules/InfoTooltip'
import eps from 'assets/images/eps.png'
import ieee from 'assets/images/ieee.svg'
import AnimatedClouds from '../PriceList/AnimatedClouds'

const CloudsWrapper = styled.div`
  transform: translateY(2px);
`
const BottomWrapper = styled(Flex)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  padding-bottom: 5%;
  transform: translateY(1px);
`

const StyledTextLineThrough = styled(Text)`
  text-decoration: line-through;
  text-decoration-color: ${COLORS.EVERLASTING_ICE};
`

const EstateSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Flex
      flexDirection="column"
      flex="1"
      justifyContent="space-between"
      backgroundImage={`linear-gradient(300deg, ${COLORS.FLAX_FLOWER_BLUE}, ${COLORS.ATHENA_BLUE})`}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        flex="1"
        justifyContent="center"
      >
        <Box data-aos="fade-up">
          <Text
            mx="xl"
            color={COLORS.WHITE}
            fontWeight={fontWeights.extra_thin}
            my="l"
            textAlign="center"
            fontSize={['xl', 'xxl', 'xxxxl']}
            px={[0, 0, '50px']}
          >
            43<sup>rd</sup> International Spring Seminar on Electronics
            Technology
          </Text>
          <Text
            mx="xl"
            color={COLORS.WHITE}
            textAlign="center"
            fontSize={['l', 'xl', 'xxl']}
            fontWeight="extra_thin"
          >
            Trends in Microelectronics Packaging and Interconnection Technology
          </Text>
          <Flex justifyContent="center">
            <Button.Filled
              onClick={() => scrollIntoView('price-list')}
              borderRadius={radius.pill}
              backgroundColor={transparentize(0.75, COLORS.WHITE)}
              isShadow
              color={COLORS.WHITE}
              mt={['m', 'l', 'l']}
              mx="xl"
              fontSize="l"
            >
              REGISTRATION
            </Button.Filled>
          </Flex>
        </Box>
      </Flex>
      <CloudsWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatedClouds isHovered={isHovered} />
      </CloudsWrapper>
      <BottomWrapper>
        <Flex alignItems="center" justifyContent="center" mb="s">
          <Box mr="s">
            <Logo img={eps} maxHeight={pxToRem(45)} href={LINKS.EPS} />
          </Box>
          <Logo img={ieee} maxHeight={pxToRem(28)} href={LINKS.IEEE} />
        </Flex>
        <Flex justifyContent="center" mx="xl">
          <Text
            mr="s"
            fontWeight="thin"
            color={COLORS.MAJOLICA_BLUE}
            textAlign="center"
            fontSize={['l', 'xxl', 'xxl']}
          >
            May 14 – <Bb>15, 2020</Bb>
          </Text>
          <Infotooltip
            maxWidth={[pxToRem(260), pxToRem(260), pxToRem(350)]}
            position="LEFT"
            textAlign="left"
            iconSize={16}
            // iconFill={COLORS.DAPHNE}
            iconFill={COLORS.KACEYS_PINK}
            text="Due to the covid-19 pandemic the date was changed. The initial date was May 13 – 17, 2020"
          />
        </Flex>
        <StyledTextLineThrough
          mx="xl"
          fontWeight="thin"
          color={COLORS.MAJOLICA_BLUE}
          textAlign="center"
          fontSize={['l', 'xl', 'xxl']}
          py="xs"
        >
          Demanovska Valley - Slovakia, <Bb>Hotel Grand Jasna</Bb>
        </StyledTextLineThrough>
        <Text
          mx={['xl', 'xl', 'xxl']}
          fontWeight="semi_bold"
          color={COLORS.KACEYS_PINK}
          textAlign="center"
          fontSize={['m', 'l', 'xl']}
          py="xs"
        >
          However, because of this extraordinary global health issue with the
          Corona virus COVID-19, the ISSE organizing committee decided to go
          on-line and hold ISSE 2020 as web-based conference.
        </Text>
      </BottomWrapper>
    </Flex>
  )
}

export default EstateSection
