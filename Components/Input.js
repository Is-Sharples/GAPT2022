import React from "react";
import { TextField } from "@mui/material";
import './Input.css';

const Input = ({label, handleChange, units, ...otherProps}) => (
    <div className="group">
        <TextField  type="number" label={label} onChange={handleChange} {...otherProps}
                                
        ></TextField>
        <span className="units">{units}</span>
    </div>
)

export default Input;
