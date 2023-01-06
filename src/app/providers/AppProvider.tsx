import { createContext, useContext, useState } from 'react';

import usePersisState from '@app/hooks/usePersistState';

export type AppContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

const AppContext = createContext<AppContextType>({
  theme: 'light',
  setTheme: () => {},
});

interface IProps {
  children: React.ReactNode;
}

function AppProvider({ children }: IProps) {
  const [theme, setTheme] = usePersisState<'light' | 'dark'>('bnch_theme', 'light');

  return <AppContext.Provider value={{ theme, setTheme }}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
