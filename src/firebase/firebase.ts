import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJPe8_IBSX0JKeCPdJ-dLQg7o0BAkvD4Y",
  authDomain: "rivojedu-5695b.firebaseapp.com",
  projectId: "rivojedu-5695b",
  storageBucket: "rivojedu-5695b.appspot.com",
  messagingSenderId: "742179904078",
  appId: "1:742179904078:web:743c95d17672ef0b4e811f",
  measurementId: "G-QXQ2MG27BK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };