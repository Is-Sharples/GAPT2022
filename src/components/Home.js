import React from "react";
import PatientID from "./PatientID";
import { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import { Button, ListItem, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "./firebase";
import './styles/Summary.css';
import Header from "./header";
import { List } from "@mui/material";

export default function Login (props){  
    
    const navigate = useNavigate();
    var typography = "Please insert your email and password to be able to login to the app";
    var password = "";
    // useEffect(() => {
        
    //     navigate("/Patient");
    //   });
    
    let users  = getUsers();
    console.log(users);
    return(
        <div className="screen">
            
            <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6 }} >
                <Header typography = {typography} name = {"Login Page"} />           
                <div item className="search-container" >
                    
                <List justifyContent={"center"} item >
                    <ListItem>
                        <TextField item label = {"E-Mail"}>  </TextField>

                    </ListItem>    
                    <ListItem>
                        <TextField  item label = {"Password"}>  </TextField>
                    </ListItem>
                    <ListItem justifyContent={"center"} >
                        <Button fullWidth={"true"} variant = {"contained"}>Click me</Button>
                    </ListItem>    
                    </List>
                </div>
                
            </Grid>     
        </div>      
    )
    






}