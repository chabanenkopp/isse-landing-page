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

export const initializeArrayWithRange = (end, start = 0) =>
  Array.from({ length: end + 1 - start }).map((v, i) => i + start)

export const createStoryName = ({ base, filename }) => {
  const trimmedBase = base.replace(/^\/+|\/+$/g, '') // trim leading and/or trailing slashes
  return `${trimmedBase.replace('src/components/', '')}/${filename.replace(
    '.stories',
    ''
  )}`
}
