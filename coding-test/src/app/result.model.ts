export interface TaskDTO {
  createdAt: string;
  description: string;
  dueDate: string;
  name: string;
  status: string;
}

export class Task implements TaskDTO {
  constructor(
    public createdAt: string,
    public description: string,
    public dueDate: string,
    public name: string,
    public status: string,
  ) {
    
  }
}