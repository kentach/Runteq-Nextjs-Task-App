import Link from "next/link";
import type { Task } from "@/app/types/task";
import styles from "../styles/TaskCard.module.css";
import { getStatusLabel } from "../utils/status-label";
import { getPriorityClass } from "../utils/priority";

type TaskCardProps = {
  task: Task;
  onToggleStatus: (taskId: number, newStatus: boolean) => void;
};

export default function TaskCard({ task, onToggleStatus }: TaskCardProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value === "true";

    onToggleStatus(task.id, newStatus);
  };

  return (
    <div className={styles.taskCard}>
      <Link className={styles.detailLink} href={`/tasks/${task.id}`}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>

      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        <option value="false">{getStatusLabel(false)}</option>{" "}
        {/* 未完了の場合のラベル */}
        <option value="true">{getStatusLabel(true)}</option>{" "}
        {/* 完了の場合のラベル */}
      </select>

      <span
        className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}
      >
        {task.priority}
      </span>

      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
}
