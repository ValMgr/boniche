import { useCallback, useState, useEffect } from 'react';

import Icon from '@app/components/Icon';
import { useAppContext } from '@app/providers/AppProvider';

function SwitchTheme() {
  const { theme, setTheme } = useAppContext();
  const [icon, setIcon] = useState<'moon' | 'sun'>('moon');
  const [color, setColor] = useState<'white' | 'black'>('white');

  useEffect(() => {
    if (theme === 'light') {
      setIcon('moon');
      setColor('black');
    } else {
      setIcon('sun');
      setColor('white');
    }
  }, [theme]);

  const handleSwitchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return <Icon id={icon} color={color} onClick={handleSwitchTheme} />;
}

export default SwitchTheme;
