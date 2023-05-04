import React from "react";


class Alert extends React.Component {
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
}

export default Alert;