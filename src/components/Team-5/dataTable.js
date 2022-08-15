import React from "react";
import '../styles/Summary.css'
import { useState, useEffect } from "react";
import Questions from "./barthelQuestions";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../stores/actions";
import { barthelQuestions } from "./constants";

export default function DataTable(props){
    //State Declarations
    let counter = useSelector(state => state.barthelCounter);
    const dispatch = useDispatch();
    const [form, setForm] = useState(false);
    var title = '';
    let admissionMock = []
    let count = 0;
    let dischargeMock = [];
    let objs = []
    let RowData = props.RowData;
    //UseEffects 
    useEffect(()=> {
        if(form === true && counter === barthelQuestions.length ){
            dispatch(actions.setZero());
            setForm(false);
        }
    },[counter])
    //conditional Rendering
    if(props.title === "Barthel"){
        title = 'Barthel Score'
    }else {
        title='Height & Weight'
    }


    
    for(var i = 0; i < props.RowData.length; i++){
        admissionMock[i] = i;
    }
    
    for (var c = props.RowData.length; c >= 0; c--) {
        dischargeMock[count] = c;
        count++;
    }

    for(var x = 0; x < props.RowData.length; x++) {
        objs[x] = {
            title: RowData[x],
            admission: admissionMock[x],
            discharge: dischargeMock[x],
            total: admissionMock[x] - dischargeMock[x]
        }
    }
    //Functions 
    const handleClick = () => {
        if(form === false){
            setForm(true);
        }
    }


    return(
    <div className="grid-page">
        <div className="card bg-white mr-auto w-full h-auto max-w-2xl p-5 rounded-xl shadow-lg">
            <p className="text-3xl my-3">{title}</p>
            {
                form ? <></> : <button className="input-details" onClick={() => handleClick()}> Input {title}</button>

            }
            {
                form ? <Questions title={props.title}></Questions> :
                
                <table >
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
                            <td >{row.admission}</td>
                            <td >{row.discharge}</td>
                            <td >{row.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
            
        </div>

    </div>)
}