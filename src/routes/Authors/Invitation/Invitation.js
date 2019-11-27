import React from 'react'
import { Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Paragraph from 'components/atoms/Paragraph'
import Bb from 'components/atoms/Bb'

const GeneralInfo = () => (
  <Box data-aos="fade-up" mt="xl">
    <Text textAlign="center" fontSize="xxl" mb="xl">
      Invitation
    </Text>
    <Paragraph>
      The 43<sup>rd</sup> International Spring Seminar on Electronics Technology
      is the premier European forum for the exchange of information between
      senior and young scientists from academic communities and electronic
      industries from around the world on topics related to their experimental
      and theoretical work in the very wide-spread field of electronics and
      micro / nanoelectronics technology and electronic packaging. For the
      fourth time the ISSE Conference will be held in Demanovska Dolina,
      Slovakia.
    </Paragraph>
    <Paragraph>
      In the frame of a unique combination of poster exhibitions, oral paper
      presentations, and individual meetings senior and junior researchers from
      all over the world can come together to discuss scientific problems and
      their teaching experiences as well as plan and organize international
      cooperations and student exchanges in a convenient and multicultural
      atmosphere. The theme of the upcoming <Bb>43rd ISSE</Bb> conference
      is&nbsp;
      <Bb>
        “Trends in Microelectronics Packaging and Interconnection Technology”
      </Bb>
      .
    </Paragraph>
    <Paragraph>
      You are invited to participate in this great occasion for sharing ideas,
      friendship and culture in the context of traditional Slovak hospitality.
      The 43<sup>rd</sup> ISSE conference will be hosted by the Technical
      University of Kosice, Faculty of Electrical Engineering and Informatics,
      Department of Technologies in Electronics. The organization of the{' '}
      <Bb>ISSE</Bb> conference is a great honor and opportunity for the
      Technical University of Kosice to present high-level scientific research.
    </Paragraph>
  </Box>
)

export default GeneralInfo
