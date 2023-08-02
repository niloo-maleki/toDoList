import { mockTasks } from "../assets/svg/utilities/constants.js";
import {
  addNewTodoHandler,
  closeModalHandler,
  openModalHandler,
} from "./handlers.js";
import { ITask } from "./interface.js";
import { Task } from "./task.js";

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const addNewTaskBtn = document.getElementById("addNewTask");
  const deleteBtn = document.getElementsByClassName("delete");

  const list = new Task(mockTasks);
  list.render();

  Array.from(deleteBtn).forEach(element => {
    element?.addEventListener("click", () => {
      const rowId = element.getAttribute("data-id") ?? 0;
      list.delete(+rowId,element);
    });
  });
  openModalBtn?.addEventListener("click", () => {
    openModalHandler();
  });

  closeModalBtn?.addEventListener("click", () => {
    closeModalHandler();
  });

  addNewTaskBtn?.addEventListener("click", () => {
   const newTask = addNewTodoHandler()
   const list = new Task(newTask);
   list.render();
  });
});
