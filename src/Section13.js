import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section13(){

  const [score, setScore] = useState(0);

  function getScore() {

      var score = parseInt(sessionStorage.getItem("trans")) + parseInt(sessionStorage.getItem("meas")) 
      setScore(score);
      sessionStorage.setItem("abstraction",score.toString());

    };

    function onChangetransCheck() {
      if(document.getElementById('trans').checked==true)
          sessionStorage.setItem("trans", "1");
        else
          sessionStorage.setItem("trans", "0");

          getScore()
    }

    function onChangemeasCheck() {
      if(document.getElementById('meas').checked==true)
          sessionStorage.setItem("meas", "1");
        else
          sessionStorage.setItem("meas", "0");

          getScore()
    }

    const navigate = useNavigate();

    var typography = "Tick if the patient guesses the similarity correctly";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec12"} name = {"Abstraction"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <h4>Similarity between e.g. orange - banana = fruit</h4>
                    <br/>
                    <input type="checkbox" id="trans" onClick={onChangetransCheck}/>
                    <label>Train - Bicycle</label>
                    <input type="checkbox" id="meas" onClick={onChangemeasCheck}/>
                    <label>Watch - Ruler</label>
                    <br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec14");}}>Next</button>
            </div>
    );
}
export default Section13;