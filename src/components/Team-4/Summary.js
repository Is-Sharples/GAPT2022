import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { AppBar, DialogActions, FormControl, Menu, MenuItem} from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import Barthel from "./BarthelIndex";
// import Height from "./Height";
import Height from "./Height";
import "../styles/Summary.css";
import Header from "../header";
import { ShowSectionE, AddData, SetData } from "../firebase";
import  '../firebase';
import { LocalCafeOutlined } from "@material-ui/icons";
import BarthelEdit from "./BarthelEdit";
import WeightEdit from "./WeightEdit";
import "./styles/Summary.css";
import Header from "./header";
import { ShowSectionE, AddData, SetDataB, AddNewVisit, GetDocsE, GetDataE } from "./firebase";
import  './firebase';
import { LocalCafeOutlined, LocalCafeSharp, LocalDining, LocalSeeOutlined } from "@material-ui/icons";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import moment from "moment";
import Box from '@mui/material/Box';



export default function Summary(props) {
    var typography = "If you wish to input the Barthel/Measurements press the respective buttons on the Screen";
    var data = props.patient;
    var docdata = "";
    
    var run = (localStorage.getItem("run")===null) ? (props.run)=== undefined ? 0 : props.run : JSON.parse(localStorage.getItem("run"));
    if (props.run!==undefined){
        if(localStorage.getItem("run")>1){
        }
        else {
            localStorage.setItem("run",JSON.stringify(props.run));
        }
    }
   
    

    const [Test,setTest] = useState([]);
    // console.log(GetDocsE(data.id));
    useEffect(()=>{
        // var array = GetDocsE(data.id);
        // console.log( GetDocsE(data.id));
        GetDocsE(data.id).then((result)=> {
        setTest(result);
    })
    },[])
    console.log(Test);
    const ilbierah = "Ilbierah";
    const illum = "Illum";
    const dt = new Date().toDateString();
    const setAbtime = () => {
        let dt = new Date().toString();
        localStorage.setItem("abtime",JSON.stringify(dt));
    }
    const abTime = (localStorage.getItem("abtime"))===undefined ? "" : localStorage.getItem("abtime");
    const setDbtime = () => {
        let dt = new Date().toString();
        localStorage.setItem("dbtime",JSON.stringify(dt));
    }
    const dbTime = (localStorage.getItem("dbtime"))===undefined ? "" : localStorage.getItem("dbtime");
    const [Documents, setDocs] = useState(Test);
    const [option, setOption] = useState("");
    const [barthel, showBarthel] = useState("false");
    const [Barthelex, setBarthelex] = useState(0);
    const [height, showHeight] = useState("false");
    const [Ablist, setAblist] = useState([]);
    const [Dblist, setDblist] = useState([]);
    const [editB, setEditB] = useState(false);
    const [editnum, setedit] = useState(0);
    const [editH, setEditH] = useState(false);
    const [editW, setEditW] = useState(false);
    const [edithw, setedithw] = useState("");
    const [openB, setOpenB] = useState(false);
    const [openHW, setOpenHW] = useState(false);
    const [openSave, setOpenSave] = useState(false);
    const [DoccyData, setDoccy] = useState({});
    const [value,setValue] = useState(0);
    console.log("option:",option);
    
    var editeda = [];
    var editedd = [];

    console.log("Docss:",Test.length);

    
    
    
    useEffect(()=> {
        
        var test = [];
        var testString = {};
            
                GetDataE(data.id,option).then( (result)=> {
                    sessionStorage.setItem("Test",JSON.stringify(result));
                    // console.log(result);
                    setDoccy(result);
                    
                    
                    
                    
                })
                console.log("Docs:",DoccyData);
                
        
        // console.log(test.length);
        // console.log(sessionStorage.getItem("Test"));
        
        
        console.log(testString);
    },[option]);
    console.log("date:",docdata.AdmissionDate);
    
    var ahw = ((run===0 && localStorage.getItem("ahw")!==null)|| (run === 1 && localStorage.getItem("ahw")!==null) || (run===2 && localStorage.getItem("ahw")!==null)) ? JSON.parse(localStorage.getItem("ahw")) : {
        height: "",
        weight: "",
        weightloss: "",
        exercise: "",
    } ;

    var dhw = ((run===0 && localStorage.getItem("dhw")!==null) || (run === 1 && localStorage.getItem("dhw")!==null) || (run===2 && localStorage.getItem("dhw")!==null)) ? JSON.parse(localStorage.getItem("dhw")) :{
        height: "",
        weight: "",
        weightloss: "",
        exercise: "",
    };
    //#region
    /*if(props.arrnum!==undefined){
        if(Barthelex===1){
            editeda = Ablist;
            editeda[props.arrnum]=props.editB;
            console.log(editeda);
        }
        else{
            editedd = Dblist;
            editedd[props.arrnum]=props.editB;
            console.log(editedd);
        }
    }
    
    if(props.newheight!==undefined){
        if(JSON.parse(localStorage.getItem("run"))===1){
            ahw.height = props.newheight;
            localStorage.setItem("ahw",JSON.stringify(ahw));
        }
        else{
            dhw.height = props.newheight;
            localStorage.setItem("dhw",JSON.stringify(dhw));
        }
    }

    if(props.newweight!==undefined){
        if(JSON.parse(localStorage.getItem("run"))===1){
            ahw.weight = props.newweight;
            ahw.weightloss = props.newweightloss;
            ahw.exercise = props.newexercise;
            localStorage.setItem("ahw",JSON.stringify(ahw));
        }
        else{
            dhw.weight = props.newweight;
            dhw.weightloss = props.newweightloss;
            dhw.exercise = props.newexercise;
            localStorage.setItem("dhw",JSON.stringify(dhw));
        }
    }*/
    //#endregion
    const handleClose = () => {
        setOpenB(false);
        setOpenHW(false);
        setOpenSave(false);
    };
    //#region
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
    const handleChange =  (event) => {
        setOption(event.target.value);
        
    };
   
     
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

    }, []);

    useEffect(() => {
        localStorage.setItem("Brun",JSON.stringify(Barthelex));
    }, [Barthelex]);

    useEffect(() => {
        localStorage.setItem("ablist",JSON.stringify(Ablist));
    }, [Ablist]);

    useEffect(() => {
        localStorage.setItem("dblist",JSON.stringify(Dblist));
    }, [Dblist]);

    

    function addUp(num1, num2){
        var ans = num1 + num2;
        return ans;
    }

    console.log("barthel after", Barthelex+1);
    
    if (Barthelex < 3){
        if(barthel === "true"){
            bar = Barthelex+1;
            localStorage.setItem("Brun",JSON.stringify(bar));
            return <Barthel patient = {data} run={Barthelex}/>
        }
    }

    if(height === "true"){
        return <Height patient={data} ahw = {ahw} age = {60} gender = {'Male'} run={run}/>
    }
    

    if (Ablist.length<10){
        if(props.indexList !== undefined && Barthelex === 1){
            props.indexList.forEach(element => Ablist.push(element));
        }
        else{
            
        } 
    }
    else{
    }
    if (Dblist.length<10){
        if(props.indexList !== undefined && Barthelex === 2){
            props.indexList.forEach(element => Dblist.push(element));
        }
        else{
            
        } 
    }
    else{
    }

        if (props.height !== undefined && props.run === 1){
            updateAhw(props.height, props.weight, props.weightloss, props.exercise);
            const setahw = {height: props.height, weight: props.weight, weightloss: props.weightloss, exercise: props.exercise};
            localStorage.setItem("ahw",JSON.stringify(setahw));
            console.log("thalt");
        }
        else{
        }
   
        if (props.height !== undefined && props.run === 2){
            updateDhw(props.height, props.weight, props.weightloss, props.exercise);
            const setdhw = {height: props.height, weight: props.weight, weightloss: props.weightloss, exercise: props.exercise};
            localStorage.setItem("dhw",JSON.stringify(setdhw));
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

    if(editB===true){
        return <BarthelEdit patient = {data} question={editnum}/>
    }

    if(editH===true){
        return <HeightEdit patient = {data} age={60} gender={"Male"}/>
    }

    if(editW===true){
        return <WeightEdit patient = {data}/>
    }
//#endregion


  return (
    <div className="screen">
        <Header typography = {typography} history = {"/"} name={"Summary"} /> 

    
        <div className="card">
            <p className="name">{data.name} {data.surname}</p>
            <p className="id">{data.id}</p>
            <FormControl sx={{['@media (min-width:720px)']: {minWidth: 280}, ['@media (max-width:720px)']: {minWidth: 250} }}>
            <InputLabel id="blabel" sx={{fontSize: 18}}>Date of Entry</InputLabel>
            <Select labelId="blabel" id="select" value={option} label="Date Of Entry" onChange={handleChange} style={{color: "black"}}>
            <MenuItem value={"Choose a visit or create a new one"}>{"Choose an old visit"}</MenuItem>
            {Test.map((doc) => (
                    <MenuItem key={doc} value={doc}>{doc}</MenuItem>
                ))}
            </Select>
            </FormControl>
            <button onClick={() => AddNewVisit(data.id,dt)} className='newVisit'>
                <span><AddIcon/></span>
            </button>
            <div className="lastModifiedBy">
                <p>Last Modified by: Doctor</p>
            </div>
        </div>

        <div className="card">
            <div className="grid-title">
                <p className="name">Barthel Score</p>
                <button className="input-details" onClick={() => {(Barthelex) === 0 ? setAbtime() : setDbtime();
                                                                showBarthel("true");}}>Input Barthel Index</button>
            </div>

        <Dialog open={openB} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
            {"Which Session would you like to edit?"}
            </DialogTitle>
            <DialogContent>
            <Button style={{m: 10, fontSize: "18px"}} disabled = {JSON.parse(localStorage.getItem("Brun"))!==1 ? true : ""} onClick={() => {setEditB(true); handleClose(); }}>Admission</Button>
            <Button style={{m: 10, fontSize: "18px"}} disabled = {JSON.parse(localStorage.getItem("Brun"))!==2 ? true : ""} onClick={() => {setEditB(true); handleClose(); }}>Discharge</Button>
            </DialogContent>
        </Dialog>

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
                            <th>{(abTime)===null ? "" : moment(abTime).format('MMMM Do YYYY, H:mm:ss a')}</th>
                            <th>{(dbTime)===null ? "" : moment(dbTime).format('MMMM Do YYYY, H:mm:ss a')}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grid-data">
                            <td className="section">Mobility</td>
                            <td>{Ablist[0]}</td>
                            <td>{Dblist[0]}</td>
                            <td className="total-diff">{(Ablist[0])!= undefined && (Dblist[0])!=undefined? Dblist[0] - Ablist[0] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(0); setOpenB(true)}}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Grooming</td>
                            <td>{Ablist[1]}</td>
                            <td>{Dblist[1]}</td>
                            <td>{(Ablist[1])!= undefined && (Dblist[1])!=undefined? Dblist[1] - Ablist[1] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(1); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Dressing</td>
                            <td>{Ablist[2]}</td>
                            <td>{Dblist[2]}</td>
                            <td>{(Ablist[2])!= undefined && (Dblist[2])!=undefined? Dblist[2] - Ablist[2] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(2); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bathing</td>
                            <td>{Ablist[3]}</td>
                            <td>{Dblist[3]}</td>
                            <td>{(Ablist[3])!= undefined && (Dblist[3])!=undefined? Dblist[3] - Ablist[3] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(3); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Stairs</td>
                            <td>{Ablist[4]}</td>
                            <td>{Dblist[4]}</td>
                            <td>{(Ablist[4])!= undefined && (Dblist[4])!=undefined? Dblist[4] - Ablist[4] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(4); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bowels</td>
                            <td>{Ablist[5]}</td>
                            <td>{Dblist[5]}</td>
                            <td>{(Ablist[5])!= undefined && (Dblist[5])!=undefined? Dblist[5] - Ablist[5] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(5); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Transfers</td>
                            <td>{Ablist[6]}</td>
                            <td>{Dblist[6]}</td>
                            <td>{(Ablist[6])!= undefined && (Dblist[6])!=undefined? Dblist[6] - Ablist[6] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(6); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Bladder</td>
                            <td>{Ablist[7]}</td>
                            <td>{Dblist[7]}</td>
                            <td>{(Ablist[7])!= undefined && (Dblist[7])!=undefined? Dblist[7] - Ablist[7] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(7); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Feeding</td>
                            <td>{Ablist[8]}</td>
                            <td>{Dblist[8]}</td>
                            <td>{(Ablist[8])!= undefined && (Dblist[8])!=undefined? Dblist[8] - Ablist[8] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(8); setOpenB(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Toilet Use</td>
                            <td>{Ablist[9]}</td>
                            <td>{Dblist[9]}</td>
                            <td>{(Ablist[9])!= undefined && (Dblist[9])!=undefined? Dblist[9] - Ablist[9] : ""}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedit(9); setOpenB(true); }}>Edit</button></td>
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

            <Dialog open={openHW} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
            {"Which Session would you like to edit?"}
            </DialogTitle>
            <DialogContent>
            <Button style={{m: 10, fontSize: "18px"}} disabled = {run!==1 ? true : ""} onClick={() => {(edithw==="H" ? setEditH(true) : setEditW(true)); handleClose(); }}>Admission</Button>
            <Button style={{m: 10, fontSize: "18px"}} disabled = {run!==2 ? true : ""} onClick={() => {(edithw==="H" ? setEditH(true) : setEditW(true)); handleClose(); }}>Discharge</Button>
            </DialogContent>
            </Dialog>

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
                            <td className="section"><button className="edit-button" onClick={() => {setedithw("H"); setOpenHW(true); }}>Edit</button></td>
                        </tr>
                        <tr className="grid-data">
                            <td className="section">Weight (kg)</td>
                            <td>{ahw.weight}</td>
                            <td>{dhw.weight}</td>
                            <td className="total-diff">{(ahw.weight)==="" && (dhw.weight)==="" ? "" : dhw.weight - ahw.weight}</td>
                            <td className="section"><button className="edit-button" onClick={() => {setedithw("W"); setOpenHW(true); }}>Edit</button></td>
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

            <Dialog open={openSave} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to save the patient details?"}
            </DialogTitle>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() => {SetDataB(abTime, dbTime, Ablist, Dblist, ahw, dhw); handleClose(); }}>Yes</Button>
            <Button style={{m: 10}} onClick={()=> {handleClose();}}></Button>
            <Button style={{m: 10, fontSize: "20px"}} onClick={() =>  {handleClose();} }>No</Button>
            </Dialog>

        </div>
        <button className="input-details-save" onClick={() => {setOpenSave(true);}}>Save Data</button>
    </div>
    
  );
}
