"use client";

import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "@/app/types/task";
import TaskCard from "../components/TaskCard";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>タスク一覧</h1>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
