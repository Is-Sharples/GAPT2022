import './CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React from 'react';
import TUGPhoto from './TUG_Test_Setup.png'
import { Navigate, useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";

function ListOfEquipment() {
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
    console.log(question1);
    console.log(question2);
    console.log("AAA ", sessionStorage.getItem("Instructions"));

    

    function navToNextPage() {
        sessionStorage.setItem("Instructions", true);
        navigate("/Instructions")
    }

    const goBack = () => {
        navigate("/LevelsOfMobility");
    };

    //help poppup function
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="screen">
           <AppBar position="static" style = {{background: '#015b98'}}>
        <Box display="flex" justifyContent="center">

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
            <label className="title">List of Equipment</label> 
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
                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page consists of all the equipment you need and how they should be setup</Typography>
                </Popover>
            

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