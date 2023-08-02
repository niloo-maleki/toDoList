"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("./script");
document.addEventListener("DOMContentLoaded", () => {
    script_1.openModalBtn === null || script_1.openModalBtn === void 0 ? void 0 : script_1.openModalBtn.addEventListener("click", () => {
        openModalHandler();
    });
    const openModalHandler = () => {
        script_1.modalAddTodo === null || script_1.modalAddTodo === void 0 ? void 0 : script_1.modalAddTodo.classList.remove("hidden");
        script_1.modalAddTodo === null || script_1.modalAddTodo === void 0 ? void 0 : script_1.modalAddTodo.classList.add("flex");
    };
    const closeModalHandler = () => {
        script_1.modalAddTodo === null || script_1.modalAddTodo === void 0 ? void 0 : script_1.modalAddTodo.classList.remove("flex");
        script_1.modalAddTodo === null || script_1.modalAddTodo === void 0 ? void 0 : script_1.modalAddTodo.classList.add("hidden");
    };
});
