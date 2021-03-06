import React, { useContext, useEffect, useState } from 'react';
import HeightCard from './Team-4/HeightCard';
import { Grid } from '@mui/material';
import Summary from './Team-4/Summary';

function Height(props) {
    const [state, setState] = useState({
        demispan: '',
        height: '',
        age: props.age,
        gender: props.gender
    })
    const [summary, showSummary] = useState("false");

    if (summary === "true"){
        return <Summary patient = {props.patient} newheight={state.height}/>
    }
    

    const handleHeightChange = (event) => {
        let result;
        let value = parseFloat(event.target.value);
        if (value) {
            result = 67.51 + (1.29 * value) - (0.12 * state.age);
            if (state.gender === 'Male') {
                result += 4.13;
            }
            setState({
                demispan: parseFloat(value),
                height: result.toFixed(2),
                age: state.age,
                gender: state.gender
            });
        } else {
            setState({ demispan: "", height: "", age: state.age })
        }
    }

        return (
            <>  
            <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={{lg: 2, sm: 2}}>
                <Grid item>
                <HeightCard handleChange={handleHeightChange} demispan={state.demispan} height={state.height} />
                </Grid>
                <Grid item>
                <button className = "input-details" onClick={() => showSummary("true")}> Go to next Page </button>
                </Grid>
            </Grid>
            </>
        );
}



export default Height;