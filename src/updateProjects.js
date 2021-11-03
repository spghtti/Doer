import { projects } from "./index.js";
import { completeProject } from "./getProject";

// Populates modal dropdown with projects
function populateProject(value) {
  const projectList = document.getElementById("whichProject");
  const option = document.createElement("option");

  option.value = value;
  option.innerHTML = value;

  projectList.appendChild(option);
}

function updateProjects() {
  projects.forEach(populateProject);
}

function refreshProjects() {
  const allProjects = document.getElementById("projects");

  while (allProjects.firstChild) {
    allProjects.removeChild(allProjects.lastChild);
  }

  console.log("Done");
  console.log("length:" + projects.length);

  for (let i = 0; i < projects.length; i++) {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    div.className = "inline-project";

    input.type = "checkbox";
    input.className = "project";
    input.id = `project-${projects[i]}`;

    input.addEventListener("click", completeProject);

    label.htmlFor = `project-${projects[i]}`;
    label.type = "textarea";

    button.className = "project-button";
    button.innerHTML = `${projects[i]}`;

    allProjects.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);
    label.appendChild(button);
  }
}

export { updateProjects, refreshProjects };
