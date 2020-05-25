import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { rem } from 'polished'
import { COLORS } from 'Root/constants'
import { space, radius } from 'Theme'
import { useMedia } from 'useMedia'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import Badge from 'components/atoms/Badge'
import InfoTootip from 'components/molecules/InfoTooltip'

const CARD_PADDING_VALUE = 'm'

const IconText = ({ year }) => {
  const matches = useMedia()
  return (
    <Flex alignItems="center">
      <Text
        fontSize="l"
        color={COLORS.VANISHING}
        pl={{ mobile: 0, desktop: 'm' }}
        pr="s"
      >
        <Text as="span" pl="xs" fontWeight="semi_bold" color={COLORS.DAYBREAK}>
          Year:{' '}
        </Text>
        <Text
          as="span"
          fontSize="m"
          fontWeight="normal"
          color={COLORS.VANISHING}
          pl="xxs"
        >
          {year}
        </Text>
      </Text>
      <InfoTootip
        maxWidth={rem(165)}
        position={matches.tablet || matches.mobile ? 'RIGHT' : 'LEFT'}
        textAlign="left"
        iconSize={14}
        iconFill={COLORS.VANISHING}
        text="Conference was attended by over 100 participants"
      />
    </Flex>
  )
}

IconText.propTypes = {
  year: PropTypes.string.isRequired,
}

const DestinationImage = styled(Img)`
  height: ${rem(200)};
  border-radius: ${radius.m} ${radius.m} 0 0;
`

const StyledBox = styled(Box)`
  border-radius: ${radius.m};
`

const Card = ({ year, city, country, pictureUrl, topic, ...props }) => {
  return (
    <StyledBox bg={COLORS.LYNX_WHITE} {...props}>
      <Box position="relative">
        <DestinationImage fluid={pictureUrl.asset.fluid} />
        <Box position="absolute" top={rem(16)} right={rem(16)}>
          <Badge.Success>SUCCESSFULLY ORGANISED!</Badge.Success>
        </Box>
      </Box>
      <Box px={space[CARD_PADDING_VALUE]} py="m">
        <Flex
          justifyContent={{ mobile: 'flex-start', desktop: 'space-between' }}
          flexDirection={{ mobile: 'column', desktop: 'row' }}
        >
          <Box mb={{ mobile: 's', desktop: 0 }}>
            <Text
              as="span"
              fontSize="l"
              fontWeight="semi_bold"
              color={COLORS.VANISHING}
            >
              {country}
            </Text>
            <Text as="span" color={COLORS.VIOLET_BOUQUET} mx="s">
              •
            </Text>
            <Text as="span" fontSize="s" color={COLORS.VANISHING}>
              {city}
            </Text>
          </Box>
          <IconText year={year} />
        </Flex>
        <Text textAlign="left" fontSize="s" color={COLORS.ROMAN_PURPLE} my="s">
          <Text as="span" fontSize="m" color={COLORS.ROMAN_PURPLE}>
            Conference topic{' '}
            <Text as="span" color={COLORS.VIOLET_BOUQUET}>
              •{' '}
            </Text>
          </Text>
          {topic}
        </Text>
      </Box>
    </StyledBox>
  )
}

Card.propTypes = {
  year: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pictureUrl: PropTypes.object.isRequired,
}

export default Card
