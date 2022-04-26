import "./CommonStyle.css";
import React from "react";
import GripPhoto from "../assets/Grip-Strength-Test-Equipment.png";
import Fab from "@mui/material/Fab";
import HelpIcon from "@mui/icons-material/Help";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";

function GripStrength() {
  
  var typography = "This page explains the equipment needed and how it should be used. I also lists the instructions that should be told to the patient";
  const navigate = useNavigate();

  function navToNextPage() {
    sessionStorage.setItem("GripStrength2", true);
    navigate("/GripStrength2");
  }

  return (
    <div className="screen">
      <Header typography = {typography} history = {"/ReviewQuestion"} name = {"Grip Strength Test"} />
      

      <div className="main-section">
        <label className="subtitle">Equipment and Instructions</label>
        <p>Equipment needed:</p>
        <img
          src={GripPhoto}
          style={{
            padding: 20,
          }}
        />
        <ul>
          <li>Dynamometer</li>
        </ul>
        <p>Instructions:</p>
        <ul>
          <li>
            "In this exercise, I am going to use the dynamometer to test the
            strength in your hands."
          </li>
          <li>
            "I'll start by asking you a couple of questions first and then we
            can proceed to the test."
          </li>
        </ul>
      </div>
      <button className="next-button" onClick={navToNextPage}>
        Next
      </button>
    </div>
  );
}

export default GripStrength;

