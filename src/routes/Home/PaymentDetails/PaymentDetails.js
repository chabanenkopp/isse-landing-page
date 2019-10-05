import React from 'react'
import styled from 'styled-components'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import { fontSizes, fontWeights } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  margin-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
`
const CONFERENCE_FEE = [
  'Conference materials (abstract book, papers on USB stick, conference bag)',
  'Participation of all ISSE conference sessions',
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

const BANK_ACCOUNT_DETAILS = [
  'Bank: Santander Bank Polska S.A.',
  'Address: Norwida 1/3, 50-373 Wroclaw, Poland',
  'Account holder: Wroclaw University of Science and Technology',
  'Swift BIC: WBK PPL PP',
  'Account number: PL 37 1090 2402 0000 0006 1000 0434',
  'Subject: ISSE2019_name_person-ID',
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
  <StyledUL>
    {BANK_ACCOUNT_DETAILS.map((title) => (
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

const TextLink = styled(Text)`
  text-decoration: none;
  cursor: pointer;
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.semi_bold};
  color: ${COLORS.FLAX_FLOWER_BLUE};
`

const PaymentDetails = () => (
  <React.Fragment>
    <Box my="xl" m="0 auto" maxWidth={pxToRem(1000)} px="m">
      <Text
        data-aos="fade-up"
        textAlign="center"
        fontSize="m"
        fontWeight={fontWeights.thin}
        my="xl"
      >
        Conference attendees are requested to complete the &nbsp;
        <TextLink
          as="a"
          href="https://srv-file7.gofile.io/download/kKhfYV/registration_form.xlsx"
          color={COLORS.FLAX_FLOWER_BLUE}
        >
          Participant Registration Form&nbsp;
        </TextLink>
        and send it to&nbsp;
        <TextLink
          as="a"
          href="mailto: isse2020@gmail.com"
          color={COLORS.FLAX_FLOWER_BLUE}
        >
          isse2020@gmail.com&nbsp;
        </TextLink>
        as soon as possible. Based on this form you will receive an invoice for
        the the the conference fee where you will be asked to pay by bank
        transfer (payment should be done before 17th of April, 2019). You will
        be notified by email about the successful transfer.
      </Text>
    </Box>
    <Box>
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
    </Box>
  </React.Fragment>
)

export default PaymentDetails
