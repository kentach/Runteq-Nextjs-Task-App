import Link from "next/link";
import type { Task } from "@/app/types/task";
import styles from "../styles/TaskCard.module.css";
import { getStatusLabel } from "../utils/status-label";
import { getPriorityClass } from "../utils/priority";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className={styles.taskCard}>
      <Link className={styles.detailLink} href={`/tasks/${task.id}`}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      <p
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        {getStatusLabel(task.status)}
      </p>
      <p
        className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}
      >
        {task.priority}
      </p>
      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
}
