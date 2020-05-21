import React from 'react'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'

import TablePdf from '../TablePdf'

const Requirements = () => (
  <Box data-aos="fade-up" mt="l" mb="xl">
    <Text
      textAlign="center"
      fontWeight="bold"
      color={COLORS.AMERICAN_PINK}
      mb="l"
    >
      Please be sure your abstract, paper and presentation matche the following:
    </Text>
    <TablePdf />
  </Box>
)

export default Requirements
