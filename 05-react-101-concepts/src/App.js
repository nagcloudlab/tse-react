import React from'react';
import Alert from './Alert';

class App extends React.Component{

  state={
    message:"greetings from App component"
  }

  constructor(props){
    super();
    console.log("App::constructor")
    // console.log(props)
  }

  changeMessage(e,message){
    // console.log(this)
    // console.log(e)
    // console.log(message)
    // this.state.message = message // Error - we cant mutate state directly
    this.setState({
      message
    }) // trigger diffing algorithm in react on virtual DOM
  }

  render(){
    console.log("App::render")
    // console.log(this.props)
    // this.props.topic = "angular.js" // Error - props are immutable
    let {topic,company} = this.props;
    let {message} = this.state;

    return (
      <div className='container'>
        <h1 className='display-1'>{topic} in {company}</h1>
        <hr/>
        <div className='d-flex justify-content-around'>
          <button className='btn btn-dark' onClick={e=>this.changeMessage(e,"good morning")}>GM</button>
          <button className='btn btn-dark' onClick={e=>this.changeMessage(e,"good noon")}>GN</button>
          <button className='btn btn-dark' onClick={e=>this.changeMessage(e,"good evening")}>GE</button>
        </div>
        <hr/>
        <Alert value={message}/>
      </div>
    )
  }

}

export default App;

