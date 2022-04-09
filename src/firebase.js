import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAFGIx6PjSEzqj9nRcd3FekVyBdVhsVWw8",
   authDomain: "clone-f6b6a.firebaseapp.com",
   projectId: "clone-f6b6a",
   storageBucket: "clone-f6b6a.appspot.com",
   messagingSenderId: "618671342551",
   appId: "1:618671342551:web:2bfa8144089852b6eb8192",
   measurementId: "G-15EF4LZGDX"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const auth = getAuth(firebaseApp);
 const db = getFirestore(firebaseApp);

 export {db, auth};