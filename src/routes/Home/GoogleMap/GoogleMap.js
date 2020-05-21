import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Box } from 'components/atoms/Layout'
import { LINKS } from 'Root/constants'
import { radius } from 'Theme'
import { Text } from 'components/atoms/Typography'
import Bb from 'components/atoms/Bb'

const MapContainer = styled(Box)`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin: 0 auto;
  border-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const MapIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: ${radius.l};
`

const GoogleMap = () => (
  <Box data-aos="fade-up">
    <MapContainer>
      <MapIframe
        title="g"
        src={LINKS.GOOGLE_MAPS}
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
      />
    </MapContainer>
    <Box mt="xl" px={{ tablet: rem(20), desktop: rem(100) }}>
      <Text textAlign="center" fontSize="xl" mb="l">
        How to arrive to the hotel
      </Text>
      <Text
        data-aos="fade-up"
        textAlign="center"
        fontSize="m"
        fontWeight="thin"
      >
        You can use the bus station in <b>Liptovský Mikuláš</b> located close to
        the railway station.
        <br />
        <b>Schedules</b>: 6:20, 6:45, 8:25, 10:25, 12:20, 13:35, 14:25, 16:00,
        17:25, 18:55, 21:10. The journey to the final stop takes about
        <Bb> 30 min</Bb>. The bus stop is right near the Grand Jasna hotel.
      </Text>
    </Box>
  </Box>
)

export default GoogleMap
