import { useState, useCallback } from 'react';

import TemplateSelect from '@docker/components/TemplateSelect';
import { createServer } from '@docker/api';

import styles from '@docker/components/CreateServer/styles.module.scss';

function CreateServer() {
  const [template, setTemplate] = useState<string | null>(null);
  const [name, setName] = useState<string>('');

  const handleServerCreation = useCallback(() => {
    if (!template || !name) {
      return;
    }

    createServer({ template, name });
  }, [template, name]);

  return (
    <div className={styles.container}>
      <TemplateSelect setTemplate={setTemplate} />
      <input type='text' placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)} />

      <button type='button' disabled={!template || !name} onClick={handleServerCreation}>
        Create
      </button>
    </div>
  );
}

export default CreateServer;
