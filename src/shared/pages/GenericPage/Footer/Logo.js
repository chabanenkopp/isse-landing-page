import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { theme } from 'Theme'
import { pxToRem } from 'helpers'

const LogoElement = styled.img`
  max-height: ${pxToRem(50)};
  margin-bottom: ${theme.space.s};
  display: block;
`

const Logo = ({ img, href }) => {
  if (href)
    return (
      <a href={href}>
        <LogoElement src={img} alt="isse" />
      </a>
    )
  return (
    <GatsbyLink to="/">
      <LogoElement src={img} alt="isse" />
    </GatsbyLink>
  )
}

Logo.propTypes = {
  img: PropTypes.string.isRequired,
  href: PropTypes.string,
}

export default Logo
