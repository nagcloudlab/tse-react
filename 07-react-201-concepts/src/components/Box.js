
import React from 'react'

export default function Box(props) {
    return (
        <div className='card'>
            <h1>Box</h1>
            <div className='card-body'>
                {props.renderItems()}
            </div>
        </div>
    )
}
