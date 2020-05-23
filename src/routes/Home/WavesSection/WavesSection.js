import React, { useState } from 'react'
import styled from 'styled-components'
import { transparentize, rem } from 'polished'
import { fontWeights, radius } from 'Theme'
import { scrollIntoView } from 'helpers'
import { COLORS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Bb from 'components/atoms/Bb'
import Infotooltip from 'components/molecules/InfoTooltip'
import { maxWidthStyle } from 'components/atoms/mixins'
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

const WavesSection = () => {
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
        css={maxWidthStyle}
      >
        <Box data-aos="fade-up">
          <Text
            color={COLORS.WHITE}
            fontWeight={fontWeights.extra_thin}
            my="l"
            textAlign="center"
            fontSize={{ mobile: 'xxl', desktop: 'xxxxl' }}
          >
            43<sup>rd</sup> International Spring Seminar on Electronics
            Technology
          </Text>
          <Text
            color={COLORS.WHITE}
            textAlign="center"
            fontSize={{ mobile: 'l', tablet: 'xl', desktop: 'xxl' }}
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
              mt={{ mobile: 'm', tablet: 'l' }}
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
        <Flex justifyContent="center" mx="xl">
          <Text
            mr="s"
            fontWeight="thin"
            color={COLORS.MAJOLICA_BLUE}
            textAlign="center"
            fontSize={{ mobile: 'l', tablet: 'xxl' }}
          >
            May 14 – <Bb>15, 2020</Bb>
          </Text>
          <Infotooltip
            maxWidth={{ mobile: rem(250), desktop: rem(350) }}
            position="LEFT"
            textAlign="left"
            iconSize={16}
            iconFill={COLORS.FLAX_FLOWER_BLUE}
            text="Due to the covid-19 pandemic the date was changed. The initial date was May 13 – 17, 2020"
          />
        </Flex>
        <Text
          fontWeight="thin"
          color={COLORS.MAJOLICA_BLUE}
          textAlign="center"
          fontSize={{ mobile: 'l', tablet: 'xl', desktop: 'xxl' }}
          py="xs"
        >
          Demanovska Valley - Slovakia, <Bb>Hotel Grand Jasna</Bb>
        </Text>
        <Text
          css={maxWidthStyle}
          fontWeight="thin"
          color={COLORS.KACEYS_PINK}
          textAlign="center"
          fontSize={{ mobile: 'm', tablet: 'l', desktop: 'xl' }}
          py="xs"
        >
          Because of this extraordinary global health issue with the Corona
          virus COVID-19, the ISSE organizing committee decided to go on-line
          and hold ISSE 2020 as web-based conference.
        </Text>
      </BottomWrapper>
    </Flex>
  )
}

export default WavesSection
