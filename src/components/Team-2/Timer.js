import React, { useEffect, useState } from "react";
import './CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";

const Timer = () => {
    const navigate = useNavigate();
    function navToNextPage() {
        navigate("/RiskOfFallStatus")
    }
    const goBack = () => {
        navigate("/Instructions");
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

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [trial, setTrial] = useState(true);
    const [clicks, setClicks] = useState(0);
    let [status, setStatus] = useState("Low Risk");

    function toggle() {
        setClicks(clicks + 1);
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        status = "Low Risk";
        setIsActive(false);
        setTrial(false);
    }

    useEffect(() => {
        try {
            let interval = null;
            // console.log("clicks: ", clicks);
            document.getElementById("status").innerHTML = seconds + " seconds - " + status;
            if (clicks < 2) {
                document.getElementById("main-button").disabled = false;
                document.getElementById("reset-button").disabled = true;
                document.getElementById("next-button").disabled = true;
            }
            else {
                document.getElementById("next-button").disabled = false;
                document.getElementById("main-button").disabled = true;
                if (trial) {
                    document.getElementById("reset-button").disabled = false;
                }
                setClicks(0);
            }
            if (trial && !isActive) {
                document.getElementById("main-button").innerHTML = "TRIAL:<br/>Press Here to begin ...";
                document.getElementById("main-button").className = "TimerLayoutBtnStart";
            }
            else if (trial && isActive) {
                if (seconds <= 10) {
                    status = "Low Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnStart";
                }
                else if (seconds >= 11 && seconds <= 14) {
                    status = "Medium Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnMed";
                }
                else if (seconds > 14 && seconds < 20) {
                    status = "High Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnStop";
                }
                else if (seconds >= 20) {
                    status = "High Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnStop";
                    document.getElementById("main-button").click();
                }
                document.getElementById("main-button").innerHTML = "" + seconds + "<br/>" + status + "<br/>" + "Press here to Stop";
                document.getElementById("status").innerHTML = seconds + " seconds - " + status;
            }
            else if (!trial && !isActive) {
                document.getElementById("main-button").innerHTML = "Press here to begin ...";
                document.getElementById("main-button").className = "TimerLayoutBtnStart";
            }
            else if (!trial && isActive) {
                if (seconds <= 10) {
                    status = "Low Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnStart";
                }
                else if (seconds >= 11 && seconds <= 14) {
                    status = "Medium Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnMed";
                }
                else if (seconds > 14 && seconds < 20) {
                    status = "High Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnStop";
                }
                else if (seconds >= 20) {
                    status = "High Risk";
                    document.getElementById("main-button").className = "TimerLayoutBtnStop";
                    document.getElementById("main-button").click();
                }
                document.getElementById("main-button").innerHTML = "" + seconds + "<br/>" + status + "<br/>" + "Press here to Stop";
                document.getElementById("status").innerHTML = seconds + " seconds - " + status;
            }

            if (isActive) {
                interval = setInterval(() => {
                    setSeconds(seconds => seconds + 1);
                }, 1000);
            } else if (!isActive && seconds !== 0) {
                clearInterval(interval);
            }

            if(seconds <= 1) {
            sessionStorage.setItem("TUGTimer", 0);
            sessionStorage.setItem("TUGStatus", "Not Recorded");
            } else {
            sessionStorage.setItem("TUGTimer", seconds);
            sessionStorage.setItem("TUGStatus", status);
            }
            console.log(seconds + " " + status);
            setStatus(status)
            return () => clearInterval(interval);
        }
        catch { }
    }, [isActive, seconds]);

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
            <label className="title">Timed Up and Go Test</label> 
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

                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page consists of the timer that should be used to conduct the test. 
                    The test consists of one trial test and one official test. No retests can be done after these two sessions are finished. 
                    The Timer automatically stops at 20 seconds.
                    If patient is unable to conduct the test, start and stop the timer immediately before pressing Next Button</Typography>
                </Popover>

            <div className="main-section">
                <label className="subtitle">Timer</label>
                <div className="TimerLayoutWords">
                    <div className="TimerDiv" style={{ textAlignHorizontal: "center", textAlign: "center" }}>
                        <button id="main-button" className='TimerLayoutBtnStart' onClick={toggle}>
                        </button>
                        <br />
                        <button id="reset-button" className='TimerLayoutBtnReset' onClick={reset}>
                            Reset
                        </button>
                        <h3 id="status"></h3>
                    </div>
                </div>
            </div>
            <button id="next-button" className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default Timer;