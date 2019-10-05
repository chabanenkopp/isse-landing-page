import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'Root/constants'
import { theme, radius, space } from 'Theme'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import arrow from 'assets/images/list-item.svg'

const getShadow = (color, isVisible) =>
  color && isVisible && `box-shadow: rgba(0,0,0,0.08) 0px 20px 40px 5px;`

const ButtonLong = styled(Box)`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${pxToRem(300)};
  border-radius: ${radius.l};
  padding-left: ${theme.space.m};
  padding-right: ${theme.space.m};
  padding-top: ${theme.space.l};
  padding-bottom: ${theme.space.l};
  background-color: ${COLORS.WHITE};
  font-weight: ${theme.fontWeights.bold};
  text-decoration: none;
  ${({ color, borderColor, isShadow, borderRadius }) => `
    border: 1.5px solid ${borderColor};
    color: ${color};
    border-radius: ${borderRadius}
    ${getShadow(COLORS.ANCHORMAN, isShadow)}}
  `}
  :focus {
    outline: 0;
  }
`

ButtonLong.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  isShadow: PropTypes.bool,
  borderRadius: PropTypes.string,
}

const StyledBox = styled.img`
  height: 20px;
  margin-right: ${space.m};
  transition: transform 0.5s;
  transform: ${({ isClicked }) =>
    isClicked ? `rotate(90deg)` : `rotate(270deg)`};
`

const UnfoldTextBar = ({ title, component: List }) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Flex flexDirection="column">
      <ButtonLong
        onClick={() => setIsClicked(!isClicked)}
        color={COLORS.ANCHORMAN}
        borderColor={COLORS.WHITE}
        isShadow
      >
        <Text fontSize={['m', 'l', 'xl']} ml="m">
          {title}
        </Text>
        <StyledBox src={arrow} isClicked={isClicked} />
      </ButtonLong>
      {isClicked ? <Box p="l"> {List}</Box> : null}
    </Flex>
  )
}

UnfoldTextBar.propTypes = {
  component: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default UnfoldTextBar
