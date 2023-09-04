// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA6lDeBQWLLlbnNlGco9aw3ixwgLIBq_k",
  authDomain: "tasklist-firebase-59b36.firebaseapp.com",
  projectId: "tasklist-firebase-59b36",
  storageBucket: "tasklist-firebase-59b36.appspot.com",
  messagingSenderId: "701225566186",
  appId: "1:701225566186:web:e29f90672501eed6cbfc93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Inicializar Firestore
export const db = getFirestore()

// Initialize Firebase
// let app;
// if (process.env.NODE_ENV === 'production') {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = initializeApp(developmentFirebaseConfig);
// }
// // Inicializar Firestore
// const db = getFirestore();

// export {
//   app,
//   db
// }
