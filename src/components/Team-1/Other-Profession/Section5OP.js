import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import '../../styles/Team1OT.css';

function Section5(){

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    navigate('/PatientIDOP')
  }

  function validation(){
    setOpen(true)
  }

    const [a, setA] = useState(""); //Profession
    const [a1, setA1] = useState(""); //Referral Date
    const [a2, setA2] = useState(""); //Reason for referral
    const [a3, setA3] = useState(""); //date seen
    const [a4, setA4] = useState(""); //Seen by
    const [a5, setA5] = useState(""); //Notes

    const navigate = useNavigate();
       
     // This function will called only once
     useEffect(() => {
      loadDataOnlyOnce();
     }, [])

    function loadDataOnlyOnce() { 
        setA(sessionStorage.getItem("a"));
        setA1(sessionStorage.getItem("a1"));
        setA2(sessionStorage.getItem("a2"));
        setA3(sessionStorage.getItem("a3"));
        setA4(sessionStorage.getItem("a4"));
        setA5(sessionStorage.getItem("a5"));
    }

    var typography = "Review Results";

    return(
        <div className="screen">
                <Header typography = {typography} history = {"/Section4OP"} name = {"Other Profession"} />  
                <br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {minWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                    <CardContent>
                     <h4>Review Inputs</h4>
                     <br/>
                     <h5>Profession: {a}</h5>
                     <br/>
                     <h5>Date Referral: {a1}</h5>
                     <br/>
                     <h5>Reason for Referral: {a2}</h5>
                     <br/>
                     <h5>Date Seen: {a3}</h5>
                     <br/>
                     <h5>Seen By: {a4}</h5>
                     <br/>
                     <h5>Notes: {a5}</h5>

                  </CardContent>         
             </Card>
             <button className="next-button" onClick={()=> {validation()}}>Save and Exit</button> 
             <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            
            <DialogTitle id="alert-dialog-title">
                Are sure you want to save and exit?
            </DialogTitle>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() => {handleOpen();}}>Yes</Button>
            <Button style={{m: 10}} onClick={()=> {handleClose();}}></Button>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() =>  {handleClose();} }>No</Button>
            </Dialog>
            </div>
    );
}
export default Section5;