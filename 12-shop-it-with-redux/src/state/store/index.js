import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { cartReducer } from "../reducers/cart";
import { productsReducer } from "../reducers/products";
import { reviewsReducer } from "../reducers/reviews";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  reviews: reviewsReducer,
});

const initialState = {
  cart: {},
  products: [],
  reviews: {},
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, initialState, composedEnhancer);
export default store;
