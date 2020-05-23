/* eslint-disable react/no-array-index-key */
import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { rem } from 'polished'
import { useMedia } from 'useMedia'
import { mq, space, breakpoints } from 'Theme'
import { COLORS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { fullWidthStyle } from 'components/atoms/mixins'
import Card from './Card'

const CARD_OFFSET = rem(60)
const DESKTOP_WIDTH = rem(990)
const SLIDE_EVENT = 'slideChange'

const Thumbnail = styled(Img)`
  cursor: pointer;
  width: ${rem(170)};
  height: ${rem(110)};
  ${({ currentIndex, index }) => currentIndex === index && `opacity: 0.3;`}
`

const StyledFlex = styled(Flex)`
  margin-top: ${space.m};
  > :not(:last-child) {
    margin-right: ${space.m};
  }
  ${({ align }) =>
    `justify-content: ${align === 'right' ? 'flex-start' : 'flex-end'}`}
`

const CardWrapper = styled(Box)`
  z-index: 2;
  ${mq.from.tablet`
    position: relative;
    left: ${CARD_OFFSET};
    top: ${CARD_OFFSET};
    ${({ align }) =>
      align === 'right' &&
      `
       left: unset;
       right: ${CARD_OFFSET};
       display: flex;
       justify-content: flex-end;
     `}
  `}
  ${mq.from.tv`
     position: absolute;
     top: 50%;
     left: unset;
     right:-30%;
     ${({ align }) =>
       align === 'right' &&
       `
       left:-30%;
       right: unset;
     `}
     transform: translateY(-50%);
  `}
`

const StyledContainer = styled(Box)`
  ${mq.to.tablet`
    ${fullWidthStyle}
  `}
  ${mq.from.desktop`
    ${fullWidthStyle}
  `}
  ${mq.from.tv`
    padding-top: 0;
  `}
`

const SliderWrapper = styled.div`
  .swiper-pagination-bullet {
    opacity: 0.6;
    background: ${COLORS.WHITE};
  }
  .swiper-pagination-bullet-active {
    background: ${COLORS.WHITE};
    opacity: 0.9;
  }
  ${mq.from.tablet`
    .swiper-pagination-bullet {
      display: none;
    }
    .swiper-pagination-bullet-active {
      display: none;
    }
  `}
`

const GallerySlider = ({
  component: Component,
  slides,
  swiperConfig,
  align,
  ...props
}) => {
  const [swiper, setSwiper] = React.useState(null)
  const [currentIndex, updateCurrentIndex] = React.useState(0)
  const matches = useMedia()

  const updateIndex = React.useCallback(
    () => updateCurrentIndex(swiper.realIndex),
    [swiper]
  )

  React.useEffect(() => {
    if (swiper !== null) {
      swiper.on(SLIDE_EVENT, updateIndex)
    }
    return () => {
      if (swiper !== null) {
        swiper.off(SLIDE_EVENT, updateIndex)
      }
    }
  }, [swiper, updateIndex])

  const slideTo = (index) => {
    if (swiper !== null) {
      swiper.slideTo(index + 1)
    }
  }

  return (
    <StyledContainer>
      <Box maxWidth={rem(breakpoints.tv)} m="0 auto">
        <Box
          position="relative"
          maxWidth={{ desktop: DESKTOP_WIDTH }}
          ml={align === 'right' ? 'auto' : 'unset'}
        >
          <Box position="relative">
            <CardWrapper align={align}>
              <Card {...props} />
            </CardWrapper>
            <SliderWrapper>
              <Swiper getSwiper={setSwiper} {...swiperConfig}>
                {slides.map((slide, i) => (
                  <div key={i}>
                    <Component
                      fluid={slide.asset.fluid}
                      src={slide.asset.fluid.src}
                    />
                  </div>
                ))}
              </Swiper>
            </SliderWrapper>
          </Box>
          {!matches.mobile && (
            <StyledFlex align={align}>
              {slides.map((slide, i) => (
                <div key={i} onClick={() => slideTo(i)}>
                  <Thumbnail
                    index={i}
                    fluid={slide.asset.fluid}
                    currentIndex={currentIndex}
                  />
                </div>
              ))}
            </StyledFlex>
          )}
        </Box>
      </Box>
    </StyledContainer>
  )
}

GallerySlider.propTypes = {
  align: PropTypes.string,
  component: PropTypes.node.isRequired,
  swiperConfig: PropTypes.object.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default GallerySlider
