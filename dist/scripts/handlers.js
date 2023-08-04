const modalAddTodo = document.getElementById("modalAddTodo");
const selectedColor = document.getElementById("selected_color");
const color = document.querySelectorAll("input[type=checkbox]");
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
export const selectedColorHandler = (() => {
    return Array.from(color).map((item) => {
        if (item.checked) {
            return item.id.replace("-checkbox", "");
        }
        return "";
    }).filter(item => item !== "");
});
export const addNewTodoHandler = () => {
    const detail = description.value;
    const status = state.value;
    const label = selectedColorHandler();
    console.log(label);
    const date = time.value;
    const id = Date.now();
    const newTask = { id, detail, status, label, date };
    closeModalHandler();
    return newTask;
};
