import { StyleSheet, View, ViewProps } from 'react-native';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { DividerProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
const Divider: FCCWD<DividerProps & ViewProps> = (
  { borderStyle = 'solid',
    width = '100%',
    style,
    theme,
    ...props },
) => {
  const { statusTheme } = useComponentTheme(theme, 'divider', 'default');
  return (
    <View style={[styles.container, { width }, style]} {...props}>
      <View style={{ width, borderWidth: StyleSheet.hairlineWidth, borderColor: statusTheme.background, borderStyle }} />
    </View>
  );
};

export default applyDefaults(Divider);
