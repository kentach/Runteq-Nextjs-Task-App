export type Priority = "high" | "medium" | "low";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
  priority: Priority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}
