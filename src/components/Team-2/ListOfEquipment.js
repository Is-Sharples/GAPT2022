import './CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React from 'react';
import TUGPhoto from '../assets/TUG_Test_Setup.png'
import { Navigate, useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
import Header from '../header';

function ListOfEquipment() {


    var typography = "This page consists of all the equipment you need and how they should be setup";

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const question1 = sessionStorage.getItem("TUGQuestion1");
    const question2 = sessionStorage.getItem("TUGQuestion2");
    sessionStorage.setItem("TUGTimer", 0);
    sessionStorage.setItem("TUGStatus", "");
    sessionStorage.setItem("TUGTestCarriedOut", "");
    sessionStorage.setItem("question1", "");
    sessionStorage.setItem("question2", "");
    sessionStorage.setItem("question3", "");
    sessionStorage.setItem("question4", "");
    sessionStorage.setItem("question5", "");
    // console.log(question1);
    // console.log(question2);
    // console.log("AAA ", sessionStorage.getItem("Instructions"));

    

    function navToNextPage() {
        sessionStorage.setItem("Instructions", true);
        navigate("/Instructions")
    }  

    return (
        <div className="screen">
            <Header typography = {typography} history = {"/LevelsOfMobility"} name = "List of Equipment" />

            <div className="main-section">
                <label className="subtitle">List of Equipment</label>
                <div>
                    <ul>
                        <li className="list-item">Arm-chair</li>
                        <li className="list-item">Tape measure</li>
                        <li className="list-item">Tape</li>
                    </ul>
                </div>
                <label className="subtitle">Setup of Test</label>
                <img src={TUGPhoto} style={{
                    padding: 20
                }} />
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default ListOfEquipment;