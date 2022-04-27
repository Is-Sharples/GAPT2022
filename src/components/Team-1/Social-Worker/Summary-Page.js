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
import '../../firebase';
import { setSocialWorker } from "../../firebase";

class HomeSupport{
    constructor(LivesAlone,AnySupport){
        this.LivesAlone = LivesAlone;
        this.AnySupport = AnySupport;
    }
}
class HomeEnv {
    constructor(Stairs,Amenities,AmenityLoc,OtherAmenLoc){
        this.Stairs = Stairs;
        this.Amenities = Amenities;
        this.AmenityLoc = AmenityLoc;
        this.OtherAmenLoc = OtherAmenLoc;
    }
}

class Expectations {
    constructor(Patient,Relative){
        this.Patient = Patient;
        this.Relative = Relative;
    }
}

class SocialServices {
    constructor(CommCare,Telecare,HomeHelp,MealsWheels,Other){
        this.CommCare = CommCare;
        this.Telecare = Telecare;
        this.HomeHelp = HomeHelp;
        this.MealsWheels = MealsWheels;
        this.Other = Other;
    }
}

class CommunityApps{
    constructor(Apps,TimeSpan){
        this.Apps = Apps;
        this.TimeSpan = TimeSpan;
    }
}

class SocialSummary extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            HomeSupp:new HomeSupport(sessionStorage.getItem("Lives Alone?"),sessionStorage.getItem("Any Support?")),
            HomeEnv: new HomeEnv(sessionStorage.getItem("Stairs In Home:"),sessionStorage.getItem("Amenities"),sessionStorage.getItem("Location Of Amenities"),sessionStorage.getItem("Other Amenity Location")),
            Expect: new Expectations(sessionStorage.getItem("PatientPlans"),sessionStorage.getItem("RelativePlans")),
            SServices: new SocialServices(sessionStorage.getItem("CommCare"),sessionStorage.getItem("Telecare"),sessionStorage.getItem("HomeHelp"),sessionStorage.getItem("Meals On Wheels"),sessionStorage.getItem("Other Profession:")),
            CommApps: new CommunityApps(sessionStorage.getItem("CommunityApps:"),sessionStorage.getItem("TimeSpan")),
        }
    }

    handleClick = () => {
        var Arr = [];
        Arr.push(this.state.HomeSupp);
        Arr.push(this.state.HomeEnv);
        Arr.push(this.state.Expect);
        Arr.push(this.state.SServices);
        Arr.push(this.state.CommApps);
        // console.log(Arr);
        setSocialWorker(Arr);
    }

    render(){
        // console.log(this.state.HomeSupp);
        // console.log(this.state.HomeEnv);
        // console.log(this.state.Expect);
        // console.log(this.state.SServices);
        // console.log(this.state.CommApps);
        

        
        // console.log(Arr[0]);
        var CommCare = sessionStorage.getItem("CommCare");
        var HomeHelp = sessionStorage.getItem("HomeHelp");
        var MealsWheels = sessionStorage.getItem("Meals On Wheels");
        var OtherString = sessionStorage.getItem("Other Profession:");
        var Telecare = sessionStorage.getItem("Telecare");
        var TimeSpan = [];
        if(sessionStorage.getItem("TimeSpan") !== ""){
            TimeSpan.push(
                <React.Fragment>
                    <tr>
                        <td className="Table-Names" >Applications TimeSpan</td>
                        <td className="Table-Content" >{sessionStorage.getItem("TimeSpan")}</td>
                        <td><Button>Click Me!</Button></td>
                    </tr>
                </React.Fragment>

            );    
        }
        var Location = [];
        if(sessionStorage.getItem("Location Of Amenities") !== ""){
            Location.push(
                <React.Fragment>
                    <tr>
                        <td className="Table-Names" >Location of Amenities</td>
                        <td className="Table-Content" >{sessionStorage.getItem("Location Of Amenities")}</td>
                        <td><Button>Click Me!</Button></td>
                    </tr>
                </React.Fragment>
                
    
            );
        }
        var OtherLocation = [];
        if(sessionStorage.getItem("Other Amenity Location") !== ""){
            OtherLocation.push(
                <React.Fragment>
                    <tr>
                        <td className="Table-Names" >Other Location:</td>
                        <td className="Table-Content" >{sessionStorage.getItem("Other Amenity Location")}</td>
                        <td><Button>Click Me!</Button></td>
                    </tr>
                </React.Fragment>
            );
        }
        var count = 0;
        if(CommCare !== ""){
            count += 1;
        }

        if(Telecare !== ""){
            if(count > 0){
                
                CommCare += ", ";
            }
            count += 1;
        }

        if(HomeHelp !== ""){
            if(count > 0){
                if(Telecare !== ""){
                    Telecare += ", ";
                }else if(CommCare !== ""){
                    CommCare += ", ";
                }
                    
            }
            count += 1;
        }
        if(MealsWheels !== ""){
            if(count > 0){
                    if(HomeHelp !== ""){
                        HomeHelp += ", ";    
                    }else if((CommCare !== "")&& (Telecare === "")){
                        CommCare += ", ";
                    }else if (Telecare !== ""){
                        Telecare += ", ";
                    }

                    
            }
            count += 1;
        }
        if(OtherString !== ""){
            if(count > 0){
                if(MealsWheels !== ""){
                    MealsWheels += ", ";
                }else if (HomeHelp !== ""){
                    HomeHelp += ", ";
                }else if (Telecare !== ""){
                    Telecare += ", ";
                }else if (CommCare !== ""){
                    CommCare += ", ";
                }
            }
            count += 1;
        }
        
        // console.log(count);
        var typography = "It hurts to be alive";
        return(
            <div >
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
                            
                            
                            {/* Testing */}
                            {Location}

                            {OtherLocation}
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
                                <td className="Table-Content" >{CommCare} {Telecare} {HomeHelp} {MealsWheels} {OtherString} </td>
                                <td><Button>Click Me!</Button></td>
                            </tr>
                            <tr>
                                <td className="Table-Names" >Community Applications for LTC</td>
                                <td className="Table-Content" >{sessionStorage.getItem("CommunityApps:")}</td>
                                <td className="Table-Buttons" ><Button>Click Me!</Button></td>
                            </tr>
                            {TimeSpan}
                        </table>
                    
                </List>
                <Button onClick={this.handleClick} >Submit</Button>
            </Grid>
            </div>
        )
    }
}


export default function(props){
    const navigate = useNavigate();

    return <SocialSummary {...props} navigation={navigate} />
}