import { StyleSheet, View, ViewProps } from 'react-native';
import type { DividerProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
const Divider : FCCWD<DividerProps&ViewProps> = (
  { theme,
    borderStyle = 'solid',
    width = '100%',
    color = theme?.primary30,
    style,
    ...props },
) => (
  <View style={[styles.container, { width }, style]} {...props}>
    <View style={{ width, borderWidth: StyleSheet.hairlineWidth, borderColor: color, borderStyle }} />
  </View>
);

export default applyDefaults(Divider);
