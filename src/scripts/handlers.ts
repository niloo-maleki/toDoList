import { states } from "../assets/svg/utilities/constants.js";
import { ITask } from "./interface.js";

const modalAddTodo = document.getElementById("modalAddTodo");
const tbody = document.getElementById("tbody") as HTMLTableElement;
const selectedColor = document.getElementById(
    "selected_color"
  ) as HTMLInputElement;
const time = document.getElementById("time") as HTMLInputElement;
const state = document.getElementById("status") as HTMLInputElement;
const description = document.getElementById("description") as HTMLInputElement;

export const openModalHandler = () => {
  modalAddTodo?.classList.remove("hidden");
  modalAddTodo?.classList.add("flex");
};

export const closeModalHandler = () => {
  modalAddTodo?.classList.remove("flex");
  modalAddTodo?.classList.add("hidden");
};


export const addNewTodoHandler = () => {
  const detail = description.value;
  const status = state.value;
  const label = selectedColor.value;
  const date = time.value;
  const newTask:ITask[] = [{detail, status, label, date }];
  closeModalHandler();
  return newTask
};
