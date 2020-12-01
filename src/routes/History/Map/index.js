import React from 'react'
import styled from 'styled-components'
import { BOXSHADOWS, radius } from 'Theme'
import { TOPBAR_HEIGHT, GOOGLE_MAP_URL } from 'Root/constants'
import { Box } from 'components/atoms/Layout'
import MapContainer from './Map'

const StyledBox = styled(Box)`
  .gm-ui-hover-effect {
    display: none !important;
  }
  .gm-style .gm-style-iw-t::after {
    box-shadow: -2px 2px 2px rgba(66, 149, 165, 0.25);
  }
  .gm-style-iw.gm-style-iw-c {
    padding: 0;
    max-width: none !important;
    max-height: none !important;
    box-shadow: ${BOXSHADOWS.CARD};
    border-radius: ${radius.m};
    .gm-style-iw-d {
      overflow: hidden !important;
      max-width: none !important;
      max-height: none !important;
    }
  }
  .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom {
    top: 0;
  }

  z-index: 1;
  position: sticky;
  top: ${TOPBAR_HEIGHT};

  height: calc(100vh - ${TOPBAR_HEIGHT});
`

const Map = ({ ...props }) => (
  <StyledBox>
    <MapContainer
      googleMapURL={GOOGLE_MAP_URL}
      loadingElement={<Box height="100%" />}
      containerElement={<Box height="100%" />}
      mapElement={<Box height="100%" />}
      {...props}
    />
  </StyledBox>
)

export default Map
