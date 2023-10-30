// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSYH3dM1nJxrnh4m06soulp2Ib7z_CKZs",
  authDomain: "login-signup-firebase-auth.firebaseapp.com",
  projectId: "login-signup-firebase-auth",
  storageBucket: "login-signup-firebase-auth.appspot.com",
  messagingSenderId: "728314461515",
  appId: "1:728314461515:web:506b8b27cb54104d8b3cce",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
