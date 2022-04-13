import React, { useContext, useEffect, useState } from 'react';
import WeightCard from './WeightCard';
import QuestionCard from './QuestionCard';
import Question2Card from './Question2Card';
import Summary from "./Summary";
import patients from './assets/patients.json';
import { Grid } from '@mui/material';

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
        return <Summary ahwStore = {data} patient = {obj.patient[0]} height={height} weight={weight} weightloss={weightLoss} exercise={exercise} run={run+1}/>
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
            setExercise(undefined);
        }
        if (name === "exercise") {
            setExercise(parseInt(value));
        }
    }


    return (
        <>
        <Grid justifyContent={"center"} container>
            <WeightCard handleChange={handleWeightChange} weight={weight} />
            <QuestionCard handleButtonSubmit={handleButtonSubmit} weightloss={weightLoss} exercise={exercise}/>
            <button className='input-details' onClick={() => showSummary("true")}>Go back to Summary</button>
        </Grid>
        </>
    )
}

export default Weight;