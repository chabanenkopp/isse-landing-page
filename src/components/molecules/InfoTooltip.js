import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { fontSizes, radius, space, BOXSHADOWS } from 'Theme'
import { COLORS } from 'Root/constants'
import { Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const Info = ({ fill, iconSize }) => (
  <svg
    width={iconSize || 16}
    height={iconSize || 16}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z"
      fill={fill || COLORS.SCAMPI}
    />
  </svg>
)

Info.propTypes = {
  fill: PropTypes.string,
  iconSize: PropTypes.number,
}

const TOOLTIP_POSITION = {
  TOP: `
    transform: translate(0, calc(-50% - ${space.m}));
    left: 0;
  `,
  RIGHT: `
    transform: translateX(calc(100% + ${space.s}));
    right: 0;
  `,
  LEFT: `
    transform: translateX(calc(-100% - ${space.s}));
    left: 0;
  `,
}

const Content = styled(Flex)`
  z-index: 1;
  overflow: hidden;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: max-content;
  min-width: ${rem(100)};
  /* max-width: ${({ maxWidth }) => maxWidth || rem(250)}; */
  background-color: ${COLORS.WHITE};
  border-radius: ${radius.m};
  box-shadow: ${BOXSHADOWS.TOOLTIP};
  transition: opacity 0.5s;
  ${({ hasText }) => !hasText && `padding: ${space.s};`}
  ${({ position }) => TOOLTIP_POSITION[position] || TOOLTIP_POSITION.RIGHT}
`

const Wrapper = styled('div')`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover ${Content} {
    visibility: visible;
    opacity: 1;
  }
`

const StyledText = styled(Text)`
  width: 100%;
  padding: ${space.s};
  font-size: ${fontSizes.xs};
  line-height: 1.2;
  white-space: initial;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  background-color: ${COLORS.VANISHING};
  color: ${COLORS.WHITE};
`

const LabelText = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const InfoTooltip = ({
  text,
  label,
  children,
  maxWidth,
  position,
  iconFill,
  iconSize,
  textAlign,
  contentComp,
}) => (
  <Wrapper>
    <Content hasText={text} position={position} maxWidth={maxWidth}>
      {contentComp || <StyledText textAlign={textAlign}>{text}</StyledText>}
    </Content>
    {children || (
      <Flex alignItems="center">
        {label && (
          <LabelText fontSize="xxs" color={iconFill} mr="s">
            {label}
          </LabelText>
        )}
        <Info fill={iconFill} iconSize={iconSize} />
      </Flex>
    )}
  </Wrapper>
)

InfoTooltip.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  iconSize: PropTypes.number,
  iconFill: PropTypes.string,
  position: PropTypes.string,
  maxWidth: PropTypes.string,
  contentComp: PropTypes.node,
  textAlign: PropTypes.string,
}

export default InfoTooltip
