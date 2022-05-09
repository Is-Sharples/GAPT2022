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
        if(this.state.documents[12] !== undefined){
            console.log(this.state.documents[12]);
            var doc = this.state.documents[12];
            return(
                <div className="screen">
                        <Header  history = {"/Patient-Menu"} name = {"Results Obtained"} />  
                        <br/>
                        <Card sx={{maxWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                            <CardContent>
                            <h5>Diagnosis: {doc.section1.diagnosis}</h5>  
                            <br/>
                            <h5>History of Present Condition: {doc.section1.presentCondition}</h5>  
                            <br/>
                            <h5>Past Medical History: {doc.section1.medicalHistory}</h5>  
                            <br/>
                            <h5>Drug History: {doc.section1.drugHistory}</h5>  
                            <br/>
                            <h5>Smoking: {doc.section1.smoking} </h5>  
                            <br/>
                            <h5>Drinking:  {doc.section1.alcohol}</h5>  
                            <br/>
                            <h5>Level of Education: {doc.section1.education}</h5>  
                            <br/>
                            <h5>Charlson Co-Morbidity Index: {doc.section1.charlsonIndex}</h5>
                            <br/>
                            <h5>Moca Final Result: {doc.moca.finalScore}</h5>  
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