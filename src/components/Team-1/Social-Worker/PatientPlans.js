import React from "react";
import { FormControl, Grid, ListItem } from "@mui/material";
import Header from "../../header";
import '../../styles/HomeContent.css';
import '../../styles/header.css';
import { useNavigate } from "react-router-dom";
import { RadioGroup, Radio } from "@mui/material";
import { List } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";






class PatientPlans extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            next:true,
        }
    }


    handleChange = (event) =>{
        var value = event.target.value;
        // console.log(value);
        sessionStorage.setItem("PatientPlans",value);
        this.setState({
            next:false,
        })
    }


    render(){
        const { navigation } = this.props;
        var typography = "Ask the the Patient the following questions";

        return (
            <div  >
                <Grid justifyContent={"center"} container rowGap={4} columns={{xs:2, sm:2, md:6}} >
                    <Header typography={typography} name = {"Patient Expectations and Plans"} history = {"/SH-Home-Env"} ></Header>
                    <List>
                        <ListItem>
                            <FormControl>
                            <RadioGroup
                                className="search-container"
                                onChange={this.handleChange}
                                >
                                <FormControlLabel value={"Return Home"} control={<Radio />} label="Return Home" />
                            
                                <FormControlLabel value={"Re-Allocation of Own Home"} control={<Radio />} label="Re-Allocation of Own Home" />
                                <FormControlLabel value={"Residential Care Home"} control={<Radio />} label="Residential Care Home" />
                        </RadioGroup>

                        
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => navigation("/SH-Relative-Plans")} disabled={this.state.next} variant="contained" fullWidth={true} >Next</Button>
                        </ListItem>
                    </List>


                </Grid>
            </div>
        )
    }
}



export default function (props){

    const navigate = useNavigate();

    return <PatientPlans {...props} navigation = {navigate} />
}