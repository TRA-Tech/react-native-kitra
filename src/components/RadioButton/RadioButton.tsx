import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, RadioButtonProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const RadioButton: FCCWD<RadioButtonProps> = ({ theme, onChange, testID, style }) => {
  const [value, setValue] = useState(false);
  const { statusTheme } = useComponentTheme(theme, 'radioButton', value ? 'active' : 'default');
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        setValue(prev => !prev);
        onChange(!value);
      }}
      testID={testID}
      style={[
        { borderColor: statusTheme.border, backgroundColor: statusTheme.background }, styles.container, style]}
    >
      {value && <Animated.View entering={FadeIn} exiting={FadeOut} style={[{ backgroundColor: statusTheme.dot }, styles.innerCircle]} />}
    </TouchableOpacity>
  );
};
export default applyDefaults(RadioButton);

const styles = StyleSheet.create({
  container: { height: 20, width: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  innerCircle: { height: 12, width: 12, borderRadius: 10 },
});
