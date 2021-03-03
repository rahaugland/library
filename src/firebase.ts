import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAT_y7QpNKknlo63UmP-h_wZbMOXkpp8aE",
    authDomain: "library-f279d.firebaseapp.com",
    projectId: "library-f279d",
    storageBucket: "library-f279d.appspot.com",
    messagingSenderId: "351522692470",
    appId: "1:351522692470:web:147ac0f4e09b617229ee57",
    measurementId: "G-CXZP56RH32"
  };

  firebase.initializeApp(firebaseConfig);


const firestore = firebase.app().firestore()

export  {
    firebaseConfig, firestore, firebase as default
}
