import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyB6z7mEfeUrYmsWK0svfpGiqLr66RHPHz8",
    authDomain: "shopping-21428.firebaseapp.com",
    databaseURL: "https://shopping-21428.firebaseio.com",
    projectId: "shopping-21428",
    storageBucket: "shopping-21428.appspot.com",
    messagingSenderId: "841413403531",
    appId: "1:841413403531:web:7dcbe36947ea475a3f458e",
    measurementId: "G-WS26SJ6P61"
})

let db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;