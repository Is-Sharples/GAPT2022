import React, { useState } from "react";
import { barthelQuestions } from "./constants";
import '../styles/Barthel.css';
import { useDispatch,useSelector } from "react-redux/es/exports";
import { actions } from "../../stores/actions";
import { TextField } from "@mui/material";
import Button from "./babyComponents/button";

export default function Questions(props) {
    const dispatch = useDispatch();
    const[questionNumber, setQuestionNumber] = useState(0);
    const[heightValue, setHeight] = useState(0);
    const[patientLost, setPatientLost] = useState(false);
    const[dueExercise, setDueExercise] = useState(false);
    const age = useSelector(state => state.patientHeightState.age);
    let decider = undefined;
    let questions = barthelQuestions;
    //Functions
    const handleClick = () => {
        if(questionNumber < questions.length-1){
            setQuestionNumber(questionNumber + 1)
            dispatch(actions.increment())
        }else if (questionNumber < questions.length){
            dispatch(actions.increment())
        }
    }

    const handleChange = (e) => {
        setHeight((e.target.value * 1.29) + 67.51- (0.12 * age));
    }
    //switch cases for deciding the questions 
    const weightLoss = (lostWeight) => {
        if(lostWeight){
            return(
                <React.Fragment>
                    <p>Was the weight lost due to exercise?</p>
                                <div className="flex space-x-4 justify-center w-full">
                                    <Button css={activeButton(dueExercise)} func={() => setDueExercise(true)} text='Yes'></Button>
                                    <Button css={activeButton(!dueExercise)} func={() => setDueExercise(false)} text='No'></Button>
                                </div>
                </React.Fragment>
            )
        }else {
            return (<></>)
        }
    }

    const activeButton = (active) => {
        if(active){
            return 'bg-blue-950 rounded-md p-3 text-white'
        }else {
            return 'bg-gray-alt-400 rounded-md p-3'
        }
    }
    switch(props.title){
        case "Barthel": decider = true; break;
        case "HeightWeight": decider = false; break;
    }
    //Error catching
    if(decider === undefined){
        console.log('Error: no title was passed')
    }

    return(
    <div className="flex flex-col items-center bg-white w-full">
        <p className="text-2xl font-semibold pb-4">Admission/Discharge</p>
        {decider ?
            <div className="flex flex-col items-center ">
                <p className='question-section'>{questions[questionNumber].questionText}</p>
                {
                    questions[questionNumber].answerOptions.map((ans)=> (
                        <button key={ans.index} onClick={() => handleClick()} className='button '>{ans.answerText}</button>
                    ))
                }
            </div> : <></>
        }
        {
            decider ? <></> : 
            <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center">                
                <div className="flex flex-col items-center">
                    
                    <p className="question-section"> Estimating height from demispan </p>
                    <img src={require('../assets/heightpic.jpg')} />    
                    <div className="mb-4 mt-2">
                        <TextField onChange={handleChange} label={"Enter Demispan"} required></TextField>

                    </div>

                    <TextField label={"Calculated Height in CM"} disabled readOnly value={heightValue} ></TextField>

                </div>
                    <div className="flex flex-col items-center h-full">
                        <p className="question-section"> Input the weight for the patient</p>
                    <TextField label="Enter Weight" ></TextField>

                    <div className="mt-2">
                        <p>Has the patient lost any weight in the past year?</p>
                        <div className="flex space-x-4 justify-center w-full">
                            <Button css={activeButton(patientLost)} func={() => setPatientLost(true)} text ='Yes'></Button>
                            <Button css={activeButton(!patientLost)} func={() => setPatientLost(false)} text='No'></Button>
                        </div>
                        {weightLoss(patientLost)}
                    </div>
                    
                </div>
            </div>
            <Button func={() => dispatch(actions.test(heightValue))} extraCss='px-10' text='Submit'></Button>
            </div>
        }
        
    </div>)
}