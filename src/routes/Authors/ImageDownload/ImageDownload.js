import React from 'react'
import { rem } from 'polished'
import { Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { DOWNLOAD, COLORS } from 'Root/constants'
import Logo from 'components/atoms/Logo'
import uploadImage from 'assets/images/download.svg'

const ImageDownload = () => (
  <div data-aos="fade-up">
    <Text
      textAlign="center"
      fontWeight="bold"
      color={COLORS.AMERICAN_PINK}
      mb="s"
    >
      Download ISSE logos in SVG and PNG formats
    </Text>
    <Flex justifyContent="center" mt="l" mb="xl">
      <Logo img={uploadImage} maxHeight={rem(60)} href={DOWNLOAD.LOGOS} />
    </Flex>
  </div>
)

export default ImageDownload
