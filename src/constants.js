import { rem } from 'polished'

export const COLORS = {
  LEAD: '#202020',
  SHADOWED_STEEL: '#4A4A4A',
  CODEX_GREY: '#9c9c9c',
  WHITE: '#fff',
  ARAGON_GREEN: '#3BB47F',
  FROSTED_GLASS: '#EAf0f0',
  ENAMELLED_DRAGON: '#49C68F',
  NIGHT_FOG: '#321760',
  BUTTERSCOTCH: '#FFB44C',
  DARK_SAPHIRE: '#162667',
  ENGLISH_MANOR: '#7283A9',
  EVERLASTING_ICE: '#edf8f7',
  ROCK_BLUE: '#9ba7c1',
  LUXURY: '#7e8eb0',
  RED_ORANGE_JUICE: '#FB5347',
  GREY_OF_DARKNESS: '#A1A1A1',
  POT_BLACK: '#171616',
  DEUTZIA_WHITE: '#f9fdfd',
  LYNX_WHITE: '#f7f6f6',
  ANCHORMAN: '#2c333d',
  AMERICAN_PINK: '#ff9595',
  DRESS_UP: '#fcc7bd',
  TINT_OF_TURQUOISE: '#41bfb3',
  TURQUOISE_CHALK: '#0becd6',
  FLAX_FLOWER_BLUE: '#479ad9',
  ATHENA_BLUE: '#65d9f2',
  MAJOLICA_BLUE: '#244254',
  BLAZE: '#FF9051',
  SELJUK_BLUE: '#4488ee',
  COTTON_BALL: '#f1f7fc',
  DAPHNE: '#025b98',
  DISTANT_HORIZON: '#f3fbff',
  WHITE_SMOKE: 'whitesmoke',
  BLACK: '000000',
  KACEYS_PINK: '#dd4377',
  SCAMPI: '#7660A0' /* Brand Color */,
  VANISHING: '#230F4E' /* Dark Blue */,
  PALE_ORCHID: '#DFDBE7',
  RIVER_BED: '#465061',
  BLUE_ZODIAC: '#0F264E',
  DAYBREAK: '#8F85A5' /* 60 Grey */,
  VIOLET_BOUQUET: '#BBB2CC' /* 20 Grey */,
  ROMAN_PURPLE: '#4F4661' /* 80 Grey */,
  EXPLORATION_GREEN: '#58A55D',
}

export const REGEX = {
  NUM_INPUT_VAL: /^\d+$/,
  NUM_COMMA_SEPARATOR: /(\d)(?=(\d{3})+(?!\d))/g,
  EMAIL_VAL: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
  TEL_VAL: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
}

export const TEL_NUMBER = `+421 55 6023194`

export const LINKS = {
  IEEE: `https://www.ieee.org`,
  FEI: `http://www.fei.tuke.sk/en`,
  SES: 'http://www.vus.sk/ses/',
  EPS: 'https://eps.ieee.org/conferences.html',
  CEELABS: 'https://ceelabs.com/multimedia/',
  GITHUB: 'https://github.com/chabanenkopp',
  GOOGLE_MAPS: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.1013916855!2d19.578422315643678!3d48.970594300753866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47157671558baeb5%3A0xdbd7820f6021b391!2sHotel%20Grand%20Jasn%C3%A1!5e0!3m2!1sen!2ssk!4v1571742656636!5m2!1sen!2ssk`,
}

export const FIREBASE_COLLECTIONS = {
  USERS: 'users',
}

export const PATHS = {
  HOME: '/',
  OVERVIEW: '/overview',
  SPONSORS: '/sponsors',
  COMMITTEES: '/committees',
  AUTHORS: '/authors',
  RESULTS: '/results',
  HISTORY: '/history',
}

export const DOWNLOAD = {
  REG_FORM: `https://drive.google.com/uc?authuser=0&id=1IQut2XPxboeP0bPvViU085LJC1cgYVS1&export=download`,
  ABSTR_FORM: `https://drive.google.com/uc?authuser=0&id=1wYJmadjtwDBgJpPffmi0WN9mZHUuzwWU&export=download`,
  PAPER_FORM: `https://drive.google.com/u/0/uc?id=1ZaLvKGy6kWU4fpeW5bSjAJryBH2dDPyA&export=download`,
  REG_PAPER_FORM: `https://drive.google.com/u/2/uc?id=1jYEIeWyGoY8N4Vg_5wBqGbIQMcyFInbi&export=download`,
  LOGOS: `https://drive.google.com/u/0/uc?id=13-stiQ5DX6xj4m61r_7T9cpmxoSCJf-m&export=download`,
}

export const CONTACT = {
  EMAIL: 'isse@fei.tuke.sk',
}

const SIZE = {
  MOBILE: '375px',
  TABLET: '850px',
  DESKTOP: '850px',
}

export const DEVICE = {
  MOBILE: `(max-width: ${SIZE.MOBILE})`,
  TABLET: `(max-width: ${SIZE.TABLET})`,
  DESKTOP: `(min-width: ${SIZE.TABLET})`,
}

// const REACT_APP_GOOGLE_KEY = 'AIzaSyBlttIW61oVIPbwa3iThGgNy6eI0PvyMZ0'
const REACT_APP_GOOGLE_KEY = 'AIzaSyBlttIW61oVIPbwa3iThGgNy6eI0PvyMZ0'

export const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`

export const TOPBAR_HEIGHT = rem('60px')

export const MAP_SETTINGS = {
  DEFAULT_MAP_OPTIONS: {
    scrollwheel: false,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  },
  DEFAULT_CENTER: { lat: 57, lng: 20 },
  DEFAULT_ZOOM: 4,
  MARKER_SIZE: {
    EXTRA_SMALL: 10,
    SMALL: 30,
    MEDIUM: 40,
  },
  PIXEL_OFFSET: {
    MARKER: {
      X: 0,
      Y: -35,
    },
    LINE: {
      X: 0,
      Y: 20,
    },
  },
  POLYLINE_OPTIONS: {
    DASHED: {
      geodesic: true,
      strokeOpacity: 0,
      strokeWeight: 2,
      strokeColor: COLORS.DAYBREAK,
      icons: [
        {
          icon: {
            path: 'M 0,0 0,1',
            strokeOpacity: 1,
            strokeWeight: 2,
            scale: 3,
          },
          offset: '0',
          repeat: '10px',
        },
      ],
    },
    REGULAR: {
      geodesic: true,
      strokeOpacity: 1,
      strokeWeight: 2,
      strokeColor: COLORS.EXPLORATION_GREEN,
    },
  },
  DIRECTIONS_OPTIONS: { suppressMarkers: true, preserveViewport: true },
}
