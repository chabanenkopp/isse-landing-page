import React from 'react'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS, CONTACT, DOWNLOAD } from 'Root/constants'
import { pxToRem } from 'helpers'
import TextLink from 'components/atoms/TextLink'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'

const Abstract = () => (
  <Text
    color={COLORS.MAJOLICA_BLUE}
    display="contents"
    fontSize={['xs', 'xs', 's']}
    fontWeight="thin"
  >
    Files for submission should match these rules: <br />
    Abstract: <b>ISSE2020_Abstract_##_surname.doc|.docx</b> and{' '}
    <b>ISSE2020_Abstract_##_surname.pdf</b>
    <br />
    Registration form: <b>ISSE2020_Abstract_##_surname.xls|.xlsx</b>
    <br />
    Please replace ## with Topic letter (A..K), include number{' '}
    <b>
      <font color={COLORS.AMERICAN_PINK}>
        only if you have more than one abstract
      </font>
    </b>
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
    fontSize={['xs', 'xs', 's']}
    fontWeight="thin"
  >
    <b>
      <font color={COLORS.AMERICAN_PINK}>After abstract acceptance</font>
    </b>
    &nbsp;you will be asked to send your paper and participant registration
    form. These documents should match the following rules: <br />
    Paper: <b>: ID_ISSE2020_Paper.doc|.docx </b> and
    <b> ID_ISSE2020_Paper.pdf</b>, where ID is your participant ID received in
    e-mail.
    <br />
    Registration form: <b>ID_isse2020_registration_form.xlsx</b>, where ID is
    your participant ID received in e-mail.
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
    <b>Example</b>:
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
        px={[pxToRem(20), pxToRem(35), '15%']}
        fontWeight="bold"
        color={COLORS.AMERICAN_PINK}
        mb="s"
      >
        Please note: Electronic submission only! (by email)
      </Text>
      <Text textAlign="center" px={[pxToRem(20), pxToRem(35), '15%']} mb="m">
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
    <Flex flexDirection="column" maxWidth={pxToRem(800)} m="0 auto" px="m">
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
