import React from 'react'
import { pxToRem } from 'helpers'
import { COLORS, LINKS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Logo from 'components/atoms/Logo'
import github from 'assets/images/github.svg'

const Designer = () => (
  <React.Fragment>
    <Flex justifyContent="center" alignItems="center">
      <Box>
        <Logo img={github} maxHeight={pxToRem(35)} href={LINKS.GITHUB} />
      </Box>
    </Flex>
    <Text textAlign="center" fontSize="s" color={COLORS.BLACK}>
      Designed by Pavlo Chabanenko
    </Text>
  </React.Fragment>
)

export default Designer
