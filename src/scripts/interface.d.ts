export interface ITask {
  id: number;
  detail: string;
  status: string;
  label: (string |undefined)[];
  date: number | string;
}

