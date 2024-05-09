import { StyleSheet, View, ViewProps } from 'react-native';
import React from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { DividerProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
const Divider: FCCWD<DividerProps & ViewProps> = (
  { variant = 'solid',
    width = '100%',
    style,
    theme,
    ...props },
) => {
  const { statusTheme } = useComponentTheme(theme, 'divider', 'default');
  return (
    <View style={[styles.container, { width }, style]} {...props}>
      <View
        style={[styles.container, { width,
          borderWidth: 1,
          borderColor: statusTheme.background,
          borderStyle: variant }]}
      />
    </View>
  );
};

export default applyDefaults(Divider);
