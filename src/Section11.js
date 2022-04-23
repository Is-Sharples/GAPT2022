import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section11(){

  const [score, setScore] = useState(0);

  function getScore() {

    var score = parseInt(sessionStorage.getItem("rep1")) + parseInt(sessionStorage.getItem("rep2"))
    setScore(score);

    var scoretemp = score + parseInt(sessionStorage.getItem("sec12"));
    sessionStorage.setItem("language",scoretemp.toString());
  };

  function onChangerep1Check() {
    if(document.getElementById('rep1').checked==true)
        sessionStorage.setItem("rep1", "1");
      else
        sessionStorage.setItem("rep1", "0");

        getScore();
  }

  function onChangerep2Check() {
    if(document.getElementById('rep2').checked==true)
        sessionStorage.setItem("rep2", "1");
      else
        sessionStorage.setItem("rep2", "0");

        getScore();
  }

    const navigate = useNavigate();

    var typography = "Tick if the patient repeats the sentences";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec10"} name = {"Language"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <h4>Repeat</h4>
                    <br/>
                    <input type="checkbox" id="rep1" onClick={onChangerep1Check}/>
                    <label>I only know that John is the one to help today</label>
                    <br/>
                    <input type="checkbox" id="rep2" onClick={onChangerep2Check}/>
                    <label> The cat always hid under the couch when dogs were in the room</label>
                    <br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec12");}}>Next</button>
            </div>
    );
}
export default Section11;