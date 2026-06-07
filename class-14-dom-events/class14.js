
const btn = document.getElementById('btn');

const taskDetails = document.getElementById("write-up");

const taskList = document.getElementById("todo-list");


btn.addEventListener('click', () => {
    const list = document.createElement("li");

list.textContent = taskDetails.value;

taskList.appendChild(list);

taskDetails.value = "";

});