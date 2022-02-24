import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDR_OJ9L_sT7nf-EZsgk1_nh6SE3wObaF4",
  authDomain: "linkedinclone-9a0b1.firebaseapp.com",
  projectId: "linkedinclone-9a0b1",
  storageBucket: "linkedinclone-9a0b1.appspot.com",
  messagingSenderId: "305542009124",
  appId: "1:305542009124:web:a48fd2dd407d1412c6a3b1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
