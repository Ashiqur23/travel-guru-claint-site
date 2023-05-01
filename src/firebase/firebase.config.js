// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiCWRbBtzHYYTeP5flEaqoysiCORwAKzI",
  authDomain: "travel-guru-client-site.firebaseapp.com",
  projectId: "travel-guru-client-site",
  storageBucket: "travel-guru-client-site.appspot.com",
  messagingSenderId: "604607053333",
  appId: "1:604607053333:web:ba4e9dbd9cc78118ed581c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app