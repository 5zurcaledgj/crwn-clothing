import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCAG3KMAqgOrpQ5eDjaPOCZ7bBAR2f0M0U",
  authDomain: "crwn-clothing-39252.firebaseapp.com",
  databaseURL: "https://crwn-clothing-39252.firebaseio.com",
  projectId: "crwn-clothing-39252",
  storageBucket: "crwn-clothing-39252.appspot.com",
  messagingSenderId: "171432311133",
  appId: "1:171432311133:web:bf0ea6ab5cb74e959ad0b4",
  measurementId: "G-VZR6L1JECB"
};

// Initialize Firebase
firebase.initializeApp(config);

// Get the Auth service for the default app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Set up google authentication untility
const provider = new firebase.auth.GoogleAuthProvider(); //gives access to google auth provider class from auth object
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
