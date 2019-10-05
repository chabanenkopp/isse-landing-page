import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from './SubHeader'
import SponsorsInfo from './SponsorsInfo'

const Sponsors = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="sponsors" />
    <SubHeader />
    <SponsorsInfo />
  </GenericPage>
)

Sponsors.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Sponsors
