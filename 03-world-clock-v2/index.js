


// using DOM API
const clock1 = document.querySelector('#clock-1');
const clock2 = document.querySelector('#clock-2');
const clock3 = document.querySelector('#clock-3');


// clock component class
function Clock(props) {
    let {timeZone} = props;
    this.render = function() {
        return `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <h5 class="card-title">Time</h5>
                <p class="card-text">${new Date().toLocaleTimeString('en-US', {timeZone})}</p>
            </div>
        </div>
        `
    }
}


setInterval(() => { 
clock1.innerHTML = new Clock({timeZone: 'Asia/Kolkata'}).render();
clock2.innerHTML = new Clock({timeZone: 'Asia/Dubai'}).render();
clock3.innerHTML = new Clock({timeZone: 'America/New_York'}).render();
 }, 1000)

 