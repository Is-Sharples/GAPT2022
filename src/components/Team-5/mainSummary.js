import React from "react";
import Header from "../header";
import DataTable from "./dataTable";

class MainSummary extends React.Component{


    render(){
        return (
            <div >
                <Header name='Nurse' typography='' history='/' />
                <div className='flex justify-center w-3/4 mx-auto'>
                    <DataTable  ></DataTable>
                </div>
                

            </div>
        );
    }
}

export default MainSummary;