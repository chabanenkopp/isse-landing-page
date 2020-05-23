import React from 'react'
import PropTypes from 'prop-types'
import MobileMenuProvider from 'MobileMenuContext'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import FloatingBadge from 'shared/FloatingBadge'
import SponsorsInfo from './SponsorsInfo'

const Sponsors = ({ location: { pathname } }) => (
  <MobileMenuProvider>
    <GenericPage
      pathName={pathname}
      fitScreenImageComponent={<SubHeader>SPONSORSHIP OFFER</SubHeader>}
    >
      <SEO title="sponsors" />
      <FloatingBadge />
      <SponsorsInfo />
    </GenericPage>
  </MobileMenuProvider>
)

Sponsors.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Sponsors
