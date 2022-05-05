import "./CommonStyle.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
import Header from "../header";


const GripStrength3 = () => {
  var typography = "This is where you can input the Grip Strength test results using the dynamometer. Some fields might be disabled depending on the answers to the previous questions.";
  const [leftInput1, setLeftInput1] = useState(0);
  const [leftInput2, setLeftInput2] = useState(0);
  const [rightInput1, setRightInput1] = useState(0);
  const [rightInput2, setRightInput2] = useState(0);
  const [error, setError] = useState("");
  const [errorLeft, setErrorLeft] = useState("");
  const [errorRight, setErrorRight] = useState("");
  const [errorConfirm, setErrorConfirm] = useState(false);


  const question1 = sessionStorage.getItem("question1");
  const question2 = sessionStorage.getItem("question2");
  const question3 = sessionStorage.getItem("question3");


  const LeftResult = { TestResult: "No Left Result", Risk: "Unidentified Risk" };
  const RightResult = { TestResult: "No Right Result", Risk: "Unidentified Risk" };
  sessionStorage.setItem("MaxLeftHandResult", JSON.stringify(LeftResult));
  sessionStorage.setItem("MaxRightHandResult", JSON.stringify(RightResult));

  let risk = "Unidentified Risk";


  const navigate = useNavigate();


  useEffect(() => {
  if (sessionStorage.getItem("question1") !== '' || sessionStorage.getItem("question2") !== '' || sessionStorage.getItem("question3") !== '') {
    if (
      question2 == "recent pain right-hand" ||
      question3 == "yes recent surgery right-hand"
    ) {
      document.getElementById("rightHandFieldset").hidden = true;
      setErrorRight(
        "Results disabled due to recent pain or surgery in right hand"
      );
    }
    if (question2 == "recent pain left-hand" || question3 == "yes recent surgery left-hand") {
      document.getElementById("leftHandFieldset").hidden = true;
      setErrorLeft(
        "Results disabled due to recent pain or surgery in left hand"
      );
    }
    if (question1 == "Right Hand") {
      if (question2 == "recent pain right-hand" || question3 == "yes recent surgery right-hand") {
        document.getElementById("rightHandFieldset").hidden = true;
        document.getElementById("leftHandFieldset").hidden = true;
        setErrorRight(
          "Results disabled due to recent pain or surgery in dominant hand"
        );
        setErrorLeft(
          "Results disabled due to recent pain or surgery in dominant hand"
        );
      }
    }
    if (question1 == "Left Hand") {
      if (question2 == "recent pain left-hand" || question3 == "yes recent surgery left-hand") {
        document.getElementById("rightHandFieldset").hidden = true;
        document.getElementById("leftHandFieldset").hidden = true;
        setErrorRight(
          "Results disabled due to recent pain or surgery in dominant hand"
        );
        setErrorLeft(
          "Results disabled due to recent pain or surgery in dominant hand"
        );
      }
    }
  } 
});

  function calculateRisk(result, gender) {

    if (gender == "Male") {
      if (result < 27) {
        return (risk = "High Risk");
      }
      else {
        return (risk = "Low Risk");
      }

    } else if (gender == "Female") {

      if (result < 16) {
        return (risk = "High Risk");
      }

      else {
        return (risk = "Low Risk");
      }
    } else {
      const MResult = calculateRisk(result, "Male");
      const FResult = calculateRisk(result, "Female")
      const AllRisks = { MResult, FResult };
      return AllRisks;
    }
  }

  function maxVal(input, input2) {
    const values = [input, input2];
    const maxValue = Math.max(...values);
    return maxValue;
  }

  async function onSubmit() {

    // let patientData = sessionStorage.getItem("PatientData");
    // let actualPatientData = JSON.parse(patientData);

    // console.log("The Patients object: " , actualPatientData);
    // let DatabaseGender = actualPatientData.gender;
    // console.log("The patient gender: ", DatabaseGender);

    if (errorConfirm == true) {
      navigate("/GripStrength4");
    }
    setError("");

    if (leftInput1 <= 0 && leftInput2 <= 0 && rightInput1 <= 0 && rightInput2 <= 0) {
      setErrorRight("");
      setErrorLeft("");
      setError("You're about to proceed without inputting anything, click next button again to proceed without any values");
      setErrorConfirm(true);
    }
    else if (leftInput1 <= 0 && leftInput2 <= 0) {
      setError("");
      setErrorRight("");
      setErrorLeft("You're about to proceed without inputting LEFT HAND results, click next button again to proceed without Left Hand values");
      sessionStorage.setItem("MaxLeftHandResult", JSON.stringify(LeftResult));
      setErrorConfirm(true);
    }
    else if (rightInput1 <= 0 && rightInput2 <= 0) {
      setError("");
      setErrorLeft("");
      setErrorRight("You're about to proceed without inputting RIGHT HAND results, click next button again to proceed without Right Hand values");
      sessionStorage.setItem("MaxRightHandResult", JSON.stringify(RightResult));
      setErrorConfirm(true);
    }
    if (leftInput1 > 0 || leftInput2 > 0) {

      let maxValue = maxVal(leftInput1, leftInput2);
      //Remember to Replace "X" with gender from Database!
      // LeftResult.Risk = calculateRisk(maxValue, DatabaseGender);
      LeftResult.TestResult = `Left Max Result: ${maxValue}kg`
      sessionStorage.setItem(
        "MaxLeftHandResult",
        JSON.stringify(LeftResult)
      );
    }
    if (rightInput1 > 0 || rightInput2 > 0) {
      let maxValue = maxVal(rightInput1, rightInput2);
      //Remember to Replace "X" with gender from Database!
      // RightResult.Risk = calculateRisk(maxValue, DatabaseGender);
      RightResult.TestResult = `Right Max Result: ${maxValue}kg`

      sessionStorage.setItem(
        "MaxRightHandResult",
        JSON.stringify(RightResult)
      );
    }

    let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
    let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");

    // console.log("Left Hand Result: ", JSON.parse(SessionLeftResult));
    // console.log("Right Hand Result: ", JSON.parse(SessionRightResult));
    // console.log("\n");

    let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
    let ActualObjectRightResult = JSON.parse(SessionRightResult);

    if (leftInput1 > 0 || leftInput2 > 0 || rightInput1 > 0 || rightInput2 > 0) {
      navigate("/GripStrength4");
    }
  }

  return (
    <div className="screen">
      <Header typography = {typography} history = {"/GripStrength2"} name = {"Grip Strength Test"} />

      <div className="main-section">
        <h4>
          Please fill the fields for both hands, or only fill for one of the
          hands
        </h4>
        <h4>
          In case patient can only provide 1 reading, leave 2nd reading blank or
          0
        </h4><br/>
        {error}
        <h3>Left Hand Results</h3>
        <form>
          <fieldset id="leftHandFieldset" className="fieldset">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      width: "33%",
                    }}
                  >
                    <label>1st Reading</label>
                    <TextField
                      fullWidth
                      id="FirstReading"
                      className="gripInputs"
                      label="Required"
                      type="number"
                      variant="filled"
                      onChange={(event) => {
                        setLeftInput1(event.target.value);
                        setErrorConfirm(false);
                      }}
                      InputProps={{
                        inputProps: { min: 0 },
                        startAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                        inputMode: "numeric",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      width: "33%",
                    }}
                  ></td>
                  <td
                    style={{
                      textAlign: "right",
                      width: "33%",
                    }}
                  >
                    <label>2nd Reading</label>
                    <TextField
                      id="Second Reading"
                      className="gripInputs"
                      label="Required"
                      type="number"
                      variant="filled"
                      onChange={(event) => {
                        setLeftInput2(event.target.value);
                        setErrorConfirm(false);
                      }}
                      InputProps={{
                        inputProps: { min: 0 },
                        startAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                        inputMode: "numeric",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: "left",
                    width: "33%",
                  }}
                ></td>
                <td
                  style={{
                    textAlign: "center",
                    width: "33%",
                  }}
                ></td>
                <td
                  style={{
                    textAlign: "right",
                    width: "33%",
                  }}
                ></td>
              </tr>
            </tbody>
          </table>
          {errorLeft}

          <br/><br/><h3>Right Hand Results</h3>

          <fieldset id="rightHandFieldset" className="fieldset">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      width: "33%",
                    }}
                  >
                    <label>1st Reading</label>
                    <TextField
                      fullWidth
                      id="FirstReading"
                      className="gripInputs"
                      label="Required"
                      type="number"
                      variant="filled"
                      onChange={(event) => {
                        setRightInput1(event.target.value);
                        setErrorConfirm(false);
                      }}
                      InputProps={{
                        inputProps: { min: 0 },
                        startAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                        inputMode: "numeric",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      width: "33%",
                    }}
                  ></td>
                  <td
                    style={{
                      textAlign: "right",
                      width: "33%",
                    }}
                  >
                    <label>2nd Reading</label>
                    <TextField
                      id="Second Reading"
                      className="gripInputs"
                      label="Required"
                      type="number"
                      variant="filled"
                      onChange={(event) => {
                        setRightInput2(event.target.value);
                        setErrorConfirm(false);
                      }}
                      InputProps={{
                        inputProps: { min: 0 },
                        startAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                        inputMode: "numeric",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: "left",
                    width: "33%",
                  }}
                ></td>
                <td
                  style={{
                    textAlign: "center",
                    width: "33%",
                  }}
                ></td>
                <td
                  style={{
                    textAlign: "right",
                    width: "33%",
                  }}
                ></td>
              </tr>
            </tbody>
          </table>
          {errorRight}
        </form>
      </div>
      <button className="next-button" onClick={onSubmit}>
        Next
      </button>
    </div>
  );
};

export default GripStrength3;
