import Link from "next/link";

export default function TaskListContainer() {
  return (
    <div>
      <h1>タスク一覧</h1>
      <div>
        <Link href="#">
          <h3>ログイン機能を実装する</h3>
        </Link>
        <p>ステータス : 未完了</p>
        <p>優先度 : 高</p>
        <p>期限日 : 2025-02-10</p>
      </div>
    </div>
  );
}
