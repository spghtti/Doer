import { projects } from "./index.js";

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

export { updateProjects, populateProject };
