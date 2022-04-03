import logo from '../logo.svg';
import '../App.css';
import Header from './/header';
import Patient from './PatientID';
import Barthel from './/BarthelIndex'
import Summary from './Summary';
import {Router, Route } from 'react-router-dom';

export default function Display() {
    var count = 1;

     
        if (count === 1){
            return(
            <div className="container">
            <Patient></Patient> 
            
            </div>);
        }else if (count === 2){
            return(<div className="container">
            <Summary /> 
            
            </div>);

        }else if (count === 3){
            return (
                <div className="container">
                <Barthel /> 
            
            </div>
            );
        }else {
        return (
            <div>Error</div>
        );
        }
    
}

//export default Demo;
