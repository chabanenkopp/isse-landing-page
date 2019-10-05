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
  WHITE_SMOKE: 'whitesmoke',
}

export const REGEX = {
  NUM_INPUT_VAL: /^\d+$/,
  NUM_COMMA_SEPARATOR: /(\d)(?=(\d{3})+(?!\d))/g,
  EMAIL_VAL: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
  TEL_VAL: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
}

export const TEL_NUMBER = '1-866-289-6868'

export const LINKS = {
  CRESCENT_HEIGHTS_HOME: 'https://www.crescentheights.com/',
  CRESCENT_HEIGHTS_PRESS: 'https://www.crescentheights.com/about/press',
}

export const FIREBASE_COLLECTIONS = {
  USERS: 'users',
}

export const PATHS = {
  HOME: '/',
  OVERVIEW: '/overview',
  SPONSORS: '/sponsors',
}
