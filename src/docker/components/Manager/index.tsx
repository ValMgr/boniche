import { useState, useCallback } from 'react';

import styles from '@docker/components/Manager/Manager.module.scss';
import TemplateSelect from '@docker/components/TemplateSelect';

function Manager() {
  const [isStarted, setIsStarted] = useState<boolean>(false);


  return (
    <div className={styles.container}>
      <TemplateSelect />
     

      
    </div>
  );
}

export default Manager;
