
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBn5X-iEleXojy5Q6UKuW4wxbSMe60Y09w",
  authDomain: "react-todo-f47a1.firebaseapp.com",
  projectId: "react-todo-f47a1",
  storageBucket: "react-todo-f47a1.appspot.com",
  messagingSenderId: "109521050394",
  appId: "1:109521050394:web:e4476a8b84704397abaaa3",
  measurementId: "G-J4VPSXCSM7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);


