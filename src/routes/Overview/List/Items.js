import React from 'react'
import styled from 'styled-components'
import { fontWeights } from 'Theme'
import { COLORS } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import listItem from 'assets/images/list-item.svg'

const OBJECTIVES = [
  'Exchange of experiences in utilization of advanced electronics, electronics manufacturing, micro and nanoelectronics, research, development, manufacturing, testing and teaching',
  'International cooperation and student exchanges',
  'Supporting a collaboration among junior and senior scientists from Europe and other continents',
]

const TOPICS = [
  'New Materials, Components and Processes',
  'Thermal Management',
  'Advanced Packaging and Interconnection Technologies',
  'Testing, Reliability and Quality Management',
  'Process Modelling and Simulation',
  'Environmental and Ecological Effects in Electronics Technology',
  'Nanotechnology, Nanomaterials and Nanoelectronics',
  'Signal Integrity and Electromagnetic Compatibility',
  'Sensors, Actuators and Microsystems',
  'Educational and Information Technologies in Electronics Manufacturing',
  'Discrete and Integrated Components',
]

const STRUCTURE = [
  'Plenary lectures of invited speakers',
  'Oral sessions',
  'Dialog (poster) sessions',
  'Panel discussions',
]

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
`

const ObjectivesList = () => (
  <StyledUL>
    {OBJECTIVES.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={['xs', 's', 'm']}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const TopicsList = () => (
  <StyledUL>
    {TOPICS.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={['xs', 's', 'm']}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const StructureList = () => (
  <StyledUL>
    {STRUCTURE.map((title) => (
      <li key={title}>
        <Text
          color={COLORS.MAJOLICA_BLUE}
          display="contents"
          fontSize={['xs', 's', 'm']}
          fontWeight={fontWeights.thin}
        >
          {title}
        </Text>
      </li>
    ))}
  </StyledUL>
)

const Items = { ObjectivesList, TopicsList, StructureList }

export default Items

// const GOALS = [
//   'New Materials, Components and Processes',
//   'Thermal Management',
//   'Advanced Packaging and Interconnection Technologies',
//   'Testing, Reliability and Quality Management',
//   'Process Modelling and Simulation',
//   'Environmental and Ecological Effects in Electronics Technology',
//   'Nanotechnology, Nanomaterials and Nanoelectronics',
//   'Signal Integrity and Electromagnetic Compatibility',
//   'Sensors, Actuators and Microsystems',
//   'Educational and Information Technologies in Electronics Manufacturing',
//   'Discrete and Integrated Components',
// ]

// const GoalsList = () => (
//   <StyledUL>
//     {GOALS.map((title) => (
//       <li key={title}>
//         <Text
//           color={COLORS.MAJOLICA_BLUE}
//           display="contents"
//           fontSize={['xs', 's', 'm']}
//           fontWeight={fontWeights.thin}
//         >
//           {title}
//         </Text>
//       </li>
//     ))}
//   </StyledUL>
// )
