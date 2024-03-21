import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { CheckBoxProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Octicons from '../Icons/Octicons';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const CheckBox: FCCWD<CheckBoxProps & TouchableOpacityProps> = (
  { value,
    onChange,
    onPress,
    style,
    disabled,
    theme,
    ...props },
) => {
  const [status, setStatus] = useState(value || false);
  const componentStatus = disabled ? 'disabled' : (status ? 'filled' : 'default');
  const { statusTheme } = useComponentTheme(theme, 'checkbox', componentStatus);

  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => {
      const borderColorInterpolation = interpolateColor(
        animatedValue.value,
        [0, 1],
        [statusTheme.border, statusTheme.border],
      );
      const backgroundColorInterpolation = interpolateColor(
        animatedValue.value,
        [0, 1],
        [statusTheme.background, statusTheme.background],
      );
      return (
        {
          backgroundColor: backgroundColorInterpolation,
          borderColor: borderColorInterpolation,
        }
      );
    },
  );

  const toggle = () => {
    onPress?.(!status);
    setStatus(prev => !prev);
  };

  useEffect(() => {
    animatedValue.value = withTiming(Number(!!status));
    if (onChange) onChange(status);
  }, [status]);

  useEffect(() => {
    setStatus(!!value);
  }, [value]);

  return (
    <AnimatedTouchableOpacity
      activeOpacity={1}
      onPress={toggle}
      disabled={disabled}
      style={[styles.checkBox, style, animatedStyle]}
      {...props}
    >
      {status && (
        <Animated.View>
          <Octicons
            color={statusTheme.icon}
            name="check"
            size={12}
          />
        </Animated.View>
      )}
    </AnimatedTouchableOpacity>
  );
};

export default applyDefaults(CheckBox);

const styles = StyleSheet.create({
  checkBox: { height: 20, width: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 4 },
});
