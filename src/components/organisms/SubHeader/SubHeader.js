import React from 'react'
import PropTypes from 'prop-types'
import { fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Wave from './Wave'

const SubHeader = ({ children }) => (
  <Flex
    flexDirection="column"
    flex="1"
    justifyContent="space-between"
    backgroundImage={`linear-gradient(300deg, ${COLORS.FLAX_FLOWER_BLUE}, ${COLORS.ATHENA_BLUE})`}
  >
    <Flex
      flexDirection="column"
      alignItems="center"
      flex="1"
      justifyContent="center"
    >
      <Box data-aos="fade-up">
        <Text
          mx="xl"
          color={COLORS.WHITE}
          fontWeight={fontWeights.extra_thin}
          my="xxs"
          textAlign="center"
          fontSize={['xl', 'xxl', 'xxxxl']}
          px={[0, 0, '50px']}
          py="xl"
        >
          {children}
        </Text>
      </Box>
    </Flex>
    <Wave />
  </Flex>
)

SubHeader.propTypes = {
  children: PropTypes.string.isRequired,
}

export default SubHeader
