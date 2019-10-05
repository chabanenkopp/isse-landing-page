import React from 'react'
import PropTypes from 'prop-types'
import { fontWeights } from 'Theme'
import { Text } from 'components/atoms/Typography'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'

const Title = ({ children }) => (
  <Text
    fontSize={pxToRem(21)}
    fontWeight={fontWeights.bold}
    mb="m"
    color={COLORS.MAJOLICA_BLUE}
    mt="m"
  >
    {children}
  </Text>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
