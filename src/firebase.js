// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseConfigContact = {
    apiKey: "AIzaSyAisfBz-8yWzuN1mxkfxGb2c8sbJwahUhE",
    authDomain: "contact-teckosys.firebaseapp.com",
    databaseURL: "https://contact-teckosys-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contact-teckosys",
    storageBucket: "contact-teckosys.appspot.com",
    messagingSenderId: "4710640683",
    appId: "1:4710640683:web:b95ef1e40b70385adb8e6e"
};

const app = initializeApp(firebaseConfigContact);
const database = getDatabase(app);

export { app, database };+