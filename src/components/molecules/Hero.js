import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'Theme'
import Container from 'components/atoms/Container'
import { Flex } from 'components/atoms/Layout'
import { H3 } from 'components/atoms/Typography'

const Background = styled.div`
  /* background-image: linear-gradient(#caece9, #ffffff); */
  padding-top: ${theme.space.l};
  padding-bottom: ${theme.space.l};
`

const Hero = ({ children }) => (
  <Background>
    <Container>
      <Flex justifyContent="center">
        <H3 textAlign="center">{children}</H3>
      </Flex>
    </Container>
  </Background>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
