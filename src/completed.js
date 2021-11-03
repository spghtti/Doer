import { tasks } from "./index.js";

// Refreshes task list
function refresh() {
  const allTasks = document.getElementById("taskList");

  while (allTasks.firstChild) {
    allTasks.removeChild(allTasks.lastChild);
  }

  console.log("Done");
  console.log("length:" + tasks.length);

  for (let i = 0; i < tasks.length; i++) {
    console.log("Flag");

    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const img = document.createElement("img");
    const date = document.createElement("div");

    div.className = "inline-task";

    input.type = "checkbox";
    input.className = "task";
    input.id = `task-${tasks[i].title}`;

    input.addEventListener("click", completeTask);

    label.htmlFor = `task-${tasks[i].title}`;
    label.type = "textarea";
    label.innerHTML = `${tasks[i].title} `;

    allTasks.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);

    if (tasks[i].priority) {
      img.className = "icon";
      img.src = "images/priority.png";
      div.appendChild(img);
    }

    if (tasks[i].dueDate !== "") {
      date.className = "date";
      date.innerHTML = tasks[i].dueDate;
      div.appendChild(date);
    }
  }
}

// Function to complete task
function completeTask() {
  const taskList = document.querySelectorAll(".task");

  console.table(taskList.length);

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].checked) {
      tasks.splice(i, 1);
    }
    console.log(tasks);

    setTimeout(refresh, 500);
  }
}

export { completeTask, refresh };
