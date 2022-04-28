import React from "react";
import Header from '../../header'
import { Grid, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import '../../styles/HomeContent.css';
import { List, Divider, ListItem,ListItemText, ListItemButton } from "@mui/material";
import { Button } from "@mui/material";
import {useState} from 'react';
import '../../styles/header.css';
import SHHomeSupport from './Social-History-Home-Support';
import { getPatients } from "../../firebase";
import '../../firebase';
import {BrowserRouter as Router, Route,Routes, useNavigate} from 'react-router-dom';
class currentPatient{
    constructor(id,name,surname,gender){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.surname = surname;
    }
    
}


class PatientIDSW extends React.Component{

constructor(props){
    super(props);
    this.state = {
        exist: "false",
        patients : getPatients(),
        fragments:[],
        currentPatient: new currentPatient(0,"","",""),
        entered: "true"
    };

    
}   


componentWillUnmount() {
    this.setState({
        text: "",
        fragments:<></>,
        currentPatient: new currentPatient(0,"","",""),
    
    });
    // console.log("");
    this.state.currentPatient.id = 0;
}

componentDidMount(){
    this.state.currentPatient.id = 0;
}


SetCurrentPatient(patient){
    //console.log("hello");
    this.setState({currentPatient:patient,});
    this.setState({entered: "false"});
    sessionStorage.setItem("patientId",patient.id);
}




DisplayPatients = (event) =>{  
    var value = event.target.value.toUpperCase();
    var testing = [];  

    if(value !== ""){
        
        //console.log(getPatients());    
        this.state.patients.map((patient, index) => {
            var tempID = patient.id.toUpperCase().substr(0,value.length);
            let regex = new RegExp(tempID,'g');
            
            if(regex.test(value)){
                testing.push(
                    <React.Fragment  key = {index}>
                        
                        <ListItemButton  onClick={() => this.SetCurrentPatient(patient)} >
                            <ListItemText primary={patient.name} secondary={patient.id} />    
                        </ListItemButton>
                        <Divider />
            
                    </React.Fragment>
            
                )
            }
            
    
        })

        this.setState({fragments:testing});

    }else{
        this.setState({fragments:<></>});
    }

}



render(){
    var typography = "Input a Patient ID to be directed to his Barthel & Measurements Summary Page";
    // console.log(getPatients());

    if(this.state.currentPatient.id !== 0){
        const { navigation } = this.props;
        // return <SHHomeSupport ahwStore = {ahw} history = {"/"} patient = {this.state.currentPatient}/>     
        navigation("/SH-Home-Support");
    }
    

    
    return (
            
            
        <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }}>
            
            <Header typography = {typography} history = {"/"} item  name = {"Patient Page"}/>
            
                <Grid justifyContent={"center"} container item >
                    <div className="search-container" >
                        <TextField  label={"Patient ID"} 
                                    onChange ={this.DisplayPatients}
                        ></TextField>
                        <List >                 
                            <Divider />                           
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

export default function(props){
    const navigate = useNavigate();
    return <PatientIDSW {...props} navigation = {navigate}></PatientIDSW>

}

