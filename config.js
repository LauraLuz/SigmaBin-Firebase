import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDY7m2dG5akb9g4NqdNhUu288dGQwIJkdE",
  authDomain: "rn-exemplo01.firebaseapp.com",
  databaseURL: "https://rn-exemplo01-default-rtdb.firebaseio.com",
  projectId: "rn-exemplo01",
  storageBucket: "rn-exemplo01.appspot.com",
  messagingSenderId: "414194107670",
  appId: "1:414194107670:web:adee06dd5b349a65f6bc37"
};

firebase.initializeApp(firebaseConfig);

export { firebase };

