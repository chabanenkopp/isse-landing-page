import React from 'react'
import PropTypes from 'prop-types'
import { fontWeights } from 'Theme'
import { Text } from 'components/atoms/Typography'

const Title = ({ children }) => (
  <Text fontSize="s" fontWeight={fontWeights.bold} mb="m">
    {children}
  </Text>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
