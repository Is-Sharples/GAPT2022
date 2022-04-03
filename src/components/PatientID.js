import React from "react";
import Header from './header'
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import './styles/HomeContent.css'
import { List, Divider, ListItem,ListItemText } from "@mui/material";



class Patient extends React.Component{



render(){
    return (
            
            
            <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 4, sm: 8, md: 12 }}>
                
                <Header item />
                
                    <Grid justifyContent={"center"} container item >
                        <div className="search-container" >
                            <TextField  label={"Patient ID"} 
                                    
                            ></TextField>
                    
                            <List >                 
                                <Divider />
                            

                            </List>


                    </div>
                    

                    </Grid>
                <Grid container item >

                </Grid>
                
            
            </Grid>

        
        
        

        )

    }

}

export default Patient;