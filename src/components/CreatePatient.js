import React from "react";
import Header from "./header";
import {Grid, TextField, List, ListItem, Button} from '@mui/material';
import { useState } from "react";
import { typography } from "@mui/system";
import './styles/HomeContent.css';
import './styles/Summary.css';
import { useNavigate } from "react-router-dom";
import { setPatient } from "./firebase";
import { Snackbar } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
class Patient{

    constructor(name,id, gender,age){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
    }
}




class CreatePatient extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name: "",
            id: 0,
            patient: new Patient("",0),
            open: false,
            gender: "",
            age: "",
        }
    }

    getName = (event) => {
        let value = event.target.value;
        this.state.name = value;
    }

    getID = (event) => {
        let value = event.target.value;
        this.state.id = value;
    }

    
    submitData = () =>{
        this.state.patient.name = this.state.name;
        this.state.patient.id = this.state.id;
        this.state.patient.gender = this.state.gender;
        this.state.patient.age = this.state.age;
        setPatient(this.state.patient);
        this.setState({open:true});
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation("/");
    }

    getGender = (event) => {
        let value = event.target.value;
        this.state.gender = value;
    }

    getAge = (event) => {
        let value = event.target.value;
        this.state.age = value;
    }



    render(){
    var typography = "This page is to create a new patient";

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
             return;
        }
        this.setState({open:false});
    }
    const action = (
        <React.Fragment>
            <Button onClick={this.goBack}>Go Back to Login</Button>
                <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
                >
            <CloseIcon fontSize="small" />
            </IconButton>
            </React.Fragment>
        );

    

    return (

        <div className="screen">
            <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6 }} >
                <Header history={"/"} typography={typography} name = {"Create Patient Page"}></Header>    

                <div className="search-container">
                    <List>
                        <ListItem>
                            <TextField onChange={this.getName} label = {"Full Name"} ></TextField>
                        </ListItem>
                        
                        <ListItem>
                            <TextField onChange={this.getID} label = {"Patient ID"} ></TextField>
                        </ListItem> 
                        <ListItem>
                            <TextField onChange={this.getGender} label = {"Gender"} ></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getAge} label = {"Age"}></TextField>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.submitData} fullWidth={true} variant = "contained" >Create Patient</Button>
                        </ListItem>
                        
                    </List>
                    
                </div>
                <Snackbar 
                    open = {this.state.open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Great Success!"
                    action={action}
                />
            </Grid>

        </div>    
        
    )

    }

}

export default function(props){
    const navigate= useNavigate();


    return <CreatePatient {...props} navigation={navigate} ></CreatePatient>

}