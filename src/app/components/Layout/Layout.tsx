import styles from '@app/components/Layout/Layout.module.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}


function layout({ children }: IProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Boniche manager</h1>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default layout;
