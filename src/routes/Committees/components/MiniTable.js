import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { radius } from 'Theme'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'
import { LOCAL } from '../Tables/data'

const { people } = LOCAL[0]
const TEXT_SIZE = { mobile: 'xs', tablet: 's', desktop: 'm' }
const MINI_TABLE_WIDTH = rem(420)
const LIST_WIDTH = rem(500)

const Table = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const Row = styled(Flex)`
  width: 100%;
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  padding-right: ${rem(20)};
  padding-left: ${rem(20)};
  ${({ lastElement }) =>
    lastElement &&
    `border-bottom-left-radius: ${radius.l};
     border-bottom-right-radius: ${radius.l};
    `}
`

const TH = styled(Row)`
  background-image: linear-gradient(
    300deg,
    ${COLORS.FLAX_FLOWER_BLUE},
    ${COLORS.ATHENA_BLUE}
  );
  border-top-left-radius: ${radius.l};
  border-top-right-radius: ${radius.l};
`

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
  margin-top: ${rem(-2)};
`

const Organizers = () => (
  <StyledUL>
    {people.map((person) => (
      <li key={person}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={TEXT_SIZE}
          fontWeight="thin"
        >
          {person}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const MiniTable = ({ data, title }) => (
  <Box px={{ mobile: 0, table: 'm', desktop: 'm' }} data-aos="fade-up">
    <Table
      width={{ mobile: 'unset', desktop: MINI_TABLE_WIDTH }}
      maxWidth={MINI_TABLE_WIDTH}
    >
      <TH justifyContent="center">
        <Text
          textAlign="center"
          fontSize={{ mobile: 's', desktop: 'm' }}
          color={COLORS.WHITE}
        >
          {title}
        </Text>
      </TH>
      {data.map(({ name, country, university }) => {
        return (
          <React.Fragment key={name + country}>
            <Row>
              <Box minWidth="30%">
                <Text fontSize={TEXT_SIZE}>Name:</Text>
              </Box>
              <Box minWidth="70%">
                <Text fontSize={TEXT_SIZE}>{name}</Text>
              </Box>
            </Row>
            <Row bg={COLORS.COTTON_BALL}>
              <Box minWidth="30%">
                <Text fontSize={TEXT_SIZE}>Country:</Text>
              </Box>
              <Box minWidth="70%">
                <Text fontSize={TEXT_SIZE}>{country}</Text>
              </Box>
            </Row>
            <Row lastElement>
              <Box minWidth="30%">
                <Text fontSize={TEXT_SIZE}>University:</Text>
              </Box>
              <Box minWidth="70%">
                <Text fontSize={TEXT_SIZE}>{university}</Text>
              </Box>
            </Row>
          </React.Fragment>
        )
      })}
    </Table>
  </Box>
)

MiniTable.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

const List = ({ data, title, position, board }) => (
  <Box data-aos="fade-up">
    <Table
      width={{ mibile: 'unset', desktop: LIST_WIDTH }}
      maxWidth={LIST_WIDTH}
    >
      <TH justifyContent="center">
        <Text
          textAlign="center"
          fontSize={{ mobile: 's', desktop: 'm' }}
          color={COLORS.WHITE}
        >
          {title}
        </Text>
      </TH>
      {data.map(({ name }) => {
        return (
          <React.Fragment key={name}>
            <Row>
              <Box minWidth="45%">
                <Text fontSize={TEXT_SIZE}>{position}</Text>
              </Box>
              <Box minWidth="55%">
                <Text fontSize={TEXT_SIZE}>{name}</Text>
              </Box>
            </Row>
            <Row>
              <Box minWidth="40%">
                <Text fontSize={TEXT_SIZE}>{board}</Text>
              </Box>
              <Box minWidth="60%">
                <Organizers />
              </Box>
            </Row>
          </React.Fragment>
        )
      })}
    </Table>
  </Box>
)

MiniTable.List = List

List.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
}

export default MiniTable
