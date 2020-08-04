import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAVuRCRrFWmT3GcVyIXoJZRxbsMWPYYO80",
        authDomain: "fb-messenger-clone-4b61f.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-4b61f.firebaseio.com",
        projectId: "fb-messenger-clone-4b61f",
        storageBucket: "fb-messenger-clone-4b61f.appspot.com",
        messagingSenderId: "185253370100",
        appId: "1:185253370100:web:49de3fe22287dfee0f26a1",
        measurementId: "G-1RCQHMBTZ3"
})

const db = firebaseApp.firestore()

export default db