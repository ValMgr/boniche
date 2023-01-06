import React from 'react';

import ServerList from '@docker/components/ServerList';
import CreateServer from '@docker/components/CreateServer';

import styles from '@docker/components/Manager/styles.module.scss';

function Manager() {
  return (
    <div className={styles.container}>
      <ServerList />
      <div className={styles.central_manager}>
        
      </div>
    </div>
  );
}

export default Manager;
