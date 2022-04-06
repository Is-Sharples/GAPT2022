import { Box, Button, ListItem , List, ListItemButton } from "@mui/material";
import React from "react";
import '../styles/PatientCard.css';

export default function PatientCard(props){
    
    console.log("hello");
    return (
        <List>
            <ListItemButton sx = {{
                border:'black 1px solid',
                borderRadius:'12px',
                borderColor:'rgb(199, 196, 196)',
                color:'#4E4E4E'
             
             }} className="buttons"  >
                {props.patient.name} {props.patient.surname}
                <br />
                {props.patient.id}
            </ListItemButton>

        </List>
            
        
    )
}

