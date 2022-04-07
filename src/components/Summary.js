import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { Box, height } from "@mui/system";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import { AppBar, FormControl, MenuItem } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import Barthel from "./BarthelIndex";
import moment from 'moment';
import ListItem from "@mui/material/ListItem";
import "./styles/Summary.css";
import Header from "./header";

export default function Summary(props) {

    const ilbierah = "Ilbierah";
    const illum = "Illum";
    const dt = new Date().toDateString();
    const increm = 0;
    const [abtime, setabTime] = useState(dt);
    const setabtime = () => {
        let dt = new Date().toDateString();
        setabTime(dt);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [option, setOption] = React.useState([
        {ilbierah}, {illum}
    ]);
    const [barthel, showBarthel] = useState("false");
    const [Ablist, setAblist] = useState([]);
    const [ablist, setablist] = useState([Ablist]);
    const [Dblist, setDblist] = useState([]);
    const [Barthelex, setBarthelex] = useState(0);
    var AblistTotal = 0;
    var DblistTotal = 0;
    var bar = localStorage.getItem("Brun");
    console.log("barthel before", Barthelex);
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
        if(localStorage.getItem("ablist").length>30){

            localStorage.setItem("ablist",JSON.stringify(0));
            const Ablist = JSON.parse(localStorage.getItem("ablist"));
            if (Ablist) {
                setAblist(Ablist);
            }
            console.log("Thalt");
        }
        else{
            const Ablist = JSON.parse(localStorage.getItem("ablist"));
            if (Ablist) {
                setAblist(Ablist);
            }
            console.log("bassa");
        }
    }, []);

    useEffect(() => {
        if(localStorage.getItem("dblist").length>30){
            localStorage.setItem("dblist",JSON.stringify(0));
            const Dblist = JSON.parse(localStorage.getItem("dblist"));
            if (Dblist) {
                setDblist(Dblist);
            }
            console.log("delete");
        }
        else{
            const Dblist = JSON.parse(localStorage.getItem("dblist"));
            if (Dblist) {
                setDblist(Dblist);
            }
        }
    }, []);

    console.log("barthel after", Barthelex+1);
    useEffect(() => {
        localStorage.setItem("Brun",JSON.stringify(Barthelex));
    }, [Barthelex]);

    useEffect(() => {
        localStorage.setItem("ablist",JSON.stringify(Ablist));
    }, [Ablist]);

    useEffect(() => {
        localStorage.setItem("dblist",JSON.stringify(Dblist));
    }, [Dblist]);

    console.log("local ablist:", localStorage.getItem("ablist"));
    console.log("local dblist:", localStorage.getItem("dblist"));

    const handleChange =  (event) => {
        setOption(event.target.value);
    };

    function addUp(num1, num2){
        var ans = num1 + num2;
        return ans;
    }

    if (barthel === "true"){
        if(Barthelex < 3){
            bar = Barthelex+1;
            localStorage.setItem("Brun",JSON.stringify(bar));
            return <Barthel/>
        }
    }

    if(props.indexList !== undefined && Barthelex === 1){
        props.indexList.forEach(element => Ablist.push(element));
        props.indexList.forEach(element => AblistTotal = addUp(AblistTotal,element));
    }
    else if (props.indexList !== undefined && Barthelex === 2){
        props.indexList.forEach(element => Dblist.push(element));
        props.indexList.forEach(element => DblistTotal = addUp(DblistTotal,element));
    }

    /*if(props.indexList !== undefined && Barthelex === 1){
        props.indexList.forEach(element => Ablist.push(element));
        props.indexList.forEach(element => AblistTotal = addUp(AblistTotal,element));
        
    }
    if(props.indexList !== undefined && Barthelex === 2){
        props.indexList.forEach(element => Dblist.push(element));
        props.indexList.forEach(element => DblistTotal = addUp(DblistTotal,element));
    }*/

    console.log("Ablist[0]",Ablist[0]);

    function showSeverity(total) {
        if (total >= 0 && total <= 9) {
            return "Severe";
        } else if (total >= 10 && total <= 14) {
            return "Moderate";
        } else if (total >= 15 && total <= 19) {
            return "Minimal";
        } else if (total <= 20) {
            return "Independent";
        }
    }

  return (
    <div className="screen">
        <Header name={"Summary"} /> 

        <div className="card">
            <p className="name">Patient's Name</p>
            <p className="id">123456L</p>
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
                <button className="input-details" onClick={() => {setabtime();
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
                            <th>{moment(new Date()).format("DD/MM/YYYY")}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid-data">
                            <td className="section">Mobility</td>
                            <td>{Ablist[0]}</td>
                            <td>{Dblist[0]}</td>
                            <td className="total-diff">{(Ablist[0]) && (Dblist[0])? Dblist[0] - Ablist[0] : ""}</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Grooming</td>
                            <td>{Ablist[1]}</td>
                            <td>{Dblist[1]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Dressing</td>
                            <td>{Ablist[2]}</td>
                            <td>{Dblist[2]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bathing</td>
                            <td>{Ablist[3]}</td>
                            <td>{Dblist[3]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Stairs</td>
                            <td>{Ablist[4]}</td>
                            <td>{Dblist[4]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bowels</td>
                            <td>{Ablist[5]}</td>
                            <td>{Dblist[5]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Transfers</td>
                            <td>{Ablist[6]}</td>
                            <td>{Dblist[6]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bladder</td>
                            <td>{Ablist[7]}</td>
                            <td>{Dblist[7]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Feeding</td>
                            <td>{Ablist[8]}</td>
                            <td>{Dblist[8]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Toilet Use</td>
                            <td>{Ablist[9]}</td>
                            <td>{Dblist[9]}</td>
                            <td>2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Total</td>
                            <td className="total">{AblistTotal < 0 ? "" : AblistTotal}</td>
                            <td className="total">{DblistTotal < 0 ? "" : DblistTotal}</td>
                            <td className="total">20</td>
                        </tr>
                        <tr >
                            <td></td>
                            <td className={`dependency ${showSeverity(AblistTotal)}`}>{showSeverity(AblistTotal)}</td>
                            <td className={`dependency ${showSeverity(DblistTotal)}`}>{showSeverity(DblistTotal)}</td>
                        </tr>
                        <br></br>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Height & Weight</p>
                <button className="input-details">Input Height & Weight</button>
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
                            <td className="section">Height</td>
                            <td className="grid-row">1</td>
                            <td className="grid-row">3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Weight</td>
                            <td>1</td>
                            <td>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Has patient<br></br>lost weight?</td>
                            <td>1</td>
                            <td>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                        <tr data-index={3} className="grid-data">
                            <td className="section">Was weight lost<br></br>due to exercise?</td>
                            <td data-value={1}>1</td>
                            <td value={3}>3</td>
                            <td className="total-diff">2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

  );
}
