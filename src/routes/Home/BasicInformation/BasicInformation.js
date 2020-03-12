import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'
import { fontWeights } from 'Theme'
// import { COLORS, DOWNLOAD } from 'Root/constants'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
// import TextLink from 'components/atoms/TextLink'

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  margin-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
`

const BasicInformation = () => (
  <React.Fragment>
    <Flex justifyContent="center" flexDirection={['column', 'column', 'row']}>
      <div data-aos="fade-up">
        <Text
          textAlign="center"
          color={COLORS.MAJOLICA_BLUE}
          fontWeight={fontWeights.bold}
          fontSize={['m', 'l', 'xl']}
        >
          Important dates
        </Text>
        <Flex maxWidth="500px" margin="0 auto">
          <StyledUL>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
              >
                Abstract Submission Deadline:&nbsp;
                <font color={COLORS.AMERICAN_PINK}>
                  <b>January 30th, 2020</b>
                </font>
              </Text>
            </li>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
              >
                Abstract Acceptance Notice:&nbsp;
                <font color={COLORS.AMERICAN_PINK}>
                  <b>March 9th, 2020</b>
                </font>
              </Text>
            </li>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
              >
                Early Bird Registration Deadline:&nbsp;
                <font color={COLORS.AMERICAN_PINK}>
                  <b>April 16th, 2020</b>
                </font>
              </Text>
            </li>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
              >
                Full Paper Submission Deadline:&nbsp;
                <font color={COLORS.AMERICAN_PINK}>
                  <b>April 16th, 2020</b>
                </font>
              </Text>
            </li>
          </StyledUL>
        </Flex>
      </div>
      <Box mt={['xl', 'xl', 0]} data-aos="fade-up">
        <Text
          textAlign="center"
          color={COLORS.MAJOLICA_BLUE}
          fontWeight={fontWeights.bold}
          fontSize={['m', 'l', 'xl']}
        >
          Basic Conference Informations
        </Text>
        <Flex maxWidth="500px" margin="0 auto">
          <StyledUL>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
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
                fontSize={['xs', 's', 'm']}
              >
                <font color={COLORS.AMERICAN_PINK}>
                  <b>Title:</b>&nbsp;
                </font>
                Trends in Microelectronics Packaging and Interconnection
                Technology
              </Text>
            </li>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
              >
                <font color={COLORS.AMERICAN_PINK}>
                  <b>Date:</b>&nbsp;
                </font>
                May 13 – 17, 2020
              </Text>
            </li>
            <li>
              <Text
                color={COLORS.ROCK_BLUE}
                display="contents"
                fontSize={['xs', 's', 'm']}
              >
                <font color={COLORS.AMERICAN_PINK}>
                  <b>Venue:</b>&nbsp;
                </font>
                Demanovska Valley, Slovakia, Hotel Grand Jasna
              </Text>
            </li>
          </StyledUL>
        </Flex>
      </Box>
    </Flex>
  </React.Fragment>
)

export default BasicInformation
