import './CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
function LevelsOfMobility() {


    const [question1, setAnswerQuestion1] = useState("");
    const [question2, setAnswerQuestion2] = useState("");
    
    const navigate = useNavigate();

    console.log("Previous Level of Mobility ", sessionStorage.getItem("TUGQuestion1"));
    console.log("Current Level of Mobility ", sessionStorage.getItem("TUGQuestion2"));
    console.log("TUG Timer ", sessionStorage.getItem("TUGTimer"));
    console.log("TUG Status ", sessionStorage.getItem("TUGStatus"));
    console.log("TUG Carried out ", sessionStorage.getItem("TUGTestCarriedOut"));
    console.log("GST Question 1 ", sessionStorage.getItem("question1"));
    console.log("GST Question 2 ", sessionStorage.getItem("question2"));
    console.log("GST Question 3 ", sessionStorage.getItem("question3"));
    console.log("GST Question 4 ", sessionStorage.getItem("question4"));
    console.log("GST Question 5 ", sessionStorage.getItem("question5"));
    console.log("Instructions ", sessionStorage.getItem("Instructions"));
    console.log("Timer ", sessionStorage.getItem("Timer"));
    console.log("\n");

    function validateForm() {

        if (question2 == "") {
            document.getElementById("question2-other-alert").innerHTML = "";
            document.getElementById("question2-alert").innerHTML = "Please select an option!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else if (question2 == "other" || question2 == "Independent with Walking Aid: Other: ") {
            document.getElementById("question2-alert").innerHTML = "";
            document.getElementById("question2-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else {
            document.getElementById("question2-alert").innerHTML = "";
            document.getElementById("question2-other-alert").innerHTML = "";
        }
        if (question1 == "") {
            document.getElementById("question1-other-alert").innerHTML = "";
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else if (question1 == "other" || question1 == "Independent with Walking Aid: Other: ") {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }

        if ((question1 != "" && question2 != "") && (question1 != "other" && question2 != "other") && (question1 != "Independent with Walking Aid: Other: " && question2 != "Independent with Walking Aid: Other: ")) {
            sessionStorage.setItem("TUGQuestion1", question1);
            sessionStorage.setItem("TUGQuestion2", question2);
            navigate("/ListOfEquipment");
        }
    }

    const goBack = () => {
        navigate("/");
    };

    //help poppup function
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    console.log("Patient Data: " + sessionStorage.getItem("PatientData"))
    
    return (
        <div className="screen">   
        <AppBar position="static" style = {{background: '#015b98'}}>
        <Box display="flex" justifyContent="center">
            {}
        </Box>
        <Grid container spacing={1} >
          <Grid item xs={2} sm={1.1} >
          <Box display="flex" justifyContent="center">
          <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
            <ArrowBack fontSize="large" marginLeft={0}></ArrowBack>
          </Fab>
          </Box>
          </Grid>
          <Grid item xs={8} sm={9.8}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h7" color="inherit" component="div" align="center" marginTop={1.3} marginBottom={2}>
            <label className="title">Levels Of Mobility</label> 
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
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}>
                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page is where you must ask the patient the following questions regarding their past mobility levels. Please answer all the questions and sub-questions before progressing</Typography>
                </Popover>
            

            <div className="main-section">
                <form id="question1Form">
                    <label className="subtitle">1. Previous level of mobility (past six (6) months)</label>
                    <h3 className="alert" id="question1-alert"></h3>
                    <div>
                        <input type="radio" id="radio-button1-prev-ind-and-unaid" name="group1" value="Independent and Unaided" onChange={(e) => setAnswerQuestion1(e.target.value)}
                            onClick={function () {
                                document.getElementById("PreviousLevelOfMobilityFieldset").disabled = true;
                                document.getElementById("radio-button-prev-stick").checked = false;
                                document.getElementById("radio-button-prev-roll-frame").checked = false;
                                document.getElementById("radio-button-prev-gutt-frame").checked = false;
                                document.getElementById("radio-button-prev-other").checked = false;
                                document.getElementById("radio-button-prev-req-help").checked = false;
                                document.getElementById("radio-button-prev-dependant").checked = false;
                            }} />
                        <label className="radio-button-label" htmlFor="radio-button1-prev-ind-and-unaid">Independent and Unaided</label>
                    </div>
                    <input type="radio" id="radio-button1-prev-ind-and-walk-aid" name="group1" value="Independent with Walking Aid" onChange={(e) => setAnswerQuestion1("")}
                        onClick={function () {
                            document.getElementById("PreviousLevelOfMobilityFieldset").disabled = false;
                        }} />

                    <label className="radio-button-label" htmlFor="radio-button1-prev-ind-and-walk-aid">Independent with Walking Aid</label>

                    <fieldset id="PreviousLevelOfMobilityFieldset" className="indented-radio-buttons" disabled={true}>
                        <div>
                            <input type="radio" id="radio-button-prev-stick" name="group1-1" value="Stick" onChange={(e) => {
                                setAnswerQuestion1("Independent with Walking Aid: " + e.target.value)
                                document.getElementById("text-box1").disabled = true
                            }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-stick">Stick</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-roll-frame" name="group1-1" value="Rollator Frame" onChange={(e) => {
                                setAnswerQuestion1("Independent with Walking Aid: " + e.target.value)
                                document.getElementById("text-box1").disabled = true
                            }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-roll-frame">Rollator Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-gutt-frame" name="group1-1" value="Gutter Frame" onChange={(e) => {
                                setAnswerQuestion1("Independent with Walking Aid: " + e.target.value)
                                document.getElementById("text-box1").disabled = true
                            }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-gutt-frame">Gutter Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other" onClick={function () {
                                document.getElementById("text-box1").disabled = false;
                            }} onChange={(e) => setAnswerQuestion1(e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-other">Other: </label>
                            <input type="text" id="text-box1" disabled={true} onBlur={(e) => setAnswerQuestion1("Independent with Walking Aid: Other: " + e.target.value)} />
                            <h3 className="alert" id="question1-other-alert"></h3>
                        </div>
                    </fieldset>
                    <div>
                        <input type="radio" id="radio-button-prev-req-help" name="group1" value="Requires Help of 1 Person" onClick={function () {
                            document.getElementById("PreviousLevelOfMobilityFieldset").disabled = true;
                            document.getElementById("radio-button-prev-stick").checked = false;
                            document.getElementById("radio-button-prev-roll-frame").checked = false;
                            document.getElementById("radio-button-prev-gutt-frame").checked = false;
                            document.getElementById("radio-button-prev-other").checked = false;
                        }} onChange={(e) => {
                            setAnswerQuestion1("Independent with Walking Aid: " + e.target.value)
                            document.getElementById("text-box1").disabled = true
                        }} />
                        <label className="radio-button-label" htmlFor="radio-button-prev-req-help">Requires Help of 1 Person</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-prev-dependant" name="group1" value="Dependant, Chair User or Bedbound" onClick={function () {
                            document.getElementById("PreviousLevelOfMobilityFieldset").disabled = true;
                            document.getElementById("radio-button-prev-stick").checked = false;
                            document.getElementById("radio-button-prev-roll-frame").checked = false;
                            document.getElementById("radio-button-prev-gutt-frame").checked = false;
                            document.getElementById("radio-button-prev-other").checked = false;
                        }} onChange={(e) => {
                            setAnswerQuestion1("Independent with Walking Aid: " + e.target.value);
                            document.getElementById("text-box1").disabled = true;
                        }} />
                        <label className="radio-button-label" htmlFor="radio-button-prev-dependant">Dependant, Chair User or Bedbound</label>
                    </div>
                </form>
                <form id="question2Form">
                    <label className="subtitle">2. Current level of mobility</label>
                    <h3 className="alert" id="question2-alert"></h3>
                    <div>
                        <input type="radio" id="radio-button2-prev-ind-and-unaid" name="group2" value="Independent and Unaided" onChange={(e) => setAnswerQuestion2(e.target.value)}
                            onClick={function () {
                                document.getElementById("CurrentLevelofMobilityFieldset").disabled = true;
                                document.getElementById("radio-button-prev-stick2").checked = false;
                                document.getElementById("radio-button-prev-roll-frame2").checked = false;
                                document.getElementById("radio-button-prev-gutt-frame2").checked = false;
                                document.getElementById("radio-button-prev-other2").checked = false;
                                document.getElementById("radio-button-prev-req-help2").checked = false;
                                document.getElementById("radio-button-prev-dependant2").checked = false;
                            }} />
                        <label className="radio-button-label" htmlFor="radio-button2-prev-ind-and-unaid">Independent and Unaided</label>
                    </div>
                    <input type="radio" id="radio-button2-prev-ind-and-walk-aid" name="group2" value="Independent with Walking Aid" onChange={(e) => setAnswerQuestion2("")}
                        onClick={function () {
                            document.getElementById("CurrentLevelofMobilityFieldset").disabled = false;
                        }} />

                    <label className="radio-button-label" htmlFor="radio-button2-prev-ind-and-walk-aid">Independent with Walking Aid</label>

                    <fieldset id="CurrentLevelofMobilityFieldset" className="indented-radio-buttons" disabled={true}>
                        <div>
                            <input type="radio" id="radio-button-prev-stick2" name="group2-1" value="Stick" onChange={(e) => {
                                setAnswerQuestion2("Independent with Walking Aid: " + e.target.value)
                                document.getElementById("text-box2").disabled = true
                            }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-stick2">Stick</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-roll-frame2" name="group2-1" value="Rollator Frame" onChange={(e) => {
                                setAnswerQuestion2("Independent with Walking Aid: " + e.target.value)
                                document.getElementById("text-box2").disabled = true
                            }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-roll-frame2">Rollator Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-gutt-frame2" name="group2-1" value="Gutter Frame" onChange={(e) => {
                                setAnswerQuestion2("Independent with Walking Aid: " + e.target.value)
                                document.getElementById("text-box2").disabled = true
                            }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-gutt-frame2">Gutter Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other2" name="group2-1" value="other" onClick={function () {
                                document.getElementById("text-box2").disabled = false;
                            }} onChange={(e) => setAnswerQuestion2(e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-other2">Other: </label>
                            <input type="text" id="text-box2" disabled={true} onBlur={(e) => setAnswerQuestion2("Independent with Walking Aid: Other: " + e.target.value)} />
                            <h3 className="alert" id="question2-other-alert"></h3>
                        </div>
                    </fieldset>
                    <div>
                        <input type="radio" id="radio-button-prev-req-help2" name="group2" value="Requires Help of 1 Person" onClick={function () {
                            document.getElementById("CurrentLevelofMobilityFieldset").disabled = true;
                        }} onChange={(e) => {
                            setAnswerQuestion2("Independent with Walking Aid: " + e.target.value)
                            document.getElementById("CurrentLevelofMobilityFieldset").disabled = true;
                            document.getElementById("radio-button-prev-stick2").checked = false;
                            document.getElementById("radio-button-prev-roll-frame2").checked = false;
                            document.getElementById("radio-button-prev-gutt-frame2").checked = false;
                            document.getElementById("radio-button-prev-other2").checked = false;
                        }} />
                        <label className="radio-button-label" htmlFor="radio-button-prev-req-help2">Requires Help of 1 Person</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-prev-dependant2" name="group2" value="Dependant, Chair User or Bedbound" onClick={function () {
                            document.getElementById("CurrentLevelofMobilityFieldset").disabled = true;
                        }} onChange={(e) => {
                            setAnswerQuestion2("Independent with Walking Aid: " + e.target.value)
                            document.getElementById("CurrentLevelofMobilityFieldset").disabled = true;
                            document.getElementById("radio-button-prev-stick2").checked = false;
                            document.getElementById("radio-button-prev-roll-frame2").checked = false;
                            document.getElementById("radio-button-prev-gutt-frame2").checked = false;
                            document.getElementById("radio-button-prev-other2").checked = false;
                        }} />
                        <label className="radio-button-label" htmlFor="radio-button-prev-dependant2">Dependant, Chair User or Bedbound</label>
                    </div>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Next</button>
        </div>
    );
}
export default LevelsOfMobility;