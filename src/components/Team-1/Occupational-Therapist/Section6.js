import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fontSize } from '@mui/system';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import '../../styles/Team1OT.css';
import { saveOccupational } from "../../firebase";
import { format } from "date-fns";

function Section6(){

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    saveOccupational(sessionStorage.getItem("PatientData"),date,alldata);
    navigate('/')
  }

  function validation(){
    setOpen(true)
  }

    const [a, setA] = useState("");
    const [a1, setA1] = useState("");
    const [a2, setA2] = useState("");
    const [a3, setA3] = useState("");
    const [a4, setA4] = useState("");
    const [a5, setA5] = useState("");
    const [a6, setA6] = useState("");
    const [a7, setA7] = useState("");
    const [a8, setA8] = useState("");
    const [a9, setA9] = useState("");
    const [a10, setA10] = useState("");
    const [a11, setA11] = useState("");
    const [a12, setA12] = useState("");
    const [a13, setA13] = useState("");
    const [a14, setA14] = useState("");
    const [a15, setA15] = useState("");
    const [a16, setA16] = useState("");
    const [a17, setA17] = useState("");
    const [a18, setA18] = useState("");
    const [a19, setA19] = useState("");

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
        setA6(sessionStorage.getItem("a6"));
        setA7(sessionStorage.getItem("a7"));
        setA8(sessionStorage.getItem("a8"));
        setA9(sessionStorage.getItem("a9"));
        setA10(sessionStorage.getItem("a10"));
        setA11(sessionStorage.getItem("a11"));
        setA12(sessionStorage.getItem("a12"));
        setA13(sessionStorage.getItem("a13"));
        setA14(sessionStorage.getItem("a14"));
        setA15(sessionStorage.getItem("a15"));
        setA16(sessionStorage.getItem("a16"));
        setA17(sessionStorage.getItem("a17"));
        setA18(sessionStorage.getItem("a18"));
        setA19(sessionStorage.getItem("a19"));
    }

    var typography = "Review Results";

    function createData(type, previous, current) {
      return { type, previous, current };
    }
    
    const rows = [
      createData('Feeding', a1, a6),
      createData('Toileting', a2, a7),
      createData('Bathing', a3, a8),
      createData('Grooming', a4, a9),
      createData('Dressing', a5, a10),  
    ];

    function createData2(type, previous) {
      return { type, previous};
    }
    
    const rows2 = [
      createData2('Using the Telephone', a11),
      createData2('Shopping', a12),
      createData2('Preparing Food', a13),
      createData2('Housekeeping', a14),
      createData2('Doing Laundry', a15),
      createData2('Transportation', a16),
      createData2('Handling Medication', a17),
      createData2('Handling Finances', a18),  
    ];

    const date = format(new Date(), "dd-MM-yyyy HH:mm:ss");
    const alldata = {
      housebound: a,
      feedingP: a1,
      toiletP: a2,
      bathP: a3,
      groomP: a4,
      dressP: a5,
      feedingC: a6,
      toiletC: a7,
      bathC: a8,
      groomC: a9,
      dressC: a10,
      telephone: a11,
      shopping: a12,
      food: a13,
      housekeeping: a14,
      laundry: a15,
      transportation: a16,
      medication: a17,
      finances: a18,
      changesinADL: a19
    }
    return(
        <div className="screen">
                <Header typography = {typography} history = {"/Section5OT"} name = {"Occupational Therapy Summary"} />  
                <br/>
                <Card sx={{minWidth: "85%", borderRadius: "20px", textAlign:"center"}}> 
                    <CardContent>
                     <h2>Review Information</h2>
                      <br/>
                      <h3>Is Patient Housebound?: {a}</h3> 
                  </CardContent>
                </Card>
                <br/><br/>
                <Card sx={{['@media (min-width:720px)']: {minWidth: "85%"}, ['@media (max-width:720px)']: {maxWidth: "85%"}, borderRadius: "20px", textAlign:"center"}}> 
                    <CardContent>
                      <h3>Personal ADLs</h3>
                      <br/>
                      <Table sx={{['@media (min-width:720px)']: {minWidth: "700"}, ['@media (max-width:720px)']: {maxWidth: "100"}}} aria-label="simple table">
                        <TableHead>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, fontSize: 18} }}>
                            <TableCell><b>Type</b></TableCell>
                            <TableCell align="center"><b>Previous</b></TableCell>
                            <TableCell align="right"><b>Current</b></TableCell>
                          </TableRow>
                        </TableHead>
                      <TableBody>
                      {rows.map((row) => (
                      <TableRow 
                        key={row.name}
                      >
                      <TableCell component="th" scope="row">
                      {row.type}
                    </TableCell>
                    <TableCell align="center">{row.previous}</TableCell>
                    <TableCell align="right">{row.current}</TableCell>
                    </TableRow>
                     ))}
                  </TableBody>
                  </Table>
                  <br/>
                  </CardContent>         
             </Card>
                <br/><br/>
                <Card sx={{['@media (min-width:820px)']: {minWidth: "85%"}, ['@media (max-width:820px)']: {maxWidth: "85%"}, borderRadius: "20px", textAlign:"center"}}> 
                    <CardContent>
                      <h3>Instrumental ADLs</h3>
                      <br/>
                      <Table sx={{['@media (min-width:720px)']: {minWidth: "700"}, ['@media (max-width:720px)']: {maxWidth: "600"}}} aria-label="simple table">
                        <TableHead>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, fontSize: 18} }}>
                            <TableCell align="center"><b>Type</b></TableCell>
                            <TableCell align="center"><b>Previous</b></TableCell>
                          </TableRow>
                        </TableHead>
                      <TableBody>
                      {rows2.map((row) => (
                      <TableRow 
                        key={row.name}
                      >
                      <TableCell align="center" component="th" scope="row">
                      {row.type}
                    </TableCell>
                    <TableCell align="center">{row.previous}</TableCell>
                    <TableCell align="center">{row.current}</TableCell>
                    </TableRow>
                     ))}
                  </TableBody>
                  </Table>
                  <br/>
                  <h3>Are there changes in Instrumental ADLs now?: {a19}</h3> 
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
export default Section6;