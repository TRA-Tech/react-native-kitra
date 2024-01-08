import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TextInput as RNTextInput, View, TextInputProps as RNTextInputProps, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { opacity } from '../../utilities';
import type { FCCWD, TextInputProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);
const TextInput: FCCWD<TextInputProps & RNTextInputProps> = (
  { theme,
    typography,
    inputStyle,
    editable = true,
    size = 'medium',
    helperText = '',
    variant = 'filled',
    labelContainerStyle,
    containerStyle,
    count = false,
    onChangeText,
    label,
    inputContainerStyle,
    labelStyle,
    helperTextStyle,
    error = false,
    errorMessage,
    left,
    right,
    labelColor = { focus: theme?.primary, default: theme?.primary },
    onFocus,
    onEndEditing,
    ...props },
) => {
  const inputRef = useRef<RNTextInput>(null);
  const [counts, setCounts] = useState(0);
  const textInputOffset = useSharedValue(props.defaultValue || props.placeholder || props.value ? 0 : 1);

  const fontStyles =
    {
      large: typography?.body.regular,
      medium: typography?.body.sregular,
      small: typography?.body.xsregular,
    };

  const sizeStyles =
  {
    large: {
      padding: 15,
      height: 51,
    },
    medium: {
      padding: 12,
      height: 42,
    },
    small: {
      padding: 10,
      height: 36,
    },
  };

  const labelStyles =
  {
    large: {
      focused: typography?.body.regular,
      default: typography?.body.sregular,
    },
    medium: {
      focused: typography?.body.sregular,
      default: typography?.body.xsregular,
    },
    small: {
      focused: typography?.body.xsregular,
      default: typography?.body.xxsregular,
    },
  };

  // label'ın konum ve fontsize animasyonu
  const labelPositionAnimation = useAnimatedStyle(() => {
    const topInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [variant === 'filled' ? 2 : -labelStyles[size].focused.lineHeight + labelStyles[size].focused.lineHeight / 2, sizeStyles[size].padding],
    );

    return {
      top: topInterpolate,
    };
  });

  const borderAnimation = useAnimatedStyle(() => {
    const topInterpolate = interpolateColor(
      textInputOffset.value,
      [0, 1],
      [theme?.primary || '#000000', theme?.grey || '#FFFFFF'],
    );

    return {
      borderColor: topInterpolate,
    };
  });

  const labelFontAnimation = useAnimatedStyle(() => {
    const fontSize = interpolate(
      textInputOffset.value,
      [0, 1],
      [labelStyles[size].default.fontSize, labelStyles[size].focused.fontSize],
    );
    const lineHeight = interpolate(
      textInputOffset.value,
      [0, 1],
      [labelStyles[size].default.lineHeight, labelStyles[size].focused.lineHeight],
    );
    const color = interpolateColor(
      textInputOffset.value,
      [0, 1],
      // @ts-ignore
      [error ? theme?.error : labelColor.focus || '#000000', error ? theme?.error : labelColor.default || '#FFFFFF'],
    );
    return {
      fontSize,
      lineHeight,
      color,
    };
  });

  useEffect(() => {
    if (props.value) {
      setCounts(props.value?.length ? props.value?.length : 0);
      textInputOffset.value = props.value?.length || props.defaultValue?.length ? withTiming(0) : withTiming(1);
    } else if (!props.defaultValue?.length) {
      textInputOffset.value = withTiming(1);
    }
  }, [props.value]);

  useEffect(() => {
    setCounts(props.defaultValue ? props.defaultValue.length : 0);
  }, []);

  const onFocusInput = () => {
    textInputOffset.value = withTiming(0);
  };

  const onEndEditingInput = () => {
    textInputOffset.value = (counts === 0) ? withTiming(1) : withTiming(0);
  };

  return (
    <View style={[{ flexGrow: 1, maxHeight: sizeStyles[size].height }, containerStyle]}>
      <Animated.View style={[{
        opacity: editable ? 1 : 0.5,
        borderRadius: 5,
        borderWidth: 1,
        height: sizeStyles[size].height,
      },
      // @ts-ignore
      borderAnimation, inputContainerStyle, { backgroundColor: error ? opacity(theme?.error, 15) : inputContainerStyle?.backgroundColor || 'transparent' }]}
      >
        <View style={{ flex: 1, flexDirection: 'row', height: sizeStyles[size].height }}>
          <View style={{ alignSelf: 'center', marginLeft: sizeStyles[size].padding, marginRight: 5 }}>
            {left && left }
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <AnimatedTextInput
              ref={inputRef}
              editable={editable}
              style={[{
                marginTop: fontStyles[size].lineHeight / 2,
                fontSize: fontStyles[size].fontSize,
                fontFamily: labelStyles[size].default.fontFamily,
                lineHeight: fontStyles[size].lineHeight,
                flexDirection: 'row',
                flex: 1,
              }, inputStyle]}
              onChangeText={event => { setCounts(event?.length || 0); onChangeText && onChangeText(event); }}
              onFocus={x => { onFocusInput(); onFocus?.(x); }}
              onEndEditing={x => { onEndEditingInput(); onEndEditing?.(x); }}
              {...props}
            />

            {label ? (
              <Animated.View style={[{ position: 'absolute', paddingHorizontal: 4 }, labelContainerStyle, labelPositionAnimation, {
                // @ts-ignore
                backgroundColor: error ? opacity(theme?.error, 0) : labelContainerStyle?.backgroundColor || theme?.background || 'white',
              }]}
              >
                <TouchableOpacity onPress={() => inputRef.current?.focus()} activeOpacity={0.9}>
                  <Animated.Text style={[{ color: theme?.primary, fontFamily: labelStyles[size].default.fontFamily }, labelStyle, labelFontAnimation]}>
                    {label}
                  </Animated.Text>
                </TouchableOpacity>
              </Animated.View>
            ) : null
            }
          </View>
          <View style={{ alignSelf: 'center', marginRight: sizeStyles[size].padding, marginLeft: 5 }}>
            {right && right}
          </View>
        </View>
      </Animated.View>

      <View style={[styles.helperContainer, { flexDirection: 'row', display: (error || !!helperText || count) ? 'flex' : 'none', alignSelf: 'stretch' }]}>
        {/* @ts-ignore */}
        <Text style={[labelStyles[size].default, helperTextStyle, { color: error ? theme?.error : helperTextStyle?.color || theme?.grey }]}>{error ? `${errorMessage}` : `${helperText}`}</Text>
        {/* @ts-ignore */}
        {count ? <Text style={[styles.helperText, helperTextStyle, { color: error ? theme?.error : helperTextStyle?.color || theme?.grey }]}>{`${counts}/${props.maxLength}`}</Text> : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },

  labelContainer: {
  },
  helperContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  helperText: {
    fontSize: 12,
    fontWeight: '400',
  },

});
export default applyDefaults(TextInput);
