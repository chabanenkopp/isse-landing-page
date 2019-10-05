import React from 'react'
import { Box } from 'components/atoms/Layout'
import { COLORS, TEL_NUMBER } from 'Root/constants'
import { Text } from 'components/atoms/Typography'

const HEADING_FONT_SIZE = 'xxl'

const RelatedText = () => (
  <Box mb={['xl', 'xl', 0]}>
    <Box mt={['l', 'l', 'xl']} textAlign={['center', 'center', 'left']}>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        fontWeight="bold"
        fontSize={HEADING_FONT_SIZE}
      >
        Should You Have
      </Text>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        fontWeight="bold"
        fontSize={HEADING_FONT_SIZE}
      >
        Any Questions,
      </Text>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        fontWeight="bold"
        fontSize={HEADING_FONT_SIZE}
      >
        Please, Contact Us
      </Text>
    </Box>
    <Box mt={['m', 'm', 'l']} pr={[0, 0, 'xl']}>
      <Text color={COLORS.LUXURY} fontSize="l">
        If you'd like, you can call us directly at:
      </Text>
      <Text
        as="a"
        href={`tel:${TEL_NUMBER}`}
        color={COLORS.LUXURY}
        fontSize="l"
      >
        {TEL_NUMBER}
      </Text>
    </Box>
  </Box>
)

export default RelatedText
