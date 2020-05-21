import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { radius } from 'Theme'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import TextLink from 'components/atoms/TextLink'
import instructions from 'assets/pdf/instructions.pdf'
import requirements from 'assets/pdf/requirements.pdf'

const TABLE_WIDTH = rem(500)
const TEXT_SIZE = { mobile: 'xs', tablet: 's', desktop: 'm' }

const Table = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const Row = styled(Flex)`
  width: 100%;
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  padding-right: ${rem(20)};
  padding-left: ${rem(20)};
  ${({ lastElement }) =>
    lastElement &&
    `border-bottom-left-radius: ${radius.l};
     border-bottom-right-radius: ${radius.l};
    `}
`

const TH = styled(Row)`
  background-image: linear-gradient(
    300deg,
    ${COLORS.AMERICAN_PINK},
    ${COLORS.DRESS_UP}
  );
  border-top-left-radius: ${radius.l};
  border-top-right-radius: ${radius.l};
`

const TablePdf = () => (
  <Box data-aos="fade-up">
    <Table
      width={{ mobile: 'unset', desktop: TABLE_WIDTH }}
      maxWidth={TABLE_WIDTH}
    >
      <TH justifyContent="center">
        <Text
          textAlign="center"
          fontSize={{ mobile: 's', desktop: 'm' }}
          color={COLORS.WHITE}
        >
          Articles and Presentation Info!
        </Text>
      </TH>
      <Row>
        <Box minWidth="70%">
          <Text fontSize={TEXT_SIZE}>Requirements and recommendations</Text>
        </Box>
        <Box minWidth="30%" textAlign="center">
          <TextLink
            as="a"
            href={requirements}
            color={`${COLORS.AMERICAN_PINK} !important`}
            fontSize={TEXT_SIZE}
          >
            Download
          </TextLink>
        </Box>
      </Row>
      <Row>
        <Box minWidth="70%">
          <Text fontSize={TEXT_SIZE}>Instructions for presentation</Text>
        </Box>
        <Box minWidth="30%" textAlign="center">
          <TextLink
            as="a"
            href={instructions}
            color={`${COLORS.AMERICAN_PINK} !important`}
            fontSize={TEXT_SIZE}
          >
            Download
          </TextLink>
        </Box>
      </Row>
    </Table>
  </Box>
)

export default TablePdf
