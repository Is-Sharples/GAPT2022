import './CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
import Header from '../header';


function RiskOfFallStatus() {

    var typography = "The following are the patient's results according to the timer in the previous page";

    const navigate = useNavigate();

    

    function navNext(){
        sessionStorage.setItem("RiskOfFallStatus", true);
        navigate("/ReviewQuestion");
    }

    

    return (
        <div className="screen">
            <Header typography = {typography} history = {"/Timer"} name = {"Risk of Falling"} />

            <div className="main-section">
                <label className="subtitle">Risk of Fall Status</label>
                <ul>
                    <li>Status: <b> {sessionStorage.getItem("TUGStatus")} </b></li>
                    <li>Time taken: <b> {sessionStorage.getItem("TUGTimer")} seconds </b></li>
                </ul>
                <label className='subtitle'></label>
                <div>
                    <table className="style">
                        <tbody>
                            <tr>
                                <th className="style">
                                    Risk of Falls
                                </th>
                                <th className="style">
                                    Normative Reference Value
                                </th>
                            </tr>
                            <tr>
                                <td className="style">
                                    Low Risk
                                </td>
                                <td className="style">
                                    &lt;10 seconds
                                </td>
                            </tr>
                            <tr>
                                <td className="style">
                                    Medium Risk
                                </td>
                                <td className="style">
                                    11- 14 seconds
                                </td>
                            </tr>
                            <tr>
                                <td className="style">
                                    High Risk
                                </td>
                                <td className="style">
                                    &gt;15 seconds
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button className="next-button" onClick={navNext}>Next</button>
        </div>
    );
}

export default RiskOfFallStatus;