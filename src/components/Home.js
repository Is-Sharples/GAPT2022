import React from "react";
import PatientID from "./PatientID";
import { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import { Button, ListItem, TextField } from "@mui/material";
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
        var value = event.target.value.toUpperCase();
        // console.log(value);
        this.state.creds.name = value;
        console.log(this.state.creds.name);
        console.log(this.state.users[0].name);
    }




   
    render(){
        
        // this.state.users = getUsers();
        // console.log(this.state.users[0].name);
        // console.log(this.state.users)
        // this.state.users.map((user,index) => {
        //     console.log("Hello");
        // });
        
        // console.log(TestUsers[0].name);

        // console.log(this.state.creds);
        var typography = "Please insert your email and password to be able to login to the app";
        return(
            <div className="screen">
                
                <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6 }} >
                    <Header typography = {typography} name = {"Login Page"} />           
                    <div item className="search-container" >
                        
                    <List justifyContent={"center"} item >
                        <ListItem>
                            <TextField onChange={this.StoreUsername} item label = {"E-Mail"}>  </TextField>
    
                        </ListItem>    
                        <ListItem>
                            <TextField  item label = {"Password"}>  </TextField>
                        </ListItem>
                        <ListItem justifyContent={"center"} >
                            <Button fullWidth={"true"} variant = {"contained"}>Submit</Button>
                        </ListItem>    
                        </List>
                    </div>
                    
                </Grid>     
            </div>      
        )
    }

}



export default Login;