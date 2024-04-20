// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsfwyB0_oXdVzYciaMlbL4F5geuZl0QZY",
  authDomain: "myecommerce-afedd.firebaseapp.com",
  projectId: "myecommerce-afedd",
  storageBucket: "myecommerce-afedd.appspot.com",
  messagingSenderId: "867516115624",
  appId: "1:867516115624:web:ccd9016d7a20bf56d1309d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
