import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import Tables from './Tables'

const Committees = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="About ISSE conference" />
    <SubHeader>COMMITTEES</SubHeader>
    <Tables />
  </GenericPage>
)

Committees.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Committees
