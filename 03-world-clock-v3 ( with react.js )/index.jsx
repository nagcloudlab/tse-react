


// using DOM API
const clock1 = document.querySelector('#clock-1');
const clock2 = document.querySelector('#clock-2');
const clock3 = document.querySelector('#clock-3');


// JSX => New Template syntax proposed by facebook for react.js
// JSX => javascript by babel tool ( transpiler )

// clock component class using react.js

function Clock(props) {
    let {timeZone} = props;
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <h5 className="card-title">Time</h5>
                <p className="card-text">{new Date().toLocaleTimeString('en-US', {timeZone})}</p>
            </div>
        </div>
    )
}

function Wall(props){
    return (
        <div className="row">
            <div className="col-4" id="clock-1">
                <Clock timeZone="Asia/Kolkata"/>
            </div>
            <div className="col-4" id="clock-2">
                <Clock timeZone="Asia/Dubai"/>
            </div>
            <div className="col-4" id="clock-3">
                <Clock timeZone="America/New_York"/>
            </div>
        </div>
    )
}


setInterval(() => { 
    ReactDOM.render(<Wall/>, document.getElementById('root'));
 }, 1000)

 