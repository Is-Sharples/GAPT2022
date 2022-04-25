import {React, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import PatientID from './components/PatientID';
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Section10 from './components/Section10'
import Section11 from './components/Section11'
import Section12 from './components/Section12'
import Section13 from './components/Section13'
import Section14 from './components/Section14'
import Section15 from './components/Section15'
import MOCAResults from './components/MOCAResults';
import WriteCheck from './components/WriteCheck';
import Review from './components/Review';

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

