
import React, { useRef, useState } from 'react'

export default function () {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef(count)
    const inputFieldRef = useRef(null)


    function increment() {
        prevCountRef.current = count
        setCount(count + 1)
    }
    return (
        <div className='card'>
            <div className='card-header'>Counter</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <button onClick={increment} type='button' className='btn btn-primary'>
                        +1
                    </button>
                    Prev Count :<span className='ml-auto display-4'>{prevCountRef.current}</span>
                    New Count :<span className='ml-auto display-4'>{count}</span>
                </div>
                <hr />

                <input type='text' className='form-control' ref={inputFieldRef} />
                <hr />
                <button onClick={e => inputFieldRef.current.focus()}>Focus Input</button>
                <button onClick={e => inputFieldRef.current.value = "deloitte"}>Load Text</button>
            </div>
        </div >
    )
}
