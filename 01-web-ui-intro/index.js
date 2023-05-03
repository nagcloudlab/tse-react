console.log("index.js-")

//----------------------------------------------------------
// using DOM api
//----------------------------------------------------------
const alertBox=document.querySelector(".alert");
const greetBtn=document.querySelector(".btn-primary");
const hideBtn=document.querySelector(".btn-danger");
const showBtn=document.querySelector(".btn-success");
greetBtn.addEventListener("click",(e)=>{
    alertBox.innerText="good morning";
})
hideBtn.addEventListener("click",(e)=>{
    alertBox.style.display="none";
})
showBtn.addEventListener("click",(e)=>{
    alertBox.style.display="block";
})
//----------------------------------------------------------
// using DOM + timer API
//----------------------------------------------------------

const timeNowEle=document.querySelector("#time-now"); // search
setInterval(() => { 
    timeNowEle.innerText=new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Kolkata'});
 }, 1000)


//----------------------------------------------------------
// using DOM + XHR/Fetch API
//-----------------------------------------------------------

const top5TodosBtn=document.querySelector("#top-5-todos-btn");
const todosTableBody=document.querySelector("#todos");
top5TodosBtn.addEventListener("click",(e)=>{
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(response=>response.json())
    .then(todos=>{
        todos.map(todo=>{
            todosTableBody.innerHTML+=`
            <tr class=${todo.completed?'bg-success':''}>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>
            `
        })
    })
})


