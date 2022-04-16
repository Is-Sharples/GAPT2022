import React from "react";
import PatientID from "./PatientID";
import { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import { Button, InputLabel, ListItem, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsers } from "./firebase";
import './styles/Summary.css';
import Header from "./header";
import { List } from "@mui/material";

class Credentials{
    constructor(name,pass){
        this.name = name;
        this.pass = pass;
        this.nameToken = false;
        this.passToken = false;
    }
}

class User{
    constructor(name,pass){
        this.name = name;
        this.pass = pass;
    }
}


class Login extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            creds: new Credentials("",""),
            users: getUsers(),
        }
    };
    
    StoreUsername = (event) => {
        let value = event.target.value;
        this.state.creds.name = value;
        
        
    }

    StorePassword = (event) => {
        let value = event.target.value;
        this.state.creds.pass = value;
        
    }


    CompareCreds(){
        let users = this.state.users;
        const { navigation } = this.props;
        
        users.forEach(User => {
            if(User.user === this.state.creds.name){
                if(User.pass === this.state.creds.pass){
                    console.log(User.roles);
                    if(User.roles === "admin"){

                        navigation("/Patient");
                    }else{
                        navigation("/PatientDataTeam2");
                    }
                    
                }
            }
        });
    }

    


    render(){
        
        //console.log(this.state.users[1]);
        var typography = "Please insert your email and password to be able to login to the app";
        return(
            <div className="screen">
                
                <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6 }} >
                    <Header typography = {typography} name = {"Login Page"} />           
                    <div item className="search-container" >
                        
                    <List justifyContent={"center"} item >
                        <ListItem>
                            <TextField  fullWidth={"true"} onChange={this.StoreUsername} item label = {"E-Mail"}>  </TextField>
    
                        </ListItem>    
                        <ListItem>
                           
                                <TextField 
                                fullWidth={"true"}
                                onChange={this.StorePassword} 
                                item 
                                label = {"Password"}
                                // ref='password'
                                type={"password"}
                                >   
                                </TextField>
                            
                                


                        </ListItem>
                        <ListItem justifyContent={"center"} >
                            <Button onClick={() => this.CompareCreds()} fullWidth={"true"} variant = {"contained"}>Submit</Button>
                            {/* <Button onClick={() => navigation("/Patient")} fullWidth={"true"} variant = {"contained"}>Submit</Button> */}
                        </ListItem>    
                        </List>
                    </div>
                    
                </Grid>     
            </div>      
        )
    }

}



export default function(props){
    const navigate= useNavigate();


    return <Login {...props} navigation={navigate} ></Login>
};