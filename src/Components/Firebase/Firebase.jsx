import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjIrLH_6jbCOL3yNg8EnrRUWIM85PPrmY",
    authDomain: "covidhelper-3e894.firebaseapp.com",
    projectId: "covidhelper-3e894",
    storageBucket: "covidhelper-3e894.appspot.com",
    messagingSenderId: "342848145626",
    appId: "1:342848145626:web:4c1cbe4b13a0bf0a7cfde3",
    measurementId: "G-DRE3XCG7RX"
});

const db = firebaseApp.firestore();

export { db };
