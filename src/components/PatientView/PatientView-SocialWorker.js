import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import { Grid, ListItem, List } from "@mui/material";
import '../styles/header.css';
import '../styles/HomeContent.css';
import { Table, TableBody, TableHead, TableCell, TableContainer,TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import '../firebase';
import { format } from "date-fns";
import { getSocialWorker } from "../firebase";
import '../styles/SocialWorkerSum.css';

class PatientViewSocial extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            documents:[],
        }
    }
    componentDidMount(){
        getSocialWorker(sessionStorage.getItem("patientId")).then((result) => {
            this.setState({
                documents:result
            })
        })
    }
    goBack = () => {
        const { navigation } = this.props;
        navigation("/Patient-Menu");
    }

    
    render(){
        var typography = "Help Data";
        
        
        // console.log(count);
        
        
        if(this.state.documents[1] !== undefined){
            var doc = this.state.documents[1];
            console.log(doc);
            return(
                <div>
                <Grid justifyContent={"center"} container rowGap={0} columns={{ xs: 2, sm: 2, md: 6}} >
                    <Header typography={typography} name="Social-Worker Summary" history={"/Patient-Menu"} ></Header>
                    <div>
                    <p className="Table-Title">Review Information</p>
                    </div>
                    <div>
                        
                            <table className="searching-container" >
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Home Support</td>
                                    <td className="Table-Content" >{doc.HomeSupport.LivesAlone}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >{doc.HomeSupport.LivesAlone}</td>
                                    <td className="Table-Content" >{doc.HomeSupport.Support}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Stairs to Access Home</td>
                                    <td className="Table-Content" >{doc.StairstoHome.Stairs}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Amenities on Same Floor</td>
                                    <td className="Table-Content" >{doc.StairstoHome.AmenitiesOnSameFloor}</td>
                                    
                                </tr>                          
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Patient's Expectations and Plans</td>
                                    <td className="Table-Content" >{doc.PatientsPlans}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Relative's Expectations and Plans</td>
                                    <td className="Table-Content" >{doc.RelativePlans}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Social Services</td>
                                    <td className="Table-Content" >{doc.SocialServices}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >Community Applications for LTC</td>
                                    <td className="Table-Content" >{doc.CommLTCData.CommLTCApplication}</td>
                                    
                                </tr>
                                <tr className="grid-data" >
                                    <td className="Table-Names" >TimeSpan</td>
                                    <td className="Table-Content" >{doc.CommLTCData.TimeSpan}</td>
                                </tr>
                            </table>
                        
                    </div>
                    <Button sx={{backgroundColor: "#01497A", height: "15%", ['@media (min-width:720px)']: {fontSize: "20px",}, ['@media (max-width:720px)']: {fontSize: "20px"}, borderRadius: "20px", margin: "15px 15px"}}variant="contained" onClick={this.goBack} >Back To Menu</Button>
                </Grid>
                </div>
            )
        }
        
    }
}

export default function(props){
    const navigate = useNavigate();

    return <PatientViewSocial {...props} navigation={navigate} />
}
