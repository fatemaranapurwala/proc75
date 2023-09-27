import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDzvZ3WHFZG03YGKI1hkhiqvepYvkCMPRE",
  authDomain: "proc71-654b8.firebaseapp.com",
  projectId: "proc71-654b8",
  storageBucket: "proc71-654b8.appspot.com",
  messagingSenderId: "534668048939",
  appId: "1:534668048939:web:6ff1cf2e24761255a9c86e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
