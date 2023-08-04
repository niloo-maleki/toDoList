import { mockTasks } from "../assets/svg/utilities/constants.js";
import {
  addNewTodoHandler,
  closeModalHandler,
  openModalHandler,
  selectedColorHandler,
} from "./handlers.js";
import { Task } from "./task.js";

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const submitForm = document.getElementById("submitForm");

  const list = new Task(mockTasks);
  list.render();

  submitForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = addNewTodoHandler();
    list.add(newTask);
  });

  openModalBtn?.addEventListener("click",openModalHandler);

  closeModalBtn?.addEventListener("click",closeModalHandler);

});
