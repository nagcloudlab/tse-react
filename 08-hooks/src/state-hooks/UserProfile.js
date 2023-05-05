
import React, { useState } from 'react'

export default function () {

    const [user, setUser] = useState({ name: "Nag", age: 39, address: "chennai" })

    function incrementAge() {
        // user.age = user.age + 1 // error : trigger component re-render
        // setUser({ age: user.age + 1 }) // error : not merge
        setUser({ ...user, age: user.age + 1 })
    }

    return (
        <div className='card'>
            <div className='card-header'>UserProfile</div>
            <div className='card-body'>

                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{user.age}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{user.address}</td>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <button onClick={incrementAge} className='btn btn-dark'>increment age +1</button>

            </div>
        </div >
    )
}
