import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { fontWeights, getTransition } from 'Theme'
import { COLORS, PATHS } from 'Root/constants'
import { scrollIntoView, pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import ChangeColor from 'components/atoms/ChangeFontColorByPathName'
import Link from 'components/atoms/Link'

const { HOME, OVERVIEW, SPONSORS } = PATHS

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
    <React.Fragment>
      <MobileMenuContainer isVisible={isVisible}>
        <Box height="100%">
          <Flex flexDirection="column" pt="xl" px="m">
            <Box pt={pxToRem(50)}>
              <Link
                to={HOME}
                as={GatsbyLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <ChangeColor pathName={pathName} targetPath={HOME}>
                  HOME
                </ChangeColor>
              </Link>
            </Box>
            <Box pt={pxToRem(50)}>
              <Link
                to={OVERVIEW}
                as={GatsbyLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <ChangeColor pathName={pathName} targetPath={OVERVIEW}>
                  About Us
                </ChangeColor>
              </Link>
            </Box>
            <Box pt={pxToRem(50)}>
              <Link
                to={SPONSORS}
                as={GatsbyLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <ChangeColor pathName={pathName} targetPath={SPONSORS}>
                  Sponsors
                </ChangeColor>
              </Link>
            </Box>
            <Box pt={pxToRem(50)}>
              <Text
                onClick={() => {
                  scrollIntoView('contact')
                  onClick()
                }}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                Contact
              </Text>
            </Box>
          </Flex>
        </Box>
      </MobileMenuContainer>
    </React.Fragment>
  )
}

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  pathName: PropTypes.string,
}

export default MobileMenu
