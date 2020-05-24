/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { rem } from 'polished'
import MobileMenuProvider from 'MobileMenuContext'
import { COLORS } from 'Root/constants'
import { initializeArrayWithRange } from 'helpers'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Pagination from 'components/molecules/Pagination'
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
        const [currentPage, setCurrentPage] = React.useState(1)
        const [previousPage, setPreviousPage] = React.useState(null)
        const [nextPage, setNextPage] = React.useState(2)

        const firstPage = 1
        const lastPage = Math.ceil(allSanityMapCard.edges.length / 10) || 1
        const pages = initializeArrayWithRange(lastPage - 1).map((page) =>
          allSanityMapCard.edges.slice(page * 10, (page + 1) * 10)
        )
        const currentPageElements = pages[currentPage - 1]

        React.useEffect(() => {
          setPreviousPage(currentPage > 1 ? currentPage - 1 : null)
        })

        React.useEffect(() => {
          setNextPage(currentPage === lastPage ? null : currentPage + 1)
        })

        console.log('firstPage', firstPage)
        console.log('lastPage', lastPage)

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
                      destinations={currentPageElements}
                      onHover={setHoveredVenueId}
                    />
                    <Box mt={{ mobile: 'm', desktop: 'l' }}>
                      <Pagination
                        firstPage={firstPage}
                        lastPage={lastPage}
                        currentPage={currentPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        onNextClick={() => setCurrentPage((prev) => prev + 1)}
                        onPrevClick={() => setCurrentPage((prev) => prev - 1)}
                        onPageClick={setCurrentPage}
                        mb={{ mobile: 's', desktop: 'l' }}
                      />
                    </Box>
                  </Layout.List>
                }
                mapContent={
                  <Layout.Map>
                    <Map
                      venues={currentPageElements}
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
