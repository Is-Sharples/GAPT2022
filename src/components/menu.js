import React from 'react'
import Header from "./header";
import { Grid, Button, Box } from "@mui/material";
import { List, ListItem } from '@material-ui/core';
import './styles/Summary.css';
import { useNavigate } from 'react-router-dom';


class Menu extends React.Component{

  handleclick = () => {
  const { navigation } = this.props;
  var roles = sessionStorage.getItem("roles");
  console.log(roles);
      if(roles === "nurse"){
            navigation("/Patient");
      }else if(roles === "physio"){
        
        navigation("/PatientID-Team-2");
      }else if (roles === "admin") {
            navigation("/CreatePatient");
      }else if (roles === "social worker"){
        
        navigation("/Patient-ID-Social-Worker");
      }else if (roles === "geriatric consultant"){
        
        navigation("/Team-3-PatientID");
      }else if (roles === "occupational"){
        navigation("/PatientIDOT");
      }else if (roles === "other"){
        navigation("/PatientIDOP");
      }
  }

  goToPatients = () => {
    const { navigation } = this.props;
    navigation("/PatientView");
  }

  render() {
    var typography = "Choose the profession to carry out the designated assessment";
    var roles = sessionStorage.getItem("roles");
    var nurse = true;
    var physio = true;
    var social = true;
    var other = true;
    var occup = true;
    var consultant = true;

    switch (roles) {
      case "nurse":
          nurse = false;
        break;
      case "physio":
          physio = false;
        break;
      case "social worker":
          social = false;
      break;
      case "occupational":
          occup = false;
      break;
      case "geriatric consultant":
          consultant = false;  
      break;
      case "other": 
          other = false;
      break;
      default:
        break;
    }

    
  return (
      <div>
        <Header typography = {typography} history = {"/"} name={"Menu"} /> 

        <Grid  justifyContent={"center"} container rowGap={5} columns={{ xs: 2, sm: 2, md: 6 }} >
          <List item style={{marginTop:'24px'}} className='search-container'>
            <ListItem >
              <Button disabled={nurse} fullWidth={true} onClick={() => this.handleclick()} variant='contained' >Nurse</Button>
            </ListItem>
            <ListItem> <  Button disabled={physio}  fullWidth={true} onClick={() => this.handleclick()} variant='contained' >Physiotherapist</Button></ListItem>
            <ListItem> <  Button disabled ={occup}  fullWidth={true} onClick={() => this.handleclick()} variant='contained' >Occupational Therapist</Button> </ListItem>
            <ListItem> <  Button disabled={social}   fullWidth={true} onClick={() => this.handleclick()} variant='contained' >Social Worker</Button> </ListItem>
            <ListItem> <  Button disabled ={other}  fullWidth={true} onClick={() => this.handleclick()} variant='contained' >Other Profession</Button> </ListItem>
            <ListItem> <  Button disabled={consultant}  fullWidth={true} onClick={() => this.handleclick()} variant='contained' >Geriatric Consultant</Button> </ListItem>
            <ListItem> <  Button fullWidth={true} onClick={() => this.goToPatients()} variant='contained'> Patient View </Button></ListItem>
            
            
            
          </List>
            
        </Grid>

    </div>
  )
}

}


export default function (props){
    const navigate= useNavigate();


    return <Menu {...props} navigation={navigate} ></Menu>
}


//<Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', marginTop: '50px', backgroundColor:'#01497A', borderRadius: '20px'}}>Nurse</Button>