import { mockTasks } from "../assets/svg/utilities/constants.js";
import { addNewTodoHandler, closeModalHandler, openModalHandler, } from "./handlers.js";
import { Task } from "./task.js";
document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const addNewTaskBtn = document.getElementById("addNewTask");
    const deleteBtn = document.getElementsByClassName("delete");
    const list = new Task(mockTasks);
    list.render();
    Array.from(deleteBtn).forEach(element => {
        element === null || element === void 0 ? void 0 : element.addEventListener("click", () => {
            var _a;
            const rowId = (_a = element.getAttribute("data-id")) !== null && _a !== void 0 ? _a : 0;
            list.delete(+rowId, element);
        });
    });
    openModalBtn === null || openModalBtn === void 0 ? void 0 : openModalBtn.addEventListener("click", () => {
        openModalHandler();
    });
    closeModalBtn === null || closeModalBtn === void 0 ? void 0 : closeModalBtn.addEventListener("click", () => {
        closeModalHandler();
    });
    addNewTaskBtn === null || addNewTaskBtn === void 0 ? void 0 : addNewTaskBtn.addEventListener("click", () => {
        const newTask = addNewTodoHandler();
        const list = new Task(newTask);
        list.render();
    });
});
