import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDOnUIQVXkNtvs8631_Si4_YjETN0EC8Q",
  authDomain: "extended-creek-305601.firebaseapp.com",
  projectId: "extended-creek-305601",
  storageBucket: "extended-creek-305601.appspot.com",
  messagingSenderId: "389494727243",
  appId: "1:389494727243:web:2d7bd161618b6c0c7923ce"
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