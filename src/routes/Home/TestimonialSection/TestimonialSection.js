import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import arrow from 'assets/images/down-arrow.svg'
import boss from 'assets/images/testimonials/boss.jpg'
import richard from 'assets/images/testimonials/richard.jpg'

const NextArrow = ({ className, onClick }) => (
  <img
    className={className}
    onClick={onClick}
    src={arrow}
    alt="arrow-next"
    style={{
      display: 'block',
      top: '50%',
      right: `${pxToRem(-30)}`,
      width: `${pxToRem(30)}`,
      height: `${pxToRem(30)}`,
      transform: 'rotate(-90deg)',
    }}
  />
)

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

const PrevArrow = ({ className, onClick }) => (
  <img
    className={className}
    onClick={onClick}
    src={arrow}
    alt="arrow-prev"
    style={{
      display: 'block',
      top: '50%',
      left: `${pxToRem(-55)}`,
      width: `${pxToRem(30)}`,
      height: `${pxToRem(30)}`,
      transform: 'rotate(90deg)',
    }}
  />
)

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

const Avatar = styled.img`
  height: ${pxToRem(50)};
  width: ${pxToRem(50)};
  border-radius: 100%;
  border: 1px solid ${COLORS.ATHENA_BLUE};
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

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  }
  return (
    <div data-aos="fade-up">
      <Text
        fontSize="xxl"
        fontWeight="bold"
        color={COLORS.MAJOLICA_BLUE}
        textAlign="center"
        mt="l"
      >
        Testimonials
      </Text>
      <StyledSlider {...settings}>
        <Box mt="xl" mb="m" pl={[0, 'm', 0]} pr={[0, 'm', 'l']}>
          <Flex justifyContent="left" ml={[0, 'm', 0]}>
            <Avatar src={richard} />
            <Box ml="m">
              <Text fontSize="xl" color={COLORS.MAJOLICA_BLUE}>
                Pavlo Pavlovych Chabanenko
              </Text>
              <Text fontSize="s" color={COLORS.ROCK_BLUE}>
                Developer
              </Text>
            </Box>
          </Flex>
          <Text
            textAlign="justify"
            fontSize={['l', 'l', 's']}
            fontWeight={fontWeights.thin}
            mt="l"
            color={COLORS.LEAD}
          >
            'Freddie Mercury is the greatest vocalist ever. His Love of My Life
            is such an amazing song.. Freddie Mercury is the greatest vocalist
            ever. His Love of My Life is such an amazing song..Freddie Mercury
            is the greatest vocalist ever. His Love of My Life is such an
            amazing song..'
          </Text>
        </Box>
        <Box mt="xl" mb="m" pl={[0, 'm', 0]} pr={[0, 'm', 'l']}>
          <Flex justifyContent="left" ml={['m', 'm', 0]}>
            <Avatar src={boss} />
            <Box ml="m">
              <Text fontSize="xl" color={COLORS.MAJOLICA_BLUE}>
                Pavol Madar
              </Text>
              <Text fontSize="s" color={COLORS.ROCK_BLUE}>
                Boss
              </Text>
            </Box>
          </Flex>
          <Text
            textAlign="justify"
            fontSize={['l', 'l', 's']}
            fontWeight={fontWeights.thin}
            color={COLORS.LEAD}
            mt="l"
          >
            'Freddie Mercury is the greatest vocalist ever. His Love of My Life
            is such an amazing song.. Freddie Mercury is the greatest vocalist
            ever. His Love of My Life is such an amazing song..'
          </Text>
        </Box>
        <Box mt="xl" mb="m" pl={[0, 'm', 0]} pr={[0, 'm', 'l']}>
          <Flex justifyContent="left" ml={['m', 'm', 0]}>
            <Avatar src={richard} />
            <Box ml="m">
              <Text fontSize="xl" color={COLORS.MAJOLICA_BLUE}>
                Richard Rosko
              </Text>
              <Text fontSize="s" color={COLORS.ROCK_BLUE}>
                Developer
              </Text>
            </Box>
          </Flex>
          <Text
            textAlign="justify"
            fontSize={['l', 'l', 's']}
            fontWeight={fontWeights.thin}
            color={COLORS.LEAD}
            mt="l"
          >
            'Freddie Mercury is the greatest vocalist ever. His Love of My Life
            is such an amazing song..'
          </Text>
        </Box>
        <Box mt="xl" mb="m" pl={[0, 'm', 0]} pr={[0, 'm', 'l']}>
          <Flex justifyContent="left" ml={['m', 'm', 0]}>
            <Avatar src={boss} />
            <Box ml="m">
              <Text fontSize="xl" color={COLORS.MAJOLICA_BLUE}>
                One Punch Man
              </Text>
              <Text fontSize="s" color={COLORS.ROCK_BLUE}>
                Test
              </Text>
            </Box>
          </Flex>
          <Text
            textAlign="justify"
            fontSize={['l', 'l', 's']}
            fontWeight={fontWeights.thin}
            mt="l"
            color={COLORS.LEAD}
          >
            'Freddie Mercury is the greatest vocalist ever. His Love of My Life
            is such an amazing song..'
          </Text>
        </Box>
      </StyledSlider>
    </div>
  )
}

export default TestimonialSection
