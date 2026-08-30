import { useParams } from "next/navigation";
import styles from "../styles/TaskDetail.module.css";
import { deleteTask } from "../hooks/deleteTask";
import { useRouter } from "next/navigation";


export default function TaskDeleteButton() {
  const params = useParams<{ id?: string }>();
  const id = params.id;
  const router = useRouter();

  const handleClick = async () => {
    if (!id) return;
    const result = confirm("本当に削除しますか？");
    if (result) {
      await deleteTask(id);
      router.push("/tasks");
    }
  };

  return (
    <button onClick={handleClick} className={styles.taskDeleteBtn}>
      削除
    </button>
  );
}
