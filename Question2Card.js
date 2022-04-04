import React from 'react';
import Question from './Question';
import './QuestionCard.css';

const question = "Was the weight lost due to exercise?";

const QuestionCard = ({handleButtonSubmit, weightloss, exercise}) => (
    <div className="my-question-card mdc-card mdc-card--outlined">
       <Question handleButtonSubmit={handleButtonSubmit} title={question} value={weightloss} name={"wtloss"}/>
    </div>
)

export default QuestionCard;