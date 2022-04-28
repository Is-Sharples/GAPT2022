import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import {saveTeam3} from '../firebase';


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
    const dt = new Date().toDateString();

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
                <Header typography = {typography} history = {"/results"} name = {"Results Obtained"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                    <CardContent>
                   <h5>Diagnosis: {diagnosis}</h5>  
                   <br/>
                   <h5>History of Present Condition: {condition}</h5>  
                   <br/>
                   <h5>Past Medical History: {medical}</h5>  
                   <br/>
                   <h5>Drug History: {drug}</h5>  
                   <br/>
                   <h5>Smoking: {smoking}</h5>  
                   <br/>
                   <h5>Drinking: {alcohol} </h5>  
                   <br/>
                   <h5>Level of Education: {education}</h5>  
                   <br/>
                   <h5>Charlson Co-Morbidity Index: {cmi}</h5>
                   <br/>
                   <h5>Moca Final Result: {moca_score}/{moca_max} - {moca_status}</h5>  
                   <br/>
                  </CardContent>         
                </Card>
            <Dialog open={openSave} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to save the patient details?"}
            </DialogTitle>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() => {SetDataB(abTime, dbTime, Ablist, Dblist, ahw, dhw); handleClose(); }}>Yes</Button>
            <Button style={{m: 10}} onClick={()=> {handleClose();}}></Button>
             <button className="next-button" onClick={()=> {saveTeam3(sessionStorage.getItem("PatientData"),sessionStorage.getItem("doctor"),dt,data); navigate("/");}}>Save and Exit</button>
            </div>
    );
}
export default Review;