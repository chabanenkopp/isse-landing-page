import React from 'react'
import styled from 'styled-components'
import { theme } from 'Theme'
import { Flex } from 'components/atoms/Layout'
import facebook from 'assets/images/social-media/facebook.svg'
import twitter from 'assets/images/social-media/twitter.svg'

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  padding: ${theme.space.m};
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-repeat: no-repeat;
`

const SocialIconsLinks = () => (
  <Flex flexDirection="row" ml="-10px">
    <Link href=" #" image={facebook} />
    <Link href=" #" image={twitter} />
  </Flex>
)

export default SocialIconsLinks
