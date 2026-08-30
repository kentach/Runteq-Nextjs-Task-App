import Link from "next/link";
import TaskForm from "../components/TaskForm";
import styles from "../styles/TaskForm.module.css";

export default function TaskFormContainer() {
  return (
    <div className={styles.container}>
      <h1>新規タスク作成</h1>
      <TaskForm />

      <div className={styles.cancelContainer}>
        <Link href="/tasks" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
      
    </div>
  );
}
