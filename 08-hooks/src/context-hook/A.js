import React, { Component } from 'react'
import B from './B'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'



export default function A() {
    return (
        <div className='card'>
            <div className='card-header'>A</div>
            <div className='card-body'>
                <ThemeContext.Provider value={"warning"}>
                    <UserContext.Provider value={"Nag"}>
                        <B />
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        </div>
    )
}
