import { Dispatch, SetStateAction, createContext, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import merge from 'lodash.merge';
import { ColorSchemeName, useColorScheme } from 'react-native';
import type { FCC, ThemeType } from '../../types';
import { DEFAULT_THEME } from './colors';

type ThemeContextType = {
  theme: typeof DEFAULT_THEME.light | typeof DEFAULT_THEME.dark,
  updateTheme: (theme: { dark: { [index: string]: string }, light: { [index: string]: string } }) => void,
  setColorScheme: Dispatch<SetStateAction<ColorSchemeName>>,
  colorScheme?: ColorSchemeName,
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider: FCC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>('dark');
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);
  const RNColorScheme = useColorScheme();

  useLayoutEffect(
    () => {
      setColorScheme(RNColorScheme);
    },
    [RNColorScheme],
  );
  console.log(colorScheme);
  
  const updateTheme = useCallback((newTheme: { dark: { [index: string]: string }, light: { [index: string]: string } }) => {
    setTheme(prev => merge(prev, newTheme));
  }, []);

  const getCurrentTheme = useCallback(() => {
    if (!colorScheme) {
      throw new Error('Color scheme is not defined');
    }
    return theme[colorScheme];
  }, [colorScheme, theme]);

  const contextValue = useMemo(() => ({ theme: getCurrentTheme(), updateTheme, setColorScheme, colorScheme }), [theme, colorScheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
