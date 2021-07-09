import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBadgfl8fsI-YxbFgDjtz_rmFXF8DPYinw",
  authDomain: "chatsapp-b7092.firebaseapp.com",
  projectId: "chatsapp-b7092",
  storageBucket: "chatsapp-b7092.appspot.com",
  messagingSenderId: "943292889315",
  appId: "1:943292889315:web:9d21b0a5714594ce0a6dd6"
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