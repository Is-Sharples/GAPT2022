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
import { TextField } from "@mui/material";
import '../../styles/Team1OT.css';

function Section1OP(){

  const [answer, setAnswer] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  var typography = "Select the appropriate profession";

  function validation() {
    
    if (answer === "") {
      setOpen(true);
    } 
    else {
      if (answer === "Other"){
        if(document.getElementById("area").value === ""){
          setOpen(true);
        }
        else{
        sessionStorage.setItem("a", document.getElementById("area").value);
        navigate('/Section2OP');
        }
      }
      else{
        sessionStorage.setItem("a", answer);
        navigate('/Section2OP');
      }
    }
  }

  function handleChange (value) {
    if(value === "Other"){
      document.getElementById("area").style.display = "block";
      setAnswer(value);
    } else {
      document.getElementById("area").style.display = "none";
      setAnswer(value);
    }
    
  }

    return(
        <div className="screen">
                <Header typography = {typography} history = {"/PatientIDOP"} name = {"Other Professional Referred"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Profession </FormLabel>
                      <br/>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onClick={(e) => handleChange(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="Speech and Language Pathologist" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Speech and Language Pathologist</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Podiatry" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Podiatry</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Nutrition and Dietetics" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Nutrition and Dietetics</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Psychology" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Psychology</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Psychiatry" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Psychiatry</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Other" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Other</Typography>} /> 
                        </RadioGroup>
                      </FormControl>
                      <br/><br/>
                      <textarea type="hidden" multiline rows={4} id="area" placeholder="What is your profession?"/> 
                  </CardContent>         
             </Card>
             <button className="next-button" onClick={() => {validation();}}>Next</button>
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
            <Button style={{m: 10, fontSize: "20px"}} onClick={handleClose}>close</Button>
            </Dialog>
            </div>
    );
}
export default Section1OP;