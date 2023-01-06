import styles from '@app/components/Layout/index.module.scss';
import SwitchTheme from '@app/components/SwitchTheme';
import { useAppContext } from '@app/providers/AppProvider';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

function Layout({ children }: IProps) {
  const { theme } = useAppContext();

  return (
    <div className={`theme--${theme}`}>
      <div className={styles.screen}>
        <header className={styles.header}>
          <h1 className={styles.title}>Boniche manager</h1>

          <nav>
            <ul>
              <li>
                <SwitchTheme />
              </li>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/dashboard'>Dashboard</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.container}>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}

export default Layout;
