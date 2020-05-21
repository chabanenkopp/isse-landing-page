import React from 'react'
import styled from 'styled-components'
import { fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'
import { STRUCTURE, TOPICS, OBJECTIVES } from './data'

const TEXT_SIZE = { mobile: 'xs', tablet: 's', desktop: 'm' }

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
`

const ObjectivesList = () => (
  <StyledUL>
    {OBJECTIVES.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={TEXT_SIZE}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const TopicsList = () => (
  <StyledUL>
    {TOPICS.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={TEXT_SIZE}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const StructureList = () => (
  <StyledUL>
    {STRUCTURE.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={TEXT_SIZE}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const Items = { ObjectivesList, TopicsList, StructureList }

export default Items
