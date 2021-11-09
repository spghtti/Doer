import { tasks, projects } from "./index.js";
import { completeProject } from "./getProject";
import { listProjectTasks } from "./updateProjects";
import { completeTask } from "./completed";

//Checks if localStorage is available and usable
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const myProjects = JSON.parse(localStorage.getItem("storedProjects"));
const myTasks = JSON.parse(localStorage.getItem("storedTasks"));

function addProjectsToStorage() {
  localStorage.setItem("storedProjects", JSON.stringify(projects));
}

function addTasksToStorage() {
  localStorage.setItem("storedTasks", JSON.stringify(tasks));
}

//Adds all projects to DOM
function setProjects() {
  for (let i = 0; i < myProjects.length; i++) {
    projects.push(myProjects[i]);
    setProjectFromStorage(myProjects[i]);
  }
}

//Adds all tasks to DOM
function setTasks() {
  for (let i = 0; i < myTasks.length; i++) {
    tasks.push(myTasks[i]);
    setTasksFromStorage(myTasks[i]);
  }
}

//Adds single project to DOM from storage
function setProjectFromStorage(name) {
  const projectList = document.getElementById("projects");

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");

  div.className = "inline-project";

  input.type = "checkbox";
  input.className = "project";
  input.id = `project-${name}`;

  input.addEventListener("click", completeProject);

  label.htmlFor = `project-${name}`;
  label.type = "textarea";

  button.className = "project-button";
  button.innerHTML = `${name}`;
  button.value = `${name}`;

  button.addEventListener("click", listProjectTasks);

  projectList.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
  label.appendChild(button);
}

function setTasksFromStorage(task) {
  const taskList = document.getElementById("taskList");

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const img = document.createElement("img");
  const date = document.createElement("div");

  div.className = "inline-task";

  input.type = "checkbox";
  input.className = "task";
  input.id = `task-${task.title}`;

  input.addEventListener("click", completeTask);

  label.htmlFor = `task-${task.title}`;
  label.type = "textarea";
  label.innerHTML = `${task.title} `;

  taskList.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);

  if (task.priority) {
    img.className = "icon";
    img.src = "images/priority.png";
    div.appendChild(img);
  }

  if (task.dueDate !== "") {
    date.className = "date";
    date.innerHTML = task.dueDate;
    div.appendChild(date);
  }
}

// Loads tasks and projects from localStorage

export {
  addProjectsToStorage,
  addTasksToStorage,
  setProjects,
  storageAvailable,
  setTasks,
};
