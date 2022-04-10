import React, { useContext, useEffect, useState } from 'react';
import Question2Card from './Question2Card';
import { useNavigate } from 'react-router-dom';
import { HeightWeightContext } from '../contexts/HeightWeightContext';
import { PatientContext } from '../contexts/PatientContext';

function Weight(props) {

    const [patientData, setPatientData] = useContext(PatientContext);

    const [HWData, setHWData] = useContext(HeightWeightContext)

    const navigate = useNavigate();

    const [exercise, setExercise] = useState();

    const save = () => {
        /*navigate('/weight');*/
    }

    useEffect(() => {
        if (props.proceedFunc) {
            props.proceedFunc.current = save;
        }
    })

    const handleButtonSubmit = event => {
        const { value } = event.target;
            setExercise(parseInt(value));
    }

    useEffect(() => {
        setHWData(prevState => ({
            height: {
                // Height Variables
                ...prevState.height
            },
            weight: {
                exercise: exercise,
            },
            general: {
                ...prevState.general
            }
        })
        )
    }, [exercise])

    return (
        <>
            <Question2Card handleButtonSubmit={handleButtonSubmit} exercise={exercise} />
        </>
    )
}

export default Weight;
