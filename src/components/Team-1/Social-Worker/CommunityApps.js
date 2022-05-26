import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import '../../styles/HomeContent.css';
import { List, ListItem } from "@mui/material";
import { Button, FormControlLabel, Grid } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { FormControl } from "@mui/material";
import '../../styles/header.css';
class CommunityApps extends React.Component{

    constructor(props){
        super (props);
        this.state = {
            radio:"",
            fragments:[],
            result:"",
            next:true,
        }
        sessionStorage.setItem("TimeSpan","");
    }

    handleChange = (event) =>{
        var value = event.target.value;
        

        sessionStorage.setItem("CommunityApps:",value);
        var testing = [];

        if(value === "Yes"){
            testing.push(
                <React.Fragment>
                    <div className="search-container">
                        <RadioGroup
                            
                            onChange={this.readNewForm}
                            >
                            <h6> TimeSpan </h6>
                            <FormControlLabel value={"<6 Months"} control={<Radio />} label="<6 Months"/>
                            <FormControlLabel value={"6 - 12 Months"} control={<Radio />} label="6 - 12 Months" />
                            <FormControlLabel value={"1-2 Years"} control={<Radio />} label="1-2 Years" />
                            <FormControlLabel value={"2-3 Years"} control={<Radio />} label="2-3 Years" />
                            <FormControlLabel value={">3 Years"} control={<Radio />} label=">3 Years" />

                        </RadioGroup>
                    </div>
                        

                </React.Fragment>
            );
            
            // console.log(this.state.radio);
        }
        if(value === "No"){
            this.setState({
                next:false,
            })
        }
        this.setState({
            fragments:testing
        });
    }


    readNewForm = (event) => {
        var value = event.target.value;
        this.state.result = value;
        sessionStorage.setItem('TimeSpan',this.state.result);
        this.setState({
            next:false,
        })
    }


    render(){
        
        const { navigation } = this.props;
        var typography = "Ask the patient the relevant question";
        return(
            <div >
                <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6}} >
                    <Header history = {"/Social-Services"} typography = {typography} name = {"Community Apps"} ></Header>
                    <List>
                        <ListItem>
                            <FormControl>
                            <RadioGroup
                                className="search-container"
                                onChange={this.handleChange}
                                >
                                <FormControlLabel value={"Yes"} control={<Radio />} label="Yes" />
                                    {this.state.fragments}
                                <FormControlLabel value={"No"} control={<Radio />} label="No" />
                                
                        </RadioGroup>

                        
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => navigation("/Summary-Social-Worker")} disabled={this.state.next} variant="contained" fullWidth={true} >Next</Button>
                        </ListItem>
                    </List>
                    
                    
                </Grid>
            </div>
        );
    }

}



export default function(props){
    const navigate =useNavigate();

    return <CommunityApps {...props} navigation = {navigate} ></CommunityApps>
}