import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let config = {
  apiKey: "AIzaSyC5JtvcQSOjgusn5q2EE1nmfzgG5Gqxvtw",
  authDomain: "ecommerce-crwn-clothing.firebaseapp.com",
  projectId: "ecommerce-crwn-clothing",
  storageBucket: "ecommerce-crwn-clothing.appspot.com",
  messagingSenderId: "192002978198",
  appId: "1:192002978198:web:5bc14e3f29384d0e69adb7",
  measurementId: "G-50VVX4TYWE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additiondalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additiondalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;
