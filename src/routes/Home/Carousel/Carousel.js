import React from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { rem } from 'polished'
import { radius, fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import { Box } from 'components/atoms/Layout'
import Bb from 'components/atoms/Bb'
import fountain from 'assets/images/hotel/fountain.jpg'
import hotelFront from 'assets/images/hotel/hotel-front.jpg'
import hotelGeneral from 'assets/images/hotel/hotel-general.jpg'
import room from 'assets/images/hotel/room.jpg'

const slides = [fountain, hotelFront, hotelGeneral, room]

const IMAGE_GAP = 24
const IMAGE_HEIGHT = 300
const IMAGE_WIDTH = 357

const VenueImage = styled(Box)`
  height: ${rem(IMAGE_HEIGHT)};
  border-radius: ${radius.l};
  ${({ pictureUrl }) =>
    `background: url("${pictureUrl}") center / cover no-repeat;`}
`

const swiperConfig = {
  loop: true,
  grabCursor: true,
  observerUpdate: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: IMAGE_GAP,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: IMAGE_GAP,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: IMAGE_GAP,
    },
  },
}

const Carousel = () => {
  const [, setSwiper] = React.useState(null)
  return (
    <div data-aos="fade-up">
      <Box justifyContent="center" mb="xl">
        <Text
          textAlign="center"
          color={COLORS.MAJOLICA_BLUE}
          fontWeight={fontWeights.thin}
          fontSize={{ mobile: 'xl', tablet: 'xxl', desktop: 'xxxxl' }}
        >
          Venue: Hotel&nbsp; <Bb>Grand Jasna</Bb>
        </Text>
      </Box>
      <Box
        maxWidth={{
          mobile: '100%',
          tablet: rem(IMAGE_WIDTH * 2 + IMAGE_GAP * 2),
          desktop: rem(IMAGE_WIDTH * 3 + IMAGE_GAP * 3),
        }}
        m="0 auto"
      >
        <Swiper getSwiper={setSwiper} {...swiperConfig}>
          {slides.map((slide, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i}>
              <VenueImage pictureUrl={slide} />
            </div>
          ))}
        </Swiper>
      </Box>
      <Box my="xl" px={{ tablet: rem(20), desktop: rem(100) }}>
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
