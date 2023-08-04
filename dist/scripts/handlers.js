const submitForm = document.getElementById("submitForm");
const color = document.querySelectorAll("input[type=checkbox]");
const time = document.getElementById("time");
const state = document.getElementById("status");
const description = document.getElementById("description");
export const openModalHandler = () => {
    submitForm === null || submitForm === void 0 ? void 0 : submitForm.classList.remove("hidden");
    submitForm === null || submitForm === void 0 ? void 0 : submitForm.classList.add("flex");
};
export const closeModalHandler = () => {
    submitForm === null || submitForm === void 0 ? void 0 : submitForm.classList.remove("flex");
    submitForm === null || submitForm === void 0 ? void 0 : submitForm.classList.add("hidden");
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
    const date = time.value;
    const id = Date.now();
    const newTask = { id, detail, status, label, date };
    closeModalHandler();
    return newTask;
};
