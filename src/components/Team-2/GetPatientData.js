import "./CommonStyle.css";
import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import { AppBar } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Header from "../header";
function GetPatientData() {

  var typography = "This page requires to insert the patient's ID card number so that the data will be inserted into the database accordingly. For testing copy and paste this Patient Id: 754569D";

  useEffect(() => {
    sessionStorage.setItem("PatientData" , 0);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  let [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  async function navToNextPage() {

    setError("");

    if (patientId == "") {
      patientId = "blank";
    }
    console.log("The inputted patient id: ", patientId);
    
    let patientData = null;
    patientData = sessionStorage.getItem("PatientData");

    if (patientData != 0) {
      sessionStorage.setItem("PatientID", patientId);
      navigate("/LevelsOfMobility");

    } else {
      console.log("Patient DOES NOT HAVE DATA");
      setError("No Patient was found with that ID, kindly insert it again or Patient is not registerd in the database");
      navigate("/LevelsOfMobility");
    }
  }

  return (
    <div className="screen">
        <Header typography = {typography} history = {"/"} item  name = {"Get Patient Page"} />
       
      <br></br>
      <div className="id-section">
        <TextField
          fullWidth
          id="FirstReading"
          className="gripInputs"
          label="Patient ID"
          placeholder="Input Patient ID"
          type="text"
          variant="outlined"
          onChange={(event) => {
            setPatientId(event.target.value);
          }}
          InputProps={{
            inputProps: { min: 0 },
            startAdornment: (
              <InputAdornment position="start"></InputAdornment>
            ),
            inputMode: "numeric",
          }} />
         </div> 
        {error}
          <button className="next-button" onClick={navToNextPage}>
        Next
        </button>
      
    </div>
  );
}

export default GetPatientData;