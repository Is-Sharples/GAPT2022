import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section9(){

  const [score, setScore] = useState(0);

  function getScore() {

    var score = parseInt(sessionStorage.getItem("letters")) 

    var scoretemp = parseInt(sessionStorage.getItem("sub")) + score + parseInt(sessionStorage.getItem("num"));
    
    sessionStorage.setItem("attention",scoretemp.toString());

    setScore(score);
  };

  
    function onChangeSec9Check() {
        if(document.getElementById('letters').checked==true)
            sessionStorage.setItem("letters", "1");
          else
          sessionStorage.setItem("letters", "0");

          getScore()
      }

    const navigate = useNavigate();

    var typography = "Tick if the patient makes less than 2 errors";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec8"} name = {"Attention"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <h5>Read list of letters</h5>
                    <br/>
                    <h5>The subject must tap with his hand at each letter A. No points if less than 2 errors.</h5>
                    <br/>
                    <h5>F B A C M N A A J K L B A F A K D E A A A J A M O F A A B</h5>
                    <br/>
                    <input className="check" type="checkbox" id="letters" onChange={onChangeSec9Check}/>
                    <label>Correct? </label> 
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec10");}}>Next</button>
            </div>
    );
}
export default Section9;