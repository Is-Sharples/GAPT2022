import React from "react";
import { FormControl, FormGroup, Grid, ListItem } from "@mui/material";
import Header from "../../header";
import '../../styles/HomeContent.css';
import '../../styles/header.css';
import { useNavigate } from "react-router-dom";
import { RadioGroup, Radio } from "@mui/material";
import { List } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { TextField } from "@mui/material";





class SocialServices extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            next:false,
            fragments:[],
            exp:[],
        }
        sessionStorage.setItem("CommCare","");
        sessionStorage.setItem("HomeHelp","");
        sessionStorage.setItem("Telecare","");
        sessionStorage.setItem("Meals On Wheels","");
        sessionStorage.setItem("Other","");
        

    }

    handleText = (event) => {
        var value = event.target.value;
        sessionStorage.setItem("Other Profession:",value);
        // this.state.exp.push(value);
            // sessionStorage.setItem("Array", this.state.exp);
    }


    handleChange = (event) =>{
        var value = event.target.value;
        // console.log(value);
        var testing = [];
        

        if(value === "CommCare"){
            sessionStorage.setItem(value,"CommCare");
            this.state.exp.push(value);
            sessionStorage.setItem("Array", this.state.exp);
        }
        if(value === "HomeHelp"){
            sessionStorage.setItem(value,"HomeHelp");
            this.state.exp.push(value);
            sessionStorage.setItem("Array", this.state.exp);
        }
        if(value === "Telecare"){
            sessionStorage.setItem(value,"Telecare");
            this.state.exp.push(value);
            sessionStorage.setItem("Array", this.state.exp);
        }
        if(value === "Meals On Wheels"){
            sessionStorage.setItem(value,"Meals On Wheels");
            this.state.exp.push(value);
            sessionStorage.setItem("Array", this.state.exp);
        }
        if(value === "Other"){
            sessionStorage.setItem(value,"Yes");
            testing.push(
                <React.Fragment>
                    <TextField onChange={this.handleText} label = "Enter Social Service"></TextField>
                </React.Fragment>
            )
        }
        this.setState({
            fragments:testing
        })

        
    }

    handleClick = () => {
        const { navigation } = this.props;
        // this.state.exp.push(sessionStorage.getItem("Other Profession:"));
        var value = sessionStorage.getItem("Other Profession:");
        this.state.exp.push(value);
        console.log(this.state.exp);
        
        sessionStorage.setItem("Array", this.state.exp);
        navigation("/Community-Apps")

    }


    render(){
        
        
        var typography = "I dont even know about this page bro";

        return (
            <div  >
                <Grid justifyContent={"center"} container rowGap={4} columns={{xs:2, sm:2, md:6}} >
                    <Header typography={typography} name = {"Social Services"} history = {"/SH-Home-Env"} ></Header>
                    <List>
                        <ListItem>
                            <FormControl>
                            <FormGroup
                            className="search-container"
                            onChange={this.handleChange}
                            >
                                <FormControlLabel value={"CommCare"} control={<Checkbox />} label="CommCare" />
                                <FormControlLabel value={"HomeHelp"} control={<Checkbox />} label="HomeHelp" />
                                <FormControlLabel value={"Telecare"} control={<Checkbox />} label="Telecare" />
                                <FormControlLabel value={"Meals On Wheels"} control={<Checkbox />} label="Meals On Wheels" />
                                <FormControlLabel value={"Other"} control={<Checkbox />} label="Other" />
                            </FormGroup>
                                {this.state.fragments}

                        
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <Button onClick={this.handleClick} disabled={this.state.next} variant="contained" fullWidth={true} >Next</Button>
                        </ListItem>
                    </List>


                </Grid>
            </div>
        )
    }
}



export default function (props){

    const navigate = useNavigate();

    return <SocialServices {...props} navigation = {navigate} />
}