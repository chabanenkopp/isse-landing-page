import React from 'react'
import styled from 'styled-components'
import { radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Hero from 'components/molecules/Hero'
import {
  STEERING_COMMITTEE,
  GENERAL_CHAIRMAN,
  SECRETARY,
  CONFERENCE_CHAIRMAN,
  CHAIRMAN_TPC,
  LOCAL,
} from './data'
import Bb from '../components/BlueBold'
import MiniTable from '../components/MiniTable'

const Table = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const Row = styled(Flex)`
  width: 100%;
  padding: ${pxToRem(20)};
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

const Column = styled(Flex)`
  align-items: center;
`

const SteeringCommitteeTable = () => (
  <Box px="m" data-aos="fade-up">
    <Table>
      <TH>
        <Column minWidth="30%" justifyContent="center">
          <Text fontSize={['s', 's', 'm']} color={COLORS.WHITE}>
            Name
          </Text>
        </Column>
        <Column minWidth="30%" justifyContent="center">
          <Text fontSize={['s', 's', 'm']} color={COLORS.WHITE}>
            Country
          </Text>
        </Column>
        <Column minWidth="40%" justifyContent="center">
          <Text fontSize={['s', 's', 'm']} color={COLORS.WHITE}>
            University
          </Text>
        </Column>
      </TH>
      {STEERING_COMMITTEE.map(({ name, country, university }, i) => {
        return (
          <Row
            bg={(i + 1) % 2 === 0 ? COLORS.COTTON_BALL : COLORS.WHITE}
            lastElement={STEERING_COMMITTEE.length === i + 1}
            key={name}
          >
            <Column minWidth="30%" justifyContent="center">
              <Text textAlign="center" fontSize={['xs', 's', 'm']}>
                {name}
              </Text>
            </Column>
            <Column minWidth="30%" justifyContent="center">
              <Text textAlign="center" fontSize={['xs', 's', 'm']}>
                {country}
              </Text>
            </Column>
            <Column minWidth="40%" justifyContent="left">
              <Text fontSize={['xs', 's', 'm']} ml="m">
                {university}
              </Text>
            </Column>
          </Row>
        )
      })}
    </Table>
  </Box>
)

const Tables = () => (
  <Box my="xxl">
    <Flex flexDirection={['column', 'column', 'row']} justifyContent="center">
      <Box mb="xl">
        <MiniTable data={GENERAL_CHAIRMAN} title="General Chairman of ISSE" />
      </Box>
      <Box mb="xl">
        <MiniTable data={SECRETARY} title="Secretary of ISSE" />
      </Box>
    </Flex>
    <Flex flexDirection={['column', 'column', 'row']} justifyContent="center">
      <Box mb="xl">
        <MiniTable data={CONFERENCE_CHAIRMAN} title="Conference Chairman" />
      </Box>
      <Box mb="xl">
        <MiniTable
          data={CHAIRMAN_TPC}
          title="Chairman of Technical Program Committee"
        />
      </Box>
    </Flex>
    <MiniTable.List
      data={LOCAL}
      title="Local Organizing Committee (Technical University of Kosice, Slovakia)"
      position="Conference Chair :"
      board="Board of Organizers:"
    />
    <div data-aos="fade-up">
      <Hero>
        International Steering <Bb>Committee</Bb>
      </Hero>
    </div>
    <SteeringCommitteeTable />
  </Box>
)

export default Tables
