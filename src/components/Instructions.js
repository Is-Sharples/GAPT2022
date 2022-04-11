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

function Instructions() {
    const goBack = () => {
        navigate("/ListOfEquipment");
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
    const navigate = useNavigate();
    function navToNextPage() {
        sessionStorage.setItem("Timer", true);
        navigate("/Timer")
    }

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
            <label className="title">Instructions</label> 
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
                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page consists of all the instructions you need as well as the instructions that should be read to the patient</Typography>
                </Popover>
        

            <div className="main-section">
                <label className="subtitle">Instructions for Clinician</label>
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
                <label className="subtitle">Instruction for Patient</label>
                <div>
                    <ol>
                        <li className="list-item">“On the word GO you will stand up, walk to the line on the floor, turn around and walk back to the chair and sit down. Walk at you regular pace.”</li>
                    </ol>
                </div>
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default Instructions;