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


function RiskOfFallStatus() {
    const navigate = useNavigate();
    //help poppup function
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goBack = () => {
        navigate("/Timer");
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function navNext(){
        sessionStorage.setItem("RiskOfFallStatus", true);
        navigate("/ReviewQuestion");
    }

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

                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>The following are the patient's results according to the timer in the previous page</Typography>
                </Popover>

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