import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { ChipProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const Chip:FCCWD<ChipProps> = (
  { typography,
    label,
    value,
    labelStyle,
    style,
    size = 'small',
    onChange,
    left,
    right,
    disabled = false,
    theme },
) => {
  const [select, setSelect] = useState(value || false);
  const componentStatus = disabled ? 'disabled' : (select ? 'active' : 'default');
  const { statusTheme } = useComponentTheme(theme, 'chip', componentStatus);

  const offset = useSharedValue(0);

  const typographySize = {
    small: typography?.body.xsmedium,
    medium: typography?.body.smedium,
    large: typography?.body.medium,
  };

  const animated = useAnimatedStyle(() => {
    const colorAnimated = interpolateColor(
      offset.value,
      [0, 1],
      [statusTheme.background, statusTheme.background],
    );
    return {
      backgroundColor: colorAnimated,
    };
  });

  useEffect(() => {
    offset.value = withTiming(Number(!!select));
    if (onChange) onChange(select);
  }, [select]);

  useEffect(() => {
    setSelect(!!value);
  }, [value]);
  return (
    <AnimatedTouchableOpacity
      disabled={disabled}
      testID="chip"
      onPress={() => { setSelect(prev => !prev); }}
      activeOpacity={1}
      style={[animated, { justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'baseline',
        height: sizes[size].height,
        borderWidth: 1,
        borderRadius: 30,
        opacity: disabled ? 0.7 : 1 }, style, { borderColor: statusTheme.border }]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {typeof left === 'function' && React.cloneElement(left(select), {
          size: sizes[size].iconSize,
          color: statusTheme.icon,
          style: [(left(select) ? { marginLeft: 6 } : null)],
        })}
        <Animated.Text
          style={[
            { fontSize: typographySize[size]?.fontSize,
              lineHeight: typographySize[size]?.lineHeight,
              marginLeft: typeof left === 'function' ? 0 : 15,
              marginRight: typeof left === 'function' ? 0 : 15,
              fontWeight: '500' }, labelStyle, { color: statusTheme.label }]}
        >
          {label}
        </Animated.Text>
        {typeof right === 'function' && React.cloneElement(right(select), {
          size: sizes[size].iconSize,
          color: statusTheme.icon,
          style: [(right(select) ? { marginRight: 6 } : null)],
        })}
      </View>
    </AnimatedTouchableOpacity>
  );
};

export default applyDefaults(Chip);

const sizes = {
  small: {
    height: 24,
    iconSize: 12,
  },
  medium: {
    height: 30,
    iconSize: 15,
  },
  large: {
    height: 33,
    iconSize: 17,

  },
};
