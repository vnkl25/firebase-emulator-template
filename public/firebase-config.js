// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, connectStorageEmulator } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8HBya9tBRz2rOeyeEYH7tXiEviFFbgKo",
  authDomain: "fir-emulators-demo-e565e.firebaseapp.com",
  projectId: "fir-emulators-demo-e565e",
  storageBucket: "fir-emulators-demo-e565e.firebasestorage.app",
  messagingSenderId: "255785235969",
  appId: "1:255785235969:web:12ebb2ffc05764b3a7f200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Only connect to emulators when running locally
if (location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8081);
  connectStorageEmulator(storage, "localhost", 9199);

}

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
export { db, doc, setDoc, collection, getDocs };
export { storage, ref, uploadBytes, getDownloadURL, listAll } 

