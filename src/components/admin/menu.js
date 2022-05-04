import React from 'react'
import Header from "../header";
import { Grid, Button, Box } from "@mui/material";
import { List, ListItem } from '@material-ui/core';
import '../styles/Summary.css';
import { useNavigate } from 'react-router-dom';


class AdminMenu extends React.Component{

    handleclick = () => {
    
    var roles = sessionStorage.getItem("roles");
    console.log(roles);
    }

    render() {
    var typography = "Choose the profession to carry out the designated assessment";
    
    const { navigation } = this.props;
    

    
    return (
        <div>
        <Header typography = {typography} history = {"/"} name={"Menu"} /> 

        <Grid  justifyContent={"center"} container rowGap={5} columns={{ xs: 2, sm: 2, md: 6 }} >
            <List item style={{marginTop:'24px'}} className='search-container'>
                
                <ListItem> <Button   fullWidth={true} onClick={() => navigation("/CreatePatient")} variant='contained' > Create New Patient </Button> </ListItem>
                <ListItem> <Button   fullWidth={true} onClick={() => navigation("/CreateUser")}    variant='contained' > Create New User    </Button> </ListItem>
            
            
            
            
            </List>
            
        </Grid>

    </div>
    )
}

}


export default function (props){
    const navigate= useNavigate();


    return <AdminMenu {...props} navigation={navigate} ></AdminMenu>
}

