import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCOkJwWAByd9gNXz8r3xymfa_iBFuityo",
  authDomain: "insrram-clone.firebaseapp.com",
  projectId: "insrram-clone",
  storageBucket: "insrram-clone.appspot.com",
  messagingSenderId: "313318876464",
  appId: "1:313318876464:web:8f6e4b75da7d6c7ead14f5",
  measurementId: "G-M4MTBNDWK8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, storage, auth, provider };
