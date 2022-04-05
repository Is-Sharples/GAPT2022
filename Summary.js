<<<<<<< Updated upstream:Summary.js
import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { Box, height } from "@mui/system";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import { AppBar, FormControl, MenuItem } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import "./Summary.css";

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
    
    const goBack = () => {
        navigate("/");
    };

    const saveValue = (event) => {
        setValue(event.value);
    }

      const navigate = useNavigate();
      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;

  return (
    <div className="screen">
        <AppBar className="appbar" position="static" style={{ background: '#01497A'}}>
        <Grid container spacing={1}>
            <Grid item xs={2} sm={1.1}>
            <Box display="flex" justifyContent="center">
            <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" sx={{['@media (min-width:720px)']: {marginTop: 2}, ['@media (max-width:720px)']: {marginTop: 1} }}>
                <ArrowBack fontSize="large" marginLeft={0}></ArrowBack>
            </Fab>
            </Box>
            </Grid>
            <Grid item xs={8} sm={9.8}>
            <Box display="flex" justifyContent="center">
                <Typography variant="h7" color="inherit" component="div" align="center" style={{marginTop: 20, marginBottom: 3.2}}>
                <label className="title">Summary</label> 
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={2} sm={1.1}>
            <Box display="flex" justifyContent="center">
            <Fab className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" sx={{['@media (min-width:720px)']: {marginTop: 2}, ['@media (max-width:720px)']: {marginTop: 1} }}>
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
                This page provides you with a summary of the current patient. This page compares the state of the patient on admission versus
                how the patient is now after having gone through the required sessions.
            </Typography>
            </Popover>

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
=======
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
import Barthel from "./BarthelIndex";
import moment from 'moment';
import "./styles/Summary.css";

export default function Summary() {

    const ilbierah = "Ilbierah";
    const illum = "Illum";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [option, setOption] = React.useState([
        {ilbierah}, {illum}
    ]);
    const [barthel, showBarthel] = useState("false");
    
    const handleChange =  (event) => {
        setOption(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (barthel === "true"){
        return <Barthel/>
    }

      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;

  return (
    <div className="screen">
        <AppBar className="appbar" position="static" style={{ background: '#01497A'}}>
        <Grid container spacing={1}>
            <Grid item xs={2} sm={1.1}>
            <Box display="flex" justifyContent="center">
            <Fab variant="contained" className="mui-icons" onClick={console.log("Clicked.")} aria-label="add" sx={{['@media (min-width:720px)']: {marginTop: 2}, ['@media (max-width:720px)']: {marginTop: 1} }}>
                <ArrowBack fontSize="large"></ArrowBack>
            </Fab>
            </Box>
            </Grid>
            <Grid item xs={8} sm={9.8}>
            <Box display="flex" justifyContent="center">
                <Typography variant="h7" color="inherit" component="div" align="center" style={{marginTop: 20, marginBottom: 3.2}}>
                <label className="title">Summary</label> 
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={2} sm={1.1}>
            <Box display="flex" justifyContent="center">
            <Fab className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" sx={{['@media (min-width:720px)']: {marginTop: 2}, ['@media (max-width:720px)']: {marginTop: 1} }}>
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
                This page provides you with a summary of the current patient. This page compares the state of the patient on admission versus
                how the patient is now after having gone through the required sessions.
            </Typography>
            </Popover>

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
                <button className="input-details" onClick={() => showBarthel("true")}>Input Barthel Index</button>
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
                        <tr>
                            <th></th>
                            <th>{moment(new Date()).format("DD/MM/YYYY")}</th>
                            <th>{moment(new Date()).format("DD/MM/YYYY")}</th>
                            <th></th>
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
                            <td className="total">10</td>
                            <td className="total">30</td>
                            <td className="total">20</td>
                        </tr>
                        <br></br>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Height & Weight</p>
                <button className="input-details">Input Height & Weight</button>
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
>>>>>>> Stashed changes:src/components/Summary.js
