import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../header";
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import {saveTeam3} from '../firebase';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { GetConsultant } from '../firebase';

class PatientViewGC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            documents: [],
        }
    }

    componentDidMount(){
        GetConsultant(sessionStorage.getItem("patientId")).then((result) => {
            this.setState({
                documents:result
            })
        })
    }
    goback = () => {
        const { navigation } = this.props;
        navigation("/Patient-Menu");
    }

    render(){
        var typography = "Help Data";
        if(this.state.documents[12] !== undefined){
            console.log(this.state.documents[12]);
            var doc = this.state.documents[12];
            return(
                <div className="screen">
                        <Header typography={typography} history = {"/Patient-Menu"} name = {"Results Obtained"} />  
                        <br/>
                        <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                            <CardContent>
                            <h2>Diagnosis: {doc.section1.diagnosis}</h2>  
                            <br/>
                            <h2>History of Present Condition: {doc.section1.presentCondition}</h2>  
                            <br/>
                            <h2>Past Medical History: {doc.section1.medicalHistory}</h2>  
                            <br/>
                            <h2>Drug History: {doc.section1.drugHistory}</h2>  
                            <br/>
                            <h2>Smoking: {doc.section1.smoking} </h2>  
                            <br/>
                            <h2>Drinking:  {doc.section1.alcohol}</h2>  
                            <br/>
                            <h2>Level of Education: {doc.section1.education}</h2>  
                            <br/>
                            <h2>Charlson Co-Morbidity Index: {doc.section1.charlsonIndex}</h2>
                            <br/>
                            <h2>Moca Final Result: {doc.moca.finalScore}</h2>  
                            <br/>
                            </CardContent>         
                        </Card>
                    
        
                    <button onClick={this.goback} className="next-button" >Go to Menu</button>
                    </div>
            );
        }
       
    }

}

export default function (props){
    const navigate = useNavigate();
    return(
        <PatientViewGC {...props} navigation={navigate} ></PatientViewGC>
    )
}