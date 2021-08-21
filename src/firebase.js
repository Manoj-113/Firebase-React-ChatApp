import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDvJXRDuxc-wVApcrdnyRGWWmAB0yFEgo0",
    authDomain: "react-firebase-chatapp-cb3c1.firebaseapp.com",
    projectId: "react-firebase-chatapp-cb3c1",
    storageBucket: "react-firebase-chatapp-cb3c1.appspot.com",
    messagingSenderId: "1017709138000",
    appId: "1:1017709138000:web:81d7f0246f4900aa344155",
    measurementId: "G-272KECHE62"
})

const db = firebaseApp.firestore {}

const auth = firebase.auth {}

export {db, auth}

