import React, { Component } from 'react'
import TopicList from './TopicList'
import CommentList from './CommentList'
import { withCard } from './withCard'

class Training extends Component {
    state = {
        topics: [
            "react.js",
            "angular.js",
            "vue.js"
        ],
        allComments: {
            "react.js": [
                "react comment 1",
                "react comment 2"
            ],
            "angular.js": [
                "angular comment 1",
                "angular comment 2"
            ],
            "vue.js": [
                "vue comment 1",
            ]
        },
        selectedTopic: ""
    }

    handleTopicSelect(selectedTopic) {
        this.setState({ selectedTopic })
    }

    render() {
        let { topics, selectedTopic, allComments } = this.state
        const comments = allComments[selectedTopic] || []
        return (
            // <div className='card'>
            //     <div className='card-header'>Training</div>
            //     <div className='card-body'>
            <div className='row'>
                <div className='col-4'>
                    <TopicList
                        title="TopicList"
                        value={topics}
                        selectedTopic={selectedTopic}
                        onTopicSelect={selectedTopic => this.handleTopicSelect(selectedTopic)} />
                </div>
                <div className='col-8'>
                    <CommentList title="CommentList" value={comments} />
                </div>
            </div>
            // </div>
            // </div>
        )
    }
}

export default withCard(Training)