import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "bunchup-66c7c.firebaseapp.com",
  databaseURL: process.env.REACT_FIREBASE_DATABASE_URL,
  projectId: "bunchup-66c7c",
  storageBucket: "",
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
