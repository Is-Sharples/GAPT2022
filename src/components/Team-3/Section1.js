import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Header from "./header"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { typography } from "@mui/system";
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Section1() {

  sessionStorage.setItem("pattern", "0");
  sessionStorage.setItem("cube", "0");
  sessionStorage.setItem("clock1", "0");
  sessionStorage.setItem("clock2", "0");
  sessionStorage.setItem("clock3", "0");
  sessionStorage.setItem("camel", "0");
  sessionStorage.setItem("lion", "0");
  sessionStorage.setItem("rhino", "0");
  sessionStorage.setItem("front", "0");
  sessionStorage.setItem("back", "0");
  sessionStorage.setItem("letters", "0");
  sessionStorage.setItem("one", "0");
  sessionStorage.setItem("two", "0");
  sessionStorage.setItem("three", "0");
  sessionStorage.setItem("four", "0");
  sessionStorage.setItem("five", "0");
  sessionStorage.setItem("rep1", "0");
  sessionStorage.setItem("rep2", "0");
  sessionStorage.setItem("sec12", "0");
  sessionStorage.setItem("count", "0");
  sessionStorage.setItem("trans", "0");
  sessionStorage.setItem("meas", "0");
  sessionStorage.setItem("date", "0");
  sessionStorage.setItem("day", "0");
  sessionStorage.setItem("month", "0");
  sessionStorage.setItem("year", "0");
  sessionStorage.setItem("place", "0");
  sessionStorage.setItem("city", "0");
  sessionStorage.setItem("eduCheck", "0");
  sessionStorage.setItem("blindCheck", "0");
  sessionStorage.setItem("writeCheck", "0");
  sessionStorage.setItem("face", "0");
  sessionStorage.setItem("velvet", "0");
  sessionStorage.setItem("red", "0");
  sessionStorage.setItem("daisy", "0");
  sessionStorage.setItem("church", "0");
  sessionStorage.setItem("cubepic", "");
  sessionStorage.setItem("clockpic", "");
  sessionStorage.setItem("patternpic", "");
  sessionStorage.setItem("subtraction", "0");
  sessionStorage.setItem("orientation", "0");
  sessionStorage.setItem("delayedrecall", "0");
  sessionStorage.setItem("abstraction", "0");
  sessionStorage.setItem("language", "0");
  sessionStorage.setItem("attention", "0");
  sessionStorage.setItem("naming", "0");
  sessionStorage.setItem("visuo", "0");

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
            <Card sx={{['@media (min-width:720px)']: {minWidth: "75%"}, ['@media (max-width:720px)']: {maxWidth: "75%"}, borderRadius: "20px", padding: "5px 20px"}} >
                    <label className="subtitle">Diagnosis:</label>
                    <br/><br/>
                    <FormControl sx={{minWidth: 280}}>
                     <InputLabel id="demo-simple-select-label">Choose an Option</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Choose an option"
                      onChange={(e) => setAnswerQuestion1(e.target.value)}
                    >
                              <MenuItem value="Post-LL Fracture Rehab">Post-LL Fracture Rehab</MenuItem>
                              <MenuItem value="Deterioration in General Condition">Deterioration in General Condition</MenuItem>
                              <MenuItem value="Falls">Falls</MenuItem>
                              <MenuItem value="Respiratory">Respiratory</MenuItem>
                              <MenuItem value="Neurology">Neurology</MenuItem>
                              <MenuItem value="Rehab Post-LL Amputation">Rehab Post-LL Amputation</MenuItem>
                              <MenuItem value="Rehab Post-General Surgery">Rehab Post-General Surgery</MenuItem>
                              <MenuItem value="Post-UL Fracture Rehab">Post-UL Fracture Rehab</MenuItem>
                              <MenuItem value="Cognitive Decline / Dementia Care">Cognitive Decline / Dementia Care</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    </FormControl>
                    <div>
                    <br/>
                      <label for="history1">History of Present Condition:</label>
                      <br/><br/>
                      <TextField sx={{['@media (min-width:720px)']: {minWidth: "500px"}, ['@media (max-width:720px)']: {minWidth: "280px"}}} type="text" id="outlined-multiline-static" label="Input Patient's Present Condition History" multiline rows={4} onChange={(e) => setAnswerQuestion2(e.target.value)}/> 
                      <br/> <br/>                  
                    </div>

                    <div>
                      <label for="history2">Past Medical History:</label>
                      <br/><br/>
                      <TextField sx={{['@media (min-width:720px)']: {minWidth: "500px"}, ['@media (max-width:720px)']: {minWidth: "280px"}}} type="text" id="outlined-multiline-static" label="Input Patient's Medical History" multiline rows={4} onChange={(e) => setAnswerQuestion3(e.target.value)}/>
                      <br/><br/>                    
                    </div>

                    <div>
                      <label for="history3">Drug History:</label>
                      <br/><br/>
                      <TextField sx={{['@media (min-width:720px)']: {minWidth: "500px"}, ['@media (max-width:720px)']: {minWidth: "280px"}}} size="large" type="text"  id="outlined-multiline-static" label="Input Patient's Drug History" multiline rows={4} onChange={(e) => setAnswerQuestion4(e.target.value)}/>
                      <br/><br/>                   
                    </div>
                    <br/>
             </Card>
             <br/>
             <Card sx={{minWidth: "75%", borderRadius: "20px", padding: "20px"}} >
                    <label className="subtitle">Social Habits:</label>
                    <br/><br/>
                    <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Smoking</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onChange={(e) => setAnswerQuestion5("Smoking: " + e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="yes" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>yes</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="no" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>no</Typography>} /> 
                        </RadioGroup>
                      </FormControl>

                      <br/><br/>
                      <FormControl>
                      <FormLabel sx={{fontSize: 24 ,color: 'black'}} id="demo-controlled-radio-buttons-group">Drinking</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onChange={(e) => setAnswerQuestion6(e.target.value)}
                        >
                        <FormControlLabel fontSize="20" value="yes" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>yes</Typography>} />
                        <FormControlLabel sx={{fontSize: 20}} value="no" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>no</Typography>} /> 
                        </RadioGroup>
                      </FormControl>
                      <br/><br/>
             </Card>
             <br/>
             <Card sx={{minWidth: "75%", borderRadius: "20px", padding: "20px"}} >
                    <label className="subtitle">Level of Education:</label>
                    <br/><br/>
                    <FormControl sx={{minWidth: 280}}>
                     <InputLabel id="demo-simple-select-label">Choose an Option</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Choose an option"
                      onChange={(e) => setAnswerQuestion7(e.target.value)}
                    >
                              <MenuItem value="Primary">Primary</MenuItem>
                              <MenuItem value="Secondary">Secondary</MenuItem>
                              <MenuItem value="Post-Secondary">Post-Secondary</MenuItem>
                              <MenuItem value="Tertiary">Tertiary</MenuItem>
                    </Select>
                    </FormControl>
                    <br/><br/>
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