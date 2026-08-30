import { mockTasks } from "../mocks/task"
import type { Task } from "@/app/types/task"

export const getTasks = async (): Promise<Task[]> => {
  return [...mockTasks]
}