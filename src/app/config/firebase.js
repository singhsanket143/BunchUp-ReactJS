import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY, // The firebase api key
  authDomain: "bunchup-66c7c.firebaseapp.com", // Domain for the BunchUp firebase project
  databaseURL: process.env.REACT_FIREBASE_DATABASE_URL, // The corresponding Database URL for firebase and firestore
  projectId: "bunchup-66c7c", // Project ID for bunch up project
  storageBucket: "",
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID // The overall application ID
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
