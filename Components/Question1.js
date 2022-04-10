import React, { useContext, useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';
import { HeightWeightContext } from '../contexts/HeightWeightContext';
import { PatientContext } from '../contexts/PatientContext';

function Weight(props) {

    const [patientData, setPatientData] = useContext(PatientContext);

    const [HWData, setHWData] = useContext(HeightWeightContext)

    const navigate = useNavigate();

    const [weightLoss, setWeightLoss] = useState();

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
            setWeightLoss(parseInt(value));    }

    useEffect(() => {
        setHWData(prevState => ({
            height: {
                // Height Variables
                ...prevState.height
            },
            weight: {
                weightloss: weightLoss,
            },
            general: {
                ...prevState.general
            }
        })
        )
    }, [weightLoss])

    return (
        <>
            <QuestionCard handleButtonSubmit={handleButtonSubmit} weightloss={weightLoss} />
        
        </>
    )
}

export default Weight;
