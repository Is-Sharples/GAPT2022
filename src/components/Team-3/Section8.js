import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section8(){
 
  const [score, setScore] = useState(0);

  function getScore() {

    var num1 = parseInt(sessionStorage.getItem("front")) 
    var num2 = parseInt(sessionStorage.getItem("back")) 

    var num3 = num1 + num2;
    var temp = 0;

    if(num3 === 1){
      temp = 1;
    }else if(num3 === 2){
      temp = 2;
    }else if(num3 === 0) {
      temp = 0;
    }
    setScore(temp);

    sessionStorage.setItem("num",temp.toString());

    var scoretemp = parseInt(sessionStorage.getItem("sub")) + temp + parseInt(sessionStorage.getItem("letters"))

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
                    <h3>Read list of digits (1 digit/sec)</h3>
                    <br/>
                    <input className="check" type="checkbox" id="front" onClick={onChangeFrontCheck}/>
                    <label>Subject has to repeat them in the forward order.</label>
                    <br/><br/>
                    <h3>2 1 8 5 4</h3>
                    <br/>
                    <input className="check" type="checkbox" id="back" onClick={onChangeBackCheck}/>
                    <label> Subject has to repeat them in the backward order.</label>
                    <br/><br/>
                    <h3>7 4 2</h3>
                    <br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec9"); sessionStorage.setItem("front", "0");sessionStorage.setItem("back", "0");}}>Next</button>
            </div>
    );
}
export default Section8;