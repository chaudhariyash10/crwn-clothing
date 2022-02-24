import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBdup1_waZI2qgvhDMYGLCrS3HPJEzfuAo",
  authDomain: "crwn-db-68a27.firebaseapp.com",
  projectId: "crwn-db-68a27",
  storageBucket: "crwn-db-68a27.appspot.com",
  messagingSenderId: "608365174070",
  appId: "1:608365174070:web:43d17a0b0980ab78e1e797",
  measurementId: "G-WYZDY7MC19"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get();


  if (!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error Creating USer", error.message);
    }  
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
