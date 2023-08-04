import { Status, labelColor } from "../assets/svg/utilities/constants.js";
import { ITask } from "./interface.js";

const submitForm = document.getElementById("submitForm");
const color = document.querySelectorAll(
  "input[type=checkbox]"
) as NodeListOf<HTMLInputElement>;
const time = document.getElementById("time") as HTMLInputElement;
const state = document.getElementById("status") as HTMLInputElement;
const description = document.getElementById("description") as HTMLInputElement;

export const openModalHandler = () => {
  submitForm?.classList.remove("hidden");
  submitForm?.classList.add("flex");
};

export const closeModalHandler = () => {
  submitForm?.classList.remove("flex");
  submitForm?.classList.add("hidden");
};

export const selectedColorHandler = (()=>{
  return Array.from(color).map((item) => {
    if(item.checked){
      return item.id.replace("-checkbox", "");
    }
     return ""
  }).filter(item => item !== "")
})

export const addNewTodoHandler = () => {
  const detail = description.value;
  const status = state.value as Status;
  const label = selectedColorHandler() as labelColor[];
  const date = time.value;
  const id = Date.now();
  const newTask: ITask = { id, detail, status, label, date };
  closeModalHandler();
  return newTask;
};
