import React from 'react'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import { Box, Flex } from 'components/atoms/Layout'
import { pxToRem } from 'helpers'
import Items from './Items'

const { ObjectivesList, TopicsList, StructureList } = Items

const List = () => (
  <Flex flexDirection="column" maxWidth={pxToRem(800)} m="0 auto">
    <Box data-aos="fade-up" mt="xl">
      <UnfoldTextBar
        title="Conference objectives"
        component={<ObjectivesList />}
      />
    </Box>
    <Box data-aos="fade-up" mt="l">
      <UnfoldTextBar title="Topics of ISSE" component={<TopicsList />} />
    </Box>
    <Box data-aos="fade-up" mt="l">
      <UnfoldTextBar
        title="Conference structure"
        component={<StructureList />}
      />
    </Box>
  </Flex>
)

export default List
