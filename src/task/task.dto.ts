export type CreateTaskDTO = {
  // id?: number;
  name: string;
  // isActive: boolean;
  categoryId: number;
};

export type UpdateTaskDTO = {
  name: string;
  isActive: boolean;
};
