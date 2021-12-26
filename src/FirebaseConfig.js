import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkUkNn_FI2rnUVqLIhQp6pVHUnaYuH0Ms",
    authDomain: "quizmania-8c81c.firebaseapp.com",
    databaseURL: "https://quizmania-8c81c-default-rtdb.firebaseio.com",
    projectId: "quizmania-8c81c",
    storageBucket: "quizmania-8c81c.appspot.com",
    messagingSenderId: "630403273266",
    appId: "1:630403273266:web:6815dab191b3fa017b622b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;