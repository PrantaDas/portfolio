// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCca_a42O6Ka12CQVWKfeXZZaqVNbkiqWw",
  authDomain: "my-portfolio-1c4ab.firebaseapp.com",
  projectId: "my-portfolio-1c4ab",
  storageBucket: "my-portfolio-1c4ab.appspot.com",
  messagingSenderId: "136189701726",
  appId: "1:136189701726:web:f030ca1d8d4c7871f6cecf",
  measurementId: "G-S1R95Z9YBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const analytics = getAnalytics(app);

export default auth;