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

function Section3OP(){

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  sessionStorage.setItem("a3", answer1);
  sessionStorage.setItem("a4", answer2);

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
      navigate('/Section4OP');
    }
  }
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/Section2OP"} name = {"Other Professional Referred"} />  
                <br/><br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {maxWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                     <h3>Date Seen</h3>
                     <br/>
                     <TextField  type="date" onClick ={(e) => setAnswer1(e.target.value)}></TextField>
                     <br/><br/>
                     <h3>Seen By</h3> 
                     <br/>
                     <TextField  type="text" onClick ={(e) => setAnswer2(e.target.value)}></TextField>
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
export default Section3OP;