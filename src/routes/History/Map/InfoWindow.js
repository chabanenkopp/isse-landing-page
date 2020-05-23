import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { rem } from 'polished'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import { COLORS } from 'Root/constants'
import Slider from './Slider'

const MAX_WIDTH = rem(240)

const LocationImage = styled('img')`
  object-fit: cover;
  height: ${rem(200)};
  width: 100%;
`

const InfoWindow = ({ _id, country, thumbnailUrls, city, topic }) => (
  <Box maxWidth={MAX_WIDTH}>
    <Slider
      id={_id}
      slide={LocationImage}
      sliderMaxWidth={MAX_WIDTH}
      thumbnailUrls={thumbnailUrls}
    />
    <Box m="m">
      <Text display="block" fontSize="s" color={COLORS.VANISHING} my="s">
        {country}
        <Text as="span" fontSize="xs" color={COLORS.VIOLET_BOUQUET}>
          • {city}
        </Text>
      </Text>
      <Text
        display="block"
        fontSize="xs"
        fontWeight="semi_bold"
        color={COLORS.VANISHING}
        my="s"
      >
        {topic}
      </Text>
    </Box>
  </Box>
)

InfoWindow.propTypes = {
  _id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  thumbnailUrls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default InfoWindow
