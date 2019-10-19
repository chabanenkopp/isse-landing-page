import React from 'react'
import { Box } from 'components/atoms/Layout'
import Paragraph from 'components/atoms/Paragraph'
import Hero from 'components/molecules/Hero'
import HistoryTable from './HistoryTable'
import Bb from '../components/BlueBold'

const IsseHistory = () => (
  <Box mt="l">
    <div data-aos="fade-up">
      <Hero>
        ISSE <Bb>History</Bb>
      </Hero>
    </div>
    <Paragraph>
      ISSE is a series of annual conferences and a network of electronics
      packaging education - was founded in 1977 to provide European forum for
      the exchange of information between senior and junior scientists from
      academic communities and electronic industries from around the world on
      topics related to their experimental and theoretical work in the very
      wide-spread field of electronics and microelectronics technology and
      packaging.
    </Paragraph>
    <HistoryTable />
  </Box>
)

export default IsseHistory
