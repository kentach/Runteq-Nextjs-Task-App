import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>タスク管理アプリ</h1>
      <p className={styles.description}>
        React×Vite×React Routerで作るタスク管理アプリです。
      </p>
      <Link href="/tasks" className={styles.link}>
        タスク一覧へ
      </Link>
    </div>
  );
}
