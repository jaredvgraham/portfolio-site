// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAySU6_moSVzRbBMUAX7BcITrFgUKvOfJc",
  authDomain: "portfolio-47b3f.firebaseapp.com",
  projectId: "portfolio-47b3f",
  storageBucket: "portfolio-47b3f.appspot.com",
  messagingSenderId: "924140165720",
  appId: "1:924140165720:web:23493a10578674e7f2c82d",
  measurementId: "G-RDBNB3Q3XS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics };
