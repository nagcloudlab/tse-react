
import React, { useState } from 'react'

export default function () {
    console.log("BasicCounter :: render")
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Nag")
    function increment() {
        // setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <div className='card'>
            <div className='card-header'>Basic Counter</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <button onClick={increment} type='button' className='btn btn-primary'>
                        +1
                    </button>
                    <span className='ml-auto display-4'>{count}</span>
                </div>
            </div>
        </div >
    )
}
