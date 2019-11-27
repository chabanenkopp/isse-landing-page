import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { theme } from 'Theme'
import { pxToRem } from 'helpers'

const LogoElement = styled.img`
  max-height: ${pxToRem(50)};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  margin-bottom: ${theme.space.s};
  display: block;
`

const Logo = ({ img, href, maxHeight }) => {
  if (href)
    return (
      <a href={href}>
        <LogoElement src={img} alt="isse" maxHeight={maxHeight} />
      </a>
    )
  return (
    <GatsbyLink to="/">
      <LogoElement src={img} alt="isse" maxHeight={maxHeight} />
    </GatsbyLink>
  )
}

Logo.propTypes = {
  img: PropTypes.string.isRequired,
  href: PropTypes.string,
  maxHeight: PropTypes.string,
}

export default Logo
