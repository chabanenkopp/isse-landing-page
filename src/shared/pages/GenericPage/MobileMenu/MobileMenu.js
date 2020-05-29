import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { Link as GatsbyLink } from 'gatsby'
import { fontWeights, getTransition } from 'Theme'
import { COLORS, PATHS } from 'Root/constants'
import { scrollIntoView } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import ChangeColor from 'components/atoms/ChangeFontColorByPathName'
import Link from 'components/atoms/Link'

const { HOME, OVERVIEW, SPONSORS, COMMITTEES, AUTHORS, HISTORY } = PATHS
const SPACES = { px: 'l', py: 'm' }
const OFFSET = rem(20)
const LINK_SIZE = 'xxxl'

const MobileMenuContainer = styled(Box)`
  background-color: ${COLORS.WHITE};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  will-change: transform;
  overflow-y: auto;
  opacity: 0;
  transition: ${getTransition('transform')}, ${getTransition('opacity')};
  ${({ isVisible }) =>
    isVisible
      ? 'transform: translateX(0%); opacity: 1'
      : 'transform: translateX(100%); opacity: 0'};
`

const MobileMenu = ({ isVisible, pathName, onClick }) => {
  return (
    <MobileMenuContainer isVisible={isVisible}>
      <Box height="100%">
        <Flex flexDirection="column" pt="xl" px="m">
          <Box pt={{ tablet: 'l' }}>
            <Link
              to={HOME}
              as={GatsbyLink}
              fontSize={LINK_SIZE}
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              <ChangeColor pathName={pathName} targetPath={HOME}>
                HOME
              </ChangeColor>
            </Link>
          </Box>
          <Box pt={OFFSET}>
            <Link
              to={OVERVIEW}
              as={GatsbyLink}
              fontSize={LINK_SIZE}
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              <ChangeColor pathName={pathName} targetPath={OVERVIEW}>
                Overview
              </ChangeColor>
            </Link>
          </Box>
          <Box pt={OFFSET}>
            <Link
              to={HISTORY}
              as={GatsbyLink}
              fontSize={LINK_SIZE}
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              <ChangeColor pathName={pathName} targetPath={HISTORY}>
                History
              </ChangeColor>
            </Link>
          </Box>
          <Box pt={OFFSET}>
            <Link
              to={COMMITTEES}
              as={GatsbyLink}
              fontSize={LINK_SIZE}
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              <ChangeColor pathName={pathName} targetPath={COMMITTEES}>
                Committees
              </ChangeColor>
            </Link>
          </Box>
          <Box pt={OFFSET}>
            <Link
              to={AUTHORS}
              as={GatsbyLink}
              fontSize="xxxl"
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              <ChangeColor pathName={pathName} targetPath={AUTHORS}>
                Authors
              </ChangeColor>
            </Link>
          </Box>
          <Box pt={OFFSET}>
            <Link
              to={SPONSORS}
              as={GatsbyLink}
              fontSize={LINK_SIZE}
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              <ChangeColor pathName={pathName} targetPath={SPONSORS}>
                Sponsors
              </ChangeColor>
            </Link>
          </Box>
          <Box pt={OFFSET}>
            <Text
              onClick={() => {
                scrollIntoView('contact')
                onClick()
              }}
              fontSize={LINK_SIZE}
              fontWeight={`${fontWeights.thin} !important`}
              {...SPACES}
            >
              Contact
            </Text>
          </Box>
        </Flex>
      </Box>
    </MobileMenuContainer>
  )
}

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  pathName: PropTypes.string,
}

export default MobileMenu
