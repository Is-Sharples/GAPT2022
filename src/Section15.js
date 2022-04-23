import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section15(){

    const navigate = useNavigate();

    const [score, setScore] = useState(0);
    
    function getScore() {

      var score = parseInt(sessionStorage.getItem("date")) + parseInt(sessionStorage.getItem("month")) + parseInt(sessionStorage.getItem("year"))
      + parseInt(sessionStorage.getItem("day")) + parseInt(sessionStorage.getItem("place")) + parseInt(sessionStorage.getItem("city"))
      setScore(score);
      sessionStorage.setItem("orientation",score.toString());

    };

    function onChangeDateCheck() {
      if(document.getElementById('date').checked==true)
        sessionStorage.setItem("date", "1");
      else
      sessionStorage.setItem("date", "0");

      getScore()
    } 
    
    function onChangeMonthCheck() {
      if(document.getElementById('month').checked==true)
        sessionStorage.setItem("month", "1");
      else
      sessionStorage.setItem("month", "0");

      getScore()
    }  

    function onChangeYearCheck() {
      if(document.getElementById('year').checked==true)
        sessionStorage.setItem("year", "1");
      else
      sessionStorage.setItem("year", "0");

      getScore()
    } 
    
    function onChangeDayCheck() {
      if(document.getElementById('day').checked==true)
        sessionStorage.setItem("day", "1");
      else
      sessionStorage.setItem("day", "0");

      getScore()
    }  

    function onChangePlaceCheck() {
      if(document.getElementById('place').checked==true)
        sessionStorage.setItem("place", "1");
      else
      sessionStorage.setItem("place", "0");

      getScore()
    }  

    function onChangeCityCheck() {
      if(document.getElementById('city').checked==true)
        sessionStorage.setItem("city", "1");
      else
      sessionStorage.setItem("city", "0");

      getScore()
    }  

    var typography = "Tick if user says the correct answers"; 
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec14"} name = {"Orientation"} />  
                <br/>
                <Card sx={{minWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                <CardContent>
                    <input type="checkbox" id="date" onClick={onChangeDateCheck}/>
                    <label>Date</label>
                    <input type="checkbox" id="month" onClick={onChangeMonthCheck}/>
                    <label>Month</label>
                    <input type="checkbox" id="year" onClick={onChangeYearCheck}/>
                    <label>Year</label>
                    <br/>
                    <input type="checkbox" id="day" onClick={onChangeDayCheck}/>
                    <label>Day</label>
                    <input type="checkbox" id="place" onClick={onChangePlaceCheck}/>
                    <label>Place</label>  
                    <input type="checkbox" id="city" onClick={onChangeCityCheck}/>
                    <label>City</label>  
                    <br/><br/>
                    <label>[{score} points]</label>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {navigate("/results");}}>Next</button>
            </div>
    );
}
export default Section15;