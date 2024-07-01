// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP9CWhFLqNSQBbBfCNJV5VAVcGD1YNYck",
  authDomain: "self-learning-75841.firebaseapp.com",
  projectId: "self-learning-75841",
  storageBucket: "self-learning-75841.appspot.com",
  messagingSenderId: "662858601727",
  appId: "1:662858601727:web:d62eb9e29086966aaa68ca",
  measurementId: "G-S6YBXJ5V4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);