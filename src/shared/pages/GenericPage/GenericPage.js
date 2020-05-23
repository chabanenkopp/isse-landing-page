import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PATHS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import { maxWidthStyle } from 'components/atoms/mixins'
import App from 'App'
import Footer from 'shared/pages/GenericPage/Footer'
import MobileMenu from 'shared/pages/GenericPage/MobileMenu'
import Designer from 'shared/Designer'
import Header from './Header'

const { HOME, RESULTS } = PATHS

const Content = styled('div')`
  z-index: 0;
  position: relative;
  ${maxWidthStyle}
`

export default class GenericPage extends Component {
  state = {
    isSliderVisible: false,
  }
  componentDidMount = async () => {
    AOS.init({
      duration: 400,
      once: true,
    })
  }
  handleToggleMobileMenuClick = () => {
    const { isSliderVisible } = this.state
    this.setState({ isSliderVisible: !isSliderVisible })
  }
  render() {
    const { children, fitScreenImageComponent, pathName } = this.props
    const { isSliderVisible } = this.state
    return (
      <App>
        <Flex
          minHeight={
            fitScreenImageComponent && pathName === HOME ? '100vh' : 'unset'
          }
          flexDirection="column"
        >
          <Header
            isVisible={isSliderVisible}
            pathName={pathName}
            onMobileMenuButtonClick={this.handleToggleMobileMenuClick}
            mobileMenuComp={
              <MobileMenu
                isVisible={isSliderVisible}
                pathName={pathName}
                onClick={this.handleToggleMobileMenuClick}
              />
            }
          />
          {fitScreenImageComponent}
        </Flex>
        <Box overflow={pathName === RESULTS ? 'hidden' : 'visible'}>
          <Content pathName={pathName}>{children}</Content>
        </Box>
        <Footer />
        <Box my="m">
          <Designer />
        </Box>
      </App>
    )
  }
}

GenericPage.propTypes = {
  children: PropTypes.node.isRequired,
  fitScreenImageComponent: PropTypes.node,
  pathName: PropTypes.string.isRequired,
}
