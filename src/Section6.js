import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section6(){

  const [score, setScore] = useState(0);

  function getScore() {

    var score = parseInt(sessionStorage.getItem("lion")) + parseInt(sessionStorage.getItem("rhino")) + parseInt(sessionStorage.getItem("camel"))
    setScore(score);
    sessionStorage.setItem("naming",score.toString());

  };
 
      function onChangeCamelCheck() {
        if(document.getElementById('camel').checked==true)
          sessionStorage.setItem("camel", "1");
        else
        sessionStorage.setItem("camel", "0");

        getScore();
        }
  
        function onChangeLionCheck() {
          if(document.getElementById('lion').checked==true)
            sessionStorage.setItem("lion", "1");
          else
          sessionStorage.setItem("lion", "0");

          getScore();
        }
  
        function onChangeRhinoCheck() {
          if(document.getElementById('rhino').checked==true)
            sessionStorage.setItem("rhino", "1");
          else
          sessionStorage.setItem("rhino", "0");

          getScore();
        }

    const navigate = useNavigate();

    var typography = "Tick if patient says the name of the animal correctly";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec5"} name = {"Naming"} />  
                <br/>
                <Card sx={{ minWidth: "80%", borderRadius: "20px", justifyContent:"center", textAlign: "center"}}> 
                <CardContent>
                      
                          <input type="checkbox" id="lion" onChange={onChangeLionCheck}></input>
                          <img src="lion.png"></img>
                          <br/>
                          <input type="checkbox" id="rhino" onChange={onChangeRhinoCheck}></input>
                          <img src="rhino.png"></img>
                          <br/>
                          <input type="checkbox" id="camel" onChange={onChangeCamelCheck}></input>
                          <img src="camel.png"></img>
                          <br/>
                          <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec7");}}>Next</button>
            </div>
    );
}
export default Section6;