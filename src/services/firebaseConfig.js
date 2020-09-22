import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAv3bikqM-W9hAbmIw3mDzYZXq4xEYILGs",
    authDomain: "registro-d7699.firebaseapp.com",
    databaseURL: "https://registro-d7699.firebaseio.com",
    projectId: "registro-d7699",
    storageBucket: "registro-d7699.appspot.com",
    messagingSenderId: "625597228076",
    appId: "1:625597228076:web:03a4bdb24c92da3d0fdd89",
    measurementId: "G-JLG9RJVYY3"
}

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();


export { db, auth }
