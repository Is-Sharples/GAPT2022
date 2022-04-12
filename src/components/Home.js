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
import { getPatients } from './firebase';


export default function Application (){  
    
    const navigate = useNavigate();

    
    useEffect(() => {
        
        navigate("/Patient");
      });
    
    return(
        <>
        <h2>Hello</h2>
        
        </>      
    )
    






}