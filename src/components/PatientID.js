import React from "react";
import Header from './header'
import { Grid, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import './styles/HomeContent.css'
import { List, Divider, ListItem,ListItemText } from "@mui/material";
import { Button } from "@mui/material";
import Summary from './Summary';
import {useState} from 'react';
import Barthel from './BarthelIndex';


export default function PatientID(){

   
    const [exist,setExist] = useState("false");
    
    if(exist === "true"){
        return(<Summary />);
    }
    
    
    
    


    return (
            
            
        <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 4, sm: 8, md: 12 }}>
            
            <Header item />
            
                <Grid justifyContent={"center"} container item >
                    <div className="search-container" >
                        <TextField  label={"Patient ID"} 
                                
                        ></TextField>
                
                        <List >                 
                            <Divider />
                            <Button type="button" onClick={() => setExist("true")}>Click Me!</Button>
                        </List>


                </div>
                

                </Grid>
            <Grid container item >

            </Grid>
            
        
        </Grid>

    
    
    

    );


    }


    



