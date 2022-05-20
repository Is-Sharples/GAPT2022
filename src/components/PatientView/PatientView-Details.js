import React from "react";
import Header from "../header";
import {Grid, TextField, List, ListItem, Button} from '@mui/material';
import { useState } from "react";
import { typography } from "@mui/system";
import '../styles/HomeContent.css';
import '../styles/Summary.css';
import { useNavigate } from "react-router-dom";
import { setUser } from "../firebase";
import { Snackbar } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GetPatientData } from "../firebase";
import { getPatients2 } from "../firebase";
import '../styles/SocialWorkerSum.css';
class Patient{

    constructor(name,id, pass,roles, user){
        this.name = name;
        this.id = id;
        this.pass = pass;
        this.roles = roles;
        this.user = user;
    }
}




class PatientViewDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            patients: [],
            test:[],
            currentPatient: {},
        }
    }

    componentDidMount(){
        getPatients2().then((result) => {
            this.setState({
                patients:result
            })
        })
        //console.log(getPatients());
    }

    handleClick = () =>{
        const { navigation } = this.props;

        navigation("/Patient-Menu");
    }
    render(){
    var typography = "This page is to create a new User";

    // sessionStorage.setItem("id","45");
    var id = sessionStorage.getItem("id");
    
    this.state.patients.forEach(patient => {
        if(patient.id === id){
            this.state.currentPatient = patient;
            console.log(this.state.currentPatient);
        }
    });
    console.log(this.state.patients);
        
    return (

        <div className="screen">
            <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6 }} >
                <Header history={"/AdminMenu"} typography={typography} name = {"Patient Details"}></Header>    
                <List>
                    <ListItem>

                    
                <table className="search-container">
                    {/* <Button onClick={() => this.forceUpdate()}  > Hello</Button> */}
                    <tr className="grid-data" >
                        <td>Name:</td>
                        <td>{this.state.currentPatient.name}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>ID:</td>
                        <td>{this.state.currentPatient.id}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Age:</td>
                        <td>{this.state.currentPatient.age}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Gender:</td>
                        <td>{this.state.currentPatient.gender} </td>
                    </tr>
                    <tr className="grid-data" >
                        <td>House Name:</td>
                        <td>{this.state.currentPatient.houseName}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>House No:</td>
                        <td>{this.state.currentPatient.houseNum}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Street Name:</td>
                        <td>{this.state.currentPatient.streetname}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Zip Code:</td>
                        <td>{this.state.currentPatient.zipcode}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Kin Name:</td>
                        <td>{this.state.currentPatient.kinName}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Kin Relation:</td>
                        <td>{this.state.currentPatient.kinRelation}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Kin No:</td>
                        <td>{this.state.currentPatient.KinNumber}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Admitting Consultant</td>
                        <td>{this.state.currentPatient.AdmitConsultant}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Admitted Ward</td>
                        <td>{this.state.currentPatient.AdmitWard}</td>
                    </tr>
                    <tr className="grid-data" >
                        <td>Admitted Last Year</td>
                        <td>{this.state.currentPatient.AdmitLastYear}</td>
                    </tr>
                </table>
                </ListItem>
                    <ListItem>
                        <Button onClick={this.handleClick} variant="contained" fullWidth={true} >Next</Button>
                    </ListItem>
                </List>
            </Grid>

        </div>    
        
    )

    }

}

export default function(props){
    const navigate= useNavigate();


    return <PatientViewDetails {...props} navigation={navigate} ></PatientViewDetails>

}