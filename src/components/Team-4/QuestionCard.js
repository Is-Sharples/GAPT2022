import React from 'react';
import Question from './Question';
// import './QuestionCard.css';
import '../styles/QuestionCard.css';

const firstQuestion = "Has the patient lost any weight in the past year?";
const secondQuestion = "Was the weight lost due to exercise?";

const QuestionCard = ({handleButtonSubmit, weightloss, exercise}) => (
    <div className="my-question-card mdc-card mdc-card--outlined">
       <Question handleButtonSubmit={handleButtonSubmit} title={firstQuestion} value={weightloss} name={"wtloss"}/>
       { weightloss ? <Question handleButtonSubmit={handleButtonSubmit} title={secondQuestion} value={exercise} name={"exercise"}/> : <></>}
    </div>
)

export default QuestionCard;