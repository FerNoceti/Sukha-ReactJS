import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Your web app's Firebase configuration
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