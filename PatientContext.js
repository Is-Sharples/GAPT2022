import React, { useState, createContext } from 'react';

export const PatientContext = createContext();

export const PatientProvider = (props) => {
    const [patientData, setPatientData] = useState(
        {
            patientId: '',
            patientName: '',
            visitId: ''
        }
    );

    return (
        <PatientContext.Provider value={[patientData, setPatientData]}>
            {props.children}
        </PatientContext.Provider>
    )
}