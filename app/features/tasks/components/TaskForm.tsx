import styles from "../styles/TaskForm.module.css";
import type { TaskFormData } from "@/app/types/task";

type TaskFormProps = {
  formData: TaskFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  id?: string
};

export default function TaskForm({
  onChange,
  formData,
  onSubmit,
  id,
}: TaskFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label>タスク名：</label>
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={formData.title}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>説明：</label>
        <textarea
          name="description"
          onChange={onChange}
          value={formData.description}
        />
      </div>

      <div className={styles.formGroup}>
        <label>優先度：</label>
        <select name="priority" onChange={onChange} value={formData.priority}>
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>期限日：</label>
        <input
          type="date"
          name="dueDate"
          onChange={onChange}
          value={formData.dueDate}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        {id ? "更新する" : "作成する"} {/* idの有無で編集か新規作成かを判定 */}
      </button>
    </form>
  );
}
