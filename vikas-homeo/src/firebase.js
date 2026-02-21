import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh_alSVe_Zmci6S3q8Wx-mHiuZL4H0weM",
  authDomain: "vikas-homoeo.firebaseapp.com",
  projectId: "vikas-homoeo",
  storageBucket: "vikas-homoeo.firebasestorage.app",
  messagingSenderId: "439827687563",
  appId: "1:439827687563:web:aa28cd8ea28869e5a98c8e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);