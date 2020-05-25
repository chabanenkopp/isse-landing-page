/* eslint-disable no-underscore-dangle */
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Helmet } from 'react-helmet'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import { theme, globalStyles } from 'Theme'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:300,400,500,600,700&display=swap"
        rel="stylesheet"
      />
      </Helmet>
      <GlobalStyle />
      {story()}
    </React.Fragment>
  </ThemeProvider>
))