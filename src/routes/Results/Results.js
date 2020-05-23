import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import FloatingBadge from 'shared/FloatingBadge'

const SANITY_CARDS_QUERY = graphql`
  {
    allSanityGalleryCard {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          author {
            name
          }
          authorName
          position
          review
          authorImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          galleryImages {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          goals
        }
      }
    }
  }
`

const StyledImg = styled(Img)`
  height: 50px;
  width: 50px;
`

const Results = ({ location: { pathname } }) => (
  <StaticQuery
    query={SANITY_CARDS_QUERY}
    render={({ allSanityGalleryCard }) => {
      return (
        <GenericPage
          pathName={pathname}
          fitScreenImageComponent={<SubHeader>Results</SubHeader>}
        >
          <SEO title="About ISSE conference" />
          <FloatingBadge />
          {allSanityGalleryCard.edges.map(
            ({ node: { title, _id, authorImage } }) => (
              <div key={_id}>
                {title}
                <StyledImg fluid={authorImage.asset.fluid} />
              </div>
            )
          )}
        </GenericPage>
      )
    }}
  />
)

Results.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Results
