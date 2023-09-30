
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAX_ULcNde7XSNEiZAaVKyFJaiZM6eH-As",
    authDomain: "fir-a7bcb.firebaseapp.com",
    projectId: "fir-a7bcb",
    storageBucket: "fir-a7bcb.appspot.com",
    messagingSenderId: "1089937018998",
    appId: "1:1089937018998:web:f486670e548b50b21f0f57",
    measurementId: "G-1V7M4Q2MJE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};