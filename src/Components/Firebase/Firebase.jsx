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

export default db;

// import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyBNy5kMpF9rTNagrNONpjfZ4aqP_cWriYo",
//   authDomain: "covidhelper-880fb.firebaseapp.com",
//   projectId: "covidhelper-880fb",
//   storageBucket: "covidhelper-880fb.appspot.com",
//   messagingSenderId: "741532054854",
//   appId: "1:741532054854:web:e765de86854e68b56ca147",
//   measurementId: "G-PWMRPWXFC6",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// export default db;
