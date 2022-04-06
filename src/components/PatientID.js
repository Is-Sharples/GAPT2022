import React from "react";
import Header from './header'
import { Grid, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import './styles/HomeContent.css'
import { List, Divider, ListItem,ListItemText } from "@mui/material";
import { Button } from "@mui/material";
import Summary from './Summary';
import {useState} from 'react';
import Barthel from './BarthelIndex';
import patients from './assets/patients.json';
import './styles/header.css';
import PatientCard from "./assets/PatientCard";
import PatientList from "./assets/PatientList";
import { render } from "@testing-library/react";


class PatientID extends React.Component{

constructor(){
    super();
    this.state = {exist: "false"};

    
}   






render(){
    const json = JSON.stringify(patients);
    const obj = JSON.parse(json);
    const [john, shaun] = obj.patient;
   
    const [exist,setExist] = this.state.exist;
    if(this.state.exist === "true"){
        return(<Summary patient = {john}/>);
    }
    console.log(this.state.exist);
    
    // console.log(obj);
    //console.log(obj.type)
    // console.log(obj.patient[0].type);

    


    return (
            
            
        <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }}>
            
            <Header item  name = {"Patient Page"}/>
            
                <Grid justifyContent={"center"} container item >
                    <div className="search-container" >
                        <TextField  label={"Patient ID"} 
                                
                        ></TextField>
                
                        <List >                 
                            <Divider />
                            <Button variant = "outlined" type="button" onClick={() => {this.setState({exist: "true"});}}>Click Me!</Button>
                            {/* {this.ListItems(shaun,john)} */}
                            <PatientList patients = {obj.patient} /> 
                            {/* <PatientCard patient = {shaun} ></PatientCard> */}
                            <PatientCard patient = {shaun} ></PatientCard>
                            <PatientCard patient = {john}></PatientCard>
                        </List>


                </div>
                

                </Grid>
            <Grid container item >

            </Grid>
            
        
        </Grid>

    
    
    

    );


    }


    
}

export default PatientID;

