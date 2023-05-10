import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const dispatch = useDispatch()
    return (
        <div className='card'>
            <div className='card-header'>Counter</div>
            <div className='card-body'>

                <div className='d-flex justify-content-around'>
                    <button onClick={e => dispatch({ type: 'INCREMENT', payload: 10 })} className='btn btn-primary'>+10</button>
                    <button onClick={e => dispatch({ type: 'DECREMENT', payload: 10 })} className='btn btn-primary'>-10</button>
                    <button onClick={e => dispatch({ type: 'RESET' })} className='btn btn-primary'>Reset</button>
                </div>
                <hr />
            </div>
        </div>
    )
}
