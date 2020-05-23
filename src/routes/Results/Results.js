import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'components/atoms/Layout'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
import FloatingBadge from 'shared/FloatingBadge'
import Slider from './Slider'

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
          {allSanityGalleryCard.edges.map(
            ({ node: { galleryImages, ...props } }, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={i} my="xl">
                <Slider
                  slides={galleryImages}
                  align={i % 2 === 0 ? 'left' : 'right'}
                  {...props}
                />
              </Box>
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
