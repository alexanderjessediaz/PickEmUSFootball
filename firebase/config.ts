import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.PICK_EM_US_FOOTBALL_FIREBASE_API_KEY,
  authDomain: process.env.PICK_EM_US_FOOTBALL_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.PICK_EM_US_FOOTBALL_FIREBASE_PROJECT_ID,
  storageBucket: process.env.PICK_EM_US_FOOTBALL_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.PICK_EM_US_FOOTBALL_FIREBASE_MEASSAGING_SENDER_ID,
  appId: process.env.PICK_EM_US_FOOTBALL_FIREBASE_APP_ID,
  measurementId: process.env.PICK_EM_US_FOOTBALL_FIREBASE_MEASUREMENT_ID,
});

export default firebase;
