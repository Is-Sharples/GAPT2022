export const barthelCounter = (state = 0, action) => {
    switch (action.type) {
        case 'increment' : return state + 1; 
        case 'decrement' : return state - 1;
        case 'setZero': return state - state; 
        default: 
        return state;
    }
}

export const barthelState = (state = false, action) => {
    switch (action.type) {
        case 'activate': return state = true; 
        case 'deactivate': return state = false;
        default: return state;
    }
}
//add case to add weight and questions regarding weight
export const patientHeightState = (state = {age:31,gender:'male',height:0}, action) => {
    switch (action.type) {
        case 'addHeight': 
        
        return state = {
            ...state,
            height: action.height,
            weight: action.weight,
            lostWeight: action.lostWeight,
            dueExercise: action.dueExercise
        }
        default: return state;
    }
}



