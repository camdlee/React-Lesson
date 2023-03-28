
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwLR-xJTgOwqlm5BpUXAHYlcdAyjm0kw4",
  authDomain: "thieves-110-72cfa.firebaseapp.com",
  projectId: "thieves-110-72cfa",
  storageBucket: "thieves-110-72cfa.appspot.com",
  messagingSenderId: "334513263008",
  appId: "1:334513263008:web:f13bec4d33d1c1329454c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);