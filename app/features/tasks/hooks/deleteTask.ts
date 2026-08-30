import { mockTasks } from "../mocks/task";

export const deleteTask = async (id: string): Promise<boolean> => {
  const index = mockTasks.findIndex((task) => task.id === Number(id));

  if (index !== -1) {
    mockTasks.splice(index, 1);
    return true;
  }

  return false;
};
