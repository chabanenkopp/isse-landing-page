import React from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PATHS } from 'Root/constants'
import { Box, Flex } from 'components/atoms/Layout'
import App from 'App'
import Footer from 'shared/pages/GenericPage/Footer'
import MobileMenu from 'shared/pages/GenericPage/MobileMenu'
import Designer from 'shared/Designer'
import { MobileMenuContext } from 'MobileMenuContext'
import Header from '../GenericPage/Header'

const { HOME } = PATHS

const GenericPage = ({ children, fitScreenImageComponent, pathName }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    })
  }, [])

  const { isMobileMenuVisible, toggleMobileMenu } = React.useContext(
    MobileMenuContext
  )

  return (
    <App>
      <Flex
        minHeight={
          fitScreenImageComponent && pathName === HOME ? '100vh' : 'unset'
        }
        flexDirection="column"
      >
        <Header
          isVisible={isMobileMenuVisible}
          pathName={pathName}
          onMobileMenuButtonClick={toggleMobileMenu}
          mobileMenuComp={
            <MobileMenu
              isVisible={isMobileMenuVisible}
              pathName={pathName}
              onClick={toggleMobileMenu}
            />
          }
        />
        {fitScreenImageComponent}
      </Flex>
      {children}
      {/* <Footer /> */}
      <Box my="m">
        <Designer />
      </Box>
    </App>
  )
}

GenericPage.propTypes = {
  children: PropTypes.node.isRequired,
  fitScreenImageComponent: PropTypes.node,
  pathName: PropTypes.string.isRequired,
}

export default GenericPage
