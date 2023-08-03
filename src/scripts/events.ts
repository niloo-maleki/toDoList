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
  const statusChange = document.getElementsByClassName(
    "status"
  ) as HTMLSelectElement;


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

  // Array.from(statusChange).forEach((element) => {
  //   element.addEventListener("click", () => {
  //     console.log("change", element?.value);
  //   });
  // });


});
