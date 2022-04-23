import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';

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
    const [alochol, setAlcohol] = useState();
    const [education, setEducation] = useState("");

    const navigate = useNavigate();
       
     // This function will called only once
     useEffect(() => {
      loadDataOnlyOnce();
     }, [])

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
                   <h5>{smoking}</h5>  
                   <br/>
                   <h5>{alochol}</h5>  
                   <br/>
                   <h5>Level of Education: {education}</h5>  
                   <br/>
                   <h5>Charlson Co-Morbidity Index: {cmi}</h5>
                   <br/>
                   <h5>Moca Final Result: {moca_score}/{moca_max} - {moca_status}</h5>  
                   <br/>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/");}}>Save and Exit</button>
            </div>
    );
}
export default Review;