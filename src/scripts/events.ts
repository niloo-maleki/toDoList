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
  const addNewTaskBtn = document.getElementById("addNewTask");

  const list = new Task(mockTasks);
  list.render();

  addNewTaskBtn?.addEventListener("click", () => {
    const newTask = addNewTodoHandler();
    list.add(newTask);
  });

  openModalBtn?.addEventListener("click", () => {
    openModalHandler();
  });

  closeModalBtn?.addEventListener("click", () => {
    closeModalHandler();
  });

});
