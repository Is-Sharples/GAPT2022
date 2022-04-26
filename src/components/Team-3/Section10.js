import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section10(){

  const [score, setScore] = useState(0);

  function getScore() {

    var score = 0;

    var one = parseInt(sessionStorage.getItem("one"));
    var two = parseInt(sessionStorage.getItem("two"));
    var three = parseInt(sessionStorage.getItem("three"));
    var four = parseInt(sessionStorage.getItem("four"));
    var five = parseInt(sessionStorage.getItem("five"));

    var temp = one + two + four + three + five;
    if (temp===5){
      score = 3
    }else if (temp === 4) {
      score = 3
    }else if (temp === 3) {
      score = 2
    }else if (temp === 2) {
      score = 2
    }else if (temp === 1) {
      score = 1
    }else if (temp === 0) {
      score = 0
    }
    
    setScore(score);

    sessionStorage.setItem("sub",score.toString());

    var scoretemp = score + parseInt(sessionStorage.getItem("num")) + parseInt(sessionStorage.getItem("letters"));
    
    sessionStorage.setItem("attention",scoretemp.toString());
  };

  function onChangeoneCheck() {
    if(document.getElementById('one').checked==true)
      sessionStorage.setItem("one", "1");
    else
    sessionStorage.setItem("one", "0");

    getScore();
    }

    function onChangetwoCheck() {
      if(document.getElementById('two').checked==true)
        sessionStorage.setItem("two", "1");
      else
      sessionStorage.setItem("two", "0");

      getScore();
    }

    function onChangethreeCheck() {
      if(document.getElementById('three').checked==true)
        sessionStorage.setItem("three", "1");
      else
      sessionStorage.setItem("three", "0");

      getScore();
    }

    function onChangefourCheck() {
      if(document.getElementById('four').checked==true)
        sessionStorage.setItem("four", "1");
      else
      sessionStorage.setItem("four", "0");
    
      getScore();
    }

    function onChangefiveCheck() {
      if(document.getElementById('five').checked==true)
        sessionStorage.setItem("five", "1");
      else
      sessionStorage.setItem("five", "0");

      getScore();
    }

    const navigate = useNavigate();

    var typography = "4 or 5 correct subtractions: 3 pts, 2 or 3 correct: 2 pts, 1 correct: 1 pt, 0 correct: 0 pt";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec9"} name = {"Attention"} />  
                <br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "80%"}, ['@media (max-width:720px)']: {maxWidth: "340px"}, borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <h5>Serial 7 subtraction starting at 100.</h5>
                    <br/>
                    <input className="check" type="checkbox" id="one" onClick={onChangeoneCheck}/>
                    <label>93</label>
                    <input className="check" type="checkbox" id="two" onClick={onChangetwoCheck}/>
                    <label>86</label>
                    <input className="check" type="checkbox" id="three" onClick={onChangethreeCheck}/>
                    <label>79</label>
                    <input className="check" type="checkbox" id="four" onClick={onChangefourCheck}/>
                    <label>72</label>
                    <input className="check" type="checkbox" id="five" onClick={onChangefiveCheck}/>
                    <label>65</label>  
                    <br/><br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/sec11"); sessionStorage.setItem("one", "0");sessionStorage.setItem("two", "0");sessionStorage.setItem("three", "0");sessionStorage.setItem("four", "0");sessionStorage.setItem("five", "0");}}>Next</button>
            </div>
    );
}
export default Section10;