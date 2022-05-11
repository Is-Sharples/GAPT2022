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
import { getOtherSummary } from '../firebase';
// import { useNavigate } from 'react-router-dom';

class PatientViewOP extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            documents:[],
        }
    }
    
    componentDidMount(){
        getOtherSummary(sessionStorage.getItem("patientId")).then((result) => {
            this.setState({
                documents:result
            })
        })
    }

    goback =() => {
        const { navigation } = this.props;
        navigation("/Patient-Menu");
    }

    render(){
        console.log(this.state.documents);
        var typography = "Help Data";
        if(this.state.documents[15] !== undefined){
            var doc = this.state.documents[15];

            return(
                <div className="screen">
                        <Header typography={typography} history = {"/Patient-Menu"} name = {"Other Profession"} />  
                        <br/>
                        <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {minWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                            <CardContent>
                                
                                <br/>
                                <h2>Profession: {doc.profession.profession}</h2>
                                <br/>
                                <h2>Date Referral: {doc.id}</h2>
                                <br/>
                                <h2>Reason for Referral: {doc.reasonReferral}</h2>
                                <br/>
                                <h2>Date Seen: </h2>
                                <br/>
                                <h2>Seen By: {doc.seenBy}</h2>
                                <br/>
                                <h2>Notes: {doc.notes}</h2>
        
                            </CardContent>         
                        </Card>
                        <button onClick={this.goback} className="next-button" >Back to Menu</button> 
                        
                    
                    
                    </div>
            );
        }
        

    }


}

export default function(props){

    const navigate = useNavigate();
    return(
        <PatientViewOP {...props} navigation = {navigate} ></PatientViewOP>
    )

}