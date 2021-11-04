import { getTask } from "./getTask";
import { getProject } from "./getProject";
import { updateProjects, showAll } from "./updateProjects";

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const projectTrigger = document.querySelector(".project-trigger");
const projectModal = document.querySelector(".project-modal");
const closeButton = document.querySelector(".close-button");
const projectCloseButton = document.querySelector(".project-close-button");
const form = document.getElementById("form");
const projectForm = document.getElementById("project-form");
const showAllButton = document.getElementById("show-all-button");

const tasks = [];
const projects = [];

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function toggleProjectModal() {
  projectModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

function projectWindowOnClick(event) {
  if (event.target === modal) {
    toggleProjectModal();
  }
}

trigger.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
form.addEventListener("submit", getTask);
form.addEventListener("submit", toggleModal);
showAllButton.addEventListener("click", showAll);

// window.addEventListener("click", toggleProjectModal);
projectCloseButton.addEventListener("click", toggleProjectModal);
projectTrigger.addEventListener("click", toggleProjectModal);
projectForm.addEventListener("submit", getProject);
projectForm.addEventListener("submit", toggleProjectModal);
projectForm.addEventListener("submit", updateProjects);

export { tasks, projects };
