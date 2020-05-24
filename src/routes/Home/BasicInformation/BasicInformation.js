import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { mq, fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import listItem from 'assets/images/list-item.svg'

const STYLED_TEXT = { mobile: 'xs', tablet: 's', desktop: 'm' }
const MAX_WIDTH = rem(800)
const SPACE = rem(20)

const IMPORTANT_DATES = [
  'Abstract Submission Deadline: January 30th, 2020',
  'Abstract Acceptance Notice: March 9th, 2020',
  'Early Bird Registration Deadline: April 30th, 2020',
  'Full Paper Submission Deadline: April 30th, 2020',
]
const BASIC_INFORMATION = [
  '43rd International Spring Seminar on Electronics Technology',
  'Title Trends in Microelectronics Packaging and Interconnection Technology',
  'Date: May 14 – 15, 2020',
]

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  ${mq.from.desktop`
     margin-left: ${SPACE};
     padding-right: ${SPACE};
  `}
`
const List = ({ items }) => (
  <StyledUL>
    {items.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={STYLED_TEXT}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

const BasicInformation = () => (
  <div>
    <Box data-aos="fade-up" maxWidth={MAX_WIDTH} m="0 auto" mt="l">
      <UnfoldTextBar
        title="Important dates:"
        component={<List items={IMPORTANT_DATES} />}
      />
    </Box>
    <Box data-aos="fade-up" maxWidth={MAX_WIDTH} m="0 auto" mt="l">
      <UnfoldTextBar
        title="Basic Information:"
        component={<List items={BASIC_INFORMATION} />}
      />
    </Box>
  </div>
)

export default BasicInformation
