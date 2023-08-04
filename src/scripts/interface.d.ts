import { Status, labelColor } from "../assets/svg/utilities/constants";

export interface ITask {
  id: number;
  detail: string;
  status: Status;
  label: labelColor[];
  date: number | string;
}

