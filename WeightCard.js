import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import './WeightCard.css';

const WeightCard = ({handleChange, weight}) => (
    <div className="my-weight-card mdc-card mdc-card--outlined">
        <FormControl sx={{['@media (min-width:720px)']: {minWidth: 280}, ['@media (max-width:720px)']: {minWidth: 250} }}>
            <InputLabel id="blabel" sx={{fontSize: 17}}>Enter Weight</InputLabel>
            <OutlinedInput name="weight" label="Enter Weight" handleChange={handleChange} value={weight} required/>
        </FormControl> 
    </div>
)

export default WeightCard;