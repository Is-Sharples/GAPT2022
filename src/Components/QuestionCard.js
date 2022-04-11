import React from 'react';
import Question from './Question';
import './QuestionCard.css';

const question = "Has the patient lost any weight in the past year?";

const QuestionCard = ({handleButtonSubmit, weightloss}) => (
    <div className="my-question-card mdc-card mdc-card--outlined">
       <Question handleButtonSubmit={handleButtonSubmit} title={question} value={weightloss} name={"wtloss"}/>
    </div>
)

export default QuestionCard;