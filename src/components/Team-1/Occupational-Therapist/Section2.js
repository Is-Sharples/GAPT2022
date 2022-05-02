import React, { useState, useEffect } from 'react';
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

function Section2(){

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");

  sessionStorage.setItem("a1", answer1);
  sessionStorage.setItem("a2", answer2);
  sessionStorage.setItem("a3", answer3);
  sessionStorage.setItem("a4", answer4);
  sessionStorage.setItem("a5", answer5);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  var typography = "Select the appropriate radio buttons";

  function validation() {
    
    if (answer1 === "" || answer2 === "" || answer3 === "" || answer4 === "" || answer5 === "") {
      setOpen(true);
    } 
    else {
      navigate('/sec3');
    }
  }
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec1"} name = {"Occupational Therapy"} />  
                <br/><br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {maxWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                     <h3>Previous Personal ADLs</h3>
                     <br/>
                     <h5>(Past six (6) months)</h5>
                     <br/>
                    <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Feeding</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onChange={(e) => setAnswer1(e.target.value)} 
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="Independent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Independent</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Semi-dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Semi-dependent</Typography>} />
                        <FormControlLabel sx={{fontSize: 20}} value="Dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Dependent</Typography>} /> 
                        </RadioGroup>
                      </FormControl>
                      <br/><br/>
                      <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Toileting</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          onChange={(e) => setAnswer2(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="Independent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Independent</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Semi-dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Semi-dependent</Typography>} />
                        <FormControlLabel sx={{fontSize: 20}} value="Dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Dependent</Typography>} /> 
                        </RadioGroup>
                      </FormControl> 
                      <br/><br/>
                      <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Bathing</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          defaultValue={sessionStorage.getItem("a3")}
                          onChange={(e) => setAnswer3(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="Independent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Independent</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Semi-dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Semi-dependent</Typography>} />
                        <FormControlLabel sx={{fontSize: 20}} value="Dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Dependent</Typography>} /> 
                        </RadioGroup>
                      </FormControl>   
                      <br/><br/>
                      <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Grooming</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          defaultValue={sessionStorage.getItem("a4")}
                          onChange={(e) => setAnswer4(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="Independent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Independent</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Semi-dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Semi-dependent</Typography>} />
                        <FormControlLabel sx={{fontSize: 20}} value="Dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Dependent</Typography>} /> 
                        </RadioGroup>
                      </FormControl>       
                      <br/><br/>
                      <FormControl>
                      <FormLabel sx={{fontSize: 24,color: 'black'}} id="demo-controlled-radio-buttons-group">Dressing</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          defaultValue={sessionStorage.getItem("a5")}
                          onChange={(e) => setAnswer5(e.target.value)}
                        >
                        <FormControlLabel sx={{fontSize: 20}} value="Independent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Independent</Typography>} /> 
                        <FormControlLabel sx={{fontSize: 20}} value="Semi-dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Semi-dependent</Typography>} />
                        <FormControlLabel sx={{fontSize: 20}} value="Dependent" control={<Radio />} label={<Typography sx={{ fontSize: 20 }}>Dependent</Typography>} /> 
                        </RadioGroup>
                      </FormControl>       
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
export default Section2;