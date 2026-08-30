"use client";

import { useEffect, useState } from "react";
import { getTaskById } from "../hooks/getTaskById";
import type { Task } from "@/app/types/task";
import { useParams } from "next/navigation";
import TaskDetail from "../components/TaskDetail";
import styles from "../styles/TaskDetail.module.css";

export default function TaskShowContainer() {
  const params = useParams<{ id?: string }>();
  const id = params.id; // paramsの中にidが入っているのでidを取り出す。
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchTask = async () => {
      const fetchedTask = await getTaskById(id);
      setTask(fetchedTask ?? null);
    };

    fetchTask();
  }, [id]);

  if (!task) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        読み込み中...
      </div>
    );
  }

  return (
    <div className={styles.taskDetailContainer}>
      <TaskDetail task={task} />
    </div>
  );
}
