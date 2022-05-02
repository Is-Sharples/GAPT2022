import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Patient from './components/PatientID';
import Barthel from './components/BarthelIndex'
import Summary from './components/Summary';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import patients from './components/assets/patients.json';
import currentPatient from './components/PatientID';
import Home from './components/Home';
import LevelsOfMobility from './components/Team-2/LevelsOfMobility';
import ListOfEquipment from './components/Team-2/ListOfEquipment';
import Instructions from './components/Team-2/Instructions';
import Timer from './components/Team-2/Timer';
import RiskOfFallStatus from './components/Team-2/RiskOfFallStatus';
import ReviewQuestion from './components/Team-2/ReviewQuestion';
import GripStrength from './components/Team-2/GripStrength';
import GripStrength2 from './components/Team-2/GripStrength2';
import GripStrength3 from './components/Team-2/GripStrength3';
import GripStrength4 from './components/Team-2/GripStrength4';
import SummaryTeam2 from './components/Team-2/SummaryTeam2';
import GetPatientData from './components/Team-2/GetPatientData';
import PatientIDTeam2 from './components/Team-2/PatientID-Team2';

export default function App() {
  
  var json = JSON.stringify(patients);
  var obj = JSON.parse(json);
  // console.log(obj.patient[1]);

  return (
    <Router>
      <Routes>
        <Route path = "/" element={ <Home /> }/>
        <Route path = "/Summary" element={ <Summary patient={obj.patient[1]} /> }/>
        <Route path = "/Patient" element = {<Patient currentPatient = {new currentPatient(0,"","","")}/>} />
        {/* Without Get Patient Data Team-2 Will not work completely */}
        <Route path = "/PatientID-Team-2" element = {<PatientIDTeam2 />}> </Route>
        <Route path = "/PatientDataTeam2" element = {<GetPatientData />}> </Route>
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
    </Router>


  );
}

