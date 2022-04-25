import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section11(){

  const [score, setScore] = useState(0);

  function getScore() {

    var temp;

    var r1 = parseInt(sessionStorage.getItem("rep1"))
    var r2 = parseInt(sessionStorage.getItem("rep2"))
  
    var rep = r1 + r2;
    if (rep===2){
      temp = 2
    }else if (rep === 1) {
      temp = 1
    }else if (rep === 0) {
      temp = 0
    }
    
    setScore(temp);

    sessionStorage.setItem("lang",temp.toString());

    var scoretemp = temp + parseInt(sessionStorage.getItem("sec12"));
    
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
                    <input className="check" type="checkbox" id="rep1" onClick={onChangerep1Check}/>
                    <label>I only know that John is the one to help today</label>
                    <br/>
                    <input className="check" type="checkbox" id="rep2" onClick={onChangerep2Check}/>
                    <label> The cat always hid under the couch when dogs were in the room</label>
                    <br/><br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec12");sessionStorage.setItem("rep1", "0");sessionStorage.setItem("rep2", "0");}}>Next</button>
            </div>
    );
}
export default Section11;