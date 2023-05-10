
/*

votingLines: {
    'item1': {
        likes: 0,
        dislikes: 0
    },
    'item2': {
        likes: 0,
        dislikes: 0
    }
}

*/

// imp-note : reducer should be a pure function (no side effects) i.e. it should not modify the state directly
export function votingLinesReducer(state = {}, action) {
    let { type, payload } = action
    let { itemName } = payload || {}
    switch (type) {
        case 'LIKE': {
            let votingLine = state[itemName]
            if (votingLine) {
                votingLine = { ...votingLine, likes: votingLine.likes + 1 }
            } else {
                votingLine = { likes: 1, dislikes: 0 }
            }
            return { ...state, [itemName]: votingLine }
        }
        case 'DISLIKE': {
            let votingLine = state[itemName]
            if (votingLine) {
                votingLine = { ...votingLine, dislikes: votingLine.dislikes + 1 }
            } else {
                votingLine = { likes: 0, dislikes: 1 }
            }
            return { ...state, [itemName]: votingLine }
        }
        default:
            return state
    }

}