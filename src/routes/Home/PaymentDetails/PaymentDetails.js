import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import { fontWeights } from 'Theme'
import { COLORS, DOWNLOAD } from 'Root/constants'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import TextLink from 'components/atoms/TextLink'
import listItem from 'assets/images/list-item.svg'

const STYLED_TEXT = { mobile: 'xs', tablet: 's', desktop: 'm' }
const HEADER_TEXT_SIZE = { mobile: 's', tablet: 'm', desktop: 'l' }
const PADDING = rem(20)
const MAX_WIDTH = rem(800)

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  margin-left: ${PADDING};
  padding-right: ${PADDING};
`
const CONFERENCE_FEE = ['Conference materials', 'Hotel cancellation', 'Others']

const ACCOUNT_HOLDER_DETAILS = [
  'Slovenská elektrotechnická spoločnosť, Branch FEI TU Košice',
  'Letná 9, 042 00 Košice, Slovak Republic',
  'Business ID: 12665037',
  'Tax ID: 2020767925',
  'IBAN: SK55 0900 0000 0000 8212 8234',
  'Variable symbol: 080',
  'Constant symbol: 0308',
  'Subject: ISSE2020_name_person-ID',
]
const BANK_DETAILS = [
  'BIC (SWIFT) Code: GIBASKBX',
  'Slovenská sporiteľňa, a.s.',
  'Tomášikova 48, 832 37 Bratislava,',
  'Slovak Republic',
]

const ConferenceFeeList = () => (
  <StyledUL>
    {CONFERENCE_FEE.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={STYLED_TEXT}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)
const BankDetailsList = () => (
  <div>
    <Text
      color={COLORS.MAJOLICA_BLUE}
      fontSize={HEADER_TEXT_SIZE}
      fontWeight="normal"
      ml="m"
      mb="m"
    >
      Account Holder
    </Text>
    <StyledUL>
      {ACCOUNT_HOLDER_DETAILS.map((title) => (
        <li key={title}>
          <Text
            color={COLORS.MAJOLICA_BLUE}
            display="contents"
            fontSize={STYLED_TEXT}
            fontWeight="thin"
          >
            {title}
          </Text>
        </li>
      ))}
    </StyledUL>
    <Text
      color={COLORS.MAJOLICA_BLUE}
      fontSize={HEADER_TEXT_SIZE}
      fontWeight="normal"
      ml="m"
      mb="s"
    >
      Bank
    </Text>
    <StyledUL>
      {BANK_DETAILS.map((title) => (
        <li key={title}>
          <Text
            color={COLORS.MAJOLICA_BLUE}
            display="contents"
            fontSize={STYLED_TEXT}
            fontWeight="thin"
          >
            {title}
          </Text>
        </li>
      ))}
    </StyledUL>
  </div>
)

const PaymentDetails = () => (
  <React.Fragment>
    <Text textAlign="center">
      <TextLink
        as="a"
        href={DOWNLOAD.REG_PAPER_FORM}
        color={COLORS.FLAX_FLOWER_BLUE}
        fontSize="xl"
      >
        Download
      </TextLink>{' '}
      <Text as="span" fontSize="xl" fontWeight="thin">
        Registration form
      </Text>
    </Text>
    <Box mt="xxl">
      <Box data-aos="fade-up" maxWidth={MAX_WIDTH} m="0 auto" mt="l">
        <UnfoldTextBar title="Bank account:" component={<BankDetailsList />} />
      </Box>
      <Box data-aos="fade-up" maxWidth={MAX_WIDTH} m="0 auto" mt="l">
        <UnfoldTextBar
          title="The conference fee includes:"
          component={<ConferenceFeeList />}
        />
      </Box>
    </Box>
  </React.Fragment>
)

export default PaymentDetails
