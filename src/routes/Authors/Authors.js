import React from 'react'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import FloatingBadge from 'shared/FloatingBadge'
import Invitation from './Invitation'
import BasicInformation from './BasicInformation'
import AbstractSubmission from './AbstractSubmission'
import Requirements from './Requirements'
import ImageDownload from './ImageDownload'

const Authors = ({ location: { pathname } }) => (
  <GenericPage pathName={pathname}>
    <SEO title="sponsors" />
    <FloatingBadge />
    <SubHeader>AUTHOR SECTION</SubHeader>
    <Invitation />
    <BasicInformation />
    <AbstractSubmission />
    <Requirements />
    <ImageDownload />
  </GenericPage>
)

Authors.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Authors
