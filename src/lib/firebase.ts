// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAySU6_moSVzRbBMUAX7BcITrFgUKvOfJc",
  authDomain: "portfolio-47b3f.firebaseapp.com",
  projectId: "portfolio-47b3f",
  storageBucket: "portfolio-47b3f.appspot.com",
  messagingSenderId: "924140165720",
  appId: "1:924140165720:web:23493a10578674e7f2c82d",
  measurementId: "G-RDBNB3Q3XS",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { analytics, logEvent };
