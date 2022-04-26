import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./header"
import Card from '@mui/material/Card';

function Section2(){
    
    const diseasesArray = [
        { id: 1, condition: "Myocardial Infection", score: 1 }, 
        { id: 2, condition: "Congestive Heart Failure", score: 1 },
        { id: 3, condition: "Peripheral Vascular Disease", score: 1 },
        { id: 4, condition: "Cerebrovascular Disease", score: 1 },
        { id: 5, condition: "Dementia", score: 1 },
        { id: 6, condition: "Chronic Pulmonary Disease", score: 1 },
        { id: 7, condition: "Rheumatic Disease", score: 1 },
        { id: 8, condition: "Peptic Ulcer Disease", score: 1 },
        { id: 9, condition: "Liver Disease, mild", score: 1 },
        { id: 10, condition: "Diabetes without chronic complications", score: 1 },
        { id: 11, condition: "Renal Disease, mild to moderate", score: 1 },
        { id: 12, condition: "Diabetes with chronic complications", score: 2 },
        { id: 13, condition: "Hemiplegia or Paraplegia", score: 2 },
        { id: 14, condition: "Any Malignancy", score: 2 },
        { id: 15, condition: "Liver Disease, moderate to severe", score: 3 },
        { id: 16, condition: "Renal Disease, severe", score: 3 },
        { id: 17, condition: "HIV Infection, no AIDS", score: 3 },
        { id: 18, condition: "Metastatic Solid Tumor", score: 6 },
        { id: 19, condition: "AIDS", score: 6 },
    ];

    const [checkedState, setCheckedState] = useState(
        new Array(diseasesArray.length).fill(false)
    );
    
    const [totalScore, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        
        setCheckedState(updatedCheckedState);
        const totalScore = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + diseasesArray[index].score;
                }
                return sum;
            },
            0
        );   

        setTotal(totalScore);
        sessionStorage.setItem("mobility-index", totalScore.toString()) 
    };

    function checkMutuallyInclusive(){
        if(document.getElementById("mal2").checked===true){
            document.getElementById("mal1").checked=true;
            document.getElementById("mal1").disabled=true;
        }else{
            document.getElementById("mal1").disabled=false;
            document.getElementById("mal1").disabled=false;
        }
    }

    function LiverCheck(){
        if(document.getElementById("liver1").checked===true){
            document.getElementById("liver2").disabled=true;
        }else{
            document.getElementById("liver2").disabled=false;
        }
    }

    function LiverCheck2(){
        if(document.getElementById("liver2").checked===true){
            document.getElementById("liver1").disabled=true;
        }else{
            document.getElementById("liver1").disabled=false;
        }
    }

    function DiabetesCheck(){
        if(document.getElementById("diabetes1").checked===true){
            document.getElementById("diabetes2").disabled=true;
        }else{
            document.getElementById("diabetes2").disabled=false;
        }
    }

    function DiabetesCheck2(){
        if(document.getElementById("diabetes2").checked===true){
            document.getElementById("diabetes1").disabled=true;
        }else{
            document.getElementById("diabetes1").disabled=false;
        }
    }

    function RenalCheck(){
        if(document.getElementById("renal1").checked===true){
            document.getElementById("renal2").disabled=true;
        }else{
            document.getElementById("renal2").disabled=false;
        }
    }

    function RenalCheck2(){
        if(document.getElementById("renal2").checked===true){
            document.getElementById("renal1").disabled=true;
        }else{
            document.getElementById("renal1").disabled=false;
        }
    }

    function HivCheck(){
        if(document.getElementById("hiv1").checked===true){
            document.getElementById("hiv2").disabled=true;
        }else{
            document.getElementById("hiv2").disabled=false;
        }
    }

    function HivCheck2(){
        if(document.getElementById("hiv2").checked===true){
            document.getElementById("hiv1").disabled=true;
        }else{
            document.getElementById("hiv1").disabled=false;
        }
    }

    const navigate = useNavigate();
    
    var typography = "Input a Patient ID";

    return(
        <div className="screen">
                 <Header typography = {typography} history = {"/questions"} name = {"Charlson Co-Morbidity Index"} />
                <br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "75%"}, ['@media (max-width:720px)']: {maxWidth: "75%"}, borderRadius: "20px", padding: "5px 20px"}} >
                    <h3>Social Habits:</h3>
                        <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(0)}/>
                          <label className="check-label">MyoCardialInfection</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(1)}/>
                          <label className="check-label">Congestive Heart Failure</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(2)}/>
                          <label className="check-label">Peripheral Vascular Disease</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(3)}/>
                          <label className="check-label">Cerebrovascular Disease</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(4)}/>
                          <label className="check-label">Dementia</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(5)}/>
                          <label className="check-label">Chronic Pulmonary Disease</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(6)}/>
                          <label className="check-label">Rheumatic Disease</label>
                          <br/>
                          <input className="check" type="checkbox"  onChange={() => handleOnChange(7)}/>
                          <label className="check-label">Peptic Ulcer Disease</label>
                          <br/>
                          <input className="check" type="checkbox" id="liver1" onChange={() => {handleOnChange(8); LiverCheck();}}/>
                          <label className="check-label">Liver Disease, mild</label>
                          <br/>
                          <input className="check" type="checkbox" id="diabetes1" onChange={() => {handleOnChange(9); DiabetesCheck();}}/>
                          <label className="check-label">Diabetes without chronic complications</label>
                          <br/>
                          <input className="check" type="checkbox" id="renal1" onChange={() => {handleOnChange(10); RenalCheck();}}/>
                          <label className="check-label">Renal Disease, mild to moderate</label>
                          <br/>
                          <input className="check" type="checkbox" id="diabetes2"  onChange={() => {handleOnChange(11); DiabetesCheck2();}}/>
                          <label className="check-label">Diabetes with chronic complications</label>
                          <br/>
                          <input className="check" type="checkbox" onChange={() => handleOnChange(12)}/>
                          <label className="check-label">Hemiplegia or Paraplegia</label>
                          <br/>
                          <input className="check" type="checkbox" id="mal1" onChange={() => {handleOnChange(13)}}/>
                          <label className="check-label">Any Malignancy</label>
                          <br/>
                          <input className="check" type="checkbox" id="liver2" onChange={() => {handleOnChange(14); LiverCheck2();}}/>
                          <label className="check-label">Liver Disease, moderate to severe</label>
                          <br/>
                          <input className="check" type="checkbox" id="renal2" onChange={() => {handleOnChange(15); RenalCheck2();}}/>
                          <label className="check-label">Renal Disease, severe</label>
                          <br/>
                          <input className="check" type="checkbox" id="hiv1" onChange={() => {handleOnChange(16); HivCheck();}}/>
                          <label className="check-label">HIV Infection, no AIDS</label>
                          <br/>
                          <input className="check" type="checkbox" id="mal2" onChange={() => {handleOnChange(17); checkMutuallyInclusive();}}/>
                          <label className="check-label">Metastatic Solid Tumor</label>
                          <br/>
                          <input className="check" type="checkbox" id="hiv2" onChange={() => {handleOnChange(18); HivCheck2();}}/>
                          <label className="check-label">AIDS</label>
                          <br/><br/>
                      <h3> Score: {totalScore} </h3> 
             </Card>
             <button className="next-button" onClick={()=> {navigate("/moca")}}>Next</button>
            </div>
    )
}
export default Section2;