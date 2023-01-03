import { useState, useCallback } from 'react';

import styles from '@docker/components/Manager/Manager.module.scss';

function Manager() {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleStart = useCallback(async () => {
    const path = 'test';

    await fetch(`http://localhost:8080/api/v1/docker/start?p=${path}`)
      .then((res) => res.json())
      .then((data) => (data.status ? setIsStarted(true) : setIsStarted(false)))
      .catch((err) => console.log(err));
  }, [isStarted]);

  const handleStop = useCallback(() => {
    setIsStarted(false);
  }, [isStarted]);

  return (
    <div className={styles.container}>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <div className={styles.status}>
        <span className={styles.indicator} data-status={isStarted}></span>
        {isStarted ? 'Started' : 'Stopped'}
      </div>
    </div>
  );
}

export default Manager;
