import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { Grid } from '@material-ui/core';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Popover } from '@mui/material';
import './styles/header.css';
import { useNavigate } from 'react-router-dom';
// import './styles/Summary.css'

export default function Header(props) {

const [anchorEl, setAnchorEl] = React.useState(null);
    
    var data = props.disabled;
    const goBack = () => {

        var path = props.history;
        navigate(path);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    
      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;
  return (
    <>
    
    
    <AppBar className="appbar" position="static" style={{  background: '#01497A'}}>
        <Grid container spacing={0}>
            <Grid item xs={2} sm={1}>
            <Box display="flex" justifyContent="center">
            <Fab variant="circular" className="mui-icons" disabled={data} onClick={goBack} aria-label="add" sx={{['@media (min-width:720px)']: {marginTop: 2}, ['@media (max-width:720px)']: {marginTop: 1}, marginLeft:'10px'}}>
                <ArrowBack fontSize="large" ></ArrowBack>
            </Fab>
            </Box>
            </Grid>
            <Grid item xs={8} sm={10}>
            <Box display="flex" justifyContent="center">
                <Typography variant="h7" color="inherit" component="div" align="center" style={{marginTop: 20, marginBottom: 3.2, fontSize: '1.75em'}}>
                <label className="title" >{props.name}</label> 
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={2} sm={1}>
            <Box display="flex" justifyContent="center">
            <Fab className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" sx={{['@media (min-width:720px)']: {marginTop: 2}, ['@media (max-width:720px)']: {marginTop: 1}, marginRight:'10px' }}>
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
                {props.typography}
            </Typography>
            </Popover>

            </>



  );
}