import './CommonStyle.css';
import React, { useState } from 'react';
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

const GripStrength2 = () => {
    const navigate = useNavigate();

    const [question1, setAnswerQuestion1] = useState("");
    const [question2, setAnswerQuestion2] = useState("");
    const [question3, setAnswerQuestion3] = useState("");
    // sessionStorage.setItem("question1", question1);
    // sessionStorage.setItem("question2", question2);
    // sessionStorage.setItem("question3", question3);
    var typography = "This page consists of questions that you should ask to the patient. Please answer all questions and sub questions before progressing to the next page.";
    // console.log("Question 1: ", question1);
    // console.log("Question 2: ", question2);
    // console.log("Question 3: ", question3);
    // console.log("\n");


    function validateForm() {

        // console.log("Entered into the validate form");
        if (question3 == "") {
            document.getElementById("question3-alert").innerHTML = "Please select an option!";
            document.getElementById("question3Form").scrollIntoView(false);
        }
        else {
            document.getElementById("question3-alert").innerHTML = "";
        }
        if (question2 == "") {
            document.getElementById("question2-alert").innerHTML = "Please select an option!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else {
            document.getElementById("question2-alert").innerHTML = "";
        }
        if (question1 == "") {
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
        }
        if (question1 != "" && question2 != "" && question3 != "") {
            // console.log("Passing results to GripStrength");
            sessionStorage.setItem("question1", question1);
            sessionStorage.setItem("question2", question2);
            sessionStorage.setItem("question3", question3);
            // GripStrengthResults2(question1, question2, question3);
            navigate("/GripStrength3")
        }
    }
    

    
    
    return (
        <div className="screen">
            <Header typography = {typography} history = {"/GripStrength"} name = {"Grip Strength Test"} />
            
            <div className="main-section">
                <h2>Test Questions</h2><br/>
                <form id="question1Form">
                    <p className="par">1. Which hand do you use to sign your name? (This is the <b><u>dominant hand</u></b>)</p><br/>
                    <h3 className="alert" id="question1-alert"></h3>
                    <input className="radio" type="radio" id="gst-question1-radio1" name="question1" value="Right Hand" onChange={(e) => setAnswerQuestion1(e.target.value)} />
                    <label className="radio-button-label" htmlFor="gst-question1-radio1">Right Hand</label>
                    <br />
                    <input className="radio" type="radio" id="gst-question1-radio2" name="question1" value="Left Hand" onChange={(e) => setAnswerQuestion1(e.target.value)} />
                    <label className="radio-button-label" htmlFor="gst-question1-radio2">Left Hand</label>
                </form>

                <form id="question2Form">
                    <p className="par">2. Have you had any recent pain in your hand or wrist or any acute flare-up in your hand or wrist from conditions like arthritis?</p><br/>
                    <h3 className="alert" id="question2-alert"></h3>
                    <input className="radio" type="radio" id="gst-question2-radio1" name="question2-yes-no" onChange={(e) => setAnswerQuestion2("")} onClick={function () {
                        document.getElementById("recentPainFieldset").disabled = false;
                    }} value="yes" />
                    <label className="radio-button-label" htmlFor="gst-question2-radio1">Yes</label>
                    <br />
                    <fieldset id="recentPainFieldset" className="indented-radio-buttons fieldset" disabled={true}>
                        <input className="radio" type="radio" id="gst-question2-radio2" name="question2" value="recent pain right-hand" onChange={(e) => setAnswerQuestion2(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question2-radio2">Right Hand</label>
                        <br />
                        <input className="radio" type="radio" id="gst-question2-radio3" name="question2" value="recent pain left-hand" onChange={(e) => setAnswerQuestion2(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question2-radio3">Left Hand</label>
                        <br />
                    </fieldset>
                    <input className="radio" type="radio" id="gst-question2-radio4" name="question2-yes-no" onClick={function () {
                        document.getElementById("recentPainFieldset").disabled = true;
                        document.getElementById("gst-question2-radio2").checked = false;
                        document.getElementById("gst-question2-radio3").checked = false;
                    }} value="no recent pain on either hand" onChange={(e) => setAnswerQuestion2(e.target.value)} />
                    <label className="radio-button-label" htmlFor="gst-question2-radio4">No</label>
                    <p className="par"><b>If yes to dominant hand, do not test.</b></p><br/>
                </form>


                <form id="question3Form">
                    <p className="par">3. Have you had any surgery on your hands or arms duing the past 3 months?</p><br/>
                    <h3 className="alert" id="question3-alert"></h3>
                    <input className="radio" type="radio" id="gst-question3-radio1" name="question3-yes-no" onChange={(e) => setAnswerQuestion3("")} onClick={function () {
                        document.getElementById("surgeryFieldset").disabled = false;
                    }} value="yes" />
                    <label className="radio-button-label" htmlFor="gst-question3-radio1">Yes</label>
                    <br />
                    <fieldset id="surgeryFieldset" className="indented-radio-buttons fieldset" disabled={true}>
                        <input className="radio" type="radio" id="gst-question3-radio2" name="question3" value="yes recent surgery right-hand" onChange={(e) => setAnswerQuestion3(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question3-radio2">Right Hand</label>
                        <br />
                        <input className="radio" type="radio" id="gst-question3-radio3" name="question3" value="yes recent surgery left-hand" onChange={(e) => setAnswerQuestion3(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question3-radio3">Left Hand</label>
                        <br />
                    </fieldset>
                    <input className="radio" type="radio" id="gst-question3-radio4" name="question3-yes-no" onClick={function () {
                        document.getElementById("surgeryFieldset").disabled = true;
                        document.getElementById("gst-question3-radio2").checked = false;
                        document.getElementById("gst-question3-radio3").checked = false;
                    }} value="no recent surgery in either hand" onChange={(e) => setAnswerQuestion3(e.target.value)} />
                    <label className="radio-button-label" htmlFor="gst-question3-radio4">No</label>

                    <p className="par"><b>If yes to dominant hand, do not test.</b></p>
                    <br /><br />
                </form>
                <p className="par">"I would like you to take this in your hand. I will ask you to do this two times, both hands. When I say '<b>GO</b>' press as hard as you can."</p><br/>
                <p className="par"><b>Remember</b> to set the dynamometer to zero (0) prior to each squeeze</p>
            </div>
            <button className="next-button" onClick={validateForm}>Next</button>
        </div>
    );
};

export default GripStrength2;