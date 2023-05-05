import React, { Component } from 'react'
import UserContext from './UserContext'

export default class C extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>C</div>
                <div className='card-body'>
                    <UserContext.Consumer>
                        {user => {
                            return (
                                <div className='alert alert-info'>{user}</div>
                            )
                        }}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}
