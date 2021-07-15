import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCl-AI3tw_1lfEygALckc8I-jD2MdU2rfE",
  authDomain: "facebook-messenger-72aaf.firebaseapp.com",
  projectId: "facebook-messenger-72aaf",
  storageBucket: "facebook-messenger-72aaf.appspot.com",
  messagingSenderId: "285213923644",
  appId: "1:285213923644:web:39de3872f79fe19ead2639",
  measurementId: "G-KR61CPXNZS",
});

const db = firebaseApp.firestore();

export default db;
