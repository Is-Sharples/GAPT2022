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

function GetPatientData() {

  useEffect(() => {
    sessionStorage.setItem("PatientData" , 0);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  let [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goBack = () => {
    navigate("/");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
      <AppBar position="static" style = {{background: '#015b98'}}>
        <br></br>
      <Grid container spacing={1} >
          <Grid item xs={2} sm={1.1}>
          <Box display="flex" justifyContent="center">
          <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
            <ArrowBack fontSize="large"></ArrowBack>
          </Fab>
          </Box>
          </Grid>
          <Grid item xs={8} sm={9.8}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h7" color="inherit" component="div" align="center" marginTop={1.3} marginBottom={2}>
            <label className="title">Patient Data</label> 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={1.1}>
        <Box display="flex" justifyContent="center">
        <Fab className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add">
          <HelpIcon fontSize="large"></HelpIcon>
        </Fab>
        </Box>
        </Grid>
        </Grid>
        </AppBar>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}>
          <Typography sx={{ p: 5, fontSize: "1.3em" }}>
            This page requires to insert the patient's ID card number so that the data will be inserted into
            the database accordingly. For testing copy and paste this Patient Id: 754569D
          </Typography>
        </Popover>
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