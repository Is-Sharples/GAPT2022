import React from 'react';
import './App.css';
import { HeightWeightProvider } from './contexts/HeightWeightContext';
import { PatientProvider } from './contexts/PatientContext';
import { BrowserRouter, Route } from 'react-router-dom';
import Height from './Components/Height';
import Weight from './Components/Weight';
import WeightCard from './Components/WeightCard';
import QuestionCard from './Components/QuestionCard';
import Question2Card from './Components/Question2Card';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PatientProvider>
        <HeightWeightProvider>
          <Weight/>
        </HeightWeightProvider>
      </PatientProvider>
    )
  }
}

export default App;