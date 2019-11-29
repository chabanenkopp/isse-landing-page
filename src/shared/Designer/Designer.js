import React from 'react'
import styled from 'styled-components'
import { pxToRem } from 'helpers'
import { COLORS, LINKS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Logo from 'components/atoms/Logo'
import github from 'assets/images/github.svg'

const BorderFlex = styled(Flex)`
  border-top: solid 2px ${COLORS.WHITE_SMOKE};
`

const Designer = () => (
  <React.Fragment>
    <BorderFlex justifyContent="center" alignItems="center" pt="m">
      <Box>
        <Logo img={github} maxHeight={pxToRem(35)} href={LINKS.GITHUB} />
      </Box>
    </BorderFlex>
    <Text textAlign="center" fontSize="s" color={COLORS.BLACK}>
      Designed by Pavlo Chabanenko
    </Text>
  </React.Fragment>
)

export default Designer
