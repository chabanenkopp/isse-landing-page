import React from 'react'
import styled from 'styled-components'
import { Element as ScrollTo } from 'react-scroll'
import { theme } from 'Theme'
import { pxToRem } from 'helpers'
import { LINKS, TEL_NUMBER, COLORS, CONTACT } from 'Root/constants'
import { Box, Grid } from 'components/atoms/Layout'
import logo from 'assets/images/logo-line.svg'
import ieee from 'assets/images/ieee.svg'
import fei from 'assets/images/fei.svg'
import privacyPolicy from 'assets/pdf/privacy_policy.pdf'
import SocialIconsLinks from './SocialIconsLinks'
import Logo from './Logo'
import Row from './Row'
import Title from './Title'

const FooterBorder = styled(Box)`
  border-top: solid 2px ${COLORS.WHITE_SMOKE};
`

const Footer = () => (
  <ScrollTo name="contact">
    <FooterBorder>
      <Box maxWidth="1400px" px="l" m="0 auto">
        <Grid
          gridTemplateColumns={`repeat(
    auto-fit,
    minmax(${theme.space.xxl}, 1fr)
  )`}
          justifyItems={['none', 'none', 'center']}
          gridGap={['xl', 'xl', 'xxl']}
          mt="xl"
          mb="xl"
        >
          <Box data-aos="fade-up">
            <Logo img={logo} />
            <Row as="a" href={privacyPolicy}>
              Privacy Policy
            </Row>
            <Row>ISSE 2020 is organised by TUKE</Row>
          </Box>
          <Box data-aos="fade-up">
            <Title>Contact us on</Title>
            <Row>Kosice, Slovakia</Row>
            <Row>Letna 9, 04200</Row>
            <Row>{`Email: ${CONTACT.EMAIL}`}</Row>
            <Row as="a" href={`tel:${TEL_NUMBER}`}>
              {`tel: ${TEL_NUMBER}`}
            </Row>
          </Box>
          <Box data-aos="fade-up">
            <Title>Partners</Title>

            <Logo img={fei} maxHeight={pxToRem(30)} href={LINKS.FEI} />
            <Box mt="m">
              <Logo img={ieee} maxHeight={pxToRem(25)} href={LINKS.IEEE} />
            </Box>
          </Box>
          <Box data-aos="fade-up">
            <Title>Social media</Title>
            <SocialIconsLinks />
          </Box>
        </Grid>
      </Box>
    </FooterBorder>
  </ScrollTo>
)

export default Footer
