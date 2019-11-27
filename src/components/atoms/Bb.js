import styled from 'styled-components'
import { COLORS } from 'Root/constants'
import { space, fontSize } from 'styled-system'

const textFunctions = [space, fontSize]

const Bb = styled.span`
  font-weight: bold;
  color: ${COLORS.FLAX_FLOWER_BLUE};
  ${textFunctions};
`

export default Bb
