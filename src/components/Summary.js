import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { Box, height } from "@mui/system";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import { AppBar, FormControl, MenuItem } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import Header from './header';
import "./styles/Summary.css";

export default function Summary() {

    const ilbierah = "Ilbierah";
    const illum = "Illum";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [option, setOption] = React.useState([
        {ilbierah}, {illum}
    ]);
    const [value, setValue] = React.useState([0,1,2,3]);
    
    const handleChange =  (event) => {
        setOption(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    

    const saveValue = (event) => {
        setValue(event.value);
    }

    
      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;

  return (
    <div className="screen">
            <Header />


        <div className="card">
            <p className="name">Patient's Name</p>
            <p className="id">123456L</p>
            <FormControl sx={{['@media (min-width:720px)']: {minWidth: 280}, ['@media (max-width:720px)']: {minWidth: 250} }}>
            <InputLabel id="blabel" sx={{fontSize: 18}}>Date of Entry</InputLabel>
            <Select labelId="blabel" id="select" value={option} label="Date Of Entry" onChange={handleChange} style={{color: "black"}}>
            <MenuItem value={ilbierah}>Ilbierah</MenuItem>  
            <MenuItem value={illum}>Illum</MenuItem> 
            </Select>
            </FormControl>
            <button className='newVisit'>
                <span><AddIcon/></span>
            </button>
            <div className="lastModifiedBy">
                <p>Last Modified by: Doctor</p>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Barthel Score</p>
            </div>
            <div className="grid-page">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ADMISSION</th>
                            <th>DISCHARGE</th>
                            <th>+/-</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid-data">
                            <td className="section">Mobility</td>
                            <td>1</td>
                            <td>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Grooming</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Dressing</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bathing</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Stairs</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bowels</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Transfers</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bladder</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Feeding</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Toilet Use</td>
                            <td>1</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Total</td>
                            <td>10</td>
                            <td>30</td>
                            <td>20</td>
                        </tr>
                        <br></br>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Height & Weight</p>
            </div>
            <div className="grid-page">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ADMISSION</th>
                            <th>DISCHARGE</th>
                            <th>+/-</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid-data">
                            <td className="section">Height</td>
                            <td className="grid-row">1</td>
                            <td className="grid-row">3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Weight</td>
                            <td>1</td>
                            <td>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Has patient<br></br>lost weight?</td>
                            <td>1</td>
                            <td>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr data-index={3} className="grid-data">
                            <td className="section">Was weight lost<br></br>due to exercise?</td>
                            <td data-value={1}>1</td>
                            <td value={3}>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

  );
}
