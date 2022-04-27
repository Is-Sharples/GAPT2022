import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function MOCAResults(){

    const [score, setScore] = useState(0);
    const [mis, setMIS] = useState(0);
    const [max, setMax] = useState(30);
    const [viso, setviso] = useState(0);
    const [name, setname] = useState(0);
    const [attn, setattn] = useState(0);
    const [lang, setlang] = useState(0);
    const [abs, setabs] = useState(0);
    const [recall, setrecall] = useState(0);
    const [orien, setorien] = useState(0);
    const [status, setstatus] = useState("");

    const navigate = useNavigate();
       
     // This function will called only once
     useEffect(() => {
      loadDataOnlyOnce();
     }, [])

    function loadDataOnlyOnce() {

        setMIS(parseInt(sessionStorage.getItem("mis")))

        sessionStorage.setItem("max", "30");

        if(isNaN(sessionStorage.getItem("visuo"))){
            sessionStorage.setItem("visuo", 0);
        }

        if(isNaN(sessionStorage.getItem("naming"))){
            sessionStorage.setItem("naming", 0);
        }

        if(isNaN(sessionStorage.getItem("attention"))){
            sessionStorage.setItem("attention", 0);
        }

        if(isNaN(sessionStorage.getItem("abstraction"))){
            sessionStorage.setItem("abstraction", 0);
        }

        if(isNaN(sessionStorage.getItem("language"))){
            sessionStorage.setItem("language", 0);
        }

        if(isNaN(sessionStorage.getItem("delayedrecall"))){
            sessionStorage.setItem("delayedrecall", 0);
        }

        if(isNaN(sessionStorage.getItem("orientation"))){
            sessionStorage.setItem("orientation", 0);
        }

        setviso(parseInt(sessionStorage.getItem("visuo")));
        setname(parseInt(sessionStorage.getItem("naming")));
        setattn(parseInt(sessionStorage.getItem("attention")));
        setlang(parseInt(sessionStorage.getItem("language")));
        setabs(parseInt(sessionStorage.getItem("abstraction")));
        setrecall(parseInt(sessionStorage.getItem("delayedrecall")));
        setorien(parseInt(sessionStorage.getItem("orientation")));

        var total;

        total = parseInt(sessionStorage.getItem("visuo")) + parseInt(sessionStorage.getItem("naming")) + parseInt(sessionStorage.getItem("attention")) + parseInt(sessionStorage.getItem("language"))
        + parseInt(sessionStorage.getItem("abstraction")) + parseInt(sessionStorage.getItem("delayedrecall")) + parseInt(sessionStorage.getItem("orientation"));

        if(sessionStorage.getItem("eduCheck")==="1") {
            total = total + 1;
        }

        if(sessionStorage.getItem("blindCheck")==="1") {
            sessionStorage.setItem("max", "22");
            total = parseInt(sessionStorage.getItem("attention")) + parseInt(sessionStorage.getItem("language")) + parseInt(sessionStorage.getItem("abstraction")) + parseInt(sessionStorage.getItem("delayedrecall")) + parseInt(sessionStorage.getItem("orientation"))
        }else if (sessionStorage.getItem("writeCheck")==="1"){
            sessionStorage.setItem("max", "25");
            total = parseInt(sessionStorage.getItem("naming")) + parseInt(sessionStorage.getItem("attention")) + parseInt(sessionStorage.getItem("language"))
        + parseInt(sessionStorage.getItem("abstraction")) + parseInt(sessionStorage.getItem("delayedrecall")) + parseInt(sessionStorage.getItem("orientation"));
        }

        setMax(parseInt(sessionStorage.getItem("max")));

        sessionStorage.setItem("total ", total.toString());

        var temptot = Math.round((total*30)/(parseInt(sessionStorage.getItem("max"))));


        if(temptot>30) {
            temptot = 30;
        }

        setScore(temptot);
        
        if(total>25) {
            setstatus("No Cognitive Impairment");
        }else if(total>17){
            setstatus("Mild Cognitive Impairment");
        }else if(total>9) {
            setstatus("Moderate Cognitive Impairment");
        }else {
            setstatus("Severe Cognitive Impairment");
        }

        setScore(total);
    }

    var typography = "Moca test result";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec15"} name = {"MOCA(R) Score"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                <CardContent>
                   <h3>www.mocatest.org</h3>
                   <br/>
                   <p>(C) Z. Nasreddine MD</p>
                   <br/>
                   <h5>Training and Certification are required to ensure accuracy</h5>
                   <br/>
                   <h5> Results: </h5>
                   <br/>
                   <h5>Visuospatial/Executive: {viso}</h5>
                   <br/>
                   <h5>Naming: {name}</h5>
                   <br/>
                   <h5>Memory: No Points</h5>
                   <br/>
                   <h5>Attention: {attn}</h5>
                   <br/>
                   <h5>Language: {lang}</h5>
                   <br/>
                   <h5>Abstraction: {abs}</h5>
                   <br/>
                   <h5>Delayed Recall: {recall}</h5>
                   <br/>
                   <h5>Orientation: {orien}</h5>
                   <br/>
                   <h4>Total: {score}/{max}</h4>
                   <br/>
                   <h5><u> {status}</u></h5>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=>{ sessionStorage.setItem("moca-score",score); sessionStorage.setItem("moca-max",max); sessionStorage.setItem("moca-status",status); navigate("/review");}}>Next</button>
            </div>
    );
}
export default MOCAResults;