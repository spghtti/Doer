import { createTask } from "./taskCreate";
import { tasks } from "./index.js";
import { completeTask } from "./completed";

function updateTasks(newTask) {
  tasks.push(newTask);

  const taskList = document.getElementById("taskList");

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const img = document.createElement("img");
  const date = document.createElement("div");

  div.className = "inline-task";

  input.type = "checkbox";
  input.className = "task";
  input.id = `task-${newTask.title}`;

  input.addEventListener("click", completeTask);

  label.htmlFor = `task-${newTask.title}`;
  label.type = "textarea";
  label.innerHTML = `${newTask.title} `;

  taskList.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);

  if (newTask.priority) {
    img.className = "icon";
    img.src = "images/priority.png";
    div.appendChild(img);
  }

  if (newTask.dueDate !== "") {
    date.className = "date";
    date.innerHTML = newTask.dueDate;
    div.appendChild(date);
  }
}

function getTask(event) {
  event.preventDefault();
  const title = document.getElementsByName("task")[0].value;
  const dueDate = document.getElementsByName("due-date")[0].value;
  const priority = document.getElementById("priority");
  const project = document.getElementById("whichProject").value;
  let isPriority = true;
  if (priority.checked) {
    isPriority = true;
  } else {
    isPriority = false;
  }

  const newTask = createTask(title, dueDate, isPriority, project);
  updateTasks(newTask);

  console.log(`New task created: ${newTask.title}`);
  console.table(tasks);
}

export { getTask };
