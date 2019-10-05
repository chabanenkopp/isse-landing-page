import React from 'react'
import styled from 'styled-components'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import { fontWeights } from 'Theme'
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
const GOALS = [
  'New Materials, Components and Processes',
  'Thermal Management',
  'Advanced Packaging and Interconnection Technologies',
  'Testing, Reliability and Quality Management',
  'Process Modelling and Simulation',
  'Environmental and Ecological Effects in Electronics Technology',
  'Nanotechnology, Nanomaterials and Nanoelectronics',
  'Signal Integrity and Electromagnetic Compatibility',
  'Sensors, Actuators and Microsystems',
  'Educational and Information Technologies in Electronics Manufacturing',
  'Discrete and Integrated Components',
]

const GoalsList = () => (
  <StyledUL>
    {GOALS.map((title) => (
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

const GeneralInfo = () => (
  <Box my="xl">
    <Text
      data-aos="fade-up"
      textAlign="justify"
      lineHeight="1.8"
      fontSize="m"
      fontWeight={fontWeights.thin}
      px={[pxToRem(20), pxToRem(30), pxToRem(180)]}
      mt="xl"
      mb="m"
    >
      The&nbsp;
      <font color={COLORS.FLAX_FLOWER_BLUE}>
        <b>ISSE (International Spring Seminar on Electronics Technology)</b>
      </font>
      &nbsp; is one of the largest conferences encompassing all topics around
      the electronics technology all over the world and will be attended by 120
      - 140 experts and young researchers from more than 13 countries. The main
      focus of the ISSE is both directed in bringing deeper knowledge and
      information of electronics technology, and, especially for young
      researchers, to increase or confirm a motivation for intensifying their
      engagement in the field of electrical engineering. The conference is an
      effective crucial point for institutions, government officials, pioneering
      engineers, academics, experienced and young researchers and many other
      professionals working on relevant fields to discuss the current challenges
      and to provide up-to-date knowledge.
    </Text>
    <Text
      data-aos="fade-up"
      textAlign="justify"
      lineHeight="1.8"
      fontSize="m"
      fontWeight={fontWeights.thin}
      px={[pxToRem(20), pxToRem(30), pxToRem(180)]}
      my="m"
    >
      <font color={COLORS.FLAX_FLOWER_BLUE}>
        <b>The ISSE 2019</b>
      </font>
      &nbsp; will continue a long tradition of the preceding ISSE conference,
      starting by 1977 (Weissig/Germany) and the last one held in Zlatibor
      (Serbia, 2018). The ISSE 2019 will be hosted by the Wroclaw University of
      Science and Technology, Faculty of Microsystem Electronics and Photonics.
      Wroclaw is the capital city of Lower Silesia located in south-western
      Poland on the Oder River. The choice for Wroclaw was made by the
      international steering committee members that are worldwide leading
      scientists in the electronics technology field.
    </Text>
    <Text
      data-aos="fade-up"
      textAlign="justify"
      lineHeight="1.8"
      fontSize="m"
      fontWeight={fontWeights.thin}
      px={[pxToRem(20), pxToRem(30), pxToRem(180)]}
      my="m"
    >
      The hosting of such a famous international conference is not only a great
      chance to demonstrate the high level scientific research at the Wroclaw
      University of Science and Technology as well as to present the latest
      developed products but also a good opportunity to present the town Wroclaw
      as a beautiful city with a long tradition in history and culture. Reaching
      these aims presuppose both, the hard work of the scientific and organizing
      committee for preparing the conference, and above all a great support by
      local and governmental authorities as well as the leading companies in
      relevant fields.
    </Text>
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
        component={<GoalsList />}
      />
    </Flex>
  </Box>
)

export default GeneralInfo
