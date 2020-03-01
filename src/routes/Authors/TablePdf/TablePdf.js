import React from 'react'
import styled from 'styled-components'
import { radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import TextLink from 'components/atoms/TextLink'
import instructions from 'assets/pdf/instructions.pdf'
import requirements from 'assets/pdf/requirements.pdf'

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
  padding-top: ${pxToRem(10)};
  padding-bottom: ${pxToRem(10)};
  padding-right: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
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
  <Box px="m" data-aos="fade-up">
    <Table width={['unset', 'unset', pxToRem(500)]} maxWidth={pxToRem(500)}>
      <TH justifyContent="center">
        <Text
          textAlign="center"
          fontSize={['s', 's', 'm']}
          color={COLORS.WHITE}
        >
          Articles and Presentation Info!
        </Text>
      </TH>
      <Row>
        <Box minWidth="70%">
          <Text fontSize={['xs', 's', 'm']}>
            Requirements and recommendations
          </Text>
        </Box>
        <Box minWidth="30%" textAlign="center">
          <TextLink
            as="a"
            href={requirements}
            color={`${COLORS.AMERICAN_PINK} !important`}
            fontSize={['xs', 's', 'm']}
          >
            Download
          </TextLink>
        </Box>
      </Row>
      <Row>
        <Box minWidth="70%">
          <Text fontSize={['xs', 's', 'm']}>Instructions for presentation</Text>
        </Box>
        <Box minWidth="30%" textAlign="center">
          <TextLink
            as="a"
            href={instructions}
            color={`${COLORS.AMERICAN_PINK} !important`}
            fontSize={['xs', 's', 'm']}
          >
            Download
          </TextLink>
        </Box>
      </Row>
    </Table>
  </Box>
)

export default TablePdf
