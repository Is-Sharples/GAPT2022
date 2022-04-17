import React from "react";
import Header from "./header";
import {Grid, TextField, List, ListItem, Button} from '@mui/material';
import { useState } from "react";
import { typography } from "@mui/system";
import './styles/HomeContent.css';
import './styles/Summary.css';

class Patient{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}

function test(){

}


export default function CreatePatient(){
    var typography = "This page is to create a new patient";
    let patient = new Patient("",0);
    

    return (

    <div className="screen">
        <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6 }} >
            <Header typography={typography} name = {"Create Patient Page"}></Header>    

            <div className="search-container">
                <List>
                    <ListItem>
                        <TextField label = {"Full Name"} ></TextField>
                    </ListItem>
                    
                    <ListItem>
                        <TextField label = {"Patient ID"} ></TextField>
                    </ListItem>    
                    <ListItem>
                        <Button onClick={() => test()} fullWidth={true} variant = "contained" >Create Patient</Button>
                    </ListItem>
                </List>
                
            </div>

        </Grid>

    </div>    
        

    )
    

}

