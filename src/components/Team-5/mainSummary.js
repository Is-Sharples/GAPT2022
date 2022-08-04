import React from "react";
import Header from "../header";
import DataTable from "./dataTable";
import { RowData, BarthelRowData } from "./constants";
import { Tabs } from "@mui/material";
import { Tab } from "@material-ui/core";

import "../styles/Summary.css";

class MainSummary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabValues:"Barthel",
            rows: RowData,
        };
    }
    tabChange = (e, newEvent) => {
        this.setState( {tabValues:newEvent});
        
    }
    render(){
        let rows = []
        if(this.state.tabValues === "Barthel"){
            rows = RowData 
        }else{
            rows =BarthelRowData
        }
        return (
            <div className="flex flex-col items-center bg-neutral-200 min-h-screen">
                <Header className='w-full' name='Nurse' typography='' history='/' />
                
                <div className="flex flex-col font-semibold rounded-xl shadow-lg mx-auto w-3/4 h-auto p-3 max-w-2xl bg-white mb-5 mt-4 text-center">
                    <p className="name">Andrew Sharples</p>
                    <p className="id">0218702L</p>
            
                </div>  
                <Tabs className="tabs" value={this.state.tabValues} onChange={this.tabChange}>
                    <Tab className="tab" value = {"Barthel"} label="Barthel Index" ></Tab>
                    <Tab value = {"HeightWeight"} label = "Height & Weight" ></Tab>
                </Tabs>
                <div className='flex justify-center w-3/4'>
                    <DataTable RowData={rows} ></DataTable>
                </div>
                

            </div>
        );
    }
}

export default MainSummary;