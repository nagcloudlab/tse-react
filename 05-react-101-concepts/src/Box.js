import React, { Component } from 'react'
import Veg from './Veg'

export default class Box extends Component {
    renderChildren(children) {
        return children.map((child, index) => {
            return (
                <li key={index} className='list-group-item'>
                    {child}
                </li>
            )
        })
    }
    render() {
        let { children } = this.props;
        return (
            <div className='card'>
                <div className='card-header'>Box</div>
                <div className='card-body'>
                    <ul className='list-group'>
                        {this.renderChildren(children)}
                    </ul>
                </div>
            </div>
        )
    }
}
