export const barthelCounter = (state = 0, action) => {
    switch (action.type) {
        case 'increment' : return state + 1; 
        case 'decrement' : return state - 1;
        case 'setZero': return state = 0; 
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



