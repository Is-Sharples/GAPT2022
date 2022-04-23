import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
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
                    <h4>Memory Index Score (MIS)</h4>
                    <br/>
                    <h5>Has to recall words WITH NO CUE</h5>
                    <br/>
                    <h5>No Cue</h5>
                    <br/>
                    <input type="checkbox" id="face" onClick={onChangefaceCheck}/>
                    <label>Face</label>
                    <input type="checkbox" id="velvet" onClick={onChangevelvetCheck}/>
                    <label>Velvet</label>
                    <input type="checkbox" id="church" onClick={onChangechurchCheck}/>
                    <label>Church</label>
                    <input type="checkbox" id="daisy" onClick={onChangedaisyCheck}/>
                    <label>Daisy</label>
                    <input type="checkbox" id="red" onClick={onChangeredCheck}/>
                    <label>Red</label>  
                    <br/><br/>
                    <h5>Category Cue</h5> 
                    <br/>  
                    <input type="checkbox"/>
                    <label>Face</label>
                    <input type="checkbox"/>
                    <label>Velvet</label>
                    <input type="checkbox"/>
                    <label>Church</label>
                    <input type="checkbox"/>
                    <label>Daisy</label>
                    <input type="checkbox"/>
                    <label>Red</label>  
                    <br/><br/>
                    <h5>Multiple Choice Cue</h5> 
                    <br/>  
                    <input type="checkbox"/>
                    <label>Face</label>
                    <input type="checkbox"/>
                    <label>Velvet</label>
                    <input type="checkbox"/>
                    <label>Church</label>
                    <input type="checkbox"/>
                    <label>Daisy</label>
                    <input type="checkbox"/>
                    <label>Red</label>  
                    <br/><br/>
                    <h5>Points for UNCUED recall only</h5>
                    <br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec15");}}>Next</button>
            </div>
    );
}
export default Section14;