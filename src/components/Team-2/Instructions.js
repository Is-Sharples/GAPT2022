import './CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
import Header from '../header';
function Instructions() {

    var typography = "This page consists of all the instructions you need as well as the instructions that should be read to the patient";

    const navigate = useNavigate();
    function navToNextPage() {
        sessionStorage.setItem("Timer", true);
        navigate("/Timer")
    }

    return (
        <div className="screen">
            <Header typography = {typography} history = {"/ListOfEquipment"} name = "Instructions" />
               
        

            <div className="main-section">
                <h2>Instructions for Clinician</h2><br/>
                <div>
                    <ol>
                        <li className="list-item">Equipment: arm chair, tape measure, tape, stopwatch.</li>
                        <li className="list-item">Begin the test with the subject sitting correctly (hips all the way to the back of the seat) in a chair with arm rests. The chair should be stable and positioned such that it will not move when the subject moves from sit to stand. The subject is allowed to use the arm rests during the sit-stand and stand-sit movements</li>
                        <li className="list-item">Place a piece of tape or other marker on the floor 3 meters away from the chair so that it is easily seen by the subject.</li>
                        <li className="list-item">Start timing on the word “GO” and stop timing when the subject is seated again correctly in the chair with their back resting on the back of the chair</li>
                        <li className="list-item">The subject wears their regular footwear, may use any gait aid that they normally use during ambulation, but may not be assisted by another person. There is no time limit. They may stop and rest (but not sit down) if they need to.</li>
                        <li className="list-item">Normal healthy elderly usually complete the task in ten seconds or less. Very frail or weak elderly with poor mobility may take 2 minutes or more.</li>
                        <li className="list-item">The subject should be given a practise trial that is not times, before testing.</li>
                        <li className="list-item">Results correlate with gait speed, balance, functional level, the ability to go out, and can follow change over time.</li>
                    </ol>
                </div>
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default Instructions;