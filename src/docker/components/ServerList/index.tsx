import Icon from '@app/components/Icon';
import styles from '@docker/components/ServerList/styles.module.scss';

function ServerList() {
  return (
    <div className={styles.container}>
      <h2>Server list</h2>
      <hr />

      <div className={styles.serverList}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={styles.server}>
            <div className={styles.serverName}>Server {index}</div>
            <div className={styles.serverStatus} data-status={index % 3 ? 'online' : 'offline'}></div>
            <div className={styles.edit}><Icon id="settings" /></div>
          </div>
        ))}
      </div>
      <hr />
      <button>
        Add server
      </button>
    </div>
  );
}

export default ServerList;
