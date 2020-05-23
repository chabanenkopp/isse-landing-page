import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { rem } from 'polished'
import { useMedia } from 'useMedia'
import { mq } from 'Theme'
import GallerySlider from './GallerySlider'

const PictureFluid = styled(Img)`
  height: ${rem(660)};
  ${mq.to.desktop`
    height: ${rem(550)};
  `}
`
const Picture = styled('div')`
  ${mq.to.tablet`
    height: ${rem(320)};
  `}
  ${({ src }) => `background: url("${src}") center / cover no-repeat;`}
`

const swiperConfig = {
  loop: true,
  observerUpdate: true,
  slidesPerView: 1,
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
}

const Slider = ({ align, slides, ...props }) => {
  const matches = useMedia()
  return matches.mobile ? (
    <GallerySlider
      slides={slides}
      swiperConfig={{ ...swiperConfig, grabCursor: true }}
      {...props}
      component={Picture}
    />
  ) : (
    <GallerySlider
      key="fade"
      align={align}
      slides={slides}
      {...props}
      swiperConfig={{ ...swiperConfig, effect: 'fade' }}
      component={PictureFluid}
    />
  )
}

Slider.propTypes = {
  align: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default Slider
