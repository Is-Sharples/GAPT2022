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
import Height from './components/Height';
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
      </Routes>
    </Router>


  );
}

export default App;
