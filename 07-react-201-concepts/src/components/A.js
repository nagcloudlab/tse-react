import React, { Component } from 'react'
import B from './B'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

export default class A extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>A</div>
                <div className='card-body'>
                    <ThemeContext.Provider value={"dark"}>
                        <UserContext.Provider value={"Nag"}>
                            <B />
                        </UserContext.Provider>
                    </ThemeContext.Provider>
                    <ThemeContext.Provider value={"danger"}>
                        <UserContext.Provider value={"Foo"}>
                            <B />
                        </UserContext.Provider>
                    </ThemeContext.Provider>
                </div>
            </div>
        )
    }
}
