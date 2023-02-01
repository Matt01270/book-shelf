// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC8tgnue-xv7v6Luk538eX50u6s5S4beko",
  authDomain: "bookshelf-8e0ce.firebaseapp.com",
  projectId: "bookshelf-8e0ce",
  storageBucket: "bookshelf-8e0ce.appspot.com",
  messagingSenderId: "223974073156",
  appId: "1:223974073156:web:98b22d95fccb2340bf6d11"

};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig); 

export default firebase;