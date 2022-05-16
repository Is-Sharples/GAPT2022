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

    function navToNextPage() {
        sessionStorage.setItem("Instructions", true);
        navigate("/Instructions")
    }  

    return (
        <div className="screen">
            <Header typography = {typography} history = {"/LevelsOfMobility"} name = "Timed Up and Go Test" />

            <div className="main-section">
                <h2>List of Equipment</h2><br/>
                <div>
                    <ul>
                        <li className="list-item">Arm-chair</li>
                        <li className="list-item">Tape measure</li>
                        <li className="list-item">Tape</li>
                    </ul>
                </div>
                <h2>Setup of Test</h2><br/>
                <img src={TUGPhoto} />
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default ListOfEquipment;