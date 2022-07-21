import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaujInKqsW9s3Oo41YjKQi-4aZ-w3-81k",
  authDomain: "udemi-chat-1c730.firebaseapp.com",
  projectId: "udemi-chat-1c730",
  storageBucket: "udemi-chat-1c730.appspot.com",
  messagingSenderId: "809233051227",
  appId: "1:809233051227:web:1d6adb9fca5c75caa4597e",
  measurementId: "G-N8MCXQ89XF"
};


//init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export {projectAuth, projectFirestore, timestamp}