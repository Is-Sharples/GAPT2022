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

function Section5(){

  const [answer, setAnswer] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  var typography = "Select the appropriate radio button";

  function validation() {
    
    if (answer === "") {
      setOpen(true);
    } 
    else {
      if (answer === "yes"){
        if(document.getElementById("area").value === ""){
          setOpen(true);
        }
        else{
        sessionStorage.setItem("a19", "Yes, "+(document.getElementById("area").value));
        navigate('/Section6OT');
        }
      }
      else{
        sessionStorage.setItem("a19", answer);
        navigate('/Section6OT');
      }
    }
  }

  function handleChange (value) {
    if(value === "yes"){
      document.getElementById("area").style.display = "block";
      setAnswer(value);
    } else {
      document.getElementById("area").style.display = "none";
      setAnswer(value);
    }
    
  }

    return(
        <div className="screen">
                <Header typography = {typography} history = {"/Section4OT"} name = {"Occupational Therapy"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Are there changes in Instrumental ADLs now? </FormLabel>
                      <br/>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onClick={(e) => handleChange(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="yes" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>yes</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="no" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>no</Typography>} /> 
                        </RadioGroup>
                      </FormControl>
                      <br/><br/>
                      <textarea type="hidden" multiline rows={4} id="area" placeholder="List all the changes"/> 
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
export default Section5;