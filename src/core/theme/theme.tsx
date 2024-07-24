import React, { Dispatch, SetStateAction, createContext, useLayoutEffect, useMemo, useState } from 'react';
import merge from 'lodash.merge';
import { ColorSchemeName, useColorScheme } from 'react-native';
import type { DeepPartial, FCC, ThemeType } from '../../types';
import { COLOR_COMPONENTS_DARK, COLOR_COMPONENTS_LIGHT, DEFAULT_THEME } from './colors';

 type ThemeContextType = {
  /**
   * This will be either the dark or light theme from the `ThemeType` based on the current color scheme.
   */
  theme: ThemeType['dark'] | ThemeType['light'],
   /**
   * This function will merge the provided updates with the current theme.
   */
  updateTheme: (theme: { dark: DeepPartial<ThemeType['dark']>, light: DeepPartial<ThemeType['light']> }) => void,
    /**
   * Function to set the color scheme.
   */
  setColorScheme: Dispatch<SetStateAction<ColorSchemeName>>,
   /**
   * The current color scheme ('dark' or 'light').
   */
  colorScheme?: ColorSchemeName,
}

export const getTheme = (
  prevTheme: ThemeType,
  newTheme:
    {
      dark: DeepPartial<ThemeType['dark']>,
      light: DeepPartial<ThemeType['light']>
    },
) => {
  const { dark = { colors: {}, components: {} } } = newTheme;
  const { light = { colors: {}, components: {} } } = newTheme;

  const {
    colors: colorsDark = {},
    components: componentsDark = {},
  } = dark;
  const {
    colors: colorsLight = {},
    components: componentsLight = {},
  } = light;

  const colorSystemDark = merge(prevTheme.dark.colors, colorsDark);
  const colorSystemLight = merge(prevTheme.light.colors, colorsLight);
  const colorSystemDarkComponent = merge(COLOR_COMPONENTS_DARK({ colors: colorSystemDark }), componentsDark);
  const colorSystemLightComponent = merge(COLOR_COMPONENTS_LIGHT({ colors: colorSystemLight }), componentsLight);

  return ({
    dark: { colors: colorSystemDark, components: colorSystemDarkComponent },
    light: { colors: colorSystemLight, components: colorSystemLightComponent },
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

  const contextValue = useMemo(() =>
    ({ theme: getCurrentTheme(),
      updateTheme,
      setColorScheme,
      colorScheme }), [theme, colorScheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
