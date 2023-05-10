import { combineReducers, createStore } from 'redux'
import { cartReducer } from '../reducers/cart'
import { productsReducer } from '../reducers/products'
import { reviewsReducer } from '../reducers/reviews'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    reviews: reviewsReducer
})
const initialState = {
    cart: {},
    products: [
        {
            id: 1,
            name: "Laptop",
            price: 2000,
            isAvailable: true,
            description: "Laptop description",
            image: "images/Laptop.png",
        },
        {
            id: 2,
            name: "Mobile",
            price: 1000,
            isAvailable: true,
            description: "Mobile description",
            image: "images/Mobile.png",
        },
    ],
    reviews: {}
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;