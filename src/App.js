import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Patient from './components/PatientID';
import Barthel from './components/BarthelIndex'
import Summary from './components/Summary';
import {Router, Route } from 'react-router-dom';
// import Demo from './components/Demo';
function App() {
  
  return (
    //  <Demo />
    //<Barthel />
    <Patient />
  );
}

export default App;
