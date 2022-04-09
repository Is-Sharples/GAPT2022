import React, { useContext, useEffect, useState } from 'react';
import HeightCard from './HeightCard';
import { useNavigate } from 'react-router-dom';
import { HeightWeightContext } from '../contexts/HeightWeightContext';
import { PatientContext } from '../contexts/PatientContext';

function Height(props) {

    const [patientData, setPatientData] = useContext(PatientContext);
    const [HWData, setHWData] = useContext(HeightWeightContext);
    const [title, setTitle] = React.useState(null);

    const navigate = useNavigate();
    const save_Value = props.saveValue;
    const inSummary = props.isInSummary;

    const [state, setState] = useState({
        demispan: '',
        height: '',
        age: patientData.age,
        gender: patientData.gender
    })

    useEffect(() => {
        if (props.proceedFunc) {
            props.proceedFunc.current = save;
        }
    })

    useEffect(() => {
        setHWData(prevState => ({
            height: {
                // Height Variables
                demispan: '',
                height: '',
            },
            weight: {
                // Weight Variables
                weight: '',
                weightloss: '',
                exercise: '',
            },
            general: {
                // General Variables
                age: '',
                sex: '',
                title: prevState.general.title
            }
        }))
    }, [])

    useEffect(() => {
        setHWData(prevState => ({
            height: {
                demispan: state.demispan,
                height: state.height,
            },
            weight: {
                ...prevState.weight
            },
            general: {
                ...prevState.general,
                title: prevState.general.title
            }
        })
        )
    }, [state])

    const handleHeightChange = (event) => {
        let result;
        let value = parseFloat(event.target.value);
        if (value) {
            result = 67.51 + (1.29 * value) - (0.12 * state.age);
            if (state.gender === 'Male') {
                result += 4.13;
            }
            setState({
                demispan: parseFloat(value),
                height: result.toFixed(2),
                age: state.age,
                gender: state.gender
            });
        } else {
            setState({ demispan: "", height: "", age: state.age })
        }
    }
   
    const save = () => {
        navigate('/weight');
    }

    if (inSummary === true) {

        return (
            <>
                <HeightCard handleChange={handleHeightChange} demispan={state.demispan} height={state.height} />
                <div className="Footer">
                    <button onClick={() =>  props.scloseModal()} > Save </button>
                </div>
            </>
        )

    } else {
        return (
            <>
                <HeightCard handleChange={handleHeightChange} demispan={state.demispan} height={state.height} />
            </>
        )
    }
}

export default Height;