import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'Root/constants'
import { radius } from 'Theme'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const TableFlex = styled(Flex)`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
`

const RowTitleFlex = styled(Flex)`
  justify-content: space-between;
  background-image: linear-gradient(
    300deg,
    ${COLORS.FLAX_FLOWER_BLUE},
    ${COLORS.ATHENA_BLUE}
  );
  width: 100%;
  padding: ${pxToRem(20)};
  border-top-left-radius: ${radius.l};
  border-top-right-radius: ${radius.l};
`
const RowValuesFlex = styled(Flex)`
  justify-content: space-between;
  width: 100%;
  padding: ${pxToRem(20)};
`

const PackageTable = () => (
  <Box my="xxl" px="s" data-aos="fade-up">
    <TableFlex>
      <RowTitleFlex bg={COLORS.FLAX_FLOWER_BLUE}>
        <Text color={COLORS.WHITE} px="m">
          MILI
        </Text>
        <Text color={COLORS.WHITE} px="m">
          MICRO
        </Text>
        <Text color={COLORS.WHITE} px="m">
          NANO
        </Text>
        <Text color={COLORS.WHITE} px="m">
          PICO
        </Text>
      </RowTitleFlex>
      <RowValuesFlex>
        <Text pr="m">€ 2500</Text>
        <Text pr="m">€ 1500</Text>
        <Text pr="m">€ 1000</Text>
        <Text pr="m">€ 900</Text>
      </RowValuesFlex>
    </TableFlex>
  </Box>
)

export default PackageTable
