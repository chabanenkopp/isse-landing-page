import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { transparentize } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HamburgerButton } from 'react-hamburger-button'
import { theme, radius } from 'Theme'
import { COLORS, PATHS } from 'Root/constants'
import { scrollIntoView, pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import ChangeColor from 'components/atoms/ChangeFontColorByPathName'
import Button from 'components/atoms/Button'
import Link from 'components/atoms/Link'
import Tooltip from 'components/molecules/Tooltip'
import logo from 'assets/images/logo-line.svg'

const { HOME, OVERVIEW, SPONSORS, COMMITTEES, AUTHORS } = PATHS

const HeaderFixedBox = styled(Flex)`
  background-color: ${transparentize(0.05, COLORS.WHITE)};
  border-bottom: solid 1px ${COLORS.WHITE_SMOKE};
`

const Logo = styled.img`
  max-height: ${pxToRem(60)};
  margin-left: ${theme.space.m};
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
  <Box minHeight={pxToRem(80)} zIndex="1">
    <HeaderFixedBox
      justifyContent="space-between"
      flex="none"
      alignItems="center"
      position="fixed"
      height={pxToRem(80)}
      width="100%"
    >
      <GatsbyLink to={HOME}>
        <Logo src={logo} alt="ISSE" />
      </GatsbyLink>
      <Flex alignItems="center" display={['none', 'none', 'flex']}>
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
          color={COLORS.ANCHORMAN}
          borderColor={COLORS.WHITE}
          borderRadius={radius.l}
          isShadow
          mx="m"
          fontSize="m"
          onClick={() => scrollIntoView('contact')}
        >
          Contact
        </Button.Outlined>
      </Flex>
      <HamburgerContainer display={['block', 'block', 'none']} mr="l">
        <HamburgerButton
          open={isVisible}
          onClick={onMobileMenuButtonClick}
          width={30}
          height={25}
          strokeWidth={2}
          color={COLORS.MAJOLICA_BLUE}
          animationDuration={0.6}
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
