/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { rem } from 'polished'
import MobileMenuProvider from 'MobileMenuContext'
import { COLORS } from 'Root/constants'
// import { Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
// import Pagination from 'components/organisms/Pagination'
import GenericPageMap from 'shared/pages/GenericPageMap'
import SEO from 'components/atoms/seo'
import Layout from 'shared/Layout'
import Map from './Map'
import CardList from './CardList'

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
  return (
    <StaticQuery
      query={HISTORY_CARDS_QUERY}
      render={({ allSanityMapCard }) => {
        return (
          <MobileMenuProvider>
            <GenericPageMap pathName={pathname}>
              <SEO title="About ISSE conference" />
              <Layout
                contentWidth={rem('675px')}
                ratio={1}
                listContent={
                  <Layout.List>
                    <Text
                      textAlign="center"
                      fontSize="xxxl"
                      fontWeight="thin"
                      color={COLORS.VANISHING}
                      mt="l"
                    >
                      All Venues and Topics
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="xl"
                      fontWeight="thin"
                      color={COLORS.DAYBREAK}
                      mb="l"
                    >
                      From 1977 and up to this day
                    </Text>
                    <CardList
                      destinations={allSanityMapCard.edges}
                      onHover={setHoveredVenueId}
                    />
                  </Layout.List>
                }
                mapContent={
                  <Layout.Map>
                    <Map
                      venues={allSanityMapCard.edges}
                      hoveredVenueId={hoveredVenueId}
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
