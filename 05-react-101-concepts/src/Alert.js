import React from "react";


class Alert extends /*React.Component*/  React.PureComponent{
    constructor(props) {
        super(props);
        console.log("Alert::constructor");
    }
    render() {
        console.log("Alert::render");
        let { value } = this.props;
       
        return (
        <div className="alert alert-info">
            {value}
            <hr />
            {new Date().toLocaleTimeString()}
        </div>
        );
    }
    componentDidMount() {
        console.log("Alert::componentDidMount");
        // why we need to do this?
        // one time initialization
        this.interval=setInterval(() => { 
            console.log("tick")
            this.forceUpdate()
         }, 1000)

    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Alert::shouldComponentUpdate");
    //     if (nextProps.value!== this.props.value) {
    //         return true; // render
    //     }else{
    //         return false; // don't render
    //     }
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Alert::componentDidUpdate");
        // why we need to do this?
        // compare current props to previous props, if there is a change then only do some action
        //console.log(this.props)
        //console.log(prevProps)
    }
    componentWillUnmount() {
        console.log("Alert::componentWillUnmount");
        clearInterval(this.interval);
    }
}

export default Alert;