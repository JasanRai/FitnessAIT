import * as Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCW3K51jdPDgDWCwRA1uPCtWDb1i_-0hv8",
  authDomain: "fitness-ait.firebaseapp.com",
  databaseURL: "https://fitness-ait.firebaseio.com",
  projectId: "fitness-ait",
  storageBucket: "fitness-ait.appspot.com",
  messagingSenderId: "858933889526",
  appId: "1:858933889526:web:eb46711725e703faacdfd7",
};

Firebase.initializeApp(firebaseConfig);

export const firebase = Firebase;
