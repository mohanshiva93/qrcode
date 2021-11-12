import { initializeApp } from "firebase/app" 
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
 
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAmJiBO5KdrcDmwQrpHqAwAF7eFMX5f4Bw",
    authDomain: "sample-8555.firebaseapp.com",
    projectId: "sample-8555",
    storageBucket: "sample-8555.appspot.com",
    messagingSenderId: "134869573571",
    appId: "1:134869573571:web:580c18b100323edeb7a776",
    measurementId: "G-MGCVBEX2J8"
  });

const db = getFirestore(); 

export const  AddDataToFireStore= (tableName, data) => {
 return addDoc(collection(db, tableName), data);
 }