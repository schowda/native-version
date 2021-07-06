import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGGkHt490TgsRYL5Z4QAPdP4D0ED3B5NU",
  authDomain: "chatsapp-47cb7.firebaseapp.com",
  projectId: "chatsapp-47cb7",
  storageBucket: "chatsapp-47cb7.appspot.com",
  messagingSenderId: "705086203432",
  appId: "1:705086203432:web:15f4a2d51d9a9e158bf71d"
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