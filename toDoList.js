const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTask() {
  const listItem = document.createElement("li");
  listItem.textContent = taskInput.value;
  taskList.append(listItem);
  taskInput.value = "";
}

function checkTask(event) {
  if (event.target.tagName === "LI") {
    // Проверяем, что кликнули на элемент <li>
    event.target.classList.toggle("completed"); // Переключаем класс 'completed'
  }
}

addTaskBtn.addEventListener("click", createTask);
taskList.addEventListener("click", checkTask);
