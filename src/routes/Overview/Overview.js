import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from './SubHeader'
import GeneralInfo from './GeneralInfor'

const Overview = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="overview" />
    <SubHeader />
    <GeneralInfo />
  </GenericPage>
)

Overview.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Overview
