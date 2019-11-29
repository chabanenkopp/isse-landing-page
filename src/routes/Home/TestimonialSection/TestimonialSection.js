import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { COLORS } from 'Root/constants'
import { pxToRem } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import arrow from 'assets/images/down-arrow.svg'
import johann from 'assets/images/testimonials/johann.png'
import alena from 'assets/images/testimonials/alena.png'
import igor from 'assets/images/testimonials/igor.png'
import balazs from 'assets/images/testimonials/balazs.png'
import kardos from 'assets/images/testimonials/kardos.png'
import oliver from 'assets/images/testimonials/oliver.png'
import ondrej from 'assets/images/testimonials/ondrej.png'
import frantisek from 'assets/images/testimonials/frantisek.png'
import heinz from 'assets/images/testimonials/heinz.png'
import ivan from 'assets/images/testimonials/ivan.png'
import tomas from 'assets/images/testimonials/tomas.png'

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

const Slide = ({ photo, name, position, text }) => (
  <Box mt="xl" mb="m" pl={[0, 'm', 0]} pr={[0, 'm', 'l']}>
    <Flex justifyContent="center" ml={[0, 'm', 0]}>
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
  </Box>
)

Slide.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const StyledSlider = styled(Slider)`
  .slick-slide {
    outline: none;
  }
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

const COMMENTS = [
  'For many of our young researchers ISSE was their first international conference experience and it was a fruitful base for their further professional development.',
  'The ISSE is an amazing conference that is an excellent opportunity for knowledge exchange and networking with international experts in the field. It is worth coming!',
  'Enjoy a great ISSE conference in the beautiful nature of the Low Tatras.',
  'The ISSE is one of my favorite conferences where I experienced a lot of fun and I learned about technology science as well.',
  'A great opportunity to share experience at the scientific forum.',
  'ISSE continuously contributes to my scientific development, and is also a perfect place for meeting new friends and colleagues.',
  'ISSE is a good opportunity to meet new and active colleagues in your research field and start your first or new international cooperation.',
  'Since 1977 the ISSE-conference is a podium especially for young scientists. It combines the possibility to meet experts in electronics production, to give the first own presetation and to publish this work in IEEE-Xplore.',
  'ISSE is a great conference for senior and young researches with a similar focus on electronics technology. There is a possibility to obtain new information and experience and to establish new cooperation.',
  'The main reasons why I always look forward to the ISSE are discussing new knowledge and current trends in the field of electronics technology, the opportunity to present the results of my research and meeting with friends and colleagues.',
  'I have been attending ISSE conferences since 1997 and based on established contacts I have gained many successful projects...and also friends.',
]

const NAMES = [
  'Johann Nicolics',
  'Alena Pietrikova',
  'Igor Vehec',
  'Ondrej Kovac',
  'Slavomir Kardos',
  'Oliver Krammer',
  'Balazs Illes',
  'Heinz Wohlrabe',
  'Tomas Blecha',
  'Frantisek Steiner',
  'Ivan Szendiuch',
]

const JOBS = [
  'TU Vienna',
  'TU Kosice',
  'TU Kosice',
  'TU Kosice',
  'TU Kosice',
  'BME Budapest',
  'BME Budapest',
  'TU Dresden',
  'University of West Bohemia',
  'University of West Bohemia',
  'Brno University of Technology',
]

const AVATARS = [
  johann,
  alena,
  igor,
  ondrej,
  kardos,
  oliver,
  balazs,
  heinz,
  tomas,
  frantisek,
  ivan,
]

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
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
        {AVATARS.map((avatar, i) => (
          <div key={NAMES[i]}>
            <Slide
              photo={avatar}
              name={NAMES[i]}
              position={JOBS[i]}
              text={COMMENTS[i]}
            />
          </div>
        ))}
      </StyledSlider>
    </div>
  )
}

export default TestimonialSection
