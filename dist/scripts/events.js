import { mockTasks } from "../assets/svg/utilities/constants.js";
import { addNewTodoHandler, closeModalHandler, openModalHandler, } from "./handlers.js";
import { Task } from "./task.js";
document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const addNewTaskBtn = document.getElementById("addNewTask");
    const list = new Task(mockTasks);
    list.render();
    addNewTaskBtn === null || addNewTaskBtn === void 0 ? void 0 : addNewTaskBtn.addEventListener("click", () => {
        const newTask = addNewTodoHandler();
        list.add(newTask);
    });
    openModalBtn === null || openModalBtn === void 0 ? void 0 : openModalBtn.addEventListener("click", () => {
        openModalHandler();
    });
    closeModalBtn === null || closeModalBtn === void 0 ? void 0 : closeModalBtn.addEventListener("click", () => {
        closeModalHandler();
    });
});
