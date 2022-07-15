import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIJIp3GOlZrezVxaRe1Dq10zFjqRz_jGU",
  authDomain: "udemi-chat.firebaseapp.com",
  projectId: "udemi-chat",
  storageBucket: "udemi-chat.appspot.com",
  messagingSenderId: "24431176421",
  appId: "1:24431176421:web:326a7069b519b42aa1420c",
  measurementId: "G-LJ5JZYCD8T"
};


//init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export {projectAuth, projectFirestore, timestamp}