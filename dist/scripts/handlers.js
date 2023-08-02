const modalAddTodo = document.getElementById("modalAddTodo");
const tbody = document.getElementById("tbody");
const selectedColor = document.getElementById("selected_color");
const time = document.getElementById("time");
const state = document.getElementById("status");
const description = document.getElementById("description");
export const openModalHandler = () => {
    modalAddTodo === null || modalAddTodo === void 0 ? void 0 : modalAddTodo.classList.remove("hidden");
    modalAddTodo === null || modalAddTodo === void 0 ? void 0 : modalAddTodo.classList.add("flex");
};
export const closeModalHandler = () => {
    modalAddTodo === null || modalAddTodo === void 0 ? void 0 : modalAddTodo.classList.remove("flex");
    modalAddTodo === null || modalAddTodo === void 0 ? void 0 : modalAddTodo.classList.add("hidden");
};
export const addNewTodoHandler = () => {
    const detail = description.value;
    const status = state.value;
    const label = selectedColor.value;
    const date = time.value;
    const newTask = [{ detail, status, label, date }];
    closeModalHandler();
    return newTask;
};
