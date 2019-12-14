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

export const createUserProfileDocumnet = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating a user", error);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshopToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Get the Auth service for the default app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Set up google authentication untility
export const googleProvider = new firebase.auth.GoogleAuthProvider(); //gives access to google auth provider class from auth object
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
