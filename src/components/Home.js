import React from "react";
import PatientID from "./PatientID";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNs2vgKOww-9z4prMMEBGh_bqU0AlZJ7Q",
    authDomain: "mobile-team-a.firebaseapp.com",
    databaseURL: "https://mobile-team-a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mobile-team-a",
    storageBucket: "mobile-team-a.appspot.com",
    messagingSenderId: "233720108765",
    appId: "1:233720108765:web:c1ff51793c8afe846f2d34",
    measurementId: "G-EZ05HWJHTX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const colRef = collection(db, 'patients');
  getDocs(colRef)
    .then((snapshot)=> {
        let patients = []
        snapshot.docs.forEach((doc) => {
            patients.push({
                    ...doc.data(), 
                    id: doc.id
                })

            }       
        )
        console.log(patients);
    })

export default function Application (){

    
    
    const navigate = useNavigate();

    
    // useEffect(() => {
        
    //     navigate("/Patient");
    //   });
    
    return(
        <>
        <h2>I am in the Home Page :    ^)</h2>
        
        </>      
    )
    






}