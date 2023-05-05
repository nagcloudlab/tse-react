
import React, { useState, useReducer } from 'react'

// imp-note : reducer must be pure function i.e must not not mutate state
// 
const counterReducer = (state, action) => {
    let { type, value = 1 } = action
    switch (action.type) {
        case 'INCREMENT':
            return state + value
        case 'DECREMENT':
            return state - value
        default:
            return state
    }
}


export default function () {
    const [count, dispatch] = useReducer(counterReducer, 100)
    return (
        <div className='card'>
            <div className='card-header'>Advanced Counter</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <button onClick={e => dispatch({ type: "INCREMENT" })} type='button' className='btn btn-primary'>
                        +1
                    </button>
                    <button onClick={e => dispatch({ type: "INCREMENT", value: 10 })} type='button' className='btn btn-primary'>
                        +10
                    </button>
                    <button onClick={e => dispatch({ type: "DECREMENT" })} type='button' className='btn btn-primary'>
                        -1
                    </button>
                    <button onClick={e => dispatch({ type: "DECREMENT", value: 10 })} type='button' className='btn btn-primary'>
                        -10
                    </button>
                    <span className='ml-auto display-4'>{count}</span>
                </div>
            </div>
        </div >
    )
}
