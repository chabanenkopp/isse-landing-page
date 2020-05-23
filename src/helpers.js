import { rem } from 'polished'
import { scroller } from 'react-scroll'

export const pxToRem = (pxVal) => rem(pxVal, 18)

export const scrollIntoView = (name, offset = -175) => {
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset,
  })
}

export const getScrollName = (name) => `scroll-to-${name}`
