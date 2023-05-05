import React, { Component } from 'react'
import { withCard } from './withCard';

class CommentList extends Component {
    render() {
        let { value: comments } = this.props;
        return (
            // <div className='card'>
            // <div className='card-header'>CommentList</div>
            // <div className='card-body'>
            <ul className='list-group'>
                {
                    comments.map((comment, index) => (
                        <li key={index} className='list-group-item'>{comment}</li>
                    ))
                }
            </ul>
            // </div>
            // </div>
        )
    }
}

export default withCard(CommentList);

// code tangling
// code scattering

