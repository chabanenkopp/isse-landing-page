import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { rem } from 'polished'
import MobileMenuProvider from 'MobileMenuContext'
import PropTypes from 'prop-types'
import { COLORS } from 'Root/constants'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import GenericPage from 'shared/pages/GenericPage'
import SEO from 'components/atoms/seo'
import SubHeader from 'components/organisms/SubHeader'
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
        <MobileMenuProvider>
          <GenericPage
            pathName={pathname}
            fitScreenImageComponent={<SubHeader>Conference Results</SubHeader>}
          >
            <SEO title="About ISSE conference" />
            <Box maxWidth={{ tablet: rem(800) }} m="0 auto">
              <Text
                textAlign="center"
                fontSize="xxxl"
                fontWeight="thin"
                color={COLORS.VANISHING}
              >
                Reviews from the participants of the ISSE 2020
              </Text>
              <Text
                as="p"
                textAlign="center"
                fontSize="xl"
                fontWeight="thin"
                color={COLORS.DAYBREAK}
                mb="xxl"
              >
                How ISSE 2020 played a unique role in connecting people, sharing
                and getting great ideas and experience
              </Text>
            </Box>
            {allSanityGalleryCard.edges.map(
              ({ node: { galleryImages, ...props } }, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Box key={i} my="l">
                  <Slider
                    slides={galleryImages}
                    align={i % 2 === 0 ? 'left' : 'right'}
                    {...props}
                  />
                </Box>
              )
            )}
          </GenericPage>
        </MobileMenuProvider>
      )
    }}
  />
)

Results.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Results
