import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import GeneralInfo from './GeneralInfo'
import List from './List'
import IsseHistory from './IsseHistory'

const Overview = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="About ISSE conference" />
    <SubHeader>ISSE OVERVIEW</SubHeader>
    <GeneralInfo />
    <List />
    <IsseHistory />
  </GenericPage>
)

Overview.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Overview
