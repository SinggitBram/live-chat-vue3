import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvJvNXhn1e5UBnEi7_7tQMrILIfNhMRdY",
  authDomain: "udemy-vue-firebase-ddfbb.firebaseapp.com",
  projectId: "udemy-vue-firebase-ddfbb",
  storageBucket: "udemy-vue-firebase-ddfbb.appspot.com",
  messagingSenderId: "73088940521",
  appId: "1:73088940521:web:aaad87bdbf22a68589f378",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
