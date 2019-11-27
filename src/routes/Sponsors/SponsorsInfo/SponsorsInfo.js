import React from 'react'
import styled from 'styled-components'
// import { Element as ScrollTo } from 'react-scroll'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import { fontWeights } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'
import PackageTable from './PackageTable'

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
`

const MILI = [
  'participation of two representatives of the sponsor in the exhibition',
  'a stand with a desk',
  'company profile, logo, and contact information on conference website and in conference program',
  'participation in events – Welcome reception and Gala dinner',
  'full board with coffee breaks and refreshments',
  'welcome package',
]

const MICRO = [
  'advertisment during coffee breaks',
  'banner and company flyers',
  'company profile, logo, and contact information on conference website and in conference program',
]

const NANO = [
  'advertisment in conference program',
  'company profile, logo, and contact information on conference website',
]

const PICO = ['advertisement in the abstract book']

const MiliList = () => (
  <StyledUL>
    {MILI.map((title) => (
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
const MicroList = () => (
  <StyledUL>
    {MICRO.map((title) => (
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
const NanoList = () => (
  <StyledUL>
    {NANO.map((title) => (
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
const PicoList = () => (
  <StyledUL>
    {PICO.map((title) => (
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

const SponsorsInfo = () => (
  <Box my="xl">
    <Box mt="l" />
    <Text
      data-aos="fade-up"
      textAlign="justify"
      lineHeight="1.8"
      fontSize="m"
      fontWeight={fontWeights.thin}
      px={[pxToRem(10), pxToRem(30), pxToRem(180)]}
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
    <PackageTable />
    <Box width="100%">
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar title="TERA" component={<MiliList />} />
      </Flex>
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar title="GIGA" component={<MicroList />} />
      </Flex>
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar title="MEGA" component={<NanoList title="NANO" />} />
      </Flex>
      <Flex
        data-aos="fade-up"
        flexDirection="column"
        maxWidth={pxToRem(800)}
        m="0 auto"
        mt="l"
        px="m"
      >
        <UnfoldTextBar title="KILO" component={<PicoList title="PICO" />} />
      </Flex>
    </Box>
  </Box>
)

export default SponsorsInfo
