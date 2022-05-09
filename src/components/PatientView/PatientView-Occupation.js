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

class PatientViewOccupation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            documents:[],
        }
    }
    
    componentDidMount(){
        getOtherSummary("1234").then((result) => {
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

        if(this.state.documents[15] !== undefined){
            var doc = this.state.documents[15];

            return(
                <div className="screen">
                        <Header history = {"/Patient-Menu"} name = {"Other Profession"} />  
                        <br/>
                        <Card sx={{['@media (min-width:720px)']: {minWidth: "60%"}, ['@media (max-width:720px)']: {minWidth: "80%"}, borderRadius: "20px", textAlign:"center"}}> 
                            <CardContent>
                                
                                <br/>
                                <h5>Profession: {doc.profession.profession}</h5>
                                <br/>
                                <h5>Date Referral: {doc.id}</h5>
                                <br/>
                                <h5>Reason for Referral: {doc.reasonReferral}</h5>
                                <br/>
                                <h5>Date Seen: </h5>
                                <br/>
                                <h5>Seen By: {doc.seenBy}</h5>
                                <br/>
                                <h5>Notes: {doc.notes}</h5>
        
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
        <PatientViewOccupation {...props} navigation = {navigate} ></PatientViewOccupation>
    )

}