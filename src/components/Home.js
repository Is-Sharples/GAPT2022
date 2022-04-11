import React from "react";
import PatientID from "./PatientID";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import initializeApp from 'firebase/app';
export default function Application (){


    
    const navigate = useNavigate();

    
    useEffect(() => {
        
        navigate("/Patient");
      });
    
    return(
        <></>      
    )
    






}