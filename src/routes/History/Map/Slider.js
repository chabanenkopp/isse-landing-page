import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { rem } from 'polished'
import { BOXSHADOWS, radius, space } from 'Theme'
import { COLORS } from 'Root/constants'
import { Box } from 'components/atoms/Layout'
import arrowIcon from 'assets/images/arrow-carousel.svg'

const DIRECTIONS = {
  LEFT: `transform: rotate(0deg);`,
  RIGHT: `transform: rotate(180deg);`,
}

const ArrowImg = styled('img')`
  height: ${rem(15)};
`

const SIZE = rem(32)

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${SIZE};
  height: ${SIZE};
  border-radius: ${radius.circle};
  background-color: ${COLORS.WHITE};
  box-shadow: ${BOXSHADOWS.DARK};
  margin-left: ${space.s};
  opacity: 0;
  ${({ direction }) => DIRECTIONS[direction]}
  transition: opacity 0.3s;
`

const StyledBox = styled(Box)`
  position: relative;
  :hover ${Button} {
    opacity: 0.9;
    transition: opacity 0.3s;
  }
`

const ButtonWrapper = styled('div')`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  ${({ direction }) =>
    direction === 'RIGHT' &&
    `
     right: 0;
     margin-right: ${space.s};
  `}
`

const ArrowButton = ({ onClick, direction }) => (
  <ButtonWrapper direction={direction}>
    <Button onClick={onClick} direction={direction}>
      <ArrowImg src={arrowIcon} />
    </Button>
  </ButtonWrapper>
)

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
}

const SliderWrapper = styled.div`
  .swiper-pagination-bullet {
    opacity: 0.6;
    background: ${COLORS.WHITE};
  }
  .swiper-pagination-bullet-active {
    background: ${COLORS.WHITE};
    opacity: 0.9;
  }
`

const params = {
  observerUpdate: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
}

const VenueSlider = ({ slide: Slide, thumbnailUrls, sliderMaxWidth }) => {
  const [swiper, setSwiper] = React.useState(null)
  React.useEffect(() => {
    let timeout
    if (swiper !== null) {
      timeout = setTimeout(() => swiper.update(), 500)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [swiper]) // fixing first opening not loaded
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
    <StyledBox maxWidth={sliderMaxWidth}>
      <SliderWrapper>
        <Swiper getSwiper={setSwiper} {...params}>
          {thumbnailUrls.map((image) => (
            <div key={image.asset.fluid.src}>
              <Slide src={image.asset.fluid.src} />
            </div>
          ))}
        </Swiper>
      </SliderWrapper>

      <ArrowButton onClick={() => handlePreviousClick()} direction="LEFT" />
      <ArrowButton
        onClick={() => handleNextClick()}
        isRotated
        direction="RIGHT"
      />
    </StyledBox>
  )
}

VenueSlider.propTypes = {
  slide: PropTypes.object.isRequired,
  thumbnailUrls: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  sliderMaxWidth: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default VenueSlider
