// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj-ftTlK9knUnnP7dkcSB4lU2FG4vlkyQ",
  authDomain: "react-cursos-fed26.firebaseapp.com",
  projectId: "react-cursos-fed26",
  storageBucket: "react-cursos-fed26.appspot.com",
  messagingSenderId: "1066870883628",
  appId: "1:1066870883628:web:06eece45637248367ed889"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp);