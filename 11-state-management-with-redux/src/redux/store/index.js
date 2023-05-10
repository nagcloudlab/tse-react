

import { combineReducers, createStore } from 'redux';

import { countReducer } from '../reducers/count'
import { votingLinesReducer } from '../reducers/voting-lines';

const reducer = combineReducers({
    count: countReducer,
    votingLines: votingLinesReducer
});

const initialState = {
    count: 0,
    votingLines: {}
};


const store = createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;