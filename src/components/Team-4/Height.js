import React, { useContext, useEffect, useState } from 'react';
import HeightCard from './HeightCard';
import Weight from "./Weight";
import { Grid } from '@mui/material';
import '../styles/HWcss.css';

function Height(props) {
    var data = props.ahw;
    var patient = props.patient;
    var run = props.run;
    const [state, setState] = useState({
        demispan: '',
        height: '',
        age: props.age,
        gender: props.gender
    })
    const [weight, showWeight] = useState("false");
    if (weight === "true"){
        return <Weight patient = {patient} ahw = {data} height={state.height} run={props.run}/>
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
                <div className='phase-section'>
				    <h2>{(run)===0 ? "Admission" : "Discharge"}</h2>
			    </div>
                <Grid item>
                <HeightCard handleChange={handleHeightChange} demispan={state.demispan} height={state.height} run={run}/>
                </Grid>
                <Grid item>
                <button className = "input-details" onClick={() => showWeight("true")}> Go to next Page </button>
                </Grid>
            </Grid>
            </>
        );
}



export default Height;