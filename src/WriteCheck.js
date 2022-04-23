import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./Components/Header"
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { typography } from "@mui/system";

function WriteCheck(){ 
  const navigate = useNavigate();
  
  let [doctor, setDoctor] = useState("");

  function Validation() {
    
    if (doctor === "") {
      setOpen(true);
    } 
    else {
      sessionStorage.setItem("doctor", doctor );
      special_next();
    }
  }

  function special_next() {
    if(document.getElementById('blindCheck').checked==true) {
      navigate("/sec7");
  }else if(document.getElementById('blindCheck').checked==false && document.getElementById('writeCheck').checked==true) {
      navigate("/sec6");
  }else{navigate("/sec3");}
}

function onChangeEduCheck() {
  if(document.getElementById('eduCheck').checked==true)
    sessionStorage.setItem("eduCheck", "1");
  else
  sessionStorage.setItem("eduCheck", "0");
}
function onChangeWriteCheck() {
  if(document.getElementById('writeCheck').checked==true)
    sessionStorage.setItem("writeCheck", "1");
  else
  sessionStorage.setItem("writeCheck", "0");
  }

function onChangeBlindCheck() {
  if(document.getElementById('blindCheck').checked==true)
    sessionStorage.setItem("blindCheck", "1");
  else
  sessionStorage.setItem("blindCheck", "0");
}

const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    var typography = "Input doctor initials and tick where appropriate";

    return(
      <div className="screen">
      <Header typography = {typography} history = {"/mobility"} name = {"Patient"} />     
      <br/>

      <Card sx={{maxWidth: "80%", borderRadius: "20px", padding: "20px 20px" }} >
        
            <input type="checkbox" id="writeCheck" onClick={onChangeWriteCheck}/>
            <label>Tick the checkbox if the patient is not able to write</label>
            <br/>
            <input type="checkbox" id="blindCheck" onClick={onChangeBlindCheck}/>
            <label>Tick the checkbox if the patient is blind </label>
            <br/>
            <input type="checkbox" id="eduCheck" onClick={onChangeEduCheck}/>
            <label>Tick if subject has less than 12 years of education</label>
            <br/><br/>
            <h5 className="alert">Certain tests will be skipped if the patient is not able to write and the test will be marked differently.</h5>
            <div className="textfield">
            <TextField
              fullWidth
              className="DoctorInitials"
              placeholder="Doctor Initials"
              type="text"
              variant="outlined"
              onChange={(event) => {
                setDoctor(event.target.value);
              }}
            
            />
            </div> 
      </Card>
     <button className="next-button" onClick={Validation}>Next</button>
     <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogContent>
            <DialogTitle id="alert-dialog-title">
                Please input doctor initials 
            </DialogTitle>
            </DialogContent>
            <Button onClick={handleClose}>close</Button>
            </Dialog>
            </div>
    );
}

export default WriteCheck;