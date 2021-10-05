import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrIzHc4FncrjYAzbZeGqkSST5Y0rK_eaY",
  authDomain: "facebook-clone-13aaa.firebaseapp.com",
  projectId: "facebook-clone-13aaa",
  storageBucket: "facebook-clone-13aaa.appspot.com",
  messagingSenderId: "446086708579",
  appId: "1:446086708579:web:414e62fd7a91ece3afa756",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const signInPopup = signInWithPopup;
const provider = new GoogleAuthProvider();

export { signInPopup, auth, provider };
export default db;
