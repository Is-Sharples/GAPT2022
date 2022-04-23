import {React, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import PatientID from './PatientID';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'
import Section11 from './Section11'
import Section12 from './Section12'
import Section13 from './Section13'
import Section14 from './Section14'
import Section15 from './Section15'
import MOCAResults from './MOCAResults';
import WriteCheck from './WriteCheck';
import Review from './Review';

//Styling

import './style.css';

function App() {
  sessionStorage.setItem("pattern", "0");
  sessionStorage.setItem("cube", "0");
  sessionStorage.setItem("clock1", "0");
  sessionStorage.setItem("clock2", "0");
  sessionStorage.setItem("clock3", "0");
  sessionStorage.setItem("camel", "0");
  sessionStorage.setItem("lion", "0");
  sessionStorage.setItem("rhino", "0");
  sessionStorage.setItem("front", "0");
  sessionStorage.setItem("back", "0");
  sessionStorage.setItem("letters", "0");
  sessionStorage.setItem("one", "0");
  sessionStorage.setItem("two", "0");
  sessionStorage.setItem("three", "0");
  sessionStorage.setItem("four", "0");
  sessionStorage.setItem("five", "0");
  sessionStorage.setItem("rep1", "0");
  sessionStorage.setItem("rep2", "0");
  sessionStorage.setItem("sec12", "0");
  sessionStorage.setItem("count", "0");
  sessionStorage.setItem("trans", "0");
  sessionStorage.setItem("meas", "0");
  sessionStorage.setItem("date", "0");
  sessionStorage.setItem("day", "0");
  sessionStorage.setItem("month", "0");
  sessionStorage.setItem("year", "0");
  sessionStorage.setItem("place", "0");
  sessionStorage.setItem("city", "0");
  sessionStorage.setItem("eduCheck", "0");
  sessionStorage.setItem("blindCheck", "0");
  sessionStorage.setItem("writeCheck", "0");
  sessionStorage.setItem("face", "0");
  sessionStorage.setItem("velvet", "0");
  sessionStorage.setItem("red", "0");
  sessionStorage.setItem("daisy", "0");
  sessionStorage.setItem("church", "0");
  sessionStorage.setItem("cubepic", "");
  sessionStorage.setItem("clockpic", "");
  sessionStorage.setItem("patternpic", "");
  sessionStorage.setItem("subtraction", "0");
  sessionStorage.setItem("orientation", "0");
  sessionStorage.setItem("delayedrecall", "0");
  sessionStorage.setItem("abstraction", "0");
  sessionStorage.setItem("language", "0");
  sessionStorage.setItem("attention", "0");
  sessionStorage.setItem("naming", "0");
  sessionStorage.setItem("visuo", "0");

  return (
    <Routes>
    <Route path="/" element={<PatientID/>} ></Route>   
        <Route path="/questions" element={<Section1 />} ></Route>   
        <Route path="/mobility" element={<Section2 />} ></Route>   
        <Route path="/moca" element={<WriteCheck/>} ></Route>   
        <Route path="/sec3" element={<Section3/>} ></Route>   
        <Route path="/sec4" element={<Section4/>} ></Route>   
        <Route path="/sec5" element={<Section5/>} ></Route>   
        <Route path="/sec6" element={<Section6/>} ></Route>   
        <Route path="/sec7" element={<Section7/>} ></Route>   
        <Route path="/sec8" element={<Section8/>} ></Route>   
        <Route path="/sec9" element={<Section9/>} ></Route>   
        <Route path="/sec10" element={<Section10/>} ></Route>   
        <Route path="/sec11" element={<Section11/>} ></Route>   
        <Route path="/sec12" element={<Section12/>} ></Route>   
        <Route path="/sec13" element={<Section13/>} ></Route>   
        <Route path="/sec14" element={<Section14/>} ></Route>   
        <Route path="/sec15" element={<Section15/>} ></Route>   
        <Route path="/results" element={<MOCAResults/>} ></Route>   
        <Route path="/review" element={<Review/>} ></Route>    
    </Routes>
  );
}
export default App;

