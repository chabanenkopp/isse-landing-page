import styled from 'styled-components'
import { fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'

const TextLink = styled(Text)`
  text-decoration: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: ${fontWeights.semi_bold};
  color: ${COLORS.FLAX_FLOWER_BLUE};
`

export default TextLink
