import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import Row from './Row'
import Title from './Title'

const StyledFlex = styled(Flex)`
  align-items: center;
  justify-content: center;
  font-family: Avenir;
`

const Stepper = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    justifyContent="center"
    alignItems={['center', 'center', 'unset']}
  >
    <Box data-aos="fade-up" mr={[0, 0, pxToRem(150)]} mt={['xl', 'xl', 0]}>
      <StyledFlex>
        <Text
          fontSize={pxToRem(46)}
          fontWeight="bold"
          color={COLORS.MAJOLICA_BLUE}
          mr="m"
        >
          1
        </Text>
        <Title fontSize={pxToRem(24)} fontWeight="bold">
          GET APPROVED
        </Title>
      </StyledFlex>
      <Box ml={(0, 0, 'm')} width={pxToRem(195)}>
        <Row>Follow a few simple steps and get pre-approval now</Row>
      </Box>
    </Box>
    <Box data-aos="fade-up" mr={[0, 0, pxToRem(150)]} mt={['xxl', 'xxl', 0]}>
      <StyledFlex>
        <Text
          fontSize={pxToRem(46)}
          fontWeight="bold"
          color={COLORS.ARAGON_GREEN}
          mr="m"
        >
          2
        </Text>
        <Title>FIND A HOME</Title>
      </StyledFlex>
      <Box ml={(0, 0, 'm')} width={pxToRem(195)}>
        <Row>
          Make it a reality. We will work with you to get you into your dream
          home
        </Row>
      </Box>
    </Box>
    <Box data-aos="fade-up" mt={['xxl', 'xxl', 0]}>
      <StyledFlex>
        <Text
          fontSize={pxToRem(46)}
          fontWeight="bold"
          color={COLORS.BUTTERSCOTCH}
          mr="m"
        >
          3
        </Text>
        <Title>LIVE THE DREAM</Title>
      </StyledFlex>
      <Box ml={(0, 0, 'm')} width={pxToRem(195)}>
        <Row>
          Do what you want when you want. Start building your future today
        </Row>
      </Box>
    </Box>
  </Flex>
)

export default Stepper
