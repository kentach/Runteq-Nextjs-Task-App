"use client";

import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "@/app/types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";
import { updateTask } from "../hooks/updateTask";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleToggleStatus = async (taskId: Task["id"], newStatus: boolean) => {
    await updateTask(String(taskId), {
      status: newStatus,
    });

    await fetchTasks();
  };

  return (
    <div className={styles.container}>
      <h1>タスク一覧</h1>

      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div>
          <div>期限日</div>
        </div>

        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
