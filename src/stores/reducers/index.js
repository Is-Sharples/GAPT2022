import { barthelCounter, barthelState, patientHeightState, formState} from "./reducers";
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    barthelCounter: barthelCounter,
    barthelState: barthelState,
    patientHeightState: patientHeightState,
    formState: formState
})

export default allReducers;