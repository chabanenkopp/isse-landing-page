import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { transparentize, rem } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HamburgerButton } from 'react-hamburger-button'
import { space, radius } from 'Theme'
import { COLORS, PATHS } from 'Root/constants'
import { scrollIntoView } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import ChangeColor from 'components/atoms/ChangeFontColorByPathName'
import Button from 'components/atoms/Button'
import Link from 'components/atoms/Link'
import Tooltip from 'components/molecules/Tooltip'
import logo from 'assets/images/logo-line.svg'

const { HOME, OVERVIEW, SPONSORS, COMMITTEES, AUTHORS, HISTORY } = PATHS
const HEADER_HEIGHT = rem(65)

const HeaderFixedBox = styled(Flex)`
  background-color: ${transparentize(0.05, COLORS.WHITE)};
  border-bottom: solid 1px ${COLORS.WHITE_SMOKE};
`

const Logo = styled.img`
  max-height: ${rem(50)};
  margin-left: ${space.m};
`

const HamburgerContainer = styled(Box)`
  position: fixed;
  z-index: 1;
  right: 0;
`

const Links = ({ pathName }) => (
  <Flex flexDirection="column" textAlign="center">
    <Link to={OVERVIEW} as={GatsbyLink} px="l" py="m">
      <ChangeColor pathName={pathName} targetPath={OVERVIEW}>
        Overview
      </ChangeColor>
    </Link>
    <Link to={COMMITTEES} as={GatsbyLink} px="l" py="m">
      <ChangeColor pathName={pathName} targetPath={COMMITTEES}>
        Committees
      </ChangeColor>
    </Link>
  </Flex>
)

Links.propTypes = {
  pathName: PropTypes.string,
}

const Header = ({
  isVisible,
  onMobileMenuButtonClick,
  mobileMenuComp: MobileMenuComp,
  pathName,
}) => (
  <Box minHeight={HEADER_HEIGHT} zIndex="2">
    <HeaderFixedBox
      justifyContent="space-between"
      flex="none"
      alignItems="center"
      position="fixed"
      height={HEADER_HEIGHT}
      width="100%"
    >
      <GatsbyLink to={HOME}>
        <Logo src={logo} alt="ISSE" />
      </GatsbyLink>
      <Flex alignItems="center" display={{ mobile: 'none', desktop: 'flex' }}>
        <Link to={HISTORY} as={GatsbyLink} px="l" py="m">
          <ChangeColor pathName={pathName} targetPath={HISTORY}>
            History
          </ChangeColor>
        </Link>
        <Tooltip component={<Links />}>
          <Link list={1} to={OVERVIEW} as={GatsbyLink} px="l" py="m">
            About ISSE
          </Link>
        </Tooltip>
        <Link to={AUTHORS} as={GatsbyLink} px="l" py="m">
          <ChangeColor pathName={pathName} targetPath={AUTHORS}>
            Authors
          </ChangeColor>
        </Link>
        <Link to={SPONSORS} as={GatsbyLink} px="l" py="m">
          <ChangeColor pathName={pathName} targetPath={SPONSORS}>
            Sponsors
          </ChangeColor>
        </Link>
        <Button.Outlined
          onClick={() => scrollIntoView('contact')}
          borderColor={COLORS.WHITE}
          color={COLORS.ANCHORMAN}
          borderRadius={radius.l}
          fontSize="m"
          isShadow
          mx="m"
        >
          Contact
        </Button.Outlined>
      </Flex>
      <HamburgerContainer display={{ mobile: 'block', desktop: 'none' }} mr="l">
        <HamburgerButton
          open={isVisible}
          onClick={onMobileMenuButtonClick}
          width={30}
          height={25}
          strokeWidth={2}
          animationDuration={0.6}
          color={COLORS.MAJOLICA_BLUE}
        />
      </HamburgerContainer>
      {MobileMenuComp}
    </HeaderFixedBox>
  </Box>
)

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onMobileMenuButtonClick: PropTypes.func.isRequired,
  mobileMenuComp: PropTypes.node.isRequired,
  pathName: PropTypes.string.isRequired,
}

export default Header
