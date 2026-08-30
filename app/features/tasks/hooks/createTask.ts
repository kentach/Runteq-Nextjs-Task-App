import type { TaskFormData, Task } from "@/app/types/task";
import { mockTasks } from "../mocks/task";

export const createTask = async (formData: TaskFormData): Promise<Task> => {
  const newTask: Task = {
    ...formData,
    // formDataは以下以外のtitle, descriptionなどが格納されている、入力されたデータ
    id: mockTasks.length + 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: false,
  };
  mockTasks.push(newTask);
  return newTask;
};
