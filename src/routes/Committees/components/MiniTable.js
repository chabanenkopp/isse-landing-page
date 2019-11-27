import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'
import { LOCAL } from '../Tables/data'

const { people } = LOCAL[0]

const Table = styled(Flex)`
  flex-direction: column;
  align-items: center;
  /* max-width: ${pxToRem(420)}; */
  margin: 0 auto;
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const Row = styled(Flex)`
  width: 100%;
  padding-top: ${pxToRem(10)};
  padding-bottom: ${pxToRem(10)};
  padding-right: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
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
  margin-top: ${pxToRem(-2)};
`

const Organizers = () => (
  <StyledUL>
    {people.map((person) => (
      <li key={person}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={['xs', 's', 'm']}
          fontWeight="thin"
        >
          {person}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const MiniTable = ({ data, title }) => (
  <Box px="m" data-aos="fade-up">
    <Table width={['unset', 'unset', pxToRem(420)]} maxWidth={pxToRem(420)}>
      <TH justifyContent="center">
        <Text
          textAlign="center"
          fontSize={['s', 's', 'm']}
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
                <Text fontSize={['xs', 's', 'm']}>Name:</Text>
              </Box>
              <Box minWidth="70%">
                <Text fontSize={['xs', 's', 'm']}>{name}</Text>
              </Box>
            </Row>
            <Row bg={COLORS.COTTON_BALL}>
              <Box minWidth="30%">
                <Text fontSize={['xs', 's', 'm']}>Country:</Text>
              </Box>
              <Box minWidth="70%">
                <Text fontSize={['xs', 's', 'm']}>{country}</Text>
              </Box>
            </Row>
            <Row lastElement>
              <Box minWidth="30%">
                <Text fontSize={['xs', 's', 'm']}>University:</Text>
              </Box>
              <Box minWidth="70%">
                <Text fontSize={['xs', 's', 'm']}>{university}</Text>
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
  <Box px="m" data-aos="fade-up">
    <Table width={['unset', 'unset', pxToRem(500)]} maxWidth={pxToRem(500)}>
      <TH justifyContent="center">
        <Text
          textAlign="center"
          fontSize={['s', 's', 'm']}
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
                <Text fontSize={['xs', 's', 'm']}>{position}</Text>
              </Box>
              <Box minWidth="55%">
                <Text fontSize={['xs', 's', 'm']}>{name}</Text>
              </Box>
            </Row>
            <Row>
              <Box minWidth="40%">
                <Text fontSize={['xs', 's', 'm']}>{board}</Text>
              </Box>
              <Box minWidth="60%">
                {/* <Text fontSize={['xs', 's', 'm']}>{country}</Text> */}
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
