import { Dispatch, SetStateAction, createContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import type { FCC, ThemeType } from '../../types';

type ThemeContextType = {
  theme: { [index: string]: string }
  updateTheme: (theme: { dark: { [index: string]: string }, light: { [index: string]: string } }) => void,
  setColorScheme: Dispatch<SetStateAction< 'light' | 'dark' | undefined>>,
  colorScheme?: 'light' | 'dark' | undefined,

}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider: FCC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | undefined>('dark');
  const [theme, setTheme] = useState(defaultTheme);
  function updateTheme(newTheme: { dark: { [index: string]: string }, light: { [index: string]: string } }) {
    setTheme(prev => ({
      ...prev,
      dark: {
        ...prev.dark,
        ...newTheme?.dark,

      },
      light: {
        ...prev.light,
        ...newTheme?.light,
      },

    }));
  }

  const GetColors = () => theme[colorScheme!];

  const contextValue = useMemo(() => ({ theme: GetColors(), updateTheme, setColorScheme, colorScheme }), [theme, colorScheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

const text = {
  black: '#000000',
  lightBlack: '#404040',
  grey: '#9A9A9A',
  white: '#FFFFFF',
  darkWhite: '#FDFCFF',
  lightGrey: '#F5F4F6',
};

const status = {
  focused: '#654FA6',
  error: '#FF3434',
  succes: '#09CE63',
  disabledLight: '#D7D1E9',
  disabledDark: '#BDBCBF',
  disabledLightDark: '#F6F6F6',
};

export const defaultTheme: ThemeType = {
  dark: {
    primary: '#8973CD',
    primary5: '#F9F8FD',
    primary15: '#EDEAF8',
    primary30: '#DCD5F0',
    secondary: '#82B98E',
    tertiary: '#67A7C1',
    ...text,
    ...status,
  },
  light: {
    primary: '#8973CD',
    primary5: '#F9F8FD',
    primary15: '#F3F1FA',
    primary30: '#DCD5F0',
    secondary: '#82B98E',
    tertiary: '#67A7C1',
    ...text,
    ...status,
  },
};
