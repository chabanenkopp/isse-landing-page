import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { radius, BOXSHADOWS } from 'Theme'
import { Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'

const StyledFlex = styled(Flex)`
  max-width: ${rem(264)};
  width: 100%;
  height: ${rem(104)};
  border-radius: ${radius.l};
  box-shadow: ${BOXSHADOWS.CARD};
  background-color: ${COLORS.WHITE};
`

const StyledIMG = styled('img')`
  width: ${rem(30)};
`

const IconText = ({ src, label, ...props }) => (
  <StyledFlex {...props}>
    <Flex
      alignItems={{ mobile: 'flex-end', tablet: 'center' }}
      px={{ tablet: 'm', desktop: 'l' }}
    >
      <StyledIMG src={src} />
      <Text
        as="p"
        lineHeight={rem(24)}
        fontSize={{ mobile: 'm', tablet: 's', desktop: 'm' }}
        fontWeight="semi_bold"
        color={COLORS.MAJOLICA_BLUE}
        ml="m"
      >
        {label}
      </Text>
    </Flex>
  </StyledFlex>
)

IconText.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default IconText
