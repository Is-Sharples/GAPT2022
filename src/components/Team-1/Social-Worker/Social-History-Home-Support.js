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
class SWHomeSupport extends React.Component{

    constructor(props){
        super (props);
        this.state = {
            radio:"",
            fragments:[],
            result:"",
            next:true,
        }
    }

    handleChange = (event) =>{
        var value = event.target.value;
        this.state.radio = value;
        sessionStorage.setItem("Lives Alone?",this.state.radio);
        var testing = [];

        if(this.state.radio === "Lives Alone"){
            testing.push(
                <React.Fragment>
                    <div className="search-container">
                        <RadioGroup
                            
                            onChange={this.readNewForm}
                            >
                            <FormControlLabel value={"No Support"} control={<Radio />} label="No Support" />
                            <FormControlLabel value={"Average Support"} control={<Radio />} label="Average Support" />
                            <FormControlLabel value={"Well Support"} control={<Radio />} label="Well Support" />
                        </RadioGroup>
                    </div>
                        

                </React.Fragment>
            );
            
            console.log(this.state.radio);
        }else if (this.state.radio === "Does not live alone") {
            testing.push(
                <React.Fragment>
                    <div className="search-container">
                        <RadioGroup
                            
                            onChange={this.readNewForm}
                            >
                            <FormControlLabel value={"Lives in Residential Home"} control={<Radio />} label="Lives in Residential Home" />
                            <FormControlLabel value={"Lives with Partner/Children"} control={<Radio />} label="Lives with Partner/Children" />
                            <FormControlLabel value={"Has Carer"} control={<Radio />} label="Has Carer" />
                        </RadioGroup>
                    </div>
                        

                </React.Fragment>
            );
        }
        this.setState({
            fragments:testing
        });
    }


    readNewForm = (event) => {
        var value = event.target.value;
        // console.log(value);
        this.state.result = value;
        sessionStorage.setItem('Any Support?',this.state.result);
        this.setState({
            next:false,
        })
    }


    render(){
        //*in Mickey Voice: This is a surprise tool that will help us out later
        
        //

        const { navigation } = this.props;
        var typography = "Ask the patient if he lives alone or with someone";
        return(
            <div >
                <Grid justifyContent={"center"} container rowGap={4} columns={{ xs: 2, sm: 2, md: 6}} >
                    <Header history = {"/Patient-ID-Social-Worker"} typography = {typography} name = {"Home Support"} ></Header>
                    <List>
                        <ListItem>
                            <FormControl>
                            <RadioGroup
                                className="search-container"
                                onChange={this.handleChange}
                                >
                                <FormControlLabel value={"Lives Alone"} control={<Radio />} label="Lives Alone" />
                            
                                <FormControlLabel value={"Does not live alone"} control={<Radio />} label="Does Not Live Alone" />
                                {this.state.fragments}
                        </RadioGroup>

                        
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => navigation("/SH-Home-Env")} disabled={this.state.next} variant="contained" fullWidth={true} >Next</Button>
                        </ListItem>
                    </List>
                    
                    
                </Grid>
            </div>
        );
    }

}



export default function(props){
    const navigate =useNavigate();

    return <SWHomeSupport {...props} navigation = {navigate} ></SWHomeSupport>
}