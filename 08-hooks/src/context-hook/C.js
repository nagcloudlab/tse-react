import React, { Component } from 'react'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'


export default function C() {
    const user = React.useContext(UserContext)
    const theme = React.useContext(ThemeContext)
    return (
        <div className={`card text-white bg-${theme}`}>
            <div className='card-header'>C</div>
            <div className='card-body'>
                <div className='alert alert-info'>{user}</div>
            </div>
        </div>
    )
}
