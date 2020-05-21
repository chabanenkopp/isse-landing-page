import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { rem } from 'polished'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import { COMMENTS, NAMES, JOBS, AVATARS } from './data'
import ArrowButton from './ArrowButton'

const SIZE = rem(50)

const Avatar = styled.img`
  height: ${SIZE};
  width: ${SIZE};
  border-radius: 100%;
  border: 1px solid ${COLORS.ATHENA_BLUE};
`

const Slide = ({ photo, name, position, text }) => (
  <div>
    <Flex justifyContent="center">
      <Avatar src={photo} />
      <Box ml="m">
        <Text fontSize="xl" color={COLORS.MAJOLICA_BLUE}>
          {name}
        </Text>
        <Text fontSize="s" color={COLORS.ROCK_BLUE}>
          {position}
        </Text>
      </Box>
    </Flex>
    <Text
      textAlign="center"
      fontSize={['l', 'l', 'm']}
      fontWeight="thin"
      mt="l"
      color={COLORS.LEAD}
    >
      {text}
    </Text>
  </div>
)

Slide.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const swiperConfig = {
  loop: true,
  grabCursor: true,
  observerUpdate: true,
  slidesPerView: 1,
}

const TestimonialSection = () => {
  const [swiper, setSwiper] = React.useState(null)

  const handleNextClick = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }
  const handlePreviousClick = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  return (
    <div data-aos="fade-up">
      <Flex alignItems="center" justifyContent="center" mt="l">
        <Text
          fontSize="xxl"
          fontWeight="bold"
          color={COLORS.MAJOLICA_BLUE}
          textAlign="center"
          mr="m"
        >
          Testimonials
        </Text>
        <Flex>
          <Box mr="s">
            <ArrowButton onClick={() => handleNextClick()} direction="LEFT" />
          </Box>
          <ArrowButton
            onClick={() => handlePreviousClick()}
            direction="RIGHT"
          />
        </Flex>
      </Flex>
      <Box maxWidth={{ mobile: '100vw', tablet: rem(500) }} my="xl" px="m">
        <Swiper getSwiper={setSwiper} {...swiperConfig}>
          {AVATARS.map((avatar, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i}>
              <Slide
                photo={avatar}
                name={NAMES[i]}
                position={JOBS[i]}
                text={COMMENTS[i]}
              />
            </div>
          ))}
        </Swiper>
      </Box>
    </div>
  )
}

export default TestimonialSection
