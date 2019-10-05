import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'

const StyledText = styled(Text)`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  display: block;
`

const Row = ({ children, as, href }) => (
  <StyledText
    as={as}
    href={href}
    fontSize="l"
    mb="s"
    color={COLORS.ROCK_BLUE}
    textAlign={['center', 'center', 'start']}
  >
    {children}
  </StyledText>
)

Row.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  href: PropTypes.string,
}

export default Row
