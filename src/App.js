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
// import Demo from './components/Demo';
function App() {
  
  var json = JSON.stringify(patients);
  var obj = JSON.parse(json);
  console.log(obj.patient[1]);

  return (
    <Router>
      <Routes>
        <Route path = "/" element={ <Home /> }/>
        <Route path = "/Summary" element={ <Summary patient={obj.patient[1]} /> }/>
        <Route path = "/Patient" element = {<Patient currentPatient = {new currentPatient(0,"","","")}/>} />


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

