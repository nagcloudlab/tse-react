import React, { Component } from 'react'
import C from './C'
import ThemeContext from './ThemeContext'

export default class B extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => {
                    return (
                        <div className={`card text-white bg-${theme}`}>
                            <div className='card-header'>B</div>
                            <div className='card-body'>
                                <C />
                            </div>
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}
