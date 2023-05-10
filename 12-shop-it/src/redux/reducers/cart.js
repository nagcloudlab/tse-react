
/*



{
    1: {id,name,price,quantity,message},
    2: {id,name,price,quantity,message},
}

*/

export function cartReducer(state = {}, action) {

    let { type, payload = {} } = action;

    switch (type) {
        case 'ADD_TO_CART':
            let { id, name, price, quantity = 1 } = payload;
            let existingCartLine = state[id]
            if (existingCartLine) {
                return { ...state, [id]: { ...existingCartLine, message: 'Item already exist in cart' } }
            } else {
                let cartLine = { id, name, price, quantity, message: '' }
                return { ...state, [id]: cartLine }
            }
        case 'CHANGE_CARTLINE_QTY': {
            let { id, qty = 1 } = payload;
            let cartLine = state[id];
            cartLine = { ...cartLine, quantity: cartLine.quantity + qty }
            if (cartLine.quantity !== 0) {
                return { ...state, [id]: cartLine }
            } else {
                let newState = { ...state }
                delete newState[id]
                return newState;
            }
        }
        default:
            return state;
    }

}