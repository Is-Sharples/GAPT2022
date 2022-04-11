import GripStrength from './components/GripStrength';
import GripStrength2 from './components/GripStrength2';
import { Route, Routes } from "react-router-dom";
import GripStrength3 from './components/GripStrength3';
import GripStrength4 from './components/GripStrength4';
import Instructions from './components/Instructions';
import LevelsOfMobility from './components/LevelsOfMobility';
import ListOfEquipment from './components/ListOfEquipment';
import ReviewQuestion from './components/ReviewQuestion';
import RiskOfFallStatus from './components/RiskOfFallStatus';
import Timer from './components/Timer';
import SummaryTeam2 from './components/SummaryTeam2';
import React, { useState } from "react";
import GetPatientData from './components/GetPatientData';

function App() {

    return(
       <Routes>
        
        <Route path="/" element={<GetPatientData/>}></Route>
        
        <Route path="/LevelsOfMobility" element={<LevelsOfMobility/>}></Route>
        <Route path="/ListOfEquipment" element={<ListOfEquipment/>}></Route>
        <Route path="/Instructions" element={<Instructions/>}></Route>
        <Route path="/Timer" element={<Timer/>}></Route>
        <Route path="/RiskOfFallStatus" element={<RiskOfFallStatus/>}></Route>
        <Route path="/ReviewQuestion" element={<ReviewQuestion/>}></Route>

        <Route path="/GripStrength" element={<GripStrength/>}></Route>
        <Route path="/GripStrength2" element={<GripStrength2/>}></Route>
        <Route path="/GripStrength3" element={<GripStrength3/>}></Route>
        <Route path="/GripStrength4" element={<GripStrength4/>}></Route>
        <Route path="/SummaryTeam2" element={<SummaryTeam2/>}></Route>

      </Routes>
    );
  }
  
  export default App;