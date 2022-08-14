import React, { useState } from "react";
import { questions } from "./constants";
import '../styles/Barthel.css';
import { useDispatch } from "react-redux/es/exports";
import { actions } from "../../stores/actions";

export default function BarthelQuestions(props) {
    const dispatch = useDispatch();
    const[questionNumber, setQuestionNumber] = useState(0);
    
    const handleClick = () => {
        if(questionNumber < questions.length-1){
            setQuestionNumber(questionNumber + 1)
            dispatch(actions.increment())
        }else if (questionNumber < questions.length){
            dispatch(actions.increment())
        }
    }

    return(<div className="flex flex-col items-center bg-white w-full">
        <p className="text-2xl font-semibold pb-4">Admission/Discharge</p>

        <div className="flex flex-col items-center ">
            <p className='question-section'>{questions[questionNumber].questionText}</p>
            {
                questions[questionNumber].answerOptions.map((ans)=> (
                    <button key={ans.index} onClick={() => handleClick()} className='button '>{ans.answerText}</button>
                ))
            }
        </div>
    </div>)
}