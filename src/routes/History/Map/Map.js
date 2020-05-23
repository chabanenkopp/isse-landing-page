import React from 'react'
import PropTypes from 'prop-types'
import OutsideClickHandler from 'react-outside-click-handler'
import {
  Marker,
  GoogleMap,
  InfoWindow,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps'
import venueIconActive from 'assets/images/destination-marker-active.png'
import venueIconInactive from 'assets/images/destination-marker-inactive.png'
import { MAP_SETTINGS } from 'Root/constants'
import { scrollIntoView, getScrollName } from 'helpers'
import InfoWindowContent from './InfoWindow'
import style from './mapStyles.json'

const {
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  DEFAULT_MAP_OPTIONS,
  MARKER_SIZE,
  PIXEL_OFFSET,
} = MAP_SETTINGS

const MapContainer = ({ venues, hoveredVenueId }) => {
  const [selectedVenueId, setSelectedVenueId] = React.useState(null)
  const [isClickOutsideDisabled, setIsClickOutsideDisabled] = React.useState(
    false
  )
  const mapRef = React.useRef(null)
  React.useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds()
    venues.forEach(({ node: { lat, lon } }) => {
      bounds.extend(new window.google.maps.LatLng(lat, lon))
    })
    mapRef.current.fitBounds(bounds)
  }, [venues])
  React.useEffect(() => {
    if (hoveredVenueId) {
      setSelectedVenueId(null)
    }
  }, [hoveredVenueId])
  const selectedOrHoveredVenueId = hoveredVenueId || selectedVenueId
  const selectedVenue = venues.find(
    ({ node: { _id } }) => selectedVenueId === _id
  )
  return (
    <GoogleMap
      defaultZoom={DEFAULT_ZOOM}
      defaultCenter={DEFAULT_CENTER}
      defaultOptions={{ ...DEFAULT_MAP_OPTIONS, styles: style }}
      ref={mapRef}
      onDragStart={() => setIsClickOutsideDisabled(true)}
      onDragEnd={() => setIsClickOutsideDisabled(false)}
    >
      {venues.map(({ node: { lat, lon: lng, _id } }) => (
        <Marker
          key={_id}
          position={{ lat, lng }}
          icon={{
            url:
              _id === selectedOrHoveredVenueId
                ? venueIconActive
                : venueIconInactive,
            scaledSize: new window.google.maps.Size(
              MARKER_SIZE.SMALL,
              MARKER_SIZE.SMALL
            ),
          }}
          onClick={() => {
            setSelectedVenueId(_id)
            scrollIntoView(getScrollName(_id), -100)
          }}
        />
      ))}
      {selectedVenue && (
        <InfoWindow
          position={{
            lat: selectedVenue.node.lat,
            lng: selectedVenue.node.lon,
          }}
          options={{
            pixelOffset: new window.google.maps.Size(
              PIXEL_OFFSET.MARKER.X,
              PIXEL_OFFSET.MARKER.Y
            ),
          }}
        >
          <OutsideClickHandler
            onOutsideClick={() => {
              setSelectedVenueId(null)
            }}
            disabled={isClickOutsideDisabled}
          >
            <InfoWindowContent {...selectedVenue.node} />
          </OutsideClickHandler>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

MapContainer.propTypes = {
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  hoveredVenueId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default withScriptjs(withGoogleMap(MapContainer))
