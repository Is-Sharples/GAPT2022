import React from "react";
import Header from "../header";
import DataTable from "./dataTable";
import { RowData, BarthelRowData } from "./constants";

import "../styles/Summary.css";

class MainSummary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            barthel:false,
        }
    }

    render(){
        return (
            <div className="flex flex-col items-center">
                <Header className='w-full' name='Nurse' typography='' history='/' />
                
                <div className="card">
                    <p className="name">Andrew Sharples</p>
                    <p className="id">0218702L</p>
            
                </div>  


                <div className='flex justify-center w-3/4 mx-auto mt-12px'>
                    <DataTable RowData={this.state.barthel ? RowData : BarthelRowData} ></DataTable>
                </div>
                

            </div>
        );
    }
}

export default MainSummary;