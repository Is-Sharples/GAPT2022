import './CommonStyle.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
import Header from '../header';
import { saveTeam2 } from '../firebase';

const Summary = () => {
  var typography = "This is a summary of the patient's level of mobility and the test results for the Timed Up and Go and Grip Strength tests.";
  let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
  let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");

  let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
  let ActualObjectRightResult = JSON.parse(SessionRightResult);

  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}`;
  const dateString = date.toString();

  const navigate = useNavigate();

  let lastGripResults = null;
  let lastTUGResults = null;
  let PreviousResult = sessionStorage.getItem("PreviousResult");
  let ActualPreviousResult = JSON.parse(PreviousResult);

  

  function validateForm() {
    console.log("Results are to be submitted after the SUBMIT is pressed");
    console.log(sessionStorage.getItem("TUGStatus"));
    console.log(sessionStorage.getItem("question1"));
    //navigate("/");
    var patientId = sessionStorage.getItem("PatientData");
    console.log("Array:",dataArray);
    saveTeam2(patientId,dateString,dataArray);
  }

  let finalLeft = null;
  let finalRight = null;
  let actualPreviousLeft = null;
  let actualPreviousRight = null;

  if (ActualPreviousResult != null) {

  }


  useEffect(() => {
    try {
      finalLeft = returnGripStrenghtRiskLeft(finalLeft, ActualObjectLeftResult);
      finalRight = returnGripStrenghtRiskLeft(finalRight, ActualObjectRightResult);

      renderPage();
      document.getElementById("finalLeft").innerHTML = finalLeft;
      document.getElementById("finalRight").innerHTML = finalRight;

      if (ActualPreviousResult != null) {
        actualPreviousLeft = returnGripStrenghtRiskLeft(actualPreviousLeft, ActualPreviousResult.GripStrengthResults.MaxLeftHandResult);
        actualPreviousRight = returnGripStrenghtRiskLeft(actualPreviousRight, ActualPreviousResult.GripStrengthResults.MaxRightHandResult);
        document.getElementById("actualPreviousLeft").innerHTML = actualPreviousLeft;
        document.getElementById("actualPreviousRight").innerHTML = actualPreviousRight;
      }
    }
    catch { }
  });


  function returnGripStrenghtRiskLeft(thisHand, ActualObjectHandResult) {

    if (ActualObjectHandResult != null) {
      if (
        typeof ActualObjectHandResult.Risk === "object" &&
        !Array.isArray(ActualObjectHandResult.Risk) &&
        ActualObjectHandResult.Risk !== null
      ) {
        for (var k in ActualObjectHandResult.Risk) {
          thisHand = `
            <p>
              ${k} Verdict: <b>${ActualObjectHandResult.Risk[k]}</b>
            </p>
        `;
        }
      } else {
        thisHand = `
          <p>Verdict: <b>${ActualObjectHandResult.Risk}</b>
          </p>
      `;
      }
    } else {
      ActualObjectHandResult = { TestResult: "" };
    }

    return thisHand;
  }


  let pageRender = "";
  function renderPage() {
    let count = null;

    if (ActualPreviousResult == null) {
      pageRender = `
  <div>
    <label class="subtitle"><center>Physiotherapy </center></label> </br>
    <label class="subtitle">Levels of Mobility</label> </br> </br> 

    <ul>
      <li>Previous Level: <b>${sessionStorage.getItem("TUGQuestion1")}</b></li>
      <li>Current Level: <b>${sessionStorage.getItem("TUGQuestion2")}</b></li>
    </ul> </br>

    <label class="subtitle">TUG Test</label> </br> </br> 

    <ul>
      <li>Time Taken: <b>${sessionStorage.getItem("TUGTimer")} seconds</b></li>
        

        <li>Status: <b>${sessionStorage.getItem("TUGStatus")}</b></li>
        <li>Carried Out?: <b>${sessionStorage.getItem("TUGTestCarriedOut")}</b></li>
        
    </ul> </br>

    <label class="subtitle">Grip Strength test</label> </br> </br> 
    <ul>
    <li>Dominant Hand: <b>${sessionStorage.getItem("question1")}</b></li> 
    </ul> </br>

      <li>Left Hand: <b>${ActualObjectLeftResult.TestResult}</b></li>
      <div id="finalLeft"></div>

      <ul>
        <li>Reason: <b>${sessionStorage.getItem("question4")}</b></li>
      </ul> </br> </br> </br>

      <li>Right Hand: <b>${ActualObjectRightResult.TestResult}</b></li>
      <div id="finalRight"></div>
      
      <ul>
        <li>Reason: <b>${sessionStorage.getItem("question5")}</b></li>
      </ul>

    </ul>
  </div>`;

    } else {

      pageRender = `
  <table style="border-collapse: collapse, text-align: center;">
  <tbody style="align-items: center, align-content: center;">

    <tr>
      <th><label class="subtitle">Previous Session</label></th>
      <th><label class="subtitle">Current Session</label></th>
    </tr>

    <tr>
      <th colspan="2"> </br> </br> <label class="subtitle">Session Conducted at</label> </th>
    </tr>
    
    <tr>
      <td style="border: 2px solid black">
        <label class="subtitle"><center>${ActualPreviousResult.DateofSession}</center></label>
      </td>

      <td style="border: 2px solid black">
        <label class="subtitle"><center>${dateString}</center></label>
      </td>
    </tr>

    <tr>
      <th colspan="2"> </br> </br> <label class="subtitle">Levels of Mobility</label> </th>
    </tr>

    <tr>
      <td style="border: 2px solid black">
        <p>Previous Level: <b>${ActualPreviousResult.TUGTestResults.LevelsOfMobility.PreviousLevelofMobility}</b></p>
      </td>

      <td style="border: 2px solid black">
        <p>Previous Level: <b>${sessionStorage.getItem("TUGQuestion1")}</b></p>
      </td>
    </tr>

    <tr>
      <td style="border: 2px solid black">
      <p>Current Level: <b>${ActualPreviousResult.TUGTestResults.LevelsOfMobility.CurrentLevelofMobility}</b></p>
      </td>

      <td style="border: 2px solid black">
        <p>Current Level: <b>${sessionStorage.getItem("TUGQuestion2")}</b></p>
      </td>
    </tr>

    <tr>
      <th colspan="2"> </br> </br> <label class="subtitle">Timed Up and Go Test</label> </th>
    </tr>

    <tr>
      <td style="border: 2px solid black">
          <p>Time Taken: <b>${ActualPreviousResult.TUGTestResults.RiskOfFallStatus.TimeTakenInSeconds} seconds</b></p>
          <p>Status: <b>${ActualPreviousResult.TUGTestResults.RiskOfFallStatus.Status}</b></p>
          <p>Carried Out?: <b>${ActualPreviousResult.TUGTestResults.TUGTestCarriedOut}</b></p>
      </td>

      <td style="border: 2px solid black">
        <p>Time Taken: <b>${sessionStorage.getItem("TUGTimer")} seconds</b></p>
        <p>Status: <b>${sessionStorage.getItem("TUGStatus")}</b></p>
        <p>Carried Out?: <b>${sessionStorage.getItem("TUGTestCarriedOut")}</b></p>
      </td>
    </tr>

  <tr>
    <th colspan="2">  </br>  </br> <label class="subtitle">Grip Strength test</label> </th>
  </tr>

  <tr>
    <td style="border: 2px solid black">
      <p>Dominant Hand: <b>${ActualPreviousResult.GripStrengthResults.Question1}</b></p>
    </td>

    <td style="border: 2px solid black">
      <p>Dominant Hand: <b>${sessionStorage.getItem("question1")}</b></p> 
    </td>
  </tr>

  <tr>
    <td style="border: 2px solid black">
      <p>Left Hand: <b>${ActualPreviousResult.GripStrengthResults.MaxLeftHandResult.TestResult}</b></p>
      <div id="actualPreviousLeft"></div>
      <p>Reason: <b>${ActualPreviousResult.GripStrengthResults.Question4}</b></p>
    </td>

    <td style="border: 2px solid black;">
      <p>Left Hand: <b>${ActualObjectLeftResult.TestResult}</b></p>
      <div id="finalLeft"></div>
      <p>Reason: <b>${sessionStorage.getItem("question4")}</b></p>
    </td>
  </tr>

  <tr>    
    <td style="border: 2px solid black">
      <p>Right Hand: <b>${ActualPreviousResult.GripStrengthResults.MaxRightHandResult.TestResult}</b></p>
      <div id="actualPreviousRight"></div>
      <p>Reason: <b>${ActualPreviousResult.GripStrengthResults.Question5}</b></p>
    </td>

    <td style="border: 2px solid black">
      <p>Right Hand: <b>${ActualObjectRightResult.TestResult}</b></p>
      <div id="finalRight"></div>
      <p>Reason: <b>${sessionStorage.getItem("question5")}</b></p>
    </td>
  </tr>

  </tbody>
</table>
  `;

    }

    document.getElementById("pageRender").innerHTML = pageRender;
  }


  const goBack = () => {
    navigate("/GripStrength4");
  };

const dataArray = {
  date: dateString,
  lefthandrisk: ActualObjectLeftResult.Risk,
  lefthandresult: ActualObjectLeftResult.TestResult,
  righthandrisk: ActualObjectRightResult.Risk,
  righthandresult: ActualObjectRightResult.TestResult,
  question1: sessionStorage.getItem("question1"),
  question2: sessionStorage.getItem("question2"),
  question3: sessionStorage.getItem("question3"),
  question4: sessionStorage.getItem("question4"),
  question5: sessionStorage.getItem("question5"),
  currentmobility: sessionStorage.getItem("TUGQuestion2"),
  previousmobility: sessionStorage.getItem("TUGQuestion1"),
  riskoffallstatus: sessionStorage.getItem("TUGStatus"),
  tugtimetaken: sessionStorage.getItem("TUGTimer"),
  tugcarriedout: sessionStorage.getItem("TUGTestCarriedOut")
}
  


  return (
    <div className="screen">
      <Header typography = {typography} history = {"/GripStrengthTest4"} name = {"Summary"} />

      <div className="pageRenderer">
        <div id="pageRender" justifyContent="center" alignItems ="center">

        </div>
      </div>
      <button className="next-button" onClick={validateForm}>
        Submit
      </button>
    </div>
  );
};

export default Summary;
