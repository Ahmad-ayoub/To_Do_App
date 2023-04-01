let toDoList = [];
let newTask = document.getElementById("textBox");
let buttonStart = document.getElementById("addInput");
let newTaskSet = document.getElementById("setToDo");
let selectTask = document.getElementById("taskList");
let splitButton = document.getElementById("taskCheck");
let crossTask = document.getElementById("taskCheck");
let deleteIcon = document.getElementById("deleteIcon");
let tasksContainer = document.getElementById("tasksContainer");

taskForm.addEventListener("submit", startApp);

let newValue = "";

function startApp(event) {
  event.preventDefault();
  getInput();
  addTask();
  newTask.value = " ";
  adjustTaskBtn();
}

function getInput() {
  newValue = newTask.value;
  toDoList.push(newValue);
}

function addTask() {
  let taskContainer = document.createElement("div");
  let taskCSS = taskContainer.classList.add("task");

  let taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.addEventListener("change", function () {
    crossInput(taskCheck, taskLabel, deleteIcon);
  });

  let taskLabel = document.createElement("label");
  taskLabel.textContent = `${newValue}`;

  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-xmark";
  deleteIcon.style.display = "none";
  deleteIcon.style.marginLeft = "6vh";
  deleteIcon.addEventListener("click", function () {
    deleteInput(taskContainer);
  });

  taskContainer.appendChild(taskCheck);
  taskContainer.appendChild(taskLabel);
  taskContainer.appendChild(deleteIcon);

  tasksContainer.appendChild(taskContainer);
  adjustTaskBtn(taskContainer, taskCheck, taskLabel, deleteIcon, taskCSS);
}

function adjustTaskBtn(taskContainer) {
  if (newValue.length > 5) {
    let newWidth = 8 + newValue.length * 0.2;
    taskContainer.style.width = newWidth + "%";
  }
}

function crossInput(taskCheck, taskLabel, deleteIcon) {
  if (taskCheck.checked) {
    taskLabel.classList.add("cross");
    deleteIcon.style.display = "inline";
  } else {
    taskLabel.classList.remove("cross");
    deleteIcon.style.display = "none";
  }
}

function deleteInput(tasksContainer) {
  tasksContainer.remove();
}
