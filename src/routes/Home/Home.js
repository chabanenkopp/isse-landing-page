import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { Element as ScrollTo } from 'react-scroll'
import SEO from 'components/atoms/seo'
import { pxToRem } from 'helpers'
import { Box, Flex } from 'components/atoms/Layout'
import { COLORS } from 'Root/constants'
import GenericPage from 'shared/pages/GenericPage'
import FloatingBadge from 'shared/FloatingBadge'
import Popup from 'components/atoms/Popup'
import ContactForm from './ContactForm'
import EstateSection from './EstateSection'
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
      <GenericPage
        fitScreenImageComponent={<EstateSection />}
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
        <Box mb={['xl', 'xl', pxToRem(100)]}>
          <LogoLineSeparator />
        </Box>
        <Flex
          flexDirection="column"
          backgroundSize={['contain', 'contain', 'cover']}
          backgroundPosition="center bottom"
          backgroundRepeat="no-repeat"
          backgroundImage={`linear-gradient(180deg, ${COLORS.WHITE}, ${COLORS.LYNX_WHITE})`}
        >
          <Box
            width={['80vw', '85vw', pxToRem(1000)]}
            mb={pxToRem(100)}
            margin="0 auto"
          >
            <Carousel />
          </Box>
          <Box mb="xl">
            <GoogleMap />
          </Box>
          <Box mt={[0, 0, 'xxl']} mb={pxToRem(150)}>
            <ContactForm />
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          {/* <Box width={[pxToRem(310), pxToRem(400), pxToRem(830)]} mb="m"> */}
          <Box width={[pxToRem(310), pxToRem(400), pxToRem(530)]} mb="l">
            <TestimonialSection />
          </Box>
        </Flex>
      </GenericPage>
    )
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
}

export default Home
