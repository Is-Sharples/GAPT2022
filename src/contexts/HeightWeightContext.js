import React, { useState, createContext } from 'react';

export const HeightWeightContext = createContext();

export const HeightWeightProvider = (props) => {
    const [HWData, setHWData] = useState(
        {
            height: {
                // Height Variables
                demispan: '',
                height: ''
            },
            weight: {
                // Weight Variables
                weight: '',
                weightloss: '',
                exercise: '',
            },
            general: {
                title: ''
            }
        }
    );

    return (
        <HeightWeightContext.Provider value={[HWData, setHWData]}>
            {props.children}
        </HeightWeightContext.Provider>
    )
}