let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class='delete'>X</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    
    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });
});