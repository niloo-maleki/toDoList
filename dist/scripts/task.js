import { states } from "../assets/svg/utilities/constants.js";
export class Task {
    constructor(data) {
        this.tasks = data || [];
    }
    addRow(task) {
        const tbody = document.getElementById("tbody");
        const row = `
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex gap-2 items-center">
        <label
        style="background-color:${task.label}"
        class="border border-gray-800 rounded-full w-4 h-4"></label>
        <p class="text-gray-900 whitespace-no-wrap">
        ${task.detail}
        </p>
      </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">${task.date}</p>
    </td>  
    <td class="border-b border-gray-200 bg-white text-sm">
    <select class="status border-gray-200 px-5 py-3b bg-white">
     ${states.map((item) => `<option value=${item} ${item === task.status ? "selected" : ""}>${item}</option>`)}
      </select>
    </td>
    <td class="border-b border-gray-200 bg-white text-sm"><button
    class="delete"><svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M22.1906 10.6512C22.1906 10.7418 21.48 19.7295 21.0741 23.5121C20.82 25.8333 19.3235 27.2413 17.0789 27.2813C15.3542 27.3199 13.6659 27.3333 12.0048 27.3333C10.2412 27.3333 8.51655 27.3199 6.84246 27.2813C4.67302 27.2293 3.17529 25.7933 2.9341 23.5121C2.51655 19.7162 1.8189 10.7418 1.80594 10.6512C1.79297 10.3779 1.88115 10.1179 2.0601 9.9072C2.23645 9.71254 2.49061 9.59521 2.75774 9.59521H21.2518C21.5176 9.59521 21.7588 9.71254 21.9494 9.9072C22.1271 10.1179 22.2166 10.3779 22.1906 10.6512Z" fill="#FF0000"/>
    <path d="M24 5.96898C24 5.421 23.5682 4.99169 23.0495 4.99169H19.1619C18.3709 4.99169 17.6836 4.42904 17.5072 3.63573L17.2894 2.66377C16.9847 1.48914 15.933 0.666504 14.753 0.666504H9.24833C8.05533 0.666504 7.01405 1.48914 6.69764 2.72776L6.49406 3.63707C6.3164 4.42904 5.62913 4.99169 4.83942 4.99169H0.951805C0.431813 4.99169 0 5.421 0 5.96898V6.47563C0 7.01028 0.431813 7.45293 0.951805 7.45293H23.0495C23.5682 7.45293 24 7.01028 24 6.47563V5.96898Z" fill="#FF0000"/>
    </svg>
    </button></td>
  `;
        const newRow = tbody.insertRow();
        newRow.innerHTML = row;
        newRow.getElementsByClassName("delete")[0].addEventListener("click", () => {
            this.delete(task.id, newRow);
        });
    }
    render() {
        this.tasks.map((task) => {
            this.addRow(task);
        });
    }
    delete(id, element) {
        var _a;
        (_a = element.closest("tr")) === null || _a === void 0 ? void 0 : _a.remove();
        this.tasks = this.tasks.filter((task) => id !== task.id);
    }
    add(task) {
        this.addRow(task);
    }
}
