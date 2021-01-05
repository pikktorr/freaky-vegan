// This import loads the firebase namespace along with all its type information.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNFcXf8844f5mBrJe3LHrRRHsDlYcktrM",
  authDomain: "freaky-vegan.firebaseapp.com",
  projectId: "freaky-vegan",
  storageBucket: "freaky-vegan.appspot.com",
  messagingSenderId: "821334073328",
  appId: "1:821334073328:web:333113da57abb084440735",
  measurementId: "G-HNFJ6EVF1C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // STORE USER AFTER AUTH IN DATABASE

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // check if there's data, if not, create user from userAuth.data()
  // without this check it writes the data over and over
  if (!snapShot.exists) {
    const { displayName, email } = userAuth; // userAuth.displayName, userAuth.email
    const createdAt = new Date(); // creates new date

    // async store to database, have to use await
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
