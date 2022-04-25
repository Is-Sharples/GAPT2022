import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import { Grid, ListItem, List } from "@mui/material";
import '../../styles/header.css';
import '../../styles/HomeContent.css';
import { Table, TableBody, TableHead, TableCell, TableContainer,TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";

//component={Paper}
class SocialSummary extends React.Component{
    render(){
        

        var typography = "It hurts to be alive";
        return(
            <div className="screen" >
            <Grid justifyContent={"center"} container rowGap={0} columns={{ xs: 2, sm: 2, md: 6}} >
                <Header typography={typography} name="Summary" history={"/Community-Apps"} ></Header>
                <p className="Table-Title">Review Information</p>
                
                <List>
                    
                        

                    
                    
                        <table className="search-container" >
                            <tr>
                                <td className="Table-Names" >Home Support</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Lives Alone?")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >{sessionStorage.getItem("Lives Alone?")}</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Any Support?")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Stairs to Access Home</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Stairs In Home:")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Amenities on Same Floor</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Amenities")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            
                            <tr>
                                <td className="Table-Names" >Location of Amenities</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Location Of Amenities")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Other Location:</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Other Amenity Location")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Patient's Expectations and Plans</td>
                                <td className="Table-Content" >{sessionStorage.getItem("PatientPlans")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Relative's Expectations and Plans</td>
                                <td className="Table-Content" >{sessionStorage.getItem("RelativePlans")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Social Services</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Array")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Community Applications for LTC</td>
                                <td className="Table-Content" >{sessionStorage.getItem("Community Apps:")}</td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                        </table>

                </List>
                
            </Grid>
            </div>
        )
    }
}


export default function(props){
    const navigate = useNavigate();

    return <SocialSummary {...props} navigation={navigate} />
}
