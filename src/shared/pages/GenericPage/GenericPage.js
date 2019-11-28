import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Box, Flex } from 'components/atoms/Layout'
import App from 'App'
import Footer from 'shared/pages/GenericPage/Footer'
import MobileMenu from 'shared/pages/GenericPage/MobileMenu'
import Designer from 'shared/Designer'
import Header from './Header'

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
          minHeight={fitScreenImageComponent ? '100vh' : 'unset'}
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
        <Box>{children}</Box>
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
