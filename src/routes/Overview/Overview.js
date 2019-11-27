import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import FloatingBadge from 'shared/FloatingBadge'
import GeneralInfo from './GeneralInfo'
import List from './List'
import HistoryTable from './IsseHistory/HistoryTable'
// import IsseHistory from './IsseHistory'x

const Overview = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="About ISSE conference" />
    <FloatingBadge />
    <SubHeader>ISSE OVERVIEW</SubHeader>
    <GeneralInfo />
    <List />
    <HistoryTable />
  </GenericPage>
)

Overview.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Overview
