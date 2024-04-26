import React, { useContext } from 'react';
import { ThemeContext } from '../theme/theme';

const useTheme = () => {
  const { theme, updateTheme, setColorScheme, colorScheme } = useContext(ThemeContext);
  return { theme, updateTheme, setColorScheme, colorScheme };
};

export default useTheme;
