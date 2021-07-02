import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWvnFZ6o5p7NDZALubjzQbf8tmHCf-CXA",
  authDomain: "chatsapp-native.firebaseapp.com",
  projectId: "chatsapp-native",
  storageBucket: "chatsapp-native.appspot.com",
  messagingSenderId: "686158714901",
  appId: "1:686158714901:web:42fa0988c90b22d88c961c"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();


export {db, auth};