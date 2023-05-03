


// using DOM API
const clock1 = document.querySelector('#clock-1');
const clock2 = document.querySelector('#clock-2');
const clock3 = document.querySelector('#clock-3');


setInterval(() => { 

clock1.innerHTML=`
<div class="card">
    <div class="card-header">Asia/Kolkata</div>
    <div class="card-body">
        <h5 class="card-title">Time</h5>
        <p class="card-text">${new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Kolkata'})}</p>
    </div>
</div>
`

clock2.innerHTML=`
<div class="card">
    <div class="card-header">Asia/Dubai</div>
    <div class="card-body">
        <h5 class="card-title">Time</h5>
        <p class="card-text">${new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Dubai'})}</p>
    </div>
</div>
`

clock3.innerHTML=`
<div class="card">
    <div class="card-header">America/New_York</div>
    <div class="card-body">
        <h5 class="card-title">Time</h5>
        <p class="card-text">${new Date().toLocaleTimeString('en-US', {timeZone: 'America/New_York'})}</p>
    </div>
</div>
`
 }, 1000)