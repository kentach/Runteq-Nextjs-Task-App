
import { mockTasks } from "../mocks/task";
import type { TaskFormData, Task } from "@/app/types/task";

export const updateTask = async (
  id: string,
  taskData: Partial<TaskFormData>
): Promise<Task | null> => {

  const index = mockTasks.findIndex(
    (task) => task.id === Number(id)
  );

  if (index !== -1) {
    mockTasks[index] = {
      ...mockTasks[index],
      ...taskData,
      updatedAt: new Date().toISOString(),
    };

    return mockTasks[index];
  }

  return null;
};