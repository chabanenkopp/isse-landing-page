import React from 'react'
import { fontWeights } from 'Theme'
import { Text } from 'components/atoms/Typography'

const Paragraph = (props) => (
  <Text
    data-aos="fade-up"
    textAlign="justify"
    lineHeight="1.8"
    fontSize="m"
    fontWeight={fontWeights.thin}
    mb="l"
    {...props}
  />
)

export default Paragraph
