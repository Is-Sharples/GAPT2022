import React from "react";
import { Divider, Grid, TextField } from "@mui/material";
import '../../styles/HomeContent.css';
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import { List, ListItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Button } from "@mui/material";

class HomeEnv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            next: true,
            stairs:"",
            amenities:"",
            location:"",
            fragments:[],
            button:[]
        }
    }

    handleStairs = (event) =>{
        var value = event.target.value;
        // console.log(value);
        sessionStorage.setItem("Stairs In Home:",value);
    }
    handleAmenities = (event) => {
        
        var testing = [];
        var value = event.target.value;
        // console.log(value);
        sessionStorage.setItem("Amenities",value);
        if(value === "Yes"){
            this.setState({
                next:false
            });
            sessionStorage.setItem("Location Of Amenities","");
            //Other Amenity Location
            sessionStorage.setItem("Other Amenity Location","");

        }
        if(value === "No"){
            testing.push(
                <React.Fragment>
                    <Divider />
                    <h6>Location of Amenities</h6>
                    <RadioGroup
                            
                            onChange={this.handleOther}
                            >
                            <FormControlLabel value={"Stairs Between Rooms"} control={<Radio />} label="Stairs Between Rooms" />
                            <FormControlLabel value={"Amenities on Different Floors"} control={<Radio />} label="Amenities on Different Floors" />
                            <FormControlLabel value={"Other"} control={<Radio />} label="Other" />
                        </RadioGroup>


                </React.Fragment>
            )
        }
        this.setState({
            fragments:testing,
        });
        
    }

    handleText = (event) =>{
        
        var value = event.target.value;
        // console.log(value);
        sessionStorage.setItem("Other Amenity Location",value);
    }

    handleOther = (event) => {
        sessionStorage.setItem("Other Amenity Location","N/A");
        var testing = [];
        var value = event.target.value;
        // console.log(value);
        sessionStorage.setItem("Location Of Amenities",value);
        if(value === "Other"){
            testing.push(
                <React.Fragment>
                    <TextField onChange={this.handleText} label = "Enter Other Amenity Location"></TextField>
                </React.Fragment>
            )
        }
        this.setState({
            button:testing
        })
        this.setState({
            next:false,
        })
    }

    

    render(){


        const { navigation } = this.props;
        var typography = "I dont even know about this page bro";

        return(
            <div>
                <Grid justifyContent={"center"} container rowGap={4} columns={{xs:2, sm: 2, md:6}} >
                    <Header typography = {typography} name = {"Home Environment"} history = {"/SH-Home-Support"}  ></Header>
                    <List>
                        <ListItem >
                            <FormControl>
                            <RadioGroup
                                className="search-container"
                                onChange={this.handleStairs}
                                >
                                    <h6>Stairs to Access Home</h6>    
                                    <FormControlLabel value={"Yes"} control={<Radio />} label="Yes" />
                                <FormControlLabel value={"No"} control={<Radio />} label="No" />
                                <Divider />
                                    <h6>Amenities on the Same Floor </h6>
                                <RadioGroup
                                
                                onChange={this.handleAmenities}
                                >
                                    <FormControlLabel value={"Yes"} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={"No"} control={<Radio />} label="No" />
                                </RadioGroup>
                                
                                {this.state.fragments}
                                {this.state.button}
                        </RadioGroup>

                        
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => navigation("/SH-Patient-Plans")} disabled={this.state.next} variant="contained" fullWidth={true} >Next</Button>
                        </ListItem>
                    </List>
                </Grid>
            </div>
        )
    }
}



export default function (props){

    const navigate = useNavigate();

    return <HomeEnv {...props} navigation = {navigate} ></HomeEnv>
}