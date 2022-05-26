import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import {saveTeam3} from '../firebase';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function Review(){

    const [cmi, setCmi] = useState(0);
    const [moca_score, setMocaScore] = useState(0);
    const [moca_max, setMocaMax] = useState(0);
    const [moca_status, setMocaStatus] = useState(0);
    const [diagnosis, setDiagnosis] = useState("");
    const [condition, setCondition] = useState("");
    const [medical, setMedical] = useState("");
    const [drug, setDrug] = useState("");
    const [smoking, setSmoking] = useState();
    const [alcohol, setAlcohol] = useState();
    const [education, setEducation] = useState("");
    const [openSave, setOpenSave] = useState(false);
    const dt = new Date().toString();

    const navigate = useNavigate();
       
     // This function will called only once
     useEffect(() => {
      loadDataOnlyOnce();
     }, [])

    const handleClose = () => {
        setOpenSave(false);
    };

    function loadDataOnlyOnce() { 
        setDiagnosis(sessionStorage.getItem("q1"));
        setCondition(sessionStorage.getItem("q2"));
        setMedical(sessionStorage.getItem("q3"));
        setDrug(sessionStorage.getItem("q4"));
        setSmoking(sessionStorage.getItem("q5"));
        setAlcohol(sessionStorage.getItem("q6"));
        setEducation(sessionStorage.getItem("q7"));
        setCmi(parseInt(sessionStorage.getItem("mobility-index")));
        setMocaScore(parseInt(sessionStorage.getItem("moca-score")));
        setMocaMax(parseInt(sessionStorage.getItem("moca-max")));
        setMocaStatus(sessionStorage.getItem("moca-status"));
    }

    var typography = "Review Results";

    const data = {
        consultant: sessionStorage.getItem("doctor"),
        date: dt,
        mobilityIndex: sessionStorage.getItem("mobility-index"),
        abstraction: sessionStorage.getItem("abstraction"),
        attention: sessionStorage.getItem("attention"),
        finalScore: sessionStorage.getItem("moca-score")+"/"+sessionStorage.getItem("moca-max")+" - "+sessionStorage.getItem("moca-status"),
        language: sessionStorage.getItem("language"),
        naming: sessionStorage.getItem("naming"),
        orientation: sessionStorage.getItem("orientation"),
        recall: sessionStorage.getItem("delayedrecall"),
        visual: sessionStorage.getItem("visuo"),
        alcohol: sessionStorage.getItem("q6"),
        diagnosis: sessionStorage.getItem("q1"),
        drugHistory: sessionStorage.getItem("q4"),
        education: sessionStorage.getItem("q7"),
        medicalHistory: sessionStorage.getItem("q3"),
        presentCondition: sessionStorage.getItem("q2"),
        smoking: sessionStorage.getItem("q5"),
        charlson: cmi
    }
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/results"} name = {"Geriatric Consultant Results Obtained"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                    <CardContent>
                   <h2>Diagnosis: {diagnosis}</h2>  
                   <br/>
                   <h2>History of Present Condition: {condition}</h2>  
                   <br/>
                   <h2>Past Medical History: {medical}</h2>  
                   <br/>
                   <h2>Drug History: {drug}</h2>  
                   <br/>
                   <h2>Smoking: {smoking}</h2>  
                   <br/>
                   <h2>Drinking: {alcohol} </h2>  
                   <br/>
                   <h2>Level of Education: {education}</h2>  
                   <br/>
                   <h2>Charlson Co-Morbidity Index: {cmi}</h2>
                   <br/>
                   <h2>Moca Final Result: {moca_score}/{moca_max} - {moca_status}</h2>  
                   <br/>
                  </CardContent>         
                </Card>
            <Dialog open={openSave} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to save the patient details?"}
            </DialogTitle>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() => {saveTeam3(sessionStorage.getItem("PatientData"),sessionStorage.getItem("doctor"),dt,data); handleClose(); navigate("/");}}>Yes</Button>
            <Button style={{m: 10}} onClick={()=> {handleClose();}}></Button>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() =>  {handleClose();} }>No</Button>
            </Dialog>

            <button className="next-button" onClick={()=> {setOpenSave(true); }}>Save and Exit</button>
            </div>
    );
}
export default Review;