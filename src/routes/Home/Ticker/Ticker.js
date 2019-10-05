import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import { radius } from 'Theme'
import Column from './Column'

const TickerContainer = styled(Box)`
  background-color: ${COLORS.WHITE};
  margin: 0 auto;
  border-radius: ${radius.m};
  box-shadow: 1px 1px ${pxToRem(27)} ${pxToRem(-20)} rgba(0, 0, 0, 0.75);
`

const Ticker = () => (
  <TickerContainer width={[pxToRem(380), pxToRem(440), pxToRem(680)]}>
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyConnent="center"
      pt="l"
      pb={['l', 'l', 'xl']}
    >
      <Text
        fontSize={['xl', 'xl', 'xxxl']}
        color={COLORS.MAJOLICA_BLUE}
        mb={['l', 'l', 'xl']}
        fontWeight="bold"
      >
        Crescent Heights in numbers
      </Text>
      <Box>
        <Flex>
          <Column>Built</Column>
          <Column right>38K</Column>
        </Flex>
        <Flex>
          <Column>Sold</Column>
          <Column right>28K</Column>
        </Flex>
        <Flex>
          <Column>Housed</Column>
          <Column right>40K</Column>
        </Flex>
      </Box>
    </Flex>
  </TickerContainer>
)

export default Ticker
