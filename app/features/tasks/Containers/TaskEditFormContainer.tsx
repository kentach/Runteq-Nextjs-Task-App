"use client";

import Link from "next/link";
import TaskForm from "../components/TaskForm";
import styles from "../styles/TaskForm.module.css";
import { useEffect, useState } from "react";
import { getTaskById } from "../hooks/getTaskById";
import { useParams } from "next/navigation";
import type { Priority, TaskFormData } from "@/app/types/task";

export default function TaskEditFormContainer() {
  const params = useParams<{ id?: string }>();
  const id = params.id;
  const [formData, setFormData] = useState<TaskFormData | null>(null);

  // コンポーネントマウント時に、指定されたIDのタスクデータを取得
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTaskById(id); // すでにあるタスクからデータをfetchする処理

      if (task) {
        setFormData({
          title: task.title,
          description: task.description,
          priority: task.priority,
          dueDate: task.dueDate,
        });
      }
    };
    fetchTask();
  }, [id]);

  if (!formData) {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: name === "priority" ? (value as Priority) : value,
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <h1>タスク編集</h1>

      <TaskForm formData={formData} />

      <div className={styles.cancelContainer}>
        <Link href={`/tasks/${id}`} className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}
