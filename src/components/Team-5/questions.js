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
    const[weightValue, setWeight] = useState(0);
    const[patientLost, setPatientLost] = useState(false);
    const[dueExercise, setDueExercise] = useState(false);
    const age = useSelector(state => state.patientHeightState.age);
    let decider = undefined;
    let questions = barthelQuestions;
    console.log(props.title);
    switch(props.title){
        case "Barthel": decider = "Barthel"; break;
        case "HeightWeight": decider = false; break;
    }
    //Error catching
    if(decider === undefined){
        console.log('Error: no title was passed')
    }
    //Functions
    const handleClick = () => {
        if(questionNumber < questions.length-1){
            setQuestionNumber(questionNumber + 1)
            dispatch(actions.increment())
        }else if (questionNumber < questions.length){
            dispatch(actions.increment())
        }
    }

    const handleHeightChange = (e) => {
        setHeight((e.target.value * 1.29) + 67.51- (0.12 * age));
    }

    const handleWeightChange = (e) => {
        console.log(e.target.value)
        setWeight(e.target.value)
    }

    const createPayload = () => {
        let payload =  {
            height: heightValue,
            weight: weightValue,
            patientLostWeight: patientLost,
            dueToExercise: dueExercise
        }
        dispatch(actions.test(payload))
    }

    const displayDecider = () => {
        if (props.title === "Barthel") {
            return(<React.Fragment>
                <div className="flex flex-col items-center ">
                <p className='question-section'>{questions[questionNumber].questionText}</p>
                {
                    questions[questionNumber].answerOptions.map((ans)=> (
                    <button key={ans.index} onClick={() => handleClick()} className='button '>{ans.answerText}</button>
                    ))
                }
            </div>
            </React.Fragment>)
        } else if (props.title === "HeightWeight") {
            return(
            <React.Fragment>
                <div className="flex flex-col items-center space-y-8">
                    <div className="flex items-center">                
                        <div className="flex flex-col items-center">
                            <div className="flex space-x-4">
                                <p className="question-section"> Estimating height from demispan </p>
                                <p className="question-section row-span-1"> Input the weight for the patient</p>    
                            </div>
                            <div className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <img src={require('../assets/heightpic.jpg')} />    
                                    <div className="mb-4 mt-2 flex flex-col items-center space-y-4">
                                        <TextField onChange={handleHeightChange} label={"Enter Demispan"} required />
                                        <TextField label={"Calculated Height in CM"} disabled readOnly value={heightValue} />
                                    </div>      
                                </div>
                                <div className="flex flex-col items-center h-full w-1/2">       
                                    <TextField onChange={handleWeightChange}  label="Enter Weight" />
                                    <div className="mt-2">
                                        <p>Has the patient lost any weight in the past year?</p>
                                        <div className="flex space-x-4 justify-center w-full">
                                            <Button css={activeButton(patientLost)} func={() => setPatientLost(true)} text ='Yes'/>
                                            <Button css={activeButton(!patientLost)} func={() => setPatientLost(false)} text='No'/>
                                        </div>
                                    {weightLoss(patientLost)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button func={() => createPayload()} extraCss='px-10' text='Submit'/>
            </div>
            </React.Fragment>)
        }else {
            return (
                <React.Fragment>
                    <p>Error</p>
                </React.Fragment>
            )
        }
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
    

    return(
    <div className="flex flex-col items-center bg-white w-full">
        <p className="text-2xl font-semibold pb-4">Admission/Discharge</p>
        {displayDecider()}
    </div>)
}