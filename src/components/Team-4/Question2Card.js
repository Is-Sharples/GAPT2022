import React from 'react';
import Question from './Question';
// import './QuestionCard.css';
import '../styles/QuestionCard.css';

const question = "Was the weight lost due to exercise?";

const QuestionCard = ({handleButtonSubmit, exercise}) => (
    <div className="my-question-card mdc-card mdc-card--outlined">
       <Question handleButtonSubmit={handleButtonSubmit} title={question} value={exercise} name={"exercise"}/>
    </div>
)

export default QuestionCard;