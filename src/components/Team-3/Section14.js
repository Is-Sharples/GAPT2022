import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section14(){

    const navigate = useNavigate();

    const [score, setScore] = useState(0);
    
    function getScore() {

        var score = parseInt(sessionStorage.getItem("velvet")) + parseInt(sessionStorage.getItem("daisy")) 
        + parseInt(sessionStorage.getItem("face")) + parseInt(sessionStorage.getItem("red")) + parseInt(sessionStorage.getItem("church"))
        setScore(score);
        sessionStorage.setItem("delayedrecall",score.toString());
    };

    function onChangeredCheck() {
        if(document.getElementById('red').checked==true)
          sessionStorage.setItem("red", "1");
        else
        sessionStorage.setItem("red", "0");

        getScore();
    }

    function onChangevelvetCheck() {
        if(document.getElementById('velvet').checked==true)
            sessionStorage.setItem("velvet", "1");
        else
            sessionStorage.setItem("velvet", "0");

        getScore();
    }

    function onChangechurchCheck() {
        if(document.getElementById('church').checked==true)
            sessionStorage.setItem("church", "1");
        else
            sessionStorage.setItem("church", "0");

        getScore();
    }

    function onChangefaceCheck() {
        if(document.getElementById('face').checked==true)
            sessionStorage.setItem("face", "1");
        else
            sessionStorage.setItem("face", "0");

        getScore();
    }

    function onChangedaisyCheck() {
        if(document.getElementById('daisy').checked==true)
            sessionStorage.setItem("daisy", "1");
        else
            sessionStorage.setItem("daisy", "0");

        getScore();
    }

    var typography = "Points are given for UNCUED recall only";

    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec13"} name = {"Delayed Recall"} />  
                <br/>
                <Card sx={{maxWidth: "82%", borderRadius: "20px", textAlign:"center"}}> 
                <CardContent>
                    <h2>Memory Index Score (MIS)</h2>
                    <br/>
                    <h3>Has to recall words WITH NO CUE</h3>
                    <br/>
                    <h3>No Cue</h3>
                    <br/>
                    <input className="check"type="checkbox" id="face" onClick={onChangefaceCheck}/>
                    <label className = "check-label">Face</label>
                    <input className="check" type="checkbox" id="velvet" onClick={onChangevelvetCheck}/>
                    <label className = "check-label">Velvet</label>
                    <input className="check" type="checkbox" id="church" onClick={onChangechurchCheck}/>
                    <label className = "check-label">Church</label>
                    <input className="check" type="checkbox" id="daisy" onClick={onChangedaisyCheck}/>
                    <label className = "check-label">Daisy</label>
                    <input className="check" type="checkbox" id="red" onClick={onChangeredCheck}/>
                    <label className = "check-label">Red</label>  
                    <br/><br/>
                    <h3>Category Cue</h3> 
                    <br/>  
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Face</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Velvet</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Church</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Daisy</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Red</label>  
                    <br/><br/>
                    <h3>Multiple Choice Cue</h3> 
                    <br/>  
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Face</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Velvet</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Church</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Daisy</label>
                    <input className="check" type="checkbox"/>
                    <label className = "check-label">Red</label>  
                    <br/><br/>
                    <h3>Points for UNCUED recall only</h3>
                    <br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec15"); sessionStorage.setItem("red", "0");sessionStorage.setItem("velvet", "0");sessionStorage.setItem("church", "0");sessionStorage.setItem("face", "0");sessionStorage.setItem("daisy", "0");}}>Next</button>
            </div>
    );
}
export default Section14;