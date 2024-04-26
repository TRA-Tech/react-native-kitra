import React, { Dispatch, SetStateAction, createContext, useLayoutEffect, useMemo, useState } from 'react';
import merge from 'lodash.merge';
import { ColorSchemeName, useColorScheme } from 'react-native';
import type { DeepPartial, FCC, ThemeType } from '../../types';
import { COLOR_COMPONENTS_DARK, COLOR_COMPONENTS_LIGHT, DEFAULT_THEME } from './colors';

type ThemeContextType = {
  theme: ThemeType['dark'] | ThemeType['light'],
  updateTheme: (theme: { dark: DeepPartial<ThemeType['dark']>, light: DeepPartial<ThemeType['light']> }) => void,
  setColorScheme: Dispatch<SetStateAction<ColorSchemeName>>,
  colorScheme?: ColorSchemeName,
}

export const getTheme = (prevTheme: ThemeType, newTheme: { dark: DeepPartial<ThemeType['dark']>, light: DeepPartial<ThemeType['light']> }) => {
  const { dark = { colors: {} } } = newTheme;
  const { light = { colors: {} } } = newTheme;

  const {
    colors: colorsDark = {},
  } = dark;
  const {
    colors: colorsLight = {},
  } = light;

  const colorSystemDark = merge(prevTheme.dark.colors, colorsDark);
  const colorSystemLight = merge(prevTheme.light.colors, colorsLight);

  return ({
    dark: { colors: colorSystemDark, components: COLOR_COMPONENTS_DARK({ colors: colorSystemDark }) },
    light: { colors: colorSystemLight, components: COLOR_COMPONENTS_LIGHT({ colors: colorSystemLight }) },
  });
};
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

  const updateTheme = (newTheme: { dark: DeepPartial<ThemeType['dark']>, light: DeepPartial<ThemeType['light']> }) => {
    setTheme(prev => getTheme(prev, newTheme));
  };

  const getCurrentTheme = () => {
    if (!colorScheme) {
      throw new Error('Color scheme is not defined');
    }

    return theme[colorScheme];
  };

  const contextValue = useMemo(() => ({ theme: getCurrentTheme(), updateTheme, setColorScheme, colorScheme }), [theme, colorScheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
