import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../../styles/Team1OT.css';
import TextField from '@mui/material/TextField';

function Section2OP(){

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  sessionStorage.setItem("a1", answer1);
  sessionStorage.setItem("a2", answer2);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  var typography = "Enter all data";

  function validation() {
    
    if (answer1 === "" || answer2 === "") {
      setOpen(true);
    } 
    else {
      navigate('/Section3OP');
    }
  }
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/Section1OP"} name = {"Other Profession"} />  
                <br/><br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {maxWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                     <h3>Date Referral</h3>
                     <br/>
                     <TextField sx={{width: '280px'}} type="date" onChange ={(e) => setAnswer1(e.target.value)}></TextField>
                     <br/><br/>
                     <h3>Reason for Referral</h3> 
                     <br/>
                     <TextField sx={{width: '280px'}}  type="text" id="outlined-multiline-static" multiline rows={4} onChange ={(e) => setAnswer2(e.target.value)}></TextField>
                     <br/><br/>                
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
              Please answer all the questions
            </DialogTitle>
            </DialogContent>
            <Button onClick={handleClose}>close</Button>
            </Dialog>
            </div>
    );
}
export default Section2OP;