import React from "react";
import '../styles/Summary.css'

export default function DataTable(props){

    let admissionMock = []
    for(var i = 0; i < props.RowData.length; i++){
        admissionMock[i] = i;
    }
    let count = 0;
    let dischargeMock = [];
    for (var c = props.RowData.length; c >= 0; c--) {
        dischargeMock[count] = c;
        count++;
    }

    let objs = []
    let RowData = props.RowData;
    for(var x = 0; x < props.RowData.length; x++) {
        objs[x] = {
            title: RowData[x],
            admission: admissionMock[x],
            discharge: dischargeMock[x],
            total: admissionMock[x] - dischargeMock[x]
        }
    }
    return(
    <div className="grid-page">
        <div className="card bg-white mr-auto w-full h-auto max-w-2xl p-5 rounded-xl shadow-lg">
            <p className="text-3xl">Barthel Score</p>
            <button className="input-details"> Input Barthel Index</button>
            <table  >
                <thead >
                    <tr>
                        <th />
                        <th className="p-4" >
                            ADMISSION
                        </th>
                        <th className="p-4">
                            DISCHARGE
                        </th>
                        <th className="p-4">
                            +/-
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {objs.map((row) => (
                        <tr className="bg-gray-200 border-b-2" key={row.title}>
                            <td className="text-lg py-5 bg-white px-3" >{row.title}</td>
                            <td className="" >{row.admission}</td>
                            <td >{row.discharge}</td>
                            <td >{row.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>)
}