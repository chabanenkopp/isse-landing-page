import React from 'react'
import styled from 'styled-components'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import { fontWeights } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS, DOWNLOAD } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import TextLink from 'components/atoms/TextLink'
import listItem from 'assets/images/list-item.svg'

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  margin-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
`
const CONFERENCE_FEE = [
  'Conference materials (abstract book, papers on a USB stick, conference bag)',
  'Participation in all ISSE conference sessions',
  'Accommodation',
  'Full board with coffee breaks and refreshments',
  'Social events',
  'Gala dinner',
]
const PERSON_FEE = [
  'Accommodation in a double room',
  'Full board with coffee breaks and refreshments',
  'Social events',
  'Gala dinner',
]

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
          fontSize={['xs', 's', 'm']}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)
const PersonFeeList = () => (
  <StyledUL>
    {PERSON_FEE.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={['xs', 's', 'm']}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)
const BankDetails = () => (
  <div>
    <Text
      color={COLORS.MAJOLICA_BLUE}
      fontSize={['s', 'm', 'l']}
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
            fontSize={['xs', 's', 'm']}
            fontWeight="thin"
          >
            {title}
          </Text>
        </li>
      ))}
    </StyledUL>
    <Text
      color={COLORS.MAJOLICA_BLUE}
      fontSize={['s', 'm', 'l']}
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
            fontSize={['xs', 's', 'm']}
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
    <Text textAlign="center" fontSize="xl" mt="xl" mx="m">
      Please, complete your conference registration until&nbsp;
      <span
        style={{
          color: COLORS.FLAX_FLOWER_BLUE,
          fontWeight: fontWeights.semi_bold,
        }}
      >
        March 25, 2020.
      </span>
    </Text>
    <Flex justifyContent="center" alignItems="center">
      <TextLink
        as="a"
        href={DOWNLOAD.REG_PAPER_FORM}
        color={COLORS.FLAX_FLOWER_BLUE}
      >
        Download
      </TextLink>
      &nbsp;<Text>Registration form</Text>
    </Flex>
    <Box mt="xxl">
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar title="Bank account:" component={<BankDetails />} />
      </Flex>
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar
          title="The conference fee includes:"
          component={<ConferenceFeeList />}
        />
      </Flex>
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar
          title="Accompanying person fee details:"
          component={<PersonFeeList />}
        />
      </Flex>
    </Box>
  </React.Fragment>
)

export default PaymentDetails
