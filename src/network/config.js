import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBxueeXbxVk6VH06iPeSGE3ehyAE0tga_8",
    authDomain: "jetcake-10b27.firebaseapp.com",
    databaseURL: "https://jetcake-10b27.firebaseio.com",
    projectId: "jetcake-10b27",
    storageBucket: "jetcake-10b27.appspot.com",
    messagingSenderId: "743915895677",
    appId: "1:743915895677:web:051cc041a8854b9d1eaa14",
    measurementId: "G-GMX35E0WKL"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;