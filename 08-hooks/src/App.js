

import React from 'react'
import BasicCounter from './state-hooks/BasicCounter'
import UserProfile from './state-hooks/UserProfile'
import AdvancedCounter from './state-hooks/AdvancedCounter'

import A from './context-hook/A'
import Counter from './effect-hook/Counter'

export default function App() {
  return (
    <div className='container'>
      <div className="display-1">Hooks</div>
      <hr />

      {/* <BasicCounter /> */}
      {/* <UserProfile /> */}
      {/* <AdvancedCounter /> */}
      {/* <A /> */}
      {/* <Counter /> */}
      <Counter />

    </div>
  )
}
