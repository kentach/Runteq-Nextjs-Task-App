import Link from "next/link";
import styles from "../styles/taskDetail.module.css";
import type { Task } from "@/app/types/task";
import { getPriorityClass } from "../utils/priority";
import { getStatusLabel } from "../utils/status-label";

type TaskDetailProps = {
  task: Task;
};

export default function TaskDetail({ task }: TaskDetailProps) {
  return (
    <div className={styles.container}>
      <h1>{task.title}</h1>
      <p className={styles.description}>{task.description}</p>

      {/* ステータス */}
      <p className={styles.info}>
        ステータス:{" "}
        <span
          className={`${styles.badge} ${
            task.status ? styles.completed : styles.incomplete
          }`}
        >
          {getStatusLabel(task.status)}
        </span>
      </p>

      {/* 優先度 */}
      <p className={styles.info}>
        優先度 :{" "}
        <span
          className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}
        >
          {task.priority}
        </span>
      </p>

      {/* 期限 */}
      <p className={styles.info}>期限日 : {task.dueDate}</p>

      <p className={styles.info}>
        作成日 : {new Date(task.createdAt).toLocaleString()}
      </p>

      <p className={styles.info}>
        更新日 : {new Date(task.updatedAt).toLocaleString()}
      </p>

      <div className={styles.links}>
        <Link href={`/tasks/${task.id}/edit`} className={styles.editLink}>
          編集する
        </Link>
        <Link href="/tasks" className={styles.backLink}>
          タスク一覧に戻る
        </Link>
      </div>
    </div>
  );
}
