import React from 'react'
import { Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { pxToRem } from 'helpers'
import { DOWNLOAD, COLORS } from 'Root/constants'
import Logo from 'components/atoms/Logo'
import uploadImage from 'assets/images/download.svg'

const ImageDownload = () => (
  <div data-aos="fade-up">
    <Text
      textAlign="center"
      px={[pxToRem(20), pxToRem(35), '15%']}
      fontWeight="bold"
      color={COLORS.AMERICAN_PINK}
      mb="s"
    >
      Download ISSE logos in SVG and PNG formats
    </Text>
    <Flex justifyContent="center" mt="l" mb="xl">
      <Logo img={uploadImage} maxHeight={pxToRem(60)} href={DOWNLOAD.LOGOS} />
    </Flex>
  </div>
)

export default ImageDownload
