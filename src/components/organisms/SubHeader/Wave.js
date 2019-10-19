import React from 'react'
import styled from 'styled-components'
import { pxToRem } from 'helpers'

const WaveSVG = styled.svg`
  transform: translateY(1px);
  margin-top: ${pxToRem(10)};
`

const Wave = () => (
  <WaveSVG viewBox="0 0 1920 111.8" fill="white">
    <path d="M1920 111.8v-56C1415.1-90 909.8 109.1 405 109.1c-134.9-.2-270.1-14.4-405-53.3v56h1920z" />
  </WaveSVG>
)

export default Wave
