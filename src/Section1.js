import './style.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Header from "./Components/Header"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { typography } from "@mui/system";

function Section1() {

    const [question1, setAnswerQuestion1] = useState("");
    const [question2, setAnswerQuestion2] = useState("");
    const [question3, setAnswerQuestion3] = useState("");
    const [question4, setAnswerQuestion4] = useState("");
    const [question5, setAnswerQuestion5] = useState("");
    const [question6, setAnswerQuestion6] = useState("");
    const [question7, setAnswerQuestion7] = useState("");

    sessionStorage.setItem("q1", question1);
    sessionStorage.setItem("q2", question2);
    sessionStorage.setItem("q3", question3);
    sessionStorage.setItem("q4", question4);
    sessionStorage.setItem("q5", question5);
    sessionStorage.setItem("q6", question6);
    sessionStorage.setItem("q7", question7);

    const navigate = useNavigate();

    function Validation() {

      if(question1 !== "" && question2 !== "" && question3 !== "" && question4 !== "" && question5 !== "" && question6 !== "" && question7 !== ""){
        navigate("/mobility");
      }else{
        setOpen(true);
      }
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    var typography = "Fill in all the fields";
    
    return (
        <div className="screen">
          <Header typography = {typography} history = {"/"} name = {"Geriatric Consultant"} />  
          <br/>
            <Card sx={{minWidth: "75%", borderRadius: "20px", padding: "5px 20px"}} >
                    <label className="subtitle">Diagnosis:</label>
                    <br/>
                    <div>
                            <select className="dropdown" onChange={(e) => setAnswerQuestion1(e.target.value)}>
                              <option disabled selected value=""> Choose an option</option>
                              <option value="Post-LL Fracture Rehab">Post-LL Fracture Rehab</option>
                              <option value="Deterioration in General Condition">Deterioration in General Condition</option>
                              <option value="Falls">Falls</option>
                              <option value="Respiratory">Respiratory</option>
                              <option value="Neurology">Neurology</option>
                              <option value="Rehab Post-LL Amputation">Rehab Post-LL Amputation</option>
                              <option value="Rehab Post-General Surgery">Rehab Post-General Surgery</option>
                              <option value="Post-UL Fracture Rehab">Post-UL Fracture Rehab</option>
                              <option value="Cognitive Decline / Dementia Care">Cognitive Decline / Dementia Care</option>
                              <option value="Other">Other</option>
                            </select> 
                    </div>
                    <div>
                      <label for="history1">History of Present Condition:</label>
                      <br/>
                      <textarea className="textarea" rows="4" cols="52" placeholder="Input Patient's Present Condition History" onChange={(e) => setAnswerQuestion2(e.target.value)}></textarea>
                    </div>

                    <div>
                      <label for="history2">Past Medical History:</label>
                      <br/>
                      <textarea className="textarea" rows="4" cols="52" placeholder="Input Patient's Medical History:" onChange={(e) => setAnswerQuestion3(e.target.value)}></textarea>
                    </div>

                    <div>
                      <label for="history3">Drug History:</label>
                      <br/>
                      <textarea className="textarea" rows="4" cols="52" placeholder="Input Patient's Drug History" onChange={(e) => setAnswerQuestion4(e.target.value)}></textarea>
                    </div>
             </Card>
             <br/>
             <Card sx={{minWidth: "75%", borderRadius: "20px", padding: "20px"}} >
                    <label className="subtitle">Social Habits:</label>
                    <br/>
                      <div>
                          <label>Smoking:</label><br/>
                          <input type="radio" id="yes" name="smoking" value="yes" onChange={(e) => {setAnswerQuestion5("Smoking: " + e.target.value)}}/>
                          <label for="yes">yes</label><br/>
                          <input type="radio" id="no" name="smoking" value="no" onChange={(e) => {setAnswerQuestion5("Smoking: " + e.target.value)}}/>
                          <label for="no">no</label>
                      </div>
                      <div>
                          <label>Drinking:</label><br/>
                          <input type="radio" id="yes" name="drinking" value="yes" onChange={(e) => {setAnswerQuestion6("Drinking: " + e.target.value)}}/>
                          <label for="yes">yes</label><br/>
                          <input type="radio" id="no" name="drinking" value="no" onChange={(e) => {setAnswerQuestion6("Drinking: " + e.target.value)}}/>
                          <label for="no">no</label>
                      </div>
             </Card>
             <br/>
             <Card sx={{minWidth: "75%", borderRadius: "20px", padding: "20px"}} >
                    <label className="subtitle">Level of Education:</label>
                    <br/>
                    <div>
                            <select className="dropdown" onChange={(e) => setAnswerQuestion7(e.target.value)}>
                              <option disabled selected value=""> Choose an option</option>
                              <option value="Primary">Primary</option>
                              <option value="Secondary">Secondary</option>
                              <option value="Post-Secondary">Post-Secondary</option>
                              <option value="Tertiary">Tertiary</option>
                            </select> 
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
                Please fill in all the fields
            </DialogTitle>
            </DialogContent>
            <Button onClick={handleClose}>close</Button>
            </Dialog>
            </div>
    );
}
export default Section1;