import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
    const count = useSelector(state => state.count)
    return (
        <div className='card'>
            <div className='card-header'>Count Display</div>
            <div className='card-body'>
                <div className={`alert ${count < 0 ? 'alert-danger' : 'alert-success'}`}>
                    <h1>Count: {count}</h1>
                </div>
            </div>
        </div>
    )
}
