import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import isRequiredIf from 'react-proptype-conditional-require'
import { rem } from 'polished'
import { fontWeights } from 'Theme'
import Circle from 'components/atoms/Circle'
import arrowIcon from 'assets/images/arrow.svg'
import { COLORS } from '../../../constants'

const invisibleStyle = `
  background: none;
  box-shadow: none;
  border: none;
`

const StyledArrowIcon = styled('img')`
  height: ${rem('12px')};

  color: ${COLORS.DAYBREAK};

  ${({ rotate }) => rotate && `transform: rotate(${rotate})`};
`

const StyledPageButton = styled(Circle)`
  ${({ hasPage, isActive }) => hasPage && !isActive && invisibleStyle}

  font-weight: ${fontWeights.semi_bold};
`

const StyledMoreButton = styled(Circle)`
  pointer-events: none;
  ${invisibleStyle}
`

const PageButton = ({ onClick, page, isCurrent }) => (
  <StyledPageButton onClick={onClick} hasPage={page} isActive={isCurrent}>
    {page}
  </StyledPageButton>
)

PageButton.propTypes = {
  onClick: isRequiredIf(PropTypes.func, (props) => !props.isCurrent),
  page: PropTypes.number.isRequired,
  isCurrent: PropTypes.bool,
}

const ArrowButton = ({ onClick, disabled, rotate }) => (
  <StyledPageButton onClick={onClick} disabled={disabled}>
    <StyledArrowIcon rotate={rotate} src={arrowIcon} />
  </StyledPageButton>
)

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  rotate: PropTypes.string,
}

const PreviousPageButton = (props) => <ArrowButton rotate="180deg" {...props} />
const NextPageButton = (props) => <ArrowButton {...props} />
const MoreButton = () => <StyledMoreButton>…</StyledMoreButton>

export default {
  Page: PageButton,
  More: MoreButton,
  PreviousPage: PreviousPageButton,
  NextPage: NextPageButton,
}
