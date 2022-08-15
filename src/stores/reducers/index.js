import { barthelCounter, barthelState, patientHeightState} from "./reducers";
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    barthelCounter: barthelCounter,
    barthelState: barthelState,
    patientHeightState: patientHeightState
})

export default allReducers;