// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyBNUTp1BbpyPMu1Q0pikwRM8DdjwZrNXbs',
   authDomain: 'twitter-clone-f311b.firebaseapp.com',
   projectId: 'twitter-clone-f311b',
   storageBucket: 'twitter-clone-f311b.appspot.com',
   messagingSenderId: '383509942315',
   appId: '1:383509942315:web:f95819bc053cde6b2eda6e',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
