import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-lZ8Ouy-HWLC6HvP2MJnOA0_rqHyPCZk",
  authDomain: "ecommerce-anime.firebaseapp.com",
  projectId: "ecommerce-anime",
  storageBucket: "ecommerce-anime.appspot.com",
  messagingSenderId: "1007956096968",
  appId: "1:1007956096968:web:08a6daf9ce9a40858272fd",
};

const app = firebase.initializeApp(firebaseConfig);
export const getFirebase = () => app;

export const getFirestore = () => app.firestore();
