import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header"
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { typography } from "@mui/system";

function Section12(){

  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);

    function getScore() {

        var score = parseInt(sessionStorage.getItem("sec12"));
        setScore(score);

        var scoretemp = parseInt(sessionStorage.getItem("rep1")) + parseInt(sessionStorage.getItem("rep2")) + score;
        
        sessionStorage.setItem("language",scoretemp.toString());
  
      };

    function startTimer(){

        setSeconds(0)

        if(seconds < 60){ 
            setInterval(() => {  
                setSeconds(seconds => seconds + 1)
           }, 1000);
         }
    }

    const navigate = useNavigate();

      function onChangeSec12countCheck() {
        if(document.getElementById('count').value>10){
            sessionStorage.setItem("sec12", "1");
           
            setScore(1);

          }else{
            sessionStorage.setItem("sec12", "0");
            
            setScore(0);
          }  
          getScore();  
      }

      function Validation() {
        if(document.getElementById('count').value<0 || document.getElementById('count').value == null || document.getElementById('count').value == ""){
            setOpen(true);
        }else{
            navigate("/sec13");
        }   
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    var typography = "A point will be given if the patient says 11 words or more";
    
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/sec11"} name = {"Language"} />  
                <br/>
                <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                  <CardContent>
                    <h4> Timer: {(seconds>60) ? 0 : seconds}</h4>
                    <button className="next-button" id="start-button" onClick={() => {startTimer()}}>Start</button>
                    <br/>
                    <h4>Fluency: Name maximum number of words in one minute that begin with letter F</h4>
                    <br/>
                    <input className="number-input" type="number" id="count" onChange={onChangeSec12countCheck} placeholder = "Input Number of words" />
                    <br/> <br/>
                    <label>[{score} point]</label>
                  </CardContent>         
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
                Input a Number before sumbitting
            </DialogTitle>
            </DialogContent>
            <Button onClick={handleClose}>close</Button>
            </Dialog>
            </div>
    );
}
export default Section12;