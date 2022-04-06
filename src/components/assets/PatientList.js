import React from "react";
import PatientCard from "./PatientCard";



export default function PatientList(props){

    props.patients.forEach(element => {
        console.log(element.type);
        return(
            
                <PatientCard patient = {element} />
                
            

        )
            
        
    });


}