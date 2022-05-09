import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../../styles/Team1OT.css';

function Section1(){

  const [answer, setAnswer] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  sessionStorage.setItem("a", answer);

  const navigate = useNavigate();

  var typography = "Select the appropriate radio button";

  function validation() {
    
    if (answer === "") {
      setOpen(true);
    } 
    else {
      navigate('/Section2OT');
    }
  }
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/PatientIDOT"} name = {"Occupational Therapy"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Is the patient housebound? </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onChange={(e) => setAnswer(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="yes" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>yes</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="no" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>no</Typography>} /> 
                        </RadioGroup>
                      </FormControl>
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={validation}>Next</button>
             <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogContent>
            <DialogTitle id="alert-dialog-title">
                Please select an option
            </DialogTitle>
            </DialogContent>
            <Button onClick={handleClose}>close</Button>
            </Dialog>
            </div>
    );
}
export default Section1;