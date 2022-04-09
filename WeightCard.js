import React from "react";
import Input from "./Input";
import './WeightCard.css';

const WeightCard = ({handleChange, weight}) => (
    <div className="my-weight-card mdc-card mdc-card--outlined">
        <Input name="weight" label="Enter weight" handleChange={handleChange} value={weight} units="KG"/>
    </div>
)

export default WeightCard;