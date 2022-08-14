import { barthelCounter, barthelState} from "./reducers";
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    barthelCounter: barthelCounter,
    barthelState: barthelState
})

export default allReducers;