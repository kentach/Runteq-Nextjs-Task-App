import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">タスク管理アプリ</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/tasks">タスク一覧</Link>
          </li>
          <li>
            <Link href="/tasks/new">新規作成</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}