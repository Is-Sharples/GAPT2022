export function increment () {
    return {
        type: 'increment'
    }
}

export function decrement () {
    return {
        type: 'decrement'
    }
}

export function activate () {
    return {
        type: 'activate'
    }
}

export function deactivate () {
    return {
        type: 'deactivate'
    }
}

export function setZero () {
    return {
        type: 'setZero'
    }
}

export function TestAction (payload) {
    return {
        type: 'addHeight',
        height: payload.height,
        weight: payload.weight,
        lostWeight: payload.patientLostWeight,
        dueExercise: payload.dueToExercise
    }
}

export function activeateForm () {
    return {
        type: 'activeateForm'
    }
}

export function deactivateForm() {
    return {
        type: 'deactivateForm'
    }
}

export function storeBarthelArray(payload) {
    return {
        type:'storeArray',
        array: payload
    }
}