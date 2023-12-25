import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import type { FCCWD, RadioButtonProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const RadioButton: FCCWD<RadioButtonProps> = ({ theme, onChange, testID, style }) => {
  const [value, setValue] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        setValue(prev => !prev);
        onChange(!value);
      }}
      testID={testID}
      style={[value ?
        { borderColor: theme?.primary, backgroundColor: theme?.white }
        :
        { borderColor: theme?.disabledDark, backgroundColor: theme?.disabledLight }, styles.container, style]}
    >
      {value && <Animated.View entering={FadeIn} exiting={FadeOut} style={[{ backgroundColor: theme?.primary }, styles.innerCircle]} />}
    </TouchableOpacity>
  );
};
export default applyDefaults(RadioButton);

const styles = StyleSheet.create({
  container: { height: 20, width: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  innerCircle: { height: 12, width: 12, borderRadius: 10 },
});
