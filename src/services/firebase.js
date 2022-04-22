import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCp3ECJHSBDbJWqqQd6zdWvybQNFa6Gsk8",
    authDomain: "coderhouse-ecommerce-6384a.firebaseapp.com",
    projectId: "coderhouse-ecommerce-6384a",
    storageBucket: "coderhouse-ecommerce-6384a.appspot.com",
    messagingSenderId: "798994365681",
    appId: "1:798994365681:web:82ec543af96a21da2fbd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);