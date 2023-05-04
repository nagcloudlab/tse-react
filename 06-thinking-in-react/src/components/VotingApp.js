import React, { Component } from 'react'
import VotingItem from './VotingItem'
import VotingTable from './VotingTable'

export default class VotingApp extends Component {

    state = {
        votingItems: [
            "react.js",
            "angular.js",
        ],
        votingLines: []
    }
    handleVote = (e) => {
        let { votingLines } = this.state
        let { item, type } = e
        let exitingVotingLine = votingLines.find(votingLine => votingLine.name === item)
        if (exitingVotingLine) {
            if (type === 'upvote') {
                exitingVotingLine.vote++
            } else {
                exitingVotingLine.unvote++
            }
        } else {
            if (type === 'upvote') {
                votingLines.push({ name: item, vote: 1, unvote: 0 })
            } else {
                votingLines.push({ name: item, vote: 0, unvote: 1 })
            }
        }
        this.setState({ votingLines })
    }


    renderVotingItems(votingItems) {
        return votingItems.map((votingItem, index) => {
            let votingLine = this.state.votingLines.find(votingLine => votingLine.name === votingItem) || { vote: 0, unvote: 0 }
            return (
                <VotingItem
                    key={index}
                    value={votingItem}
                    votes={votingLine.vote + (-votingLine.unvote)}
                    onVote={e => this.handleVote(e)} />
            )
        })
    }

    render() {
        let { votingLines, votingItems } = this.state
        return (
            <div className='card'>
                <div className='card-header'>
                    <h4>Voting App</h4>
                </div>
                <div className='card-body'>
                    <div className='d-flex flex-wrap justify-content-between'>
                        {this.renderVotingItems(votingItems)}
                    </div>
                    <hr />
                    <VotingTable value={votingLines} />
                </div>
            </div>
        )
    }
}
