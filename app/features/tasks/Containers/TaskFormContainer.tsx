"use client"

import Link from "next/link";
import TaskForm from "../components/TaskForm";
import styles from "../styles/TaskForm.module.css";
import { useState } from "react";
import type { Priority, TaskFormData } from "@/app/types/task";

export default function TaskFormContainer() {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target; // 入力された要素から name と value を取得
    setFormData((prev) => ({
      ...prev, // 現在の form の内容を ...prev で残す
      [name]: name === "priority" ? (value as Priority) : value, // [name] に入力された value を上書きする
      // priority の場合だけ Priority 型として扱っている
    }));
  };

  return (
    <div className={styles.container}>
      <h1>新規タスク作成</h1>
      <TaskForm onChange={handleChange} formData={formData} />

      <div className={styles.cancelContainer}>
        <Link href="/tasks" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}
