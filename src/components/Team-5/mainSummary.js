import React from "react";
import Header from "../header";
import DataTable from "./dataTable";
import { RowData, BarthelRowData } from "./constants";
import { Tabs } from "@mui/material";
import { Tab } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/Summary.css";

export default function(props){
    
        
    const [tabValues, setTabValues] = useState("Barthel");
    let counter = useSelector(state => state.counter);
    

    const tabChange = (e, newEvent) => {
        setTabValues(newEvent);
        
    }
    
        let rows = []
        if(tabValues === "Barthel"){
            rows = RowData 
        }else{
            rows = BarthelRowData
        }
        return (
            <div className="flex flex-col items-center bg-neutral-200 min-h-screen">
                <Header className='w-full' name='Nurse' typography='' history='/' />
                
                <div className="flex flex-col font-semibold rounded-xl shadow-lg mx-auto w-3/4 h-auto p-3 max-w-2xl bg-white mb-5 mt-4 text-center">
                    <p className="name">Andrew Sharples</p>
                    <p className="id">0218702L</p>
                </div>  
                <Tabs className="tabs" value={tabValues} onChange={tabChange}>
                    <Tab className="tab" value = {"Barthel"} label="Barthel Index" ></Tab>
                    <Tab value = {"HeightWeight"} label = "Height & Weight" ></Tab>
                </Tabs>
                <div className='flex justify-center w-3/4'>
                    <DataTable title={tabValues} RowData={rows} ></DataTable>
                </div>
                

            </div>
        );
    
}