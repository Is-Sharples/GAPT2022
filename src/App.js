import {React, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import PatientID from './components/Team-3/PatientID';
import Section1 from './components/Team-3/Section1'
import Section2 from './components/Team-3/Section2'
import Section3 from './components/Team-3/Section3'
import Section4 from './components/Team-3/Section4'
import Section5 from './components/Team-3/Section5'
import Section6 from './components/Team-3/Section6'
import Section7 from './components/Team-3/Section7'
import Section8 from './components/Team-3/Section8'
import Section9 from './components/Team-3/Section9'
import Section10 from './components/Team-3/Section10'
import Section11 from './components/Team-3/Section11'
import Section12 from './components/Team-3/Section12'
import Section13 from './components/Team-3/Section13'
import Section14 from './components/Team-3/Section14'
import Section15 from './components/Team-3/Section15'
import MOCAResults from './components/Team-3/MOCAResults';
import WriteCheck from './components/Team-3/WriteCheck';
import Review from './components/Team-3/Review';

import './styles/style.css';
import './styles/header.css';
//Styling

import './styles/style.css';

function App() {
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

