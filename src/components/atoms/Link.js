import styled from 'styled-components'
import { space } from 'styled-system'
import { theme, fontSizes } from 'Theme'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'

const Link = styled(Text)`
  text-decoration: none;
  color: inherit;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${theme.fontWeights.bold};
  :hover {
    color: ${COLORS.FLAX_FLOWER_BLUE};
  }
  ${space}
`

Link.defaultProps = {
  fontSize: fontSizes.l,
}

export default Link
