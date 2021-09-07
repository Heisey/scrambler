import firebase from 'firebase'

const generateFirebaseConfig = () => {
  if (!process.env.REACT_APP_FIREBASE_API_KEY) {
    console.log('Firebase api key in missing')
    console.log('update env variables')
  }

  if (!process.env.REACT_APP_FIREBASE_AUTH_DOMAIN) {
    console.log('Firebase auth domain is missing')
    console.log('update env variables')
  }

  if (!process.env.REACT_APP_FIREBASE_PROJECT_ID) {
    console.log('Firebase project id is missing')
    console.log('update env variables')
  }

  if (!process.env.REACT_APP_FIREBASE_STORAGE_BUCKET) {
    console.log('Firebase storage bucked is missing')
    console.log('update env variables')
  }

  if (!process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID) {
    console.log('Firebase messaging sender id is missing')
    console.log('update env variables')
  }

  if (!process.env.REACT_APP_FIREBASE_APP_ID) {
    console.log('Firebase app id is missing')
    console.log('update env variables')
  }

  return {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  }
}

firebase.initializeApp(generateFirebaseConfig())

if (!firebase.app.length) {
  firebase.initializeApp(generateFirebaseConfig())
}

const auth = firebase.auth()

export default auth