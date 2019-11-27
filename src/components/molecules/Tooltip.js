import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'

const InvisibleBox = styled(Box)`
  position: absolute;
  cursor: pointer;
`

const VisibleFlex = styled(Flex)`
  display: none;
  justify-content: center;
  margin-top: ${pxToRem(80)};
  background-color: ${COLORS.WHITE};
  border-radius: ${pxToRem(6)};
  box-shadow: rgba(32, 32, 32, 0.1) 0px 13px 38px 0px;
`

const ContainerFlex = styled(Flex)`
  justify-content: center;
  &:hover ${VisibleFlex} {
    display: flex;
  }
`

const DecorativeTriangle = styled(Box)`
  position: absolute;
  top: ${pxToRem(68)};
  width: 0;
  height: 0;
  border-style: solid;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: ${COLORS.WHITE};
  border-right-width: ${pxToRem(20)};
  border-bottom-width: ${pxToRem(20)};
  border-left-width: ${pxToRem(20)};
`

const Tooltip = ({ children, component }) => {
  return (
    <ContainerFlex>
      {children}
      <InvisibleBox>
        <VisibleFlex>
          <DecorativeTriangle />
          <Box px="l" py="m">
            {component}
          </Box>
        </VisibleFlex>
      </InvisibleBox>
    </ContainerFlex>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.node,
}

export default Tooltip
