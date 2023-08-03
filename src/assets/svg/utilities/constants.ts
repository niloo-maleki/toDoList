import { ITask } from "../../../scripts/interface";

export const states: string[] = ["toDo", "doing", "done"];

export const labelColor = ["green", "blue", "red", "yellow"];

export const mockTasks: ITask[] = [
  {
    id: 0,
    detail: "تسک رهنما کالج",
    status: "toDo",
    label: ["red","yellow"],
    date: Date.now(),
  },
  {
    id: 1,
    detail: "کارهای بانکی",
    status: "doing",
    label: ["blue"],
    date: Date.now(),
  },
  {
    id: 2,
    detail: "دیدن ویدیو js",
    status: "doing",
    label: ["yellow"],
    date: Date.now(),
  },
];
