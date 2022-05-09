import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { AppBar, DialogActions, FormControl, Menu, MenuItem} from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
// import Height from "./Height";
import "../styles/Summary.css";
import Header from "../header";
import  '../firebase';
import { LocalCafeOutlined } from "@material-ui/icons";
import "../styles/Summary.css";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import moment from "moment";
import Box from '@mui/material/Box';
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { getNurseSummary } from "../firebase";
import { getPatients2 } from "../firebase";
class PatientViewSummary extends React.Component{

    constructor(props){
        super(props);
        this.state={
            documents:[],
            sumAb:0,
            sumDb:0,
            patients:[],
            current: {},
        }
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation("/Patient-Menu");
    }

    componentDidMount(){
        getNurseSummary(sessionStorage.getItem("patientId")).then((result) => {
            this.setState({
                documents:result,
            })
        });
        getPatients2().then((result) => {
            this.setState({
                patients:result,
            })
        })
    }
    render() {

        var Aseverity = "";
        var Dseverity = "";
        var AWeightLoss = "Yes";
        var DWeightLoss = "Yes";

        if(this.state.documents[3] !== undefined){
            //console.log(this.state.patients);

            if (this.state.documents[3].ahw.weightloss === 0){
                AWeightLoss = "No";
            }
            if(this.state.documents[3].dhw.weightloss === 0){
                DWeightLoss = "No";
            }
            if (this.state.documents[3].dhw.exercise === "no"){
                this.state.documents[3].dhw.exercise = "No";
            }
            if (this.state.documents[3].ahw.exercise === 1){
                this.state.documents[3].ahw.exercise = "Yes";
            }


            this.state.patients.forEach((patient) => {
                if (patient.id === sessionStorage.getItem("patientId")){
                    this.state.current = patient;
                    //console.log(this.state.current);
                }
            })
            for(var i = 0;i < this.state.documents[3].ab.length;i++){
                this.state.sumAb = this.state.sumAb + this.state.documents[3].ab[i];

            }
            for(var i = 0;i < this.state.documents[3].db.length;i++){
                this.state.sumDb = this.state.sumDb + this.state.documents[3].db[i];
            }
            if(this.state.sumAb >= 0 && this.state.sumAb <= 9){
                Aseverity = "Severe";
            }else if (this.state.sumAb >= 10 && this.state.sumAb <= 14){
                Aseverity = "Moderate";
            }else if (this.state.sumAb >= 15 && this.state.sumAb <= 19){
                Aseverity = "Minimal";
            }else if (this.state.sumAb >= 20){
                Aseverity = "Independent";
            }
            if(this.state.sumDb >= 0 && this.state.sumDb <= 9){
                Dseverity = "Severe";
            }else if (this.state.sumDb >= 10 && this.state.sumDb <= 14){
                Dseverity = "Moderate";
            }else if (this.state.sumDb >= 15 && this.state.sumDb <= 19){
                Dseverity = "Minimal";
            }else if (this.state.sumDb >= 20){
                Dseverity = "Independent";
            }
            console.log(this.state.documents[3]);

            return (
                <div className="screen">
                    <Header history = {"/"} name={"Summary"} /> 
            
                
                    <div className="card">
                        <p className="name">{this.state.current.name} </p>
                        <p className="id">{this.state.current.id}</p>
                        
                        
                        <div className="lastModifiedBy">
                            <p>Last Modified by: Doctor</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <div className="grid-title">
                            <p className="name">Barthel Score</p>
                        </div>
            
                    
                        <div className="grid-page">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>ADMISSION</th>
                                        <th>DISCHARGE</th>
                                        <th>+/-</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="grid-data">
                                        <td className="section">Mobility</td>
                                        <td>{this.state.documents[3].ab[0]}</td>
                                        <td>{this.state.documents[3].db[0]}</td>
                                        <td className="total-diff">{this.state.documents[3].db[0] - this.state.documents[3].ab[0] }</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Grooming</td>
                                        <td>{this.state.documents[3].ab[1]}</td>
                                        <td>{this.state.documents[3].db[1]}</td>
                                        <td>{ this.state.documents[3].db[1] - this.state.documents[3].ab[1] }</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Dressing</td>
                                        <td>{this.state.documents[3].ab[2]}</td>
                                        <td>{this.state.documents[3].db[2]}</td>
                                        <td>{this.state.documents[3].db[2] - this.state.documents[3].ab[2]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Bathing</td>
                                        <td>{this.state.documents[3].ab[3]}</td>
                                        <td>{this.state.documents[3].db[3]}</td>
                                        <td>{this.state.documents[3].db[3] - this.state.documents[3].ab[3]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Stairs</td>
                                        <td>{this.state.documents[3].ab[4]}</td>
                                        <td>{this.state.documents[3].db[4]}</td>
                                        <td>{this.state.documents[3].db[4] - this.state.documents[3].ab[4]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Bowels</td>
                                        <td>{this.state.documents[3].ab[5]}</td>
                                        <td>{this.state.documents[3].db[5]}</td>
                                        <td>{this.state.documents[3].db[5] - this.state.documents[3].ab[5]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Transfers</td>
                                        <td>{this.state.documents[3].ab[6]}</td>
                                        <td>{this.state.documents[3].db[6]}</td>
                                        <td>{this.state.documents[3].db[6] - this.state.documents[3].ab[6]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Bladder</td>
                                        <td>{this.state.documents[3].ab[7]}</td>
                                        <td>{this.state.documents[3].db[7]}</td>
                                        <td>{this.state.documents[3].db[7] - this.state.documents[3].ab[7]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Feeding</td>
                                        <td>{this.state.documents[3].ab[8]}</td>
                                        <td>{this.state.documents[3].db[8]}</td>
                                        <td>{this.state.documents[3].db[8] - this.state.documents[3].ab[8]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Toilet Use</td>
                                        <td>{this.state.documents[3].ab[9]}</td>
                                        <td>{this.state.documents[3].db[9]}</td>
                                        <td>{this.state.documents[3].db[9] - this.state.documents[3].ab[9]}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Total</td>
                                        <td className="total">{this.state.sumAb}</td>
                                        <td className="total">{this.state.sumDb}</td>
                                        <td className="total">{this.state.sumDb - this.state.sumAb} </td>
                                    </tr>
                                    <tr >
                                        <td></td>
                                        <td className={`dependency ${Aseverity}`} >{Aseverity}</td>
                                        <td className={`dependency ${Dseverity}`} >{Dseverity}</td>
                                    </tr>
                                    <br></br>
                                </tbody>
                            </table>
                        </div>
                    </div>
            
                    <div className="card">
                        <div className="grid-title">
                            <p className="name">Height & Weight</p>
                        </div>
            
                        
            
                        <div className="grid-page">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>ADMISSION</th>
                                        <th>DISCHARGE</th>
                                        <th>+/-</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="grid-data">
                                        <td className="section">Height (cm)</td>
                                        <td className="grid-row">{this.state.documents[3].ahw.height}</td>
                                        <td className="grid-row">{this.state.documents[3].dhw.height}</td>
                                        <td className="total-diff">{this.state.documents[3].dhw.height - this.state.documents[3].ahw.height}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Weight (kg)</td>
                                        <td>{this.state.documents[3].ahw.weight}</td>
                                        <td>{this.state.documents[3].dhw.weight}</td>
                                        <td className="total-diff">{this.state.documents[3].dhw.weight - this.state.documents[3].ahw.weight}</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Has patient<br></br>lost weight?</td>
                                        <td>{AWeightLoss}</td>
                                        <td>{DWeightLoss}</td>
                                        <td className="total-diff">N/A</td>
                                    </tr>
                                    <tr className="grid-data">
                                        <td className="section">Was weight lost<br></br>due to exercise?</td>
                                        <td>{this.state.documents[3].ahw.exercise}</td>
                                        <td>{this.state.documents[3].dhw.exercise}</td>
                                        <td className="total-diff">N/A</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <Button sx={{backgroundColor: "#01497A", height: "15%", ['@media (min-width:720px)']: {fontSize: "24px",}, ['@media (max-width:720px)']: {fontSize: "20px"}, borderRadius: "20px", margin: "15px 15px"}}onClick={this.goBack}  variant="contained" >Go To Menu</Button>
                            </div>
                        </div>
            
                    </div>
                    
                    
                </div>
                
                );
        }
    }
    
}

export default function (props){
    const navigate = useNavigate();

    return(
        <PatientViewSummary {...props} navigation = {navigate} ></PatientViewSummary>
    )
}

