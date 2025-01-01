// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1NWSbaS3eWdhQWCG3eKbdG1j2lLEt6sE",
  authDomain: "visa-1a4d7.firebaseapp.com",
  projectId: "visa-1a4d7",
  storageBucket: "visa-1a4d7.firebasestorage.app",
  messagingSenderId: "491013209755",
  appId: "1:491013209755:web:c4bd5c4225d8bd49f7503e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;