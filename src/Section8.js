import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section8(){

  const [score, setScore] = useState(0);

  function getScore() {

    var score = parseInt(sessionStorage.getItem("front")) + parseInt(sessionStorage.getItem("back")) 
    setScore(score);

    var scoretemp = parseInt(sessionStorage.getItem("subtraction")) + parseInt(sessionStorage.getItem("letters")) 
    + score

    sessionStorage.setItem("attention",scoretemp.toString());
    };

    function onChangeFrontCheck() {
      if(document.getElementById('front').checked==true)
        sessionStorage.setItem("front", "1");
      else
      sessionStorage.setItem("front", "0");

      getScore();
    }
  
    function onChangeBackCheck() {
      if(document.getElementById('back').checked==true)
        sessionStorage.setItem("back", "1");
      else
      sessionStorage.setItem("back", "0");

      getScore();
    }

    const navigate = useNavigate();

    var typography = "Tick if patient repeats the digits correctly";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec7"} name = {"Attention"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <h4>Read list of digits (1 digit/sec)</h4>
                    <br/>
                    <input type="checkbox" id="front" onClick={onChangeFrontCheck}/>
                    <label>Subject has to repeat them in the forward order.</label>
                    <br/><br/>
                    <h4>2 1 8 5 4</h4>
                    <br/>
                    <input type="checkbox" id="back" onClick={onChangeBackCheck}/>
                    <label> Subject has to repeat them in the backward order.</label>
                    <br/><br/>
                    <h4>7 4 2</h4>
                    <br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec9");}}>Next</button>
            </div>
    );
}
export default Section8;