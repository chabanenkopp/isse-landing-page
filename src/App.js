import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import { theme, globalStyles } from 'Theme'
import favicon from 'assets/favicon.ico'

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href={favicon} />
        </Helmet>
        <GlobalStyles />
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
