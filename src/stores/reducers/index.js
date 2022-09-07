import { barthelCounter, barthelState, patientHeightState, formState, barthelArray} from "./reducers";
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    barthelCounter: barthelCounter,
    barthelState: barthelState,
    patientHeightState: patientHeightState,
    formState: formState,
    barthelArray: barthelArray
})

export default allReducers;