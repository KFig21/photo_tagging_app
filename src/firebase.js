import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyA7KY5bFHgLlIQtyqXvI52_eIvjwc4Qo5M",
  authDomain: "photo-tagging-app-3d079.firebaseapp.com",
  projectId: "photo-tagging-app-3d079",
  storageBucket: "photo-tagging-app-3d079.appspot.com",
  messagingSenderId: 6671780877,
  appId: "1:6671780877:web:4a41080eda78518c7cd944",
});

export const firestore = firebase.firestore();
export const auth = app.auth();
export default app;
