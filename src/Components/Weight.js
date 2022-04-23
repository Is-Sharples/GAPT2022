import React, { useContext, useEffect, useState } from 'react';
import WeightCard from './WeightCard';
import QuestionCard from './QuestionCard';
import Question2Card from './Question2Card';
import Summary from "./Summary";
import patients from './assets/patients.json';
import { Grid } from '@mui/material';
import './styles/HWcss.css';


function Weight(props) {
    
    var json = JSON.stringify(patients);
  	var obj = JSON.parse(json);
    var data = props.ahw;
    var run = props.run;
    const [height, setHeight] = useState(props.height);
    const [weight, setWeight] = useState();
    const [weightLoss, setWeightLoss] = useState();
    const [exercise, setExercise] = useState();
    const [summary, showSummary] = useState("false");

    if (summary === "true"){
        return <Summary ahwStore = {data} patient = {props.patient} height={height} weight={weight} weightloss={weightLoss} exercise={exercise} run={run+1}/>
    }

    const handleWeightChange = event => {
        let value = parseFloat(event.target.value);
        if (value) {
            setWeight(parseFloat(value));
        }
    }

    const handleButtonSubmit = event => {
        const { name, value } = event.target;
        if (name === "wtloss") {
            setWeightLoss(parseInt(value));
            setExercise(0);
        }
        if (name === "exercise") {
            setExercise(parseInt(value));
        }
    }


    return (
        <>
        <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={{lg: 3, sm: 3}}>
            <div className='phase-section'>
				<h2>{(run)===1 ? "Admission" : "Discharge"}</h2>
			</div>
            <Grid item >
            <WeightCard handleChange={handleWeightChange} weight={weight} />         
            </Grid>
            <Grid item>
            <QuestionCard handleButtonSubmit={handleButtonSubmit} weightloss={weightLoss} exercise={exercise}/>
            </Grid>
            <Grid item>
            <button className='input-details' onClick={() => showSummary("true")}>Go back to Summary</button>
            </Grid>
        </Grid>
        </>
    )
}

export default Weight;