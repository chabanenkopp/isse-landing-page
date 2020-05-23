import React from 'react'
import PropTypes from 'prop-types'

const mobileMenueState = {
  isMobileMenuVisible: false,
  toggleMobileMenu: () => {},
}

export const MobileMenuContext = React.createContext(mobileMenueState)

const MobileMenuProvider = ({ children }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = React.useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev)
  }

  return (
    <MobileMenuContext.Provider
      value={{ isMobileMenuVisible, toggleMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  )
}

MobileMenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MobileMenuProvider
