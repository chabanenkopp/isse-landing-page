import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { Element as ScrollTo } from 'react-scroll'
import { rem } from 'polished'
import SEO from 'components/atoms/seo'
import { fontWeights } from 'Theme'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'Root/constants'
import { fullWidthStyle, maxWidthStyle } from 'components/atoms/mixins'
import GenericPage from 'shared/pages/GenericPage'
import FloatingBadge from 'shared/FloatingBadge'
import Popup from 'components/atoms/Popup'
import IconText from 'components/molecules/IconText'
import mapIcon from 'assets/images/map-icon.svg'
import program from 'assets/pdf/program.pdf'
import Link from 'components/atoms/Link'
import MobileMenuProvider from 'MobileMenuContext'
import ContactForm from './ContactForm'
import WavesSection from './WavesSection'
import TestimonialSection from './TestimonialSection'
import BasicInformation from './BasicInformation'
import LogoLineSeparator from './LogoLineSeparator'
import PriceList from './PriceList'
import PaymentDetails from './PaymentDetails'
import Carousel from './Carousel'
import GoogleMap from './GoogleMap'
import RentFormSlider from './RentFormSlider'

const POPUP_ADD_TEXT = `
PSST! WE ARE HAVING A SPECIAL EVENT SOON! DON'T MISS IT!
`
const BUTTON_TEXT = `GET REGISTERED`

const IS_INFO_POPUP_SHOWN_BEFORE = 'isInfoPopupShownBefore'
const COOKIE_EXPIRATION_DAYS = 365

const StyledBox = styled(Box)`
  ${fullWidthStyle};
`

const StyledFlex = styled(Flex)`
  ${maxWidthStyle};
`

class Home extends Component {
  state = {
    isPopupVisible: false,
  }
  componentDidMount = async () => {
    const isInfoPopupShownBefore = await Cookies.get(IS_INFO_POPUP_SHOWN_BEFORE)
    this.setState({ isPopupVisible: !isInfoPopupShownBefore })
  }

  handleShowPopup = () => {
    Cookies.set(IS_INFO_POPUP_SHOWN_BEFORE, true, {
      expires: COOKIE_EXPIRATION_DAYS,
    })
    this.setState({ isPopupVisible: false })
  }

  render() {
    const { isPopupVisible } = this.state
    const {
      location: { pathname },
    } = this.props
    return (
      <MobileMenuProvider>
        <GenericPage
          fitScreenImageComponent={<WavesSection />}
          pathName={pathname}
        >
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <FloatingBadge />
          <Popup
            isVisible={isPopupVisible}
            onClose={this.handleShowPopup}
            isInfo
            message={POPUP_ADD_TEXT}
            buttonText={BUTTON_TEXT}
          />
          <Box>
            <BasicInformation />
          </Box>
          <Box
            data-aos="fade-up"
            mt={{ mobile: 'l', desktop: 'xl' }}
            mb={{
              mobile: 'l',
              tablet: 'xl',
              desktop: 'xxl',
            }}
          >
            <Text
              textAlign="center"
              color={COLORS.MAJOLICA_BLUE}
              fontWeight={fontWeights.thin}
              fontSize="xl"
              mb="l"
            >
              Learn More About the Conference
            </Text>
            <Link as="a" href={program}>
              <IconText src={mapIcon} label="Conference program" m="0 auto" />
            </Link>
          </Box>
          <Box my="xl">
            <ScrollTo name="price-list">
              <PriceList />
            </ScrollTo>
          </Box>
          <Box mb="xl">
            <PaymentDetails />
          </Box>
          <Box my="xxl">
            <ScrollTo name="rent-form">
              <RentFormSlider />
            </ScrollTo>
          </Box>
          <Box mb={{ mobile: 'xl', desktop: rem(100) }}>
            <LogoLineSeparator />
          </Box>
          <StyledBox
            backgroundImage={`linear-gradient(180deg, ${COLORS.WHITE}, ${COLORS.LYNX_WHITE})`}
          >
            <StyledFlex
              flexDirection="column"
              backgroundSize={{ mobile: 'contain', desktop: 'cover' }}
              backgroundPosition="center bottom"
              backgroundRepeat="no-repeat"
            >
              <Carousel />
              <Box mb="xl">
                <GoogleMap />
              </Box>
              <Box mt={{ mobile: 0, desktop: 'xxl' }} mb={rem(150)}>
                <ContactForm />
              </Box>
            </StyledFlex>
          </StyledBox>
          <Flex justifyContent="center" alignItems="center">
            <TestimonialSection />
          </Flex>
        </GenericPage>
      </MobileMenuProvider>
    )
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Home
