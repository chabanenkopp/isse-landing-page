const firebase = require('firebase')

firebase.initializeApp({
  apiKey: 'AIzaSyC3qS8L1VHlsgswNYuAWA2w9SZBfx7hN38',
  authDomain: 'isse2020-d8b33.firebaseapp.com',
  projectId: 'isse2020-d8b33',
})

export const db = firebase.firestore()
