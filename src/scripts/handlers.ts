import { states } from "../assets/svg/utilities/constants.js";
import { ITask } from "./interface.js";

const modalAddTodo = document.getElementById("modalAddTodo");
const selectedColor = document.getElementById(
  "selected_color"
) as HTMLInputElement;
const color = document.querySelectorAll(
  "input[type=checkbox]"
) as NodeListOf<HTMLInputElement>;
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

export const selectedColorHandler = (()=>{
  return Array.from(color).map((item) => {
    if(item.checked){
      return item.id.replace("-checkbox", "");
    }
  }).filter(item => item !== undefined)
})

export const addNewTodoHandler = () => {
  const detail = description.value;
  const status = state.value;
  const label = selectedColorHandler()
  const date = time.value;
  const id = Date.now();
  const newTask: ITask = { id, detail, status, label, date };
  closeModalHandler();
  return newTask;
};
