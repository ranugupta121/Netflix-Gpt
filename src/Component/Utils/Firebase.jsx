// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPhrVzTroDQpbyMD9NKxLMR76ApB5mWxA",
  authDomain: "netflix-gpt-2dfc2.firebaseapp.com",
  projectId: "netflix-gpt-2dfc2",
  storageBucket: "netflix-gpt-2dfc2.firebasestorage.app",
  messagingSenderId: "796137626016",
  appId: "1:796137626016:web:8840bf1d86a2ca39dd6cc5",
  measurementId: "G-NX52ZS0RKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()