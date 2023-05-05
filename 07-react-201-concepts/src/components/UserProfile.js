import React, { Component } from 'react'

export default class UserProfile extends Component {
    render() {
        let { user } = this.props;
        return (
            <div className='card'>
                <div className='card-header'>User Profile</div>
                <div className='card-body'>
                    <h5 className='card-title'>User : = {user.name.toUpperCase()}</h5>
                </div>
            </div>
        )
    }
}
