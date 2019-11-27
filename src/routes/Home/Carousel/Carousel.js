import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { radius, fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Box } from 'components/atoms/Layout'
import Bb from 'components/atoms/Bb'
import fountain from 'assets/images/hotel/fountain.jpg'
import hotelFront from 'assets/images/hotel/hotel-front.jpg'
import hotelGeneral from 'assets/images/hotel/hotel-general.jpg'
import room from 'assets/images/hotel/room.jpg'

const VenueImage = styled(Box)`
  height: auto;
  max-width: ${pxToRem(330)};
  min-height: ${pxToRem(290)};
  border-radius: ${radius.l};
  border: 1px solid ${COLORS.WHITE};
  background-size: cover;
  background-repeat: no-repeat;
  ${({ image }) => ` background-image: url(${image})`};
`

const StyledSlider = styled(Slider)`
  .slick-slide div div {
    outline: none;
  }
  .slick-dots li button:before {
    color: ${COLORS.ATHENA_BLUE};
    height: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: ${COLORS.ATHENA_BLUE};
  }
`

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div data-aos="fade-up">
      <Box justifyContent="center" mb="xl">
        <Text
          textAlign="center"
          color={COLORS.MAJOLICA_BLUE}
          fontWeight={fontWeights.thin}
          fontSize={['xxl', 'xxl', 'xxxxl']}
        >
          Venue: Hotel&nbsp; <Bb>Grand Jasna</Bb>
        </Text>
      </Box>
      <Box ml={[0, 0, 'l']}>
        <StyledSlider {...settings}>
          <Box mt="l" mb="m" pr={[0, 'm', 'm']}>
            <VenueImage
              image={fountain}
              maxWidth={['initial', 'initial', pxToRem(400)]}
            />
          </Box>
          <Box mt="l" mb="m" pr={[0, 'm', 'm']}>
            <VenueImage
              image={room}
              maxWidth={['initial', 'initial', pxToRem(400)]}
            />
          </Box>
          <Box mt="l" mb="m" pr={[0, 'm', 'm']}>
            <VenueImage
              image={hotelFront}
              maxWidth={['initial', 'initial', pxToRem(400)]}
            />
          </Box>
          <Box mt="l" mb="m" pr={[0, 'm', 'm']}>
            <VenueImage
              image={hotelGeneral}
              maxWidth={['initial', 'initial', pxToRem(400)]}
            />
          </Box>
        </StyledSlider>
      </Box>
      <Box my="xl" px={[pxToRem(10), pxToRem(20), pxToRem(100)]}>
        <Text
          data-aos="fade-up"
          textAlign="center"
          fontSize="m"
          fontWeight={fontWeights.thin}
          my="xl"
        >
          Demanovska Valley, Slovakia - Demänovská Dolina, Slovensko.&nbsp;
          <b>Hotel facilities:</b> each room is equipped with a flat-screen
          television, a desk, a direct line telephone and free Wi-Fi access.
          Rooms are also equipped with a bathroom with a bathtub or shower and a
          hairdryer. A complimentary tray with kettle, tea and coffee is
          available in the room.
        </Text>
      </Box>
    </div>
  )
}

export default Carousel
