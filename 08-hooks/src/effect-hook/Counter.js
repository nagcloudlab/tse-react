
import React, { useState, useEffect } from 'react'

export default function () {
    console.log("Counter :: render")
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Anonymous")
    useEffect(() => {
        console.log("Counter :: useEffect")
        document.title = `Counter :: ${count}`
        return () => {
            console.log("Counter :: unmount")
        }
    }, [count])
    function increment() {
        setCount(count + 1)
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
                    <button onClick={e => setName("Nag")} type='button' className='btn btn-primary'>
                        Change Name
                    </button>
                    <span className='ml-auto display-4'>{name}</span>
                </div>
            </div>
        </div >
    )
}
