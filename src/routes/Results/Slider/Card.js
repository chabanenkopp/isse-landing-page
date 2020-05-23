import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem } from 'polished'
import { COLORS } from 'Root/constants'
import { space, radius, fontSizes, fontWeights, mq } from 'Theme'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Wave from 'assets/images/wave-grey.inline.svg'

const SIZE = rem(64)

const StyledContainer = styled('div')`
  background-color: ${COLORS.LYNX_WHITE};
  ${mq.to.tablet`
    width: 100%;
  `}
  ${mq.from.tablet`
    width: ${rem(455)};
    overflow: hidden;
    border-radius: ${radius.m};
  `}
`

const Avatar = styled(Img)`
  border-radius: ${radius.circle};
  min-height: ${SIZE};
  min-width: ${SIZE};
  margin-right: ${space.m};
`

const StyledWave = styled(Wave)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`

const StyledBox = styled(Box)`
  background: linear-gradient(360deg, #fafafa 0%, #ebeef2 100%);
  padding: ${space.m};
`

const textStyles = `
  font-size: ${fontSizes.m};
  color: ${COLORS.BLUE_ZODIAC};
`

const StyledText = styled(Text)`
  ${textStyles};
  font-weight: ${fontWeights.semi_bold};
`

const GoalsBox = styled('div')`
  ${textStyles}
  margin-bottom: ${space.m};
`

const Card = ({ goals, review, authorImage, authorName, position }) => {
  return (
    <StyledContainer>
      <Box position="relative" px="m" pt="m" pb="l">
        <Flex alignItems={{ mobile: 'flex-start', tablet: 'center' }}>
          <Avatar fluid={authorImage.asset.fluid} />
          <Flex
            alignItems={{ mobile: 'flex-start', tablet: 'center' }}
            justifyContent="space-between"
            flexDirection={{
              mobile: 'column',
              tablet: 'row',
            }}
            width="100%"
          >
            <div>
              <Text
                fontSize="l"
                fontWeight="semi_bold"
                color={COLORS.RIVER_BED}
              >
                {authorName}
              </Text>
              <Text color={COLORS.RIVER_BED}>{position}</Text>
            </div>
          </Flex>
        </Flex>
        <Box pt="m" pb={{ mobile: 'm', tablet: 0 }}>
          <Text fontSize="m" color={COLORS.RIVER_BED}>
            {review}
          </Text>
        </Box>
        <StyledWave />
      </Box>
      <StyledBox>
        <StyledText as="span">Goals:</StyledText>
        <GoalsBox>
          {goals.map((goal) => (
            <Text key={goal}>
              <Text as="span" fontWeight="bold">
                •
              </Text>{' '}
              {goal}
            </Text>
          ))}
        </GoalsBox>
      </StyledBox>
    </StyledContainer>
  )
}

Card.propTypes = {
  authorImage: PropTypes.object.isRequired,
  review: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Card
