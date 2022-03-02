import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDiXHHVRJgSd5YDhaiYUaubJspdU-KlLIQ',
  authDomain: 'nextauthjs-yt.firebaseapp.com',
  projectId: 'nextauthjs-yt',
  storageBucket: 'nextauthjs-yt.appspot.com',
  messagingSenderId: '1046029306672',
  appId: '1:1046029306672:web:642e4d68de8ffd513a56f5',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
