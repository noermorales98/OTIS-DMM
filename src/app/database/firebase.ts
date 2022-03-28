import firebase from 'firebase/compat';
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHUV3MI7gS7C68EF_cMmgMxczJ8Qf2wuo",
  authDomain: "otis-db.firebaseapp.com",
  databaseURL: "https://otis-db-default-rtdb.firebaseio.com",
  projectId: "otis-db",
  storageBucket: "otis-db.appspot.com",
  messagingSenderId: "600746570693",
  appId: "1:600746570693:web:02c2eba53ab57756ed51ac",
  measurementId: "G-3PJBN3CRSN"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {firebase, db};