import dotenv from 'dotenv';
import { initializeApp, FirebaseError } from "firebase/app";
import {getAuth, signInWithEmailAndPassword}from 'firebase/auth';


// carregar variabeis de ambiente
dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyAlF7iX38cRxAT5ILG3oF3TavN_QCiDJIc",
    authDomain: "prm-2022-jocemir.firebaseapp.com",
    projectId: "prm-2022-jocemir",
    storageBucket: "prm-2022-jocemir.appspot.com",
    messagingSenderId: "906780260754",
    appId: "1:906780260754:web:aff26b995860ea1bad294b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);

//autenticação

const signInAdmin = (email:string, password: string)=>(signInWithEmailAndPassword(getAuth(),email,password))

export {FirebaseError, signInAdmin}
