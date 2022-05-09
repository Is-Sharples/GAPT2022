import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import '../styles/Team1OT.css';
import { saveOther } from '../firebase';
import { format } from "date-fns";
import { GetPhysio } from '../firebase';

class PatientViewPhysio extends React.Component{

    constructor(props){
        super(props);
        this.state={
            documents:[],
        }
    }

    componentDidMount(){
        GetPhysio(sessionStorage.getItem("patientId")).then((result) => {
            this.setState({
                documents:result,
            })
        })
    }


    goBack = () => {
        const { navigation } = this.props;
        navigation("/Patient-Menu");
    }


    render() {
        var doc = this.state.documents[0];

        
        if (doc !== undefined){

            console.log(doc);
            return(
                <div className="screen">
                        <Header history = {"/Patient-Menu"} name = {"Other Profession"} />  
                        <br/>
                        <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {minWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                            <CardContent>
                                <h2>Physiotherapy</h2>
                                <br/>
                                <h2>Levels Of Mobility </h2>
                                <br/>
                                <h3>Previous Level: {doc.TUGTestResults.LevelsOfMobility.PreviousLevelofMobility}</h3>
                                <br/>
                                <h3>Current Level: {doc.TUGTestResults.LevelsOfMobility.CurrentLevelofMobility}</h3>
                                <br/>
                                <h2>TUG Test </h2>
                                <br/>
                                <h3>Time Taken:{doc.TUGTestResults.RiskOfFallStatus.TimeTakenInSeconds}</h3>
                                <br/>
                                <h3>Status: {doc.TUGTestResults.RiskOfFallStatus.Status} </h3>
                                <br />
                                <h3> Carried Out? {doc.TUGTestResults.TUGTestCarriedOut} </h3>
                                <br />
                                <h2> Grip Strength Test </h2>
                                <br /> 
                                
                                <h3> Left Hand: {doc.GripStrengthResults.MaxLeftHandResult.TestResult}</h3><br /> 
                                <h3> Verdict: {doc.GripStrengthResults.MaxLeftHandResult.Risk}</h3><br /> 
                                <h3> Reason: {doc.GripStrengthResults.Question4}</h3>

                                <br /> 
                                <h3> Right Hand: {doc.GripStrengthResults.MaxRightHandResult.TestResult}</h3><br /> 
                                <h3> Verdict: {doc.GripStrengthResults.MaxRightHandResult.TestResult}</h3><br /> 
                                <h3> Reason: {doc.GripStrengthResults.Question5}</h3>

                            </CardContent>         
                        </Card>
                        <button onClick={this.goBack} className="next-button" >Back to Menu</button> 
                        
                    
                    
                    </div>
            );
        }
        
    }

}


export default function (props){
    const navigate = useNavigate();

    return (
        <PatientViewPhysio {...props} navigation={navigate} ></PatientViewPhysio>
    )
}