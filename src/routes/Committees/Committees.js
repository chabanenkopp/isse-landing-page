import React from 'react'
import PropTypes from 'prop-types'
import MobileMenuProvider from 'MobileMenuContext'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import FloatingBadge from 'shared/FloatingBadge'
import Tables from './Tables'

const Committees = ({ location: { pathname } }) => (
  <MobileMenuProvider>
    <GenericPage
      pathName={pathname}
      fitScreenImageComponent={<SubHeader>COMMITTEES</SubHeader>}
    >
      <SEO title="About ISSE conference" />
      <FloatingBadge />
      <Tables />
    </GenericPage>
  </MobileMenuProvider>
)

Committees.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Committees
