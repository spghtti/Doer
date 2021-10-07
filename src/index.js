import { createTask } from "./taskCreate";
import { getTask } from "./getTask";

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const form = document.getElementById("form");

const tasks = [];

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
form.addEventListener("submit", getTask);

export { tasks };
