import React, { Component } from 'react'
import { withCard } from './withCard'

class TopicList extends Component {
    handleTopicSelect(selectedTopic) {
        this.props.onTopicSelect(selectedTopic)
    }
    render() {
        let { value: topics, selectedTopic } = this.props
        return (
            // <div className='card'>
            //     <div className='card-header'>TopicList</div>
            //     <div className='card-body'>
            <ul className='list-group'>
                {
                    topics.map((topic, index) => (
                        <li className={topic === selectedTopic ? 'list-group-item bg-danger' : 'list-group-item'}
                            onClick={e => this.handleTopicSelect(topic)}
                            style={{ cursor: "pointer" }} key={index}
                        >
                            {topic}
                        </li>
                    ))
                }
            </ul>
            // </div>
            // </div>
        )
    }
}

export default withCard(TopicList)