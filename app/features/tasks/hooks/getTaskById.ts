import type { Task } from "@/app/types/task";
import { mockTasks } from "../mocks/task";

export const getTaskById = async (id?: string): Promise<Task | undefined> => {
  if (!id) return undefined;

  const task = mockTasks.find((task) => task.id === Number(id));
  return task;
};
