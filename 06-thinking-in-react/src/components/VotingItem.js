import React, { Component } from 'react'

export default class VotingItem extends Component {
    handleUpVote = (e) => {
        let { value: item, onVote } = this.props
        onVote({ item, type: 'upvote' })
    }
    handleDownVote = (e, id) => {
        let { value: item, onVote } = this.props
        onVote({ item, type: 'downvote' })
    }
    render() {
        let { value, votes } = this.props
        return (
            <div className='card'>
                <div className={votes < 0 ? 'card-body bg-warning' : 'card-body'}>
                    <div className='d-flex justify-content-between'>
                        <div className='display-4'>{value}</div>
                        <div className='display-6 text-danger'>{votes}</div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <button onClick={e => this.handleUpVote(e)} className='btn btn-primary'>Vote</button>
                        <button onClick={e => this.handleDownVote(e)} className='btn btn-danger'>Unvote</button>
                    </div>
                </div>
            </div>
        )
    }
}
