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
class Patient{

    constructor(name,id, pass,roles, user){
        this.name = name;
        this.id = id;
        this.pass = pass;
        this.roles = roles;
        this.user = user;
    }
}




class CreateUser extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name: "",
            id: 0,
            patient: new Patient("",0),
            open: false,
            pass: "",
            roles: "",
            user: "",
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
        this.state.patient.pass = this.state.pass;
        this.state.patient.user = this.state.user;
        this.state.patient.roles = this.state.roles;
        console.log(this.state.patient);        
        setUser(this.state.patient);
        this.setState({open:true});
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation("/");
    }

    getPass = (event) => {
        let value = event.target.value;
        this.state.pass = value;
    }

    getRoles = (event) => {
        let value = event.target.value;
        this.state.roles = value;
    }

    getUser = (event) => {
        let value = event.target.value;
        this.state.user = value;
    }


    render(){
    var typography = "This page is to create a new User";

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
                            <TextField onChange={this.getID} label = {"User ID"} ></TextField>
                        </ListItem> 
                        <ListItem>
                            <TextField onChange={this.getRoles} label = {"Roles"} ></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getUser} label = {"UserName"} ></TextField>
                        </ListItem>
                        <ListItem>
                            <TextField onChange={this.getPass} label = {"Password"}></TextField>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.submitData} fullWidth={true} variant = "contained" >Create User</Button>
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


    return <CreateUser {...props} navigation={navigate} ></CreateUser>

}