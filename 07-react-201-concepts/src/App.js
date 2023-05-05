

import React, { Component } from 'react'
import A from './components/A'
import UserProfile from './components/UserProfile'
import ErrorBoundary from './components/ErrorBoundary'
import List from './components/List'
import Training from './components/Training'
import RenderProps from './components/RenderProps'

export default class extends Component {
  render() {
    return (
      <div className='container'>
        <div className='display-1'>react 201 concepts</div>
        <hr />

        {/* <A /> */}

        {
          /* <ErrorBoundary>
            <UserProfile user={{}} />
          </ErrorBoundary> */
        }

        {/* <List /> */}

        {/* <Training title="Training" /> */}

        <RenderProps />



      </div>
    )
  }
}
