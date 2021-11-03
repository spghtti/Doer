import { LibraryTemplatePlugin } from "webpack";
import { refresh } from "./completed.js";
import { tasks, projects } from "./index.js";
import { refreshProjects } from "./updateProjects";

// Updates project in sidebar
function updateProjects(newProject) {
  projects.push(newProject);

  const projectList = document.getElementById("projects");

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");

  div.className = "inline-project";

  input.type = "checkbox";
  input.className = "project";
  input.id = `project-${newProject}`;

  input.addEventListener("click", completeProject);

  label.htmlFor = `project-${newProject}`;
  label.type = "textarea";

  button.className = "project-button";
  button.innerHTML = `${newProject}`;

  projectList.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
  label.appendChild(button);
}

// Grabs project name from modal
function getProject(event) {
  event.preventDefault();
  const newProject = document.getElementsByName("project")[0].value;

  updateProjects(newProject);
  console.log(newProject);
  console.log(projects);
}

// Deletes project
function completeProject() {
  const projectList = document.querySelectorAll(".project");

  console.table(projectList.length);

  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].checked) {
      const projectName = projectList[i].id.slice(8);
      findAndDelete(projectName);
      projects.splice(i, 1);
      break;
    }
  }
  refresh();
  refreshProjects();
}

function findAndDelete(project) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].project === project) {
      tasks.splice(i, 1);
    }
  }
}

export { getProject, completeProject };
