import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { Box, height } from "@mui/system";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import { AppBar, FormControl, MenuItem } from "@mui/material";
import { ArrowBack, DeviceHubTwoTone } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import Barthel from "./BarthelIndex";
import Height from "./Height";
import Weight from "./Weight";
import moment from 'moment';
import ListItem from "@mui/material/ListItem";
import "./styles/Summary.css";
import Header from "./header";

export default function Summary(props) {
    var data = props.patient;
    const ilbierah = "Ilbierah";
    const illum = "Illum";
    const dt = new Date().toDateString();
    const increm = 0;
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
    const [option, setOption] = React.useState([
        {ilbierah}, {illum}
    ]);
    const [barthel, showBarthel] = useState("false");
    const [Barthelex, setBarthelex] = useState(0);
    const [hwex, setHwex] = useState(0);
    const [height, showHeight] = useState("false");
    const [Ablist, setAblist] = useState([]);
    const [Dblist, setDblist] = useState([]);
    const [AHW, setAHW] = useState({
        height: '',
        weight: '',
        weightloss: '',
        exercise: ''
    });
    const [DHW, setDHW] = useState({
        height: '',
        weight: '',
        weightloss: '',
        exercise: ''
    });
    var hwindex = localStorage.getItem("hwrun");
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
    console.log("Ablist",Ablist);
    console.log("Dblist",Dblist);

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
        if (localStorage.getItem("hwrun")>2){
            localStorage.setItem("hwrun",JSON.stringify(0));
            const hwex = JSON.parse(localStorage.getItem("hwrun"));
            if(hwex){
                setHwex(hwex);
            }
        }
        else {
            const hwex = JSON.parse(localStorage.getItem("hwrun"));
            if(hwex){
                setHwex(hwex);
            }
        }
    })

     

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

        //localStorage.setItem("ahw",JSON.stringify(0));
        const AHW = JSON.parse(localStorage.getItem("ahw"));
        if (AHW) {
            setAHW({height: AHW.height, weight: AHW.weight, weightloss: AHW.weightloss, exercise: AHW.exercise});
        }

        //localStorage.setItem("dhw",JSON.stringify(0));
        //localStorage.setItem("hwrun",JSON.stringify(0));
        const DHW = JSON.parse(localStorage.getItem("dhw"));
        if (DHW) {
            setDHW({height: props.height, weight: props.weight, weightloss: props.weightloss, exercise: props.exercise});
        }

    }, []);



console.log("ahw height: ", AHW.height);
console.log("ahw weight: ", AHW.weight);
console.log("ahw wl: ", AHW.weightloss);
console.log("hwrun:", hwex);


    console.log("barthel after", Barthelex+1);
    useEffect(() => {
        localStorage.setItem("Brun",JSON.stringify(Barthelex));
    }, [Barthelex]);

    useEffect(() => {
        localStorage.setItem("hwrun",JSON.stringify(hwex));
    }, [hwex]);

    useEffect(() => {
        localStorage.setItem("ablist",JSON.stringify(Ablist));
    }, [Ablist]);

    useEffect(() => {
        localStorage.setItem("dblist",JSON.stringify(Dblist));
    }, [Dblist]);

    useEffect(() => {
        localStorage.setItem("ahw", JSON.stringify(AHW));
    }, []);

    useEffect(() => {
        localStorage.setItem("dhw", JSON.stringify(DHW));
    }, []);

    //console.log("local ablist:", localStorage.getItem("ablist"));
    //console.log("local dblist:", localStorage.getItem("dblist"));

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
            return <Barthel/>
        }
    }

    if(hwex < 3){
        if(height === "true"){
            hwindex = hwex+1;
            localStorage.setItem("hwrun",JSON.stringify(hwindex));
            return <Height age = {60} gender = {'Male'}/>
        }
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

    if (AHW.height === ''){
        if (props.height !== undefined && hwex === 0){
            setAHW({height: props.height, weight: props.weight, weightloss: props.weightloss, exercise: props.exercise});
        }
    }
    if (DHW.height === ''){
        if (props.height !== undefined && hwex === 2){
            setDHW({height: props.height, weight: props.weight, weightloss: props.weightloss, exercise: props.exercise});
        }
    }
    
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
        <Header name={"Summary"} /> 

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
                            <td className="total">{calcAbtotal() < 0 ? "" : calcAbtotal()}</td>
                            <td className="total">{calcDbtotal() < 0 ? "" : calcDbtotal()}</td>
                            <td className="total">{calcAbtotal()!= undefined && calcDbtotal()!=undefined ? calcDbtotal() - calcAbtotal() : ""}</td>
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
                            <td className="grid-row">{AHW.height}</td>
                            <td className="grid-row">{DHW.height}</td>
                            <td className="total-diff">/</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Weight (kg)</td>
                            <td>{AHW.weight}</td>
                            <td>{DHW.weight}</td>
                            <td className="total-diff">{DHW.weight - AHW.weight}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Has patient<br></br>lost weight?</td>
                            <td>{(AHW.weightloss) ? (AHW.weightloss === 0 ? "No" : "Yes" ) : "not def"}</td>
                            <td>{(DHW.weightloss) ? (DHW.weightloss === 0 ? "No" : "Yes" ) : "not def"}</td>
                            <td className="total-diff">/</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Was weight lost<br></br>due to exercise?</td>
                            <td>{(AHW.exercise) ? AHW.exercise === 1 ? "Yes" : "/" : "not def"}</td>
                            <td>{(DHW.exercise) ? DHW.exercise === 1 ? "Yes" : "/" : "not def"}</td>
                            <td className="total-diff">/</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

  );
}
