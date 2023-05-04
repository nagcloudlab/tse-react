
import React, { Component } from 'react'

 class TopicList extends Component {
  renderTopics(topics) {
    return topics.map((topic,index) => {
      return (
        <li className='list-group-item' key={index}>
          {topic}
        </li>
      )
    })
  }  
  render() {
    let {title,value:topics} = this.props;
    return (
      <div className='card'>
        <div className='card-header'>Topics - {title}</div>
        <div className='card-body'>
            <ul className='list-group'>
                {this.renderTopics(topics)}
            </ul>
        </div>
      </div>
    )
  }
}

export default TopicList