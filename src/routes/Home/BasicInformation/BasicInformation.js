import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { mq, fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import listItem from 'assets/images/list-item.svg'

const TEXT_FONT_SIZE = { mobile: 'xs', tablet: 's', desktop: 'm' }
const MAX_COLUMN_WIDTH = rem(500)

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  ${mq.from.desktop`
     margin-left: ${rem(20)};
     padding-right: ${rem(20)};
  `}
`

const StyledSpan = styled('span')`
  color: ${COLORS.AMERICAN_PINK};
  font-weight: ${fontWeights.semi_bold};
`

const BasicInformation = () => (
  <Flex
    data-aos="fade-up"
    justifyContent="center"
    flexDirection={{ mobile: 'column', desktop: 'row' }}
  >
    <div>
      <Text
        textAlign="center"
        color={COLORS.MAJOLICA_BLUE}
        fontWeight={fontWeights.bold}
        fontSize={{ mobile: 'm', tablet: 'l', desktop: 'xl' }}
      >
        Important dates
      </Text>
      <Flex maxWidth={MAX_COLUMN_WIDTH} margin="0 auto">
        <StyledUL>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={TEXT_FONT_SIZE}
            >
              Abstract Submission Deadline:{' '}
              <StyledSpan>January 30th, 2020</StyledSpan>
            </Text>
          </li>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={TEXT_FONT_SIZE}
            >
              Abstract Acceptance Notice:{' '}
              <StyledSpan>March 9th, 2020</StyledSpan>
            </Text>
          </li>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={TEXT_FONT_SIZE}
            >
              Early Bird Registration Deadline:{' '}
              <StyledSpan>April 30th, 2020</StyledSpan>
            </Text>
          </li>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={TEXT_FONT_SIZE}
            >
              Full Paper Submission Deadline:{' '}
              <StyledSpan>April 30th, 2020</StyledSpan>
            </Text>
          </li>
        </StyledUL>
      </Flex>
    </div>
    <Box mt={{ mobile: 'm', desktop: 0 }}>
      <Text
        textAlign="center"
        color={COLORS.MAJOLICA_BLUE}
        fontWeight={fontWeights.bold}
        fontSize={{ mobile: 'm', tablet: 'l', desktop: 'xl' }}
      >
        Basic Conference Informations
      </Text>
      <Flex maxWidth={MAX_COLUMN_WIDTH} margin="0 auto">
        <StyledUL>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={{ mobile: 'xs', tablet: 's', desktop: 'm' }}
              fontWeight={fontWeights.bold}
            >
              43<sup>rd</sup> International Spring Seminar on Electronics
              Technology
            </Text>
          </li>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={TEXT_FONT_SIZE}
            >
              <StyledSpan>Title </StyledSpan>
              Trends in Microelectronics Packaging and Interconnection
              Technology
            </Text>
          </li>
          <li>
            <Text
              color={COLORS.ROCK_BLUE}
              display="contents"
              fontSize={TEXT_FONT_SIZE}
            >
              <StyledSpan>Date: </StyledSpan>
              May 14 – 15, 2020
            </Text>
          </li>
        </StyledUL>
      </Flex>
    </Box>
  </Flex>
)

export default BasicInformation
