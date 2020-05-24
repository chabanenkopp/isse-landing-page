import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import { theme, fontSizes } from 'Theme'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'

const Link = styled(Text)`
  text-decoration: none;
  color: inherit;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${theme.fontWeights.thin};
  :hover {
    color: ${COLORS.FLAX_FLOWER_BLUE};
  }

  ${({ list }) =>
    list &&
    `
    ::after {
      content: '';
      position: relative;
      top: 13px;
      left: 10px;
      width: 0px;
      height: 0px;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-width: 4px 3.5px 0px;
      border-style: solid;
    }
  `}
  ${space}
`
Link.propTypes = {
  list: PropTypes.number,
}

Link.defaultProps = {
  fontSize: fontSizes.l,
}

export default Link
