import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDFwq8gVc80vR9Y__xaUbP5oRpJ2m0ZHDY",
  authDomain: "shoppingcart-47445.firebaseapp.com",
  projectId: "shoppingcart-47445",
  storageBucket: "shoppingcart-47445.firebasestorage.app",
  messagingSenderId: "585577608032",
  appId: "1:585577608032:web:a8a2f930f6634c98936405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}
export default app