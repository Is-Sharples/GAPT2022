import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { AppBar, FormControl, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import Barthel from "./BarthelIndex";
import Height from "./Height";
import "./styles/Summary.css";
import Header from "./header";


export default function Summary(props) {

    var typography = "If you wish to input the Barthel/Measurements press the respective buttons on the Screen";
    var data = props.patient;
    var run = (props.run)=== undefined ? 0 : props.run;
    console.log("run: ", run);
    const ilbierah = "Ilbierah";
    const illum = "Illum";
    const dt = new Date().toDateString();
    const [abtime, setabTime] = useState(dt);
    const [dbtime, setdbTime] = useState(dt);
    const setAbtime = () => {
        let dt = new Date().toDateString();
        setabTime(dt);
    }
    const setDbtime = () => {
        let dt = new Date().toDateString();
        setdbTime(dt);
    }
    const [option, setOption] = React.useState("");
    const [barthel, showBarthel] = useState("false");
    const [Barthelex, setBarthelex] = useState(0);
    const [height, showHeight] = useState("false");
    const [Ablist, setAblist] = useState([]);
    const [Dblist, setDblist] = useState([]);
    var ahw = (run === 1) ? {
        height: "",
        weight: "",
        weightloss: "",
        exercise: "",
    } : {
        height: (localStorage.getItem("admissionhw").height),
        weight: (localStorage.getItem("admissionhw").weight),
        weightloss: (localStorage.getItem("admissionhw").weightloss),
        exercise: (localStorage.getItem("admissionhw").exercise),
    }

    var dhw = {
        height: "",
        weight: "",
        weightloss: "",
        exercise: "",
    }

    function updateAhw(h, w, wl, e){
        ahw.height = h;
        ahw.weight = w;
        ahw.weightloss = wl;
        ahw.exercise = e;
    }

    function updateDhw(h, w, wl, e){
        dhw.height = h;
        dhw.weight = w;
        dhw.weightloss = wl;
        dhw.exercise = e;
    }

    function calcAbtotal(){
        let atotal = 0;
        Ablist.forEach(element => atotal = addUp(atotal, element));
        return atotal;
    }
    function calcDbtotal(){
        let dtotal = 0;
        Dblist.forEach(element => dtotal = addUp(dtotal, element));
        return dtotal;
    }
    var bar = localStorage.getItem("Brun");

    useEffect(() => {
        if (localStorage.getItem("Brun")>2){
            localStorage.setItem("Brun",JSON.stringify(0));
            const Barthelex = JSON.parse(localStorage.getItem("Brun"));
            if (Barthelex) {
                setBarthelex(Barthelex);
            }
        }
        else{
            const Barthelex = JSON.parse(localStorage.getItem("Brun"));
            if (Barthelex) {
                setBarthelex(Barthelex);
            }
        }
    }, []);

   
     
    useEffect(() => {
        //localStorage.setItem("ablist",JSON.stringify(0));
        const Ablist = JSON.parse(localStorage.getItem("ablist"));
        if (Ablist) {
            setAblist(Ablist);
        }
        
        //localStorage.setItem("dblist",JSON.stringify(0));
        const Dblist = JSON.parse(localStorage.getItem("dblist"));
        if (Dblist) {
            setDblist(Dblist);
        }

        if(ahw.height === ""){
            const setahw = JSON.parse(localStorage.getItem("admissionhw"));
            if (setahw){
                updateAhw(setahw.height, setahw.weight, setahw.weightloss, setahw.exercise);
                console.log("setahw height: ", setahw.height);
            }
        }

        const setdhw = JSON.parse(localStorage.getItem("dischargehw"));
        if (setdhw){
            updateDhw(setdhw.height, setdhw.weight, setdhw.weightloss, setdhw.exercise);
            console.log("set dhw:", setdhw.height, dhw.height);
        }

    }, []);



console.log("ahw height: ", ahw.height);
console.log("ahw weight: ", ahw.weight);
console.log("ahw wl: ", ahw.weightloss);
console.log("admissionhw", JSON.parse(localStorage.getItem("admissionhw")));


    useEffect(() => {
        localStorage.setItem("Brun",JSON.stringify(Barthelex));
    }, [Barthelex]);

    useEffect(() => {
        localStorage.setItem("ablist",JSON.stringify(Ablist));
    }, [Ablist]);

    useEffect(() => {
        localStorage.setItem("dblist",JSON.stringify(Dblist));
    }, [Dblist]);

     useEffect(() => {
        localStorage.setItem("admissionhw",JSON.stringify(ahw));
    }, [ahw]);

    useEffect(() => {
        localStorage.setItem("dischargehw",JSON.stringify(dhw));
    }, [dhw]);

    const handleChange =  (event) => {
        setOption(event.target.value);
    };

    function addUp(num1, num2){
        var ans = num1 + num2;
        return ans;
    }

    if (Barthelex < 3){
        if(barthel === "true"){
            bar = Barthelex+1;
            localStorage.setItem("Brun",JSON.stringify(bar));
            return <Barthel patient = {data}/>
        }
    }

        if(height === "true"){
            //localStorage.setItem("hwex",JSON.stringify(JSON.parse(localStorage.getItem("hwex"))+1));
            return <Height age = {60} gender = {'Male'} run={run}/>
        }
    

    if (Ablist.length<10){
        if(props.indexList !== undefined && Barthelex === 1){
            props.indexList.forEach(element => Ablist.push(element));
            console.log("ab set");
        }
        else{
            
        } 
    }
    else{
        console.log("abDefined");
    }
    if (Dblist.length<10){
        if(props.indexList !== undefined && Barthelex === 2){
            props.indexList.forEach(element => Dblist.push(element));
        }
        else{
            
        } 
    }
    else{
        console.log("dbDefined");
    }

    //if (AHW.height === ""){
        if (props.height !== undefined && props.run === 1){
            updateAhw(props.height, props.weight, props.weightloss, props.exercise);
            console.log("thalt");
        }
        else{
            console.log("ma thatlx");
        }
    //}
    //if (DHW.height === ""){
        if (props.height !== undefined && props.run === 2){
            updateDhw(props.height, props.weight, props.weightloss, props.exercise);
        }
    //}
    
    function showSeverity(total) {
        if (total >= 0 && total <= 9) {
            return "Severe";
        } else if (total >= 10 && total <= 14) {
            return "Moderate";
        } else if (total >= 15 && total <= 19) {
            return "Minimal";
        } else if (total >= 20) {
            return "Independent";
        }
    }

  return (
    <div className="screen">
        <Header typography = {typography} history = {"/"} name={"Summary"} /> 

        <div className="card">
            <p className="name">{data.name} {data.surname}</p>
            <p className="id">{data.id}</p>
            <FormControl sx={{['@media (min-width:720px)']: {minWidth: 280}, ['@media (max-width:720px)']: {minWidth: 250} }}>
            <InputLabel id="blabel" sx={{fontSize: 18}}>Date of Entry</InputLabel>
            <Select labelId="blabel" id="select" value={option} label="Date Of Entry" onChange={handleChange} style={{color: "black"}}>
            <MenuItem value={ilbierah}>Ilbierah</MenuItem>  
            <MenuItem value={illum}>Illum</MenuItem> 
            </Select>
            </FormControl>
            <button className='newVisit'>
                <span><AddIcon/></span>
            </button>
            <div className="lastModifiedBy">
                <p>Last Modified by: Doctor</p>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Barthel Score</p>
                <button className="input-details" onClick={() => {(Barthelex) === 1 ? setAbtime(): setDbtime();
                                                                showBarthel("true");}}>Input Barthel Index</button>
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
                            <th>{abtime}</th>
                            <th>{dbtime}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid-data">
                            <td className="section">Mobility</td>
                            <td>{Ablist[0]}</td>
                            <td>{Dblist[0]}</td>
                            <td className="total-diff">{(Ablist[0])!= undefined && (Dblist[0])!=undefined? Dblist[0] - Ablist[0] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Grooming</td>
                            <td>{Ablist[1]}</td>
                            <td>{Dblist[1]}</td>
                            <td>{(Ablist[1])!= undefined && (Dblist[1])!=undefined? Dblist[1] - Ablist[1] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Dressing</td>
                            <td>{Ablist[2]}</td>
                            <td>{Dblist[2]}</td>
                            <td>{(Ablist[2])!= undefined && (Dblist[2])!=undefined? Dblist[2] - Ablist[2] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bathing</td>
                            <td>{Ablist[3]}</td>
                            <td>{Dblist[3]}</td>
                            <td>{(Ablist[3])!= undefined && (Dblist[3])!=undefined? Dblist[3] - Ablist[3] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Stairs</td>
                            <td>{Ablist[4]}</td>
                            <td>{Dblist[4]}</td>
                            <td>{(Ablist[4])!= undefined && (Dblist[4])!=undefined? Dblist[4] - Ablist[4] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bowels</td>
                            <td>{Ablist[5]}</td>
                            <td>{Dblist[5]}</td>
                            <td>{(Ablist[5])!= undefined && (Dblist[5])!=undefined? Dblist[5] - Ablist[5] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Transfers</td>
                            <td>{Ablist[6]}</td>
                            <td>{Dblist[6]}</td>
                            <td>{(Ablist[6])!= undefined && (Dblist[6])!=undefined? Dblist[6] - Ablist[6] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bladder</td>
                            <td>{Ablist[7]}</td>
                            <td>{Dblist[7]}</td>
                            <td>{(Ablist[7])!= undefined && (Dblist[7])!=undefined? Dblist[7] - Ablist[7] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Feeding</td>
                            <td>{Ablist[8]}</td>
                            <td>{Dblist[8]}</td>
                            <td>{(Ablist[8])!= undefined && (Dblist[8])!=undefined? Dblist[8] - Ablist[8] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Toilet Use</td>
                            <td>{Ablist[9]}</td>
                            <td>{Dblist[9]}</td>
                            <td>{(Ablist[9])!= undefined && (Dblist[9])!=undefined? Dblist[9] - Ablist[9] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Total</td>
                            <td className="total">{Ablist[0]===undefined ? "" : calcAbtotal()}</td>
                            <td className="total">{Dblist[0]===undefined ? "" : calcDbtotal()}</td>
                            <td className="total">{Ablist[0]!== undefined && Dblist[0]!== undefined ? calcDbtotal() - calcAbtotal() : ""}</td>
                        </tr>
                        <tr >
                            <td></td>
                            <td className={`dependency ${showSeverity(calcAbtotal())}`}>{(calcAbtotal()) ? showSeverity(calcAbtotal()) : ""}</td>
                            <td className={`dependency ${showSeverity(calcDbtotal())}`}>{(calcDbtotal()) ? showSeverity(calcDbtotal()) : ""}</td>
                        </tr>
                        <br></br>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Height & Weight</p>
                <button className="input-details" onClick={() => {showHeight("true")}}>Input Height & Weight</button>
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
                            <td className="grid-row">{ahw.height}</td>
                            <td className="grid-row">{dhw.height}</td>
                            <td className="total-diff">{(ahw.height)=== "" && (dhw.height)=== "" ? "" : "/"}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Weight (kg)</td>
                            <td>{ahw.weight}</td>
                            <td>{dhw.weight}</td>
                            <td className="total-diff">{(ahw.weight)==="" && (dhw.weight)==="" ? "" : dhw.weight - ahw.weight}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Has patient<br></br>lost weight?</td>
                            <td>{(ahw.weight) ? (ahw.weightloss === 0 ? "No" : "Yes" ) : ""}</td>
                            <td>{(dhw.weight) ? (dhw.weightloss === 0 ? "No" : "Yes" ) : ""}</td>
                            <td className="total-diff">{(ahw.weight)==="" && (dhw.weight)==="" ? "" : "/"}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Was weight lost<br></br>due to exercise?</td>
                            <td>{(ahw.weight) ? (ahw.exercise === 1 ? "Yes" : "/") : ""}</td>
                            <td>{(dhw.weight) ? (dhw.exercise === 1 ? "Yes" : "/") : ""}</td>
                            <td className="total-diff">{(ahw.weight)==="" && (dhw.weight)==="" ? "": "/"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

  );
}
