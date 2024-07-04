// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNI3tJf66BnW6Te4yf7A2Fi-wPv_-Co9g",
  authDomain: "self-learning-faa31.firebaseapp.com",
  projectId: "self-learning-faa31",
  storageBucket: "self-learning-faa31.appspot.com",
  messagingSenderId: "787765161139",
  appId: "1:787765161139:web:72b4290710eb89335d94c6",
  measurementId: "G-Y8MH4W4KVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
