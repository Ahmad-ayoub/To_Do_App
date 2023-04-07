let toDoList = [];
let newTask = document.getElementById("textBox");
let buttonStart = document.getElementById("addInput");
let tasksContainer = document.getElementById("tasksContainer");

taskForm.addEventListener("submit", submitTask);

let newValue = "";

function submitTask(event) {
  event.preventDefault();
  getInput();
  createTaskElement();
  newTask.value = "";
}

function getInput() {
  newValue = newTask.value;
  toDoList.push(newValue);
}

function createTaskElement() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task");

  const taskLabel = document.createElement("label");
  taskLabel.textContent = `${newValue}`;

  const deleteIcon = createDeleteButton(taskContainer);

  const taskCheck = createTaskCheck(taskLabel, deleteIcon);

  taskContainer.appendChild(taskCheck);
  taskContainer.appendChild(taskLabel);
  taskContainer.appendChild(deleteIcon);

  tasksContainer.appendChild(taskContainer);
  adjustTaskBtn(taskContainer);
}

function adjustTaskBtn(taskContainer) {
  if (newValue.length > 5) {
    let newWidth = 8 + newValue.length * 0.2;
    taskContainer.style.width = `${newWidth}%`;
  }
}

function crossOutTask(taskCheck, taskLabel, deleteIcon) {
  if (taskCheck.checked) {
    taskLabel.classList.add("cross");
    deleteIcon.style.display = "inline";
  } else {
    taskLabel.classList.remove("cross");
    deleteIcon.style.display = "none";
  }
}

function deleteTask(tasksContainer) {
  tasksContainer.remove();
}

function createDeleteButton(taskContainer) {
  deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-xmark";
  deleteIcon.style.display = "none";
  deleteIcon.style.marginLeft = "6vh";
  deleteIcon.addEventListener("click", function () {
    deleteTask(taskContainer);
  });

  return deleteIcon;
}

function createTaskCheck(taskLabel, deleteIcon) {
  taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.addEventListener("change", function () {
    crossOutTask(taskCheck, taskLabel, deleteIcon);
  });

  return taskCheck;
}
