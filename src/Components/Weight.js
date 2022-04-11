import React, { useContext, useEffect, useState } from 'react';
import WeightCard from './WeightCard';
import { HeightWeightContext } from '../contexts/HeightWeightContext';
import { PatientContext } from '../contexts/PatientContext';

function Weight(props) {

    const [patientData, setPatientData] = useContext(PatientContext);

    const [HWData, setHWData] = useContext(HeightWeightContext)

    const [weight, setWeight] = useState();

    const handleWeightChange = event => {
        let value = parseFloat(event.target.value);
        if (value) {
            setWeight(parseFloat(value));
        }
    }

    useEffect(() => {
        setHWData(prevState => ({
            height: {
                // Height Variables
                ...prevState.height
            },
            weight: {
                weight: weight,
            },
            general: {
                ...prevState.general
            }
        })
        )
    }, [weight])

    return (
        <>
            <WeightCard handleChange={handleWeightChange} weight={weight} />
        </>
    )
}

export default Weight;