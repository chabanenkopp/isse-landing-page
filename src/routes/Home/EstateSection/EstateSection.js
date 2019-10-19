import React from 'react'
import styled from 'styled-components'
import { space, height } from 'styled-system'
import { fontWeights, radius } from 'Theme'
import { scrollIntoView } from 'helpers'
import { COLORS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import netlify from 'assets/images/netlify.svg'
import Wave from './Wave'

const imageFunctions = [space, height]

const StyledImage = styled.img`
  height: 27vh;
  transform: rotate(29deg);
  background-position: center bottom;
  ${imageFunctions}
`

const EstateSection = () => (
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
          my="xxs"
          textAlign="center"
          fontSize={['xl', 'xxl', 'xxxxl']}
          px={[0, 0, '50px']}
        >
          International Spring Seminar on Electronics Technology
        </Text>
        <Text
          mx="xl"
          color={COLORS.WHITE}
          textAlign="center"
          fontSize={['xl', 'xxl', 'xxl']}
        >
          Demänovska Valley, Slovakia
        </Text>
        <Flex justifyContent="center">
          <Button.Filled
            onClick={() => scrollIntoView('price-list')}
            borderRadius={radius.pill}
            backgroundColor={COLORS.WHITE}
            isShadow
            color={COLORS.MAJOLICA_BLUE}
            mt={['m', 'm', 'l']}
            mx="xl"
            fontSize="l"
          >
            REGISTRATION
          </Button.Filled>
        </Flex>
      </Box>
    </Flex>
    <Wave />
    <Flex
      width="100%"
      flexDirection="column"
      pb="10%"
      bg={COLORS.WHITE}
      alignItems="center"
      justifyContent="center"
    >
      <Flex justifyContent="space-between">
        <StyledImage
          src={netlify}
          height={['55.5vw', '55.5vw', '45vh']}
          mt="m"
        />
      </Flex>
    </Flex>
  </Flex>
)

export default EstateSection
