import React, { useContext, useEffect, useState } from 'react';
import WeightCard from './WeightCard';
import QuestionCard from './QuestionCard';
import Summary from "./Summary";
import { Grid } from '@mui/material';


function Weight(props) {

    var data = props.ahw;
    const [weight, setWeight] = useState();
    const [weightLoss, setWeightLoss] = useState();
    const [exercise, setExercise] = useState();
    const [summary, showSummary] = useState("false");

    if (summary === "true"){
        return <Summary ahwStore = {data} patient = {props.patient} newweight={weight} newweightloss={weightLoss} newexercise={exercise}/>
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