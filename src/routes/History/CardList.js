/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Element as ScrollTo } from 'react-scroll'
import { getScrollName } from 'helpers'
import { space } from 'Theme'
import { Box } from 'components/atoms/Layout'
import Card from './Card'

const CardWrapper = styled(Box)`
  margin-top: ${space.m};

  &:first-child {
    margin-top: ${space.s};
  }
`

const CardList = ({ onHover, destinations = [] }) => (
  <Box mb="s">
    {destinations.map(({ node }) => (
      <CardWrapper
        key={node._id}
        onMouseEnter={() => onHover(node._id)}
        onMouseLeave={() => onHover(null)}
      >
        <ScrollTo name={getScrollName(node._id)}>
          <Card {...node} />
        </ScrollTo>
      </CardWrapper>
    ))}
  </Box>
)

CardList.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  onHover: PropTypes.func.isRequired,
}

export default CardList
