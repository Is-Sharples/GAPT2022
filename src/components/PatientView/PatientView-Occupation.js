import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import '../styles/Team1OT.css';
import { saveOther } from '../firebase';
import { format } from "date-fns";
// import { getOtherSummary } from '../firebase';
import { getOccupational } from '../firebase';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

class PatientViewOccupation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            documents:[],
        }
    }
    
    componentDidMount(){
        getOccupational(sessionStorage.getItem("patientId")).then((result) => {
            this.setState({
                documents:result
            })
        })
    }

    goback =() => {
        const { navigation } = this.props;
        navigation("/Patient-Menu");
    }
    createData(type,previous,current){
        return {type, previous,current}
    }

    createData2(type, previous){
        return {type, previous};
    }

    render(){
        console.log(this.state.documents[15]);

        
        

        if(this.state.documents[15] !== undefined){
            var doc = this.state.documents[15];

            const rows = [
                this.createData("Feeding",doc.currentAdls[0],doc.previousAdls[0]),
                this.createData("Toileting",doc.currentAdls[1],doc.previousAdls[1]),
                this.createData("Bathing",doc.currentAdls[2],doc.previousAdls[2]),
                this.createData("Grooming",doc.currentAdls[3],doc.previousAdls[3]),
                this.createData("Dressing",doc.currentAdls[4],doc.previousAdls[4]),
            ];
            const rows2 = [
                this.createData2("Using the Telephone",doc.previousInstrumentalAdls[0]),
                this.createData2("Shopping",doc.previousInstrumentalAdls[1]),
                this.createData2("Preparing Food",doc.previousInstrumentalAdls[2]),
                this.createData2("HouseKeeping",doc.previousInstrumentalAdls[3]),
                this.createData2("Doing Laundry",doc.previousInstrumentalAdls[4]),
                this.createData2("Transportation",doc.previousInstrumentalAdls[5]),
                this.createData2("Handling Medication",doc.previousInstrumentalAdls[6]),
                this.createData2("Handling Finances",doc.previousInstrumentalAdls[7]),
            ];
            var typography = "Help Data";


            return(
                <div className="screen">
                        <Header typography={typography} history = {"/Patient-Menu"} name = {"Occupational Therapy"} />  
                        <br/>
                        <Card sx={{minWidth: "85%", borderRadius: "20px", textAlign:"center"}}> 
                            <CardContent>
                                <h2>Review Information</h2>
                                <br/>
                                <h3>Is Patient Housebound?: </h3> 
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
                            <h3>Are there changes in Instrumental ADLs now?: {doc.currentInstrumentalALDsData.currentInstrumentalADLs}</h3> 
                            </CardContent>         
                        </Card>
                        <button onClick={this.goback} className="next-button" >Go Back Menu</button> 
                        
                    </div>
            );
        }
        

    }


}

export default function(props){

    const navigate = useNavigate();
    return(
        <PatientViewOccupation {...props} navigation = {navigate} ></PatientViewOccupation>
    )

}