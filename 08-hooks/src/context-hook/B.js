import React, { useContext } from 'react'
import C from './C'
import ThemeContext from './ThemeContext'


export default function B() {
    const theme = useContext(ThemeContext)
    return (
        <div className={`card text-white bg-${theme}`}>
            <div className='card-header'>B</div>
            <div className='card-body'>
                <C />
            </div>
        </div>
    )
}
