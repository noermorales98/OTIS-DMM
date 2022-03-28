//firebase es una base de datos clave-valor
import firebase from 'firebase/compat';
import "firebase/firestore";
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
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


// export default {firebase, db};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };