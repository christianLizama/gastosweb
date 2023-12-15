// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXC_mIp9lcTFF8wYRUBTv2tDe6ABCMcYw",
  authDomain: "gastosweb-c4e3c.firebaseapp.com",
  projectId: "gastosweb-c4e3c",
  storageBucket: "gastosweb-c4e3c.appspot.com",
  messagingSenderId: "986908165462",
  appId: "1:986908165462:web:df4a7102d00834dae982f7",
  measurementId: "G-8E4R3M5WPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics}