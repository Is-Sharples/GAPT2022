import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpIcon from '@mui/icons-material/Help';
import useMediaQuery from '@mui/material/useMediaQuery';
import sizing from '@mui/system';


export default function Header() {

  
  return (
    <Box display="flex"  sx={{  flexGrow: 1 }}>
      <AppBar  style={{background:"#01497A"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <Fab  varient = "contained">
              <ArrowBackIcon /> 
            </Fab>
          </IconButton>
          <Typography style={{textAlign:"center"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search For Patient
          </Typography>
          <Fab>
            <HelpIcon /> 
          </Fab>
        </Toolbar>
      </AppBar>
    </Box>

    



  );
}