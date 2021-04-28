//beginning of to list
let sectionOne = document.getElementsByClassName("section-one")[0];
let todoText = document.getElementById("todo-text");
console.log(todoText);
let addTodo = document.getElementById("add-todo");
let allListContainer = document.getElementsByClassName("all-list-container")[0];
let addDate = document.getElementById("add-date");
let addTime = document.getElementById("add-time");

let todoContainer = document.createElement("ul");
todoContainer.classList.add("todo-list-container");

let cancelContainer = document.createElement("ul");
let dateContainer = document.createElement("ul");
let timeContainer = document.createElement("ul");

addTodo.addEventListener("click", function(){
    if (todoText.value !== "" && addDate.value !== "" && addTime.value !== "") {
            let todoList = document.createElement("li");
            todoList.innerText = todoText.value;
            todoList.classList.add("todo-list")
            todoContainer.appendChild(todoList);
            allListContainer.appendChild(todoContainer);
            todoText.value = "";
            
            let dateList = document.createElement("li");
            dateList.innerText = addDate.value;
            dateList.classList.add("add-date")
            dateContainer.appendChild(dateList);
            allListContainer.appendChild(dateContainer);
            addDate.value = "";
        
            let timeList = document.createElement("li");
            timeList.innerText = addTime.value;
            timeList.classList.add("add-date")
            timeContainer.appendChild(timeList);
            allListContainer.appendChild(timeContainer);
            addTime.value = "";
        
            let cancelList = document.createElement("li");
            let cancelListValue = document.createTextNode("*");
            cancelList.appendChild(cancelListValue);
            cancelList.classList.add("cancel-todo")
            cancelContainer.appendChild(cancelList);
            cancelContainer.style.cursor = "pointer";
            allListContainer.appendChild(cancelContainer);
        
            cancelList.addEventListener("click", function(){
                todoList.style.textDecoration = "line-through";
                dateList.style.textDecoration = "line-through";
                timeList.style.textDecoration = "line-through";
            })
    
    }else{
        alert("input fields must not be empty!")
    }
  
})
