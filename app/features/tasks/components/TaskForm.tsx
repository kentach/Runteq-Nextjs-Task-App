import styles from "../styles/TaskForm.module.css";

export default function TaskForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label>タスク名：</label>
        <input type="text" name="title" required />
      </div>

      <div className={styles.formGroup}>
        <label>説明：</label>
        <textarea name="description" />
      </div>
      
      <div className={styles.formGroup}>
        <label>優先度：</label>
        <select name="priority">
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>期限日：</label>
        <input type="date" name="dueDate" required />
      </div>

      <button type="submit" className={styles.submitButton}>
        作成する
      </button>
    </form>
  );
}
