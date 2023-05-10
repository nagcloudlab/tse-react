

export function reviewsReducer(state = {}, action) {
    let { type, payload } = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { productId, reviews } = payload;
            return { ...state, [productId]: reviews }
        }
        case 'ADD_NEW_REVIEW': {
            let { productId, review } = payload;
            let reviews = state[productId] || [];
            reviews = [...reviews, review];
            return { ...state, [productId]: reviews }
        }
        default:
            return state;
    }

}