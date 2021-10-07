import { createTask } from "./taskCreate";
import { tasks } from "./index.js";

// Need to make this function update the task list

function updateTasks(newTask) {
  tasks.push(newTask);

  const taskList = document.getElementById("taskList");

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  div.className = "inline-task";

  input.type = "checkbox";
  input.className = "task";
  input.id = newTask.title;

  label.htmlFor = newTask.title;
  label.innerHTML = `Task: ${newTask.title}, Description: ${newTask.description}, Due: ${newTask.dueDate}`;

  taskList.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
}

function getTask(event) {
  event.preventDefault();
  const title = document.getElementsByName("task")[0].value;
  const description = document.getElementsByName("description")[0].value;
  const dueDate = document.getElementsByName("due-date")[0].value;
  const priority = document.getElementById("priority");
  let isPriority = true;
  if (priority.checked) {
    isPriority = true;
  } else {
    isPriority = false;
  }

  const newTask = createTask(title, description, dueDate, isPriority);
  updateTasks(newTask);

  console.log(newTask);
  console.log(tasks);
}

export { getTask };
