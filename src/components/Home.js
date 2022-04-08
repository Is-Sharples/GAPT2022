import React from "react";
import PatientID from "./PatientID";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
export default function Application (){


    const [barthel, showBarthel] = useState("true");
    const navigate = useNavigate();

    if(barthel === "true"){
        navigate("/Patient");
    }
    useEffect(() => {
        // Update the document title using the browser API
        navigate("/Patient");
      });
    
    return(

        <></>
        // <Button onClick = {() => navigate("/Patient")}>Click Me </Button>
        
    )
    






}