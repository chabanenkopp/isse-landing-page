import React, { useState } from 'react'
import styled from 'styled-components'
import { pxToRem } from 'helpers'
import { Box, Flex } from 'components/atoms/Layout'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import { radius, fontWeights } from 'Theme'
import AnimatedClouds from './AnimatedClouds'

const TableBox = styled(Box)`
  width: ${pxToRem(300)};
  border-radius: ${radius.l};
  background-color: ${COLORS.WHITE};
  box-shadow: rgba(46, 59, 125, 0.23) 0 10px 16px -8px;
`
const BlueBox = styled(Box)`
  border-top-left-radius: ${radius.l};
  border-top-right-radius: ${radius.l};
  background-image: linear-gradient(
    300deg,
    ${COLORS.FLAX_FLOWER_BLUE},
    ${COLORS.ATHENA_BLUE}
  );
  ${({ isCanceled }) =>
    isCanceled &&
    `
      background-image: linear-gradient(
      300deg,
      ${COLORS.KACEYS_PINK},
      ${COLORS.LYNX_WHITE}
    );
  `}
`

const DetailsBox = styled(Box)`
  transform: translateY(-1px);
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  background-color: ${COLORS.WHITE};
`

const PriceList = () => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false)
  const [isHoveredSecond, setIsHoveredSecond] = useState(false)
  const [isHoveredThird, setIsHoveredThird] = useState(false)
  return (
    <>
      {/* <Flex justifyContent="center" data-aos="fade-up" mb="xl"> */}
      <Flex justifyContent="center" mb="xl">
        <Text
          color={COLORS.MAJOLICA_BLUE}
          fontWeight={fontWeights.thin}
          fontSize={['xxl', 'xxxl', 'xxxxl']}
        >
          Registration&nbsp;
        </Text>
        <Text
          color={COLORS.FLAX_FLOWER_BLUE}
          fontWeight={fontWeights.semi_bold}
          fontSize={['xxl', 'xxxl', 'xxxxl']}
        >
          And Fees
        </Text>
      </Flex>
      <Flex
        flexDirection={['column', 'column', 'row']}
        justifyContent="center"
        alignItems="center"
      >
        <TableBox
          onMouseEnter={() => setIsHoveredFirst(true)}
          onMouseLeave={() => setIsHoveredFirst(false)}
          data-aos="fade-up"
        >
          <BlueBox isCanceled>
            <Text textAlign="center" fontSize="xxl" color={COLORS.WHITE} py="l">
              DOUBLE ROOM
            </Text>
            <Text textAlign="center" color={COLORS.WHITE}>
              (CANCELED)
            </Text>
            <AnimatedClouds isHovered={isHoveredFirst} />
          </BlueBox>
          <DetailsBox>
            <Text
              textAlign="center"
              fontSize="xl"
              color={COLORS.MAJOLICA_BLUE}
              pt="m"
            >
              Early bird: N/A
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.ROCK_BLUE}
              pt="s"
            >
              (before April 16th, 2020)
            </Text>
            <Text
              textAlign="center"
              fontSize="xl"
              color={COLORS.MAJOLICA_BLUE}
              pt="m"
            >
              Late registration: N/A
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.ROCK_BLUE}
              pt="s"
            >
              (after April 16th, 2020)
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.MAJOLICA_BLUE}
              pt="m"
              pb="xl"
            >
              Accompanying person: N/A
            </Text>
          </DetailsBox>
        </TableBox>
        <TableBox
          onMouseEnter={() => setIsHoveredSecond(true)}
          onMouseLeave={() => setIsHoveredSecond(false)}
          data-aos="fade-up"
          mx={[0, 0, 'l']}
          my={['xl', 'xl', 0]}
        >
          <BlueBox>
            <Text textAlign="center" fontSize="xxl" color={COLORS.WHITE} py="l">
              STANDARD
            </Text>
            <AnimatedClouds isHovered={isHoveredSecond} />
          </BlueBox>
          <DetailsBox>
            <Text
              textAlign="center"
              fontSize="xl"
              color={COLORS.MAJOLICA_BLUE}
              pt="l"
            >
              Early bird: € 85
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.ROCK_BLUE}
              pt="m"
            >
              (before April 16th, 2020)
            </Text>
            <Text
              textAlign="center"
              fontSize="xl"
              color={COLORS.MAJOLICA_BLUE}
              pt="m"
            >
              Late registration: € 100
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.ROCK_BLUE}
              pt="m"
              pb="xxl"
            >
              (after April 16th, 2020)
            </Text>
          </DetailsBox>
        </TableBox>
        <TableBox
          onMouseEnter={() => setIsHoveredThird(true)}
          onMouseLeave={() => setIsHoveredThird(false)}
          data-aos="fade-up"
        >
          <BlueBox isCanceled>
            <Text
              textAlign="center"
              fontSize="xxl"
              color={COLORS.WHITE}
              pt="l"
              pb="s"
            >
              STUDENTS
            </Text>
            <Text textAlign="center" color={COLORS.WHITE}>
              (CANCELED)
            </Text>
            <AnimatedClouds isHovered={isHoveredThird} />
          </BlueBox>
          <DetailsBox>
            <Text
              textAlign="center"
              fontSize="xl"
              color={COLORS.MAJOLICA_BLUE}
              pt="l"
            >
              Early bird: N/A
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.ROCK_BLUE}
              pt="s"
            >
              (before April 16th, 2020)
            </Text>
            <Text
              textAlign="center"
              fontSize="xl"
              color={COLORS.MAJOLICA_BLUE}
              pt="m"
            >
              Late registration: N/A
            </Text>
            <Text
              textAlign="center"
              fontSize="s"
              color={COLORS.ROCK_BLUE}
              pt="m"
              pb="xl"
            >
              (after April 16th, 2020)
            </Text>
          </DetailsBox>
        </TableBox>
      </Flex>
    </>
  )
}

export default PriceList
