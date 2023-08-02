"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.firstPosition = exports.time = exports.selectedColor = exports.tbody = exports.openModalBtn = exports.lblColor = exports.modalAddTodo = void 0;
const constants_1 = require("../assets/svg/utilities/constants");
exports.modalAddTodo = document.getElementById("modalAddTodo");
exports.lblColor = document.getElementById("lblColor");
exports.openModalBtn = document.getElementById("openModal");
exports.tbody = document.getElementById("tbody");
exports.selectedColor = document.getElementById("selected_color");
exports.time = document.getElementById("time");
exports.firstPosition = document.getElementById("first_position");
exports.description = document.getElementById("description");
const changeColorHandler = () => {
    const selectedLabels = exports.selectedColor.value;
    return selectedLabels;
};
const changePositionHandler = () => {
    const currentPosition = exports.firstPosition.value;
    return currentPosition;
};
const changeTimeHandler = () => {
    const startDate = exports.time.value;
    return startDate;
};
const createNewTask = ({ detail, position, label, date }) => {
    const rowBody = `
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <div class="flex gap-2">
      <p class="text-gray-900 whitespace-no-wrap">
      ${detail}
      </p>
      <label
      id="lblColor"
      style="background-color:${label}"
      class="border border-gray-800 rounded-full w-4 h-4"
      ></label>
    </div>
  </td>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <p class="text-gray-900 whitespace-no-wrap">${date}</p>
  </td>

  <td class="border-b border-gray-200 bg-white text-sm">
  <select onchange="changePositionHandler()" class="border-gray-200 px-5 py-3b bg-white">
   ${constants_1.states.map((item) => `<option ${item === position ? "selected" : ""}>${item}</option>`)}
    </select>
  </td>
`;
    const newRow = exports.tbody.insertRow();
    newRow.innerHTML = rowBody;
};
const addNewTodoHandler = () => {
    const detail = exports.description.value;
    const position = changePositionHandler();
    const label = changeColorHandler();
    const date = changeTimeHandler();
    createNewTask({ detail, position, label, date });
    closeModalHandler();
};
