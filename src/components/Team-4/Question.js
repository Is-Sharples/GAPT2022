import React from "react";
// import './Question.css';
import '../styles/Question.css';

const Question = ({handleButtonSubmit, title, value, name}) => (
    <div className="question">
       <p>{title}</p>
       <div className="btn-group">
            <button className= { `buttonhw ${(value === 1) ? 'active' : ''}  yes-no-btn `} name={name} onClick={handleButtonSubmit} value="1">Yes</button>
            <button className= { `buttonhw ${(value === 0) ? 'active' : ''} yes-no-btn `} name={name} onClick={handleButtonSubmit} value="0">No</button>
       </div>
    </div>
)

export default Question;