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
import { render } from "@testing-library/react";


class PatientID extends React.Component{

constructor(){
    super();
    this.state = {
        exist: "false",
        patients : [],
        fragments:[],
        count: 0
};

    
}   

test(){    
    var testing = [];
    this.setState({count: this.state.count+1});
    this.state.patients.map((patient) => {
        testing.push(
        <React.Fragment  key = {this.state.count}>
            
            <ListItem button >
                <ListItemText primary={patient.name} secondary={patient.id} />
                    
            </ListItem>
        

        </React.Fragment>
       

    )

    })
    
    this.setState({fragments:testing});

}





render(){
    const json = JSON.stringify(patients);
    const obj = JSON.parse(json);    
    this.state.patients = obj.patient;
    
    

    
    return (
            
            
        <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }}>
            
            <Header item  name = {"Patient Page"}/>
            
                <Grid justifyContent={"center"} container item >
                    <div className="search-container" >
                        <TextField  label={"Patient ID"} 
                                
                        ></TextField>
                
                        <List >                 
                            <Divider />
                            {/* <Button variant = "outlined" type="button" onClick={() => {this.setState({exist: "true"});}}>Click Me!</Button> */}
                            <Button variant = "outlined" type="button" onClick={() => {this.test()}}>Click Me!</Button>                                                        
                            
                            
                            {this.state.fragments}
                                
                            
                            
                            
                            
                                
                            
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

