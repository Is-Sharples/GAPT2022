import { Grid } from "@mui/material";
import React from "react";
import Header from '../header'
import { List, ListItem } from "@material-ui/core";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
class PatientMenu extends React.Component{
    constructor(props){
        super(props);
    }

    GoToNurse = () => {
        const { navigation } = this.props;
        navigation("/PatientView-Nurse")
    }

    GoToOther = () => {
        const { navigation } = this.props;
        navigation("/PatientView-Other");
    }

    GoToOccupation = () => {
        const { navigation } = this.props;
        navigation("/PatientView-Occupational");
    }

    GoToSocialWorker = () => {
        const { navigation } = this.props;
        navigation("/PatientView-Social");
    }

    GoToConsultant = () => {
        const { navigation } = this.props;
        navigation("/PatientView-GC");
    }

    render(){
        



        return (
            <div>
                
                <Header history = {"/PatientView"} name = "View Forms"></Header>
                <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }} >
                    <List>
                        <ListItem>
                            <Button onClick={this.GoToNurse} fullWidth={true} variant="contained" >Nurse</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.GoToOccupation} fullWidth={true} variant="contained" >Occupational</Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Physiotherapist</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.GoToSocialWorker} fullWidth={true} variant="contained" >Social Worker</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.GoToOther} fullWidth={true} variant="contained" >Other Profession</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.GoToConsultant} fullWidth={true} variant="contained" >Geriatric Consultant</Button>
                        </ListItem>
                    </List>

                </Grid>

            </div>
        )
    }

        
    

}


export default function(props){
    const navigate = useNavigate();

    return(
        

        <PatientMenu {...props} navigation = {navigate} ></PatientMenu>
    )
}