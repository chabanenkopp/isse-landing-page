import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import { pxToRem } from 'helpers'
import { Flex } from 'components/atoms/Layout'
import { radius, fontWeights } from 'Theme'

const LatoText = styled(Text)`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  display: block;
`

const ColumnContainer = styled(Flex)`
  justify-content: center;
  box-sizing: border-box;
  border: 1.5px solid ${COLORS.BUTTERSCOTCH};
  border-radius: ${radius.m};
`

const Column = ({ children, right }) => (
  <ColumnContainer width={[pxToRem(160), pxToRem(190), pxToRem(300)]} py="m">
    {right ? (
      <Text
        fontSize={[pxToRem(16), pxToRem(18), pxToRem(24)]}
        fontWeight={fontWeights.bold}
        color={COLORS.MAJOLICA_BLUE}
      >
        {children}
      </Text>
    ) : (
      <LatoText
        fontSize={[pxToRem(16), pxToRem(18), pxToRem(24)]}
        color={COLORS.ROCK_BLUE}
      >
        {children}
      </LatoText>
    )}
  </ColumnContainer>
)

Column.propTypes = {
  children: PropTypes.string.isRequired,
  right: PropTypes.bool,
}

export default Column
