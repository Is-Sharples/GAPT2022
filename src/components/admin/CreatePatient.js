import React from "react";
import Header from "../header";
import {Grid, TextField, List, ListItem, Button} from '@mui/material';
import { useState } from "react";
import { typography } from "@mui/system";
import '../styles/HomeContent.css';
import '../styles/Summary.css';
import { useNavigate } from "react-router-dom";
import { setPatient } from "../firebase";
import { Snackbar } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
class Patient{

    constructor(name,id, gender,age){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.housename = "";
        this.houseNum = 0;
        this.streetname = "";
        this.kinName = "";
        this.KinNumber = "";
        this.kinRelation = "";
        this.locality = ""; 
        this.AdmitConsultant = "";
        this.AdmitWard = "";
        this.zipcode = "";
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
            housename: "",
            streetname: "",
            houseNum:0,
            zipcode:"",
            locality:"",
            kinName:"",
            kinRelation:"",
            KinNumber:"",
            AdmitConsultant:"",
            AdmitWard:"",
            AdmitLastYear:"",
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
        // this.state.patient.AdmitConsultant = this.state.AdmitConsultant;
        // this.state.patient.AdmitWard = this.state.AdmitWard;
        setPatient(this.state.patient);
        this.setState({open:true});
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation("/AdminMenu");
    }

    getGender = (event) => {
        let value = event.target.value;
        this.state.gender = value;
    }

    getAge = (event) => {
        let value = event.target.value;
        this.state.age = value;
    }

    getHouseName = (event) => {
        let value = event.target.value;
        this.state.housename = value;

    }

    getZipCode = (event) => {
        let value = event.target.value;
        this.state.patient.zipcode = value;
    }
    getHouseNum = (event) => {
        let value = event.target.value;
        this.state.patient.houseNum = value;
    }

    getStreetName = (event) => {
        let value = event.target.value;
        this.state.patient.streetname = value;
    }
    getKinNum = (event) => {
        let value = event.target.value;
        this.state.patient.KinNumber = value;
    }

    getKinRelation = (event) => {
        let value = event.target.value;
        this.state.patient.kinRelation  = value;
    }
    getKinName = (event) => {
        let value = event.target.value;
        this.state.patient.kinName = value;
    }

    getLocality = (event) => {
        let value = event.target.value;
        this.state.patient.locality = value;   
    }

    getAdmitConsultant = (event) => {
        let value = event.target.value;
        this.state.patient.AdmitConsultant = value;
    }

    getAdmitWard = (event) => {
        let value = event.target.value;
        this.state.patient.AdmitWard = value;
    }

    getAdmitLastYear = (event) => {
        let value = event.target.value;
        this.state.patient.AdmitLastYear = value;
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
                <Header history={"/AdminMenu"} typography={typography} name = {"Create Patient Page"}></Header>    

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
                            <TextField onChange={this.getHouseName} label = {"House Name"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getHouseNum} label = {"House No."}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getStreetName} label = {"Street Name"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getZipCode} label = {"ZipCode"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getKinName} label = {"Kin Name"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getKinNum} label = {"Kin Contact Number"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getKinRelation} label = {"Kin Relation"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getLocality} label = {"Locality"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getAdmitConsultant} label = {"Admitting Consultant"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getAdmitWard} label = {"Admitting Ward"}></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getAdmitLastYear} label = {"Admissions Last Year"}></TextField>
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