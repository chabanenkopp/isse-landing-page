import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import SponsorsInfo from './SponsorsInfo'

const Sponsors = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="sponsors" />
    <SubHeader>SPONSORSHIP OFFER</SubHeader>
    <SponsorsInfo />
  </GenericPage>
)

Sponsors.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Sponsors
