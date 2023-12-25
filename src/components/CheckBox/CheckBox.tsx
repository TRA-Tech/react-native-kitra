import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';
import Animated, { FadeIn, FadeOut, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { CheckBoxProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Octicons from '../Icons/Octicons';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const CheckBox: FCCWD<CheckBoxProps & ViewProps> = (
  { theme,
    value,
    onChange,
    onPress,
    style,
    disabled,
    iconColor = theme?.white,
    ...props },
) => {
  const [status, setStatus] = useState(value || false);
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => {
      const borderColorInterpolation = interpolateColor(
        animatedValue.value,
        [0, 1],
        [theme?.disabledLight!, 'transparent'],
      );
      const backgroundColorInterpolation = interpolateColor(
        animatedValue.value,
        [0, 1],
        [theme?.disabledLightDark!, theme?.focused!],
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
      style={[styles.checkBox, animatedStyle, style]}
      {...props}
    >
      {status && (
        <Animated.View exiting={FadeOut} entering={FadeIn}>
          <Octicons
            color={iconColor}
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
