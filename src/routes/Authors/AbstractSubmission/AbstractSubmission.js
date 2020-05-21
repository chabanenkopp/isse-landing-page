import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { fontWeights } from 'Theme'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS, CONTACT, DOWNLOAD } from 'Root/constants'
import TextLink from 'components/atoms/TextLink'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'

const BoldText = styled(Text)`
  font-weight: ${fontWeights.semi_bold};
`

const Abstract = () => (
  <Text
    color={COLORS.MAJOLICA_BLUE}
    display="contents"
    fontSize={{ mobile: 'xs', desktop: 's' }}
    fontWeight="thin"
  >
    Files for submission should match these rules: <br />
    Abstract:{' '}
    <BoldText as="span">
      ISSE2020_Abstract_##_surname.doc|.docx
    </BoldText> and{' '}
    <BoldText as="span">ISSE2020_Abstract_##_surname.pdf</BoldText>
    <br />
    Registration form: <b>ISSE2020_Abstract_##_surname.xls|.xlsx</b>
    <br />
    Please replace ## with Topic letter (A..K), include number{' '}
    <BoldText as="span" color={COLORS.AMERICAN_PINK}>
      only if you have more than one abstract
    </BoldText>
    !<br />
    <br />
    <TextLink as="a" href={DOWNLOAD.ABSTR_FORM} color={COLORS.FLAX_FLOWER_BLUE}>
      Download
    </TextLink>
    &nbsp;Template for your abstract
    <br />
    <TextLink as="a" href={DOWNLOAD.REG_FORM} color={COLORS.FLAX_FLOWER_BLUE}>
      Download
    </TextLink>
    &nbsp;Abstract registration form
    <br />
    <br />
    <b>Example</b> (for only one abstract):
    <br /> ISSE2020_Abstract_A_Kowalski.doc/docx
    <br />
    ISSE2020_Abstract_A_Kowalski.pdf <br />
    ISSE2020_Abstract_A_Kowalski.xls/xlsx
  </Text>
)
const Paper = () => (
  <Text
    color={COLORS.MAJOLICA_BLUE}
    display="contents"
    fontSize={{ mobile: 'xs', desktop: 's' }}
    fontWeight="thin"
  >
    <BoldText as="span" color={COLORS.AMERICAN_PINK}>
      After abstract acceptance
    </BoldText>
    &nbsp;you will be asked to send your paper and participant registration
    form. These documents should match the following rules: <br />
    Paper: <BoldText as="span">: ID_ISSE2020_Paper.doc|.docx </BoldText> and
    <BoldText as="span"> ID_ISSE2020_Paper.pdf</BoldText>
    , where ID is your participant ID received in e-mail.
    <br />
    Registration form:{' '}
    <BoldText as="span">ID_isse2020_registration_form.xlsx</BoldText>
    , where ID is your participant ID received in e-mail.
    <br />
    <br />
    <TextLink as="a" href={DOWNLOAD.PAPER_FORM} color={COLORS.FLAX_FLOWER_BLUE}>
      Download
    </TextLink>
    &nbsp;Template for your paper
    <br />
    <TextLink
      as="a"
      href={DOWNLOAD.REG_PAPER_FORM}
      color={COLORS.FLAX_FLOWER_BLUE}
    >
      Download
    </TextLink>
    &nbsp;Registration form
    <br />
    <br />
    <BoldText as="span">Example:</BoldText>
    <br /> P001_isse2020_registration_form.xlsx
    <br />
    P001_ISSE2020_Paper.doc <br />
    P001_ISSE2020_Paper.pdf
  </Text>
)

const AbstractSubmission = () => (
  <Box data-aos="fade-up" mt="xl">
    <Text textAlign="center" fontSize="xxl" mb="xl">
      Submissions
    </Text>
    <div>
      <Text
        textAlign="center"
        fontWeight="bold"
        color={COLORS.AMERICAN_PINK}
        mb="s"
      >
        Please note: Electronic submission only! (by email)
      </Text>

      <Text textAlign="center" mb="m">
        Submit abstracts and papers to:&nbsp;
        <TextLink
          as="a"
          href={`mailto: ${CONTACT.EMAIL}`}
          color={COLORS.FLAX_FLOWER_BLUE}
        >
          {CONTACT.EMAIL}&nbsp;
        </TextLink>
        including:
      </Text>
    </div>
    <Flex flexDirection="column" maxWidth={rem(800)} m="0 auto">
      <Box data-aos="fade-up" mt="xl">
        <UnfoldTextBar title="Your abstract" component={<Abstract />} />
      </Box>
      <Box data-aos="fade-up" my="xl">
        <UnfoldTextBar title="Your paper" component={<Paper />} />
      </Box>
    </Flex>
  </Box>
)

export default AbstractSubmission
