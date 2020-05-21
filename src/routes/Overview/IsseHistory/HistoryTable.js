import React from 'react'
import styled from 'styled-components'
import { radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { DATA } from './data'

const HEADING_SIZE = { mobile: 's', desktop: 'm' }
const ROW_SIZE = { mobile: 'xs', tablet: 's', desktop: 'm' }
const TABLE_RADIUS = radius.l

const Table = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom-left-radius: ${TABLE_RADIUS};
  border-bottom-right-radius: ${TABLE_RADIUS};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const Row = styled(Flex)`
  width: 100%;
  padding: ${pxToRem(20)};
  ${({ lastElement }) =>
    lastElement &&
    `border-bottom-left-radius: ${TABLE_RADIUS};
     border-bottom-right-radius: ${TABLE_RADIUS};
    `}
`

const TH = styled(Row)`
  background-image: linear-gradient(
    300deg,
    ${COLORS.FLAX_FLOWER_BLUE},
    ${COLORS.ATHENA_BLUE}
  );
  border-top-left-radius: ${TABLE_RADIUS};
  border-top-right-radius: ${TABLE_RADIUS};
`

const Column = styled(Flex)`
  align-items: center;
`

const HistoryTable = () => (
  <Box my="xl" data-aos="fade-up">
    <Table>
      <TH>
        <Column minWidth="15%" justifyContent="center">
          <Text fontSize={HEADING_SIZE} color={COLORS.WHITE}>
            Year
          </Text>
        </Column>
        <Column minWidth="35%" justifyContent="center">
          <Text fontSize={HEADING_SIZE} color={COLORS.WHITE}>
            Venue
          </Text>
        </Column>
        <Column minWidth="50%" justifyContent="center">
          <Text fontSize={HEADING_SIZE} color={COLORS.WHITE}>
            Theme
          </Text>
        </Column>
      </TH>
      {DATA.map(({ year, venue, theme }, i) => {
        return (
          <Row
            bg={(i + 1) % 2 === 0 ? COLORS.COTTON_BALL : COLORS.WHITE}
            lastElement={DATA.length === i + 1}
            key={year}
          >
            <Column minWidth="15%" justifyContent="center">
              <Text fontSize={ROW_SIZE}>{year}</Text>
            </Column>
            <Column minWidth="35%" justifyContent="center">
              <Text fontSize={ROW_SIZE} ml="m">
                {venue}
              </Text>
            </Column>
            <Column minWidth="50%" justifyContent="left">
              <Text fontSize={ROW_SIZE} ml="m">
                {theme}
              </Text>
            </Column>
          </Row>
        )
      })}
    </Table>
  </Box>
)

export default HistoryTable
