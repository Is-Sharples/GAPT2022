import React from "react";
import Input from "./Input";
import '../styles/HeightCard.css';

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
                    <Input name="demispan" label="Enter Demispan" handleChange={handleChange} value={demispan} units="CM" required />
                </div>
            </div>
            <div className="sub-group">
                <div className="mdc-card__primary-action" tabIndex="0">
                    <Input name="height" label="Calculated Height" value={height} units="CM" disabled readOnly />
                </div>
            </div>
        </div>
    </div>
)

export default HeightCard;