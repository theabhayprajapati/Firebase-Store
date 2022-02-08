// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFyN-Z7i7G5U6XdCORU9Z5WmV_Kj4FNyY",
    authDomain: "next-store-854e3.firebaseapp.com",
    projectId: "next-store-854e3",
    storageBucket: "next-store-854e3.appspot.com",
    messagingSenderId: "618716636439",
    appId: "1:618716636439:web:4d1416b6f63bd01a00c352"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const storage = getStorage()

export { app, db, storage }
