import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PathOne = styled.path`
  ${({ isHovered }) => isHovered && `transform: translate3d(15px, 0, 0);`}
  transition: transform 0.5s;
`
const PathTwo = styled.path`
  ${({ isHovered }) => isHovered && `transform: translate3d(-15px, 0, 0);`}
  transition: transform 0.5s;
`

const AnimatedClouds = ({ isHovered }) => (
  <svg preserveAspectRatio="none" viewBox="0 0 300 100">
    <PathOne
      isHovered={isHovered}
      d="M30.913 43.944s42.911-34.464 87.51-14.191c77.31 35.14 113.304-1.952 146.638-4.729 48.654-4.056 69.94 16.218 69.94 16.218v54.396H30.913V43.944z"
      fill="#FFF"
      opacity=".6"
    />
    <PathTwo
      isHovered={isHovered}
      d="M-35.667 44.628s42.91-34.463 87.51-14.191c77.31 35.141 113.304-1.952 146.639-4.729 48.653-4.055 69.939 16.218 69.939 16.218v54.396H-35.667V44.628z"
      fill="#FFF"
      opacity=".6"
    />
    <path
      d="M43.415 98.342s48.283-68.927 109.133-68.927c65.886 0 97.983 67.914 97.983 67.914v3.716H42.401l1.014-2.703z"
      fill="#FFF"
      opacity=".7"
    />
    <path
      d="M-34.667 62.998s56-45.667 120.316-27.839C167.484 57.842 197 41.332 232.286 30.428c53.07-16.399 104.047 36.903 104.047 36.903l1.333 36.667-372-2.954-.333-38.046z"
      fill="#FFF"
    />
  </svg>
)

AnimatedClouds.propTypes = {
  isHovered: PropTypes.bool.isRequired,
}

export default AnimatedClouds
