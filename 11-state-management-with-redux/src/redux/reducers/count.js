


export function countReducer(state = 0, action) {

    let { type, payload = 0 } = action
    switch (type) {
        case 'INCREMENT':
            return state + payload
        case 'DECREMENT':
            return state - payload
        case 'RESET':
            return 0
        default:
            return state
    }

}