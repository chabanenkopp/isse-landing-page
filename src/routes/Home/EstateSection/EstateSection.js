import React, { useState } from 'react'
import { transparentize } from 'polished'
import { fontWeights, radius } from 'Theme'
import { scrollIntoView } from 'helpers'
import { COLORS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Bb from 'components/atoms/Bb'
import AnimatedClouds from '../PriceList/AnimatedClouds'

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
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatedClouds isHovered={isHovered} />
      </div>
      <Flex
        flex="1"
        flexDirection="column"
        justifyContent="center"
        bg={COLORS.WHITE}
        pb="5%"
      >
        <Text
          mx="xl"
          fontWeight="thin"
          color={COLORS.MAJOLICA_BLUE}
          textAlign="center"
          fontSize={['l', 'xxl', 'xxl']}
        >
          May 13 – <Bb>17, 2020</Bb>
        </Text>
        <Text
          mx="xl"
          fontWeight="thin"
          color={COLORS.MAJOLICA_BLUE}
          textAlign="center"
          fontSize={['l', 'xl', 'xxl']}
          py="xs"
        >
          Demanovska Valley - Slovakia, <Bb>Hotel Grand Jasna</Bb>
        </Text>
      </Flex>
    </Flex>
  )
}

export default EstateSection
