import { ITask } from "../../../scripts/interface";

export const STATUS = ["toDo", "doing", "done"] as const;

export type Status = (typeof STATUS)[number];

export const COLORS = ["green", "blue", "red", "yellow"] as const;

export type labelColor = (typeof COLORS)[number];

export const mockTasks: ITask[] = [
  {
    id: 0,
    detail: "تسک رهنما کالج",
    status: "toDo",
    label: ["red", "yellow"],
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
