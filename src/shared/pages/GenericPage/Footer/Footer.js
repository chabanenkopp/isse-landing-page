import React from 'react'
import styled from 'styled-components'
import { Element as ScrollTo } from 'react-scroll'
import { rem } from 'polished'
import { theme } from 'Theme'
import { LINKS, TEL_NUMBER, COLORS, CONTACT } from 'Root/constants'
import { Box, Grid } from 'components/atoms/Layout'
import logo from 'assets/images/logo-line.svg'
import ieee from 'assets/images/ieee.svg'
import fei from 'assets/images/fei.svg'
import privacyPolicy from 'assets/pdf/privacy_policy.pdf'
import ses from 'assets/images/ses.gif'
import ceelabs from 'assets/images/ceelabs.png'
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
          justifyItems={{ mobile: 'none', desktop: 'center' }}
          gridGap={{ mobile: 'xl', desktop: 'xxl' }}
          mt="xl"
          mb="l"
        >
          <Box data-aos="fade-up" zIndex="-1">
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
            <Title>Our partners</Title>
            <Logo img={ieee} maxHeight={rem(25)} href={LINKS.IEEE} />
            <Box mt="m">
              <Logo img={fei} maxHeight={rem(30)} href={LINKS.FEI} />
            </Box>
            <Box mt="s">
              <Logo img={ceelabs} maxHeight={rem(26)} href={LINKS.CEELABS} />
            </Box>
            <Box mt="m">
              <Logo img={ses} maxHeight={rem(40)} href={LINKS.SES} />
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
