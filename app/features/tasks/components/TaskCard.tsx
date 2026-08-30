import Link from "next/link";
import type { Task } from "@/app/types/task";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div key={task.id}>
      <Link href={`/tasks/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      <p>ステータス : {task.status ? "完了" : "未完了"}</p>
      <p>優先度 : {task.priority}</p>
      <p>期限日 : {task.dueDate}</p>
    </div>
  );
}
