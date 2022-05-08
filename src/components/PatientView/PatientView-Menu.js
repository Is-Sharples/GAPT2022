import { Grid } from "@mui/material";
import React from "react";
import Header from '../header'
import { List, ListItem } from "@material-ui/core";
import { Button } from "@mui/material";
class PatientMenu extends React.Component{
    

    render(){




        return (
            <div>
                
                <Header  name = "View Forms"></Header>
                <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }} >
                    <List>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Nurse</Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Occupational</Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Physiotherapist</Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Social Worker</Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Other Profession</Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth={true} variant="contained" >Geriatric Consultant</Button>
                        </ListItem>
                    </List>

                </Grid>

            </div>
        )
    }

        
    

}


export default function(props){


    return(


        <PatientMenu></PatientMenu>
    )
}