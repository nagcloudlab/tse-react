import React, { Component } from 'react'
import Items from './Items'

export default class List extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>List</div>
                <div className='card-body'>
                    <ul className='list-group'>
                        <Items />
                    </ul>
                </div>
            </div>
        )
    }
}
