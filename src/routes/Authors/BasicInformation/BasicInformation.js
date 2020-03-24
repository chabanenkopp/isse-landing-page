import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import Bb from 'components/atoms/Bb'
import TextLink from 'components/atoms/TextLink'

// ToDo: add hrefs for downloading files :   {/* href={DOWNLOAD.REG_FORM} */}

const StyledTextLineThrough = styled(Text)`
  text-decoration: line-through;
`

const BasicInformation = () => (
  <Box mt="xl" data-aos="fade-up">
    <Text textAlign="center" fontSize="xxl" mb="xl" mx="m">
      Basic information for participants
    </Text>
    <Text
      textAlign="center"
      fontWeight="thin"
      px={[pxToRem(20), pxToRem(35), '15%']}
      mb="s"
    >
      <Bb>Final Program</Bb> of the conference has been released. You can
      download it &nbsp;
      <TextLink as="a" color={COLORS.FLAX_FLOWER_BLUE}>
        here.
      </TextLink>
    </Text>
    <StyledTextLineThrough
      textAlign="center"
      fontWeight="thin"
      px={[pxToRem(20), pxToRem(35), '15%']}
      mb="s"
    >
      <Bb>Cultural Program</Bb> of the conference has been released. You can
      download it &nbsp;
      <TextLink as="a" color={COLORS.FLAX_FLOWER_BLUE}>
        here.
      </TextLink>
    </StyledTextLineThrough>
    <Text
      textAlign="center"
      fontWeight="thin"
      px={[pxToRem(20), pxToRem(35), '15%']}
    >
      <b>IEEE Electronic Copyright Form:</b> Authors of accepted papers will be
      notified directly by IEEE and requested to release the copyright of their
      paper to <Bb>IEEE</Bb>.
    </Text>
  </Box>
)

export default BasicInformation
