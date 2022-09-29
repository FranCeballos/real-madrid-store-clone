// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD42HZ2Zwrddg02QdUHQx0rYUnRPidkkR8",
  authDomain: "realmadridstore-clone.firebaseapp.com",
  projectId: "realmadridstore-clone",
  storageBucket: "realmadridstore-clone.appspot.com",
  messagingSenderId: "113005399844",
  appId: "1:113005399844:web:32bca45ece0207aae9edb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
