import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import './HeightCard.scss';

const HeightCard = ({ handleChange, demispan, height }) => (
    <div className="my-card mdc-card mdc-card--outlined">
        <div className="top">
            <div className="height-title">
                <h2>Estimating height from demispan</h2>
            </div>
            <div className="my-card__media mdc-card__media mdc-card__media--16-9">
                <img src={require('../assets/heightpic.jpg')} alt="How to Measure Demispan" />
            </div>
        </div>
        <div className="bottom">
            <div className="sub-group">
                <div className="mdc-card__primary-action" tabIndex="0">
                    <FormControl sx={{['@media (min-width:720px)']: {minWidth: 280}, ['@media (max-width:720px)']: {minWidth: 250} }}>
                        <InputLabel id="blabel" sx={{fontSize: 17}}>Demispan Measurement</InputLabel>
                        <OutlinedInput id="demispan" label="Demispan Measurement" handleChange={handleChange} value={demispan} required/>
                    </FormControl> 
                </div>
            </div>
            <div className="sub-group">
                <div className="mdc-card__primary-action" tabIndex="0">
                    <FormControl sx={{['@media (min-width:720px)']: {minWidth: 280}, ['@media (max-width:720px)']: {minWidth: 250} }}>
                        <InputLabel id="blabel" sx={{fontSize: 17}}>Calculated Height</InputLabel>
                        <OutlinedInput name="height" label="Calculated Height" value={height} required disabled readOnly />
                    </FormControl> 
                </div>
            </div>
        </div>
    </div>
)

export default HeightCard;