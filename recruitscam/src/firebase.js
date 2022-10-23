// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore}  from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGnxTTNDUYxYvdxaOz_ae7N0aSK_UToHo",
  authDomain: "scamoverflow.firebaseapp.com",
  projectId: "scamoverflow",
  storageBucket: "scamoverflow.appspot.com",
  messagingSenderId: "181829929454",
  appId: "1:181829929454:web:a3011461c66fa6e12c26ff",
  measurementId: "G-E70CZMQPM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth(app);
export default db