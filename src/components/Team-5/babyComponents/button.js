import React from "react";

export default function Button(props){
    
    let classes = "";
    let extra = '';
    if(props.css){
        classes = props.css
    }else {
        classes = 'text-white p-3 rounded-md bg-blue-950'
    }
    if(props.extraCss) {
        extra = props.extraCss
    }


    if(props.disabled) {
        classes = 'p-3 rounded-md bg-gray-500'
    }

    return (
        <button type='button' className={`${classes} ${extra}`} onClick={props.func} disabled={props.disabled}>
            {props.text}
        </button>
    )
}