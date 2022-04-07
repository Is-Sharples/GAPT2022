import React from "react";
import Header from './header'
import { Grid, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import './styles/HomeContent.css'
import { List, Divider, ListItem,ListItemText, ListItemButton } from "@mui/material";
import { Button } from "@mui/material";
import Summary from './Summary';
import {useState} from 'react';
import Barthel from './BarthelIndex';
import patients from './assets/patients.json';
import './styles/header.css';
// import PatientCard from "../../Obsolete/PatientCard";
import { render } from "@testing-library/react";

class currentPatient{
    constructor(id,name,surname,gender){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.surname = surname;
    }
    
}


class PatientID extends React.Component{

constructor(props){
    super(props);
    this.state = {
        exist: "false",
        patients : [],
        fragments:[],
        currentPatient: new currentPatient(0,"","",""),
        text: ""
};

    
}   

componentWillUnmount() {
    this.setState({
      text: "",
      fragments:<></>,
    });
  }

componentDidMount(){
    this.setState({currentPatient: new currentPatient(0,"","",""),});
}


DisplayPatients = (event) =>{  
    var value = event.target.value.toUpperCase();
    var testing = [];
   

    if(value !== ""){
        
            
        this.state.patients.map((patient, index) => {
            var tempID = patient.id.toUpperCase().substr(0,value.length);
            let regex = new RegExp(tempID,'g');
            
            if(regex.test(value)){
                testing.push(
                    <React.Fragment  key = {index}>
                        
                        <ListItemButton  onClick={() => this.setState({currentPatient:patient,})} >
                            <ListItemText primary={patient.name + " " + patient.surname} secondary={patient.id} />
                                
                        </ListItemButton>
                        <Divider />
            
                    </React.Fragment>
               
            
                )
                     console.log(this.state.currentPatient);
            }
            
    
        })

        this.setState({fragments:testing});

    }else{
        this.setState({fragments:<></>});
    }

    
    
    
}








render(){
    const json = JSON.stringify(patients);
    const obj = JSON.parse(json);    
    this.state.patients = obj.patient;
    
    if(this.state.currentPatient.id !== 0){
        return <Summary patient = {this.state.currentPatient}/>
    }
    

    
    return (
            
            
        <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }}>
            
            <Header item  name = {"Patient Page"}/>
            
                <Grid justifyContent={"center"} container item >
                    <div className="search-container" >
                        <TextField  label={"Patient ID"} 
                                    onChange ={this.DisplayPatients}
                        ></TextField>
                
                        <List >                 
                            <Divider />
                            {/* <Button variant = "outlined" type="button" onClick={() => {this.setState({exist: "true"});}}>Click Me!</Button> */}
                            {/* <Button variant = "outlined" type="button" onClick={() => {this.DisplayPatients()}}>Click Me!</Button>*/}
                            
                            
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

