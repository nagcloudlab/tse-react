import React, { Component } from 'react'

export default class VotingTable extends Component {
    renderVotingLines(votingLines) {
        return votingLines.map((votingLine, index) => {
            let { name, vote, unvote } = votingLine
            return (
                <tr key={index} className={vote < unvote ? 'bg-warning' : ''}>
                    <td>{name}</td>
                    <td>{vote}</td>
                    <td>{unvote}</td>
                </tr>
            )
        })
    }
    render() {
        let { value: votingLines } = this.props
        return (
            <div className='card'>
                <div className='card-header'>Vote Result</div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Vote</th>
                                <th>Unvote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderVotingLines(votingLines)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
