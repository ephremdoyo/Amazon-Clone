// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyE_dhpXXtWrCKhWTivtMgeDge5bMGWRE",
  authDomain: "clone-109d8.firebaseapp.com",
  projectId: "clone-109d8",
  storageBucket: "clone-109d8.appspot.com",
  messagingSenderId: "979064994086",
  appId: "1:979064994086:web:fefb6cce5c2a76a33f29e7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = app.firestore()