import React from 'react'
import styled from 'styled-components'
import { pxToRem } from 'helpers'
import { Box, Flex } from 'components/atoms/Layout'
import { COLORS } from 'Root/constants'
import logo from 'assets/images/logo.svg'

const StyledLogo = styled.img`
  height: ${pxToRem(100)};
  margin: 0 auto;
  display: block;
  z-index: 3;
  padding: 0 20px 0 20px;
  position: relative;
  background-color: ${COLORS.WHITE};
`
const StyledBox = styled(Box)`
  ::before {
    content: '';
    position: absolute;
    background-color: ${COLORS.ROCK_BLUE};
    color: black;
    width: 50%;
    height: 1px;
    left: 10%;
    top: 50%;
  }
  ::after {
    content: '';
    position: absolute;
    background-color: ${COLORS.ROCK_BLUE};
    color: black;
    width: 50%;
    height: 1px;
    right: 10%;
    top: 50%;
  }
`

const LogoLineSeparator = () => (
  <StyledBox data-aos="fade-up">
    <StyledLogo src={logo} />
  </StyledBox>
)

export default LogoLineSeparator
