/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { rem } from 'polished'
import MobileMenuProvider from 'MobileMenuContext'
// import { COLORS } from 'Root/constants'
// import { Flex } from 'components/atoms/Layout'
// import { Text } from 'components/atoms/Typography'
// import Pagination from 'components/organisms/Pagination'
import GenericPageMap from 'shared/pages/GenericPageMap'
import SEO from 'components/atoms/seo'
import Layout from 'shared/Layout'
import Card from './Card'
import Map from './Map'
import CardList from './CardList'

// const PAGINATION_LIMIT = 10
// const MIN_TEAM_SIZE = 5

const HISTORY_CARDS_QUERY = graphql`
  {
    allSanityMapCard {
      edges {
        node {
          _id
          title
          year
          country
          city
          topic
          lat
          lon
          pictureUrl {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          thumbnailUrls {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const Venues = ({ location: { pathname } }) => {
  const [hoveredVenueId, setHoveredVenueId] = React.useState(null)
  const [isMapOpen, setIsMapOpen] = React.useState(false)

  const toggleMap = () => setIsMapOpen(!isMapOpen)

  return (
    <StaticQuery
      query={HISTORY_CARDS_QUERY}
      render={({ allSanityMapCard }) => {
        return (
          <MobileMenuProvider>
            <GenericPageMap pathName={pathname}>
              <SEO title="About ISSE conference" />
              <Layout
                isMapOpen={isMapOpen}
                contentWidth={rem('675px')}
                ratio={1}
                listContent={
                  <Layout.List>
                    <CardList
                      destinations={allSanityMapCard.edges}
                      onHover={setHoveredVenueId}
                      isMapOpen={isMapOpen}
                    />
                    {/* {allSanityMapCard.edges.map(
                      ({ node: { galleryImages, _id, ...props } }, i) => (
                        <Card key={i} onHover={setHoveredVenueId} {...props} />
                      )
                    )} */}
                  </Layout.List>
                }
                mapContent={
                  <Layout.Map>
                    <Map
                      venues={allSanityMapCard.edges}
                      hoveredVenueId={hoveredVenueId}
                      // isMapOpen={isMapOpen}
                      isMapOpen={isMapOpen}
                    />
                  </Layout.Map>
                }
              />
            </GenericPageMap>
          </MobileMenuProvider>
        )
      }}
    />
  )
}

Venues.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Venues
