import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section7(){

    const navigate = useNavigate();

    var typography = "Tick if patient repeats the word";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec6"} name = {"Memory"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                <CardContent>
                    <h5>Read list of words, subject must repeat them. Do 2 trials, even if 1st trial is succesful. Do a recall after 5 minutes.</h5>
                    <br/>
                    <h4>1st Trial</h4>
                    <br/>
                    <input className="check" type="checkbox"/>
                    <label>Face</label>
                    <input className="check" type="checkbox"/>
                    <label>Velvet</label>
                    <input className="check" type="checkbox"/>
                    <label>Curch</label>
                    <input className="check" type="checkbox"/>
                    <label>Daisy</label>
                    <input className="check" type="checkbox"/>
                    <label>Red</label>  
                    <br/><br/>
                    <h4>2nd Trial</h4>
                    <br/>  
                    <input className="check" type="checkbox"/>
                    <label>Face</label>
                    <input className="check" type="checkbox"/>
                    <label>Velvet</label>
                    <input className="check" type="checkbox"/>
                    <label>Curch</label>
                    <input className="check" type="checkbox"/>
                    <label>Daisy</label>
                    <input className="check"type="checkbox"/>
                    <label>Red</label>  
                    <br/><br/> 
                    <label>[No points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec8");}}>Next</button>
            </div>
    );
}
export default Section7;