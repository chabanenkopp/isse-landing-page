import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { rem } from 'polished'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import { COLORS } from 'Root/constants'
import Slider from './Slider'

const LocationImage = styled('img')`
  object-fit: cover;
  height: ${rem(200)};
  width: 100%;
`

const Icon = styled('img')`
  display: inline-block;
  width: ${rem(13)};
`

const TextWithIcon = ({ src, value, text, ...rest }) => (
  <Flex alignItems="center" {...rest}>
    <Icon src={src} />
    <Text color={COLORS.VANISHING} fontSize="xs" ml="xs">
      {value}{' '}
      <span
        css={`
          color: ${COLORS.DAYBREAK};
        `}
      >
        {text}
      </span>
    </Text>
  </Flex>
)

TextWithIcon.propTypes = {
  src: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  text: PropTypes.string.isRequired,
}

const InfoWindow = ({
  _id,
  title,
  thumbnailUrls,
  numberOfRooms,
  getDetailUrlByVenueId,
}) => (
  <div>
    <Slider
      id={_id}
      slide={LocationImage}
      sliderMaxWidth={rem(240)}
      thumbnailUrls={thumbnailUrls}
      getDetailUrlByVenueId={getDetailUrlByVenueId}
    />
    <Box m="m">
      <Text
        display="block"
        fontSize="l"
        fontWeight="semi_bold"
        color={COLORS.VANISHING}
        my="s"
      >
        {title}
      </Text>
      <TextWithIcon
        // src={bedroomIcon}
        value={`${numberOfRooms}`}
        text={numberOfRooms > 1 ? 'rooms' : 'room'}
        mb="s"
      />
      <TextWithIcon
        // src={airplaneIcon}
        value={`${129} km`}
        text="from EAX"
      />
    </Box>
  </div>
)

InfoWindow.propTypes = {
  _id: PropTypes.string.isRequired,
  nearestAirport: PropTypes.shape({
    distanceInKilometers: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  numberOfRooms: PropTypes.number.isRequired,
  getDetailUrlByVenueId: PropTypes.func.isRequired,
  thumbnailUrls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default InfoWindow
