import React from 'react';

class App extends React.Component{

  constructor(props){
    super()
    console.log("App - constructor")
    console.log(props)
    this.state={
      message:"welcome to react.js"
    }
  }

  changeMessage(e,message){
    this.setState({message})
  }
  
  render(){
    console.log("App - render")
    console.log(this.props)
    // this.props.subject = "angular.js"  // Error: Cannot assign to read only property 'subject' of object '#<Object>'
    const {subject, company} = this.props // de-structuring
    const {message} = this.state // de-structuring
    return (
      <div className="container">
        
        <h1>{subject} in <small>{company}</small></h1>
        <hr/>

        <div className='alert alert-info'>
          <h3>{message}</h3>
        </div>

        <hr/>
        
        <div className='d-flex justify-content-around'>
          <button className="btn btn-primary" onClick={e=>this.changeMessage(e,"good morning")}>GM</button> 
          <button className="btn btn-primary" onClick={e=>this.changeMessage(e,"good noon")}>GN</button>
        </div>

        <hr/>


      </div>
    )
  }
}

export default App;