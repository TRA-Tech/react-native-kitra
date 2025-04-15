import React, { useEffect, useRef, useState } from 'react';
import { TextInput as RNTextInput,
  View, TextInputProps as RNTextInputProps, TouchableOpacity, StyleSheet, Text,
  TextStyle,
  ViewStyle } from 'react-native';
import Animated,
{ interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, TextInputProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);
const TextInput: FCCWD<TextInputProps & RNTextInputProps> = (
  { inputStyle,
    editable = true,
    size = 'medium',
    bottomLabel = '',
    variant = 'filled',
    labelContainerStyle,
    containerStyle,
    count = false,
    onChangeText,
    label,
    inputContainerStyle,
    labelStyle,
    bottomLabelStyle,
    error = false,
    left,
    right,
    onFocus,
    onEndEditing,
    theme,
    typography,
    ...props },
) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<RNTextInput>(null);
  const [counts, setCounts] = useState(0);
  const [labelLayout, setLabelLayout] = useState({ width: 0, height: 0 });
  const textInputOffset = useSharedValue(props.defaultValue || props.value ? 0 : 1);
  const { statusTheme, componentTheme } = useComponentTheme(
    theme,
    'textInput',
    editable ? (error ? 'error' : isFocused ? 'focused' : 'default') : 'disabled',
  );
  const { value: statusValue } = statusTheme;

  const fontStyles =
  {
    large: typography?.body.regular,
    medium: typography?.body.sregular,
    small: typography?.body.xsregular,
  };

  const sizeStyles =
  {
    large: {
      paddingHorizontal: 15,
      height: 51,
      paddingVertical: 17,
      lineHeight: 21,
    },
    medium: {
      paddingHorizontal: 12,
      height: 42,
      paddingVertical: 12,
      lineHeight: 18,
    },
    small: {
      paddingHorizontal: 10,
      height: 36,
      paddingVertical: 10,
      lineHeight: 15,
    },
  };

  const labelStyles =
  {
    large: {
      focused: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Poppins-Regular',
      },
      default: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Poppins-Regular',
      },
    },
    medium: {
      focused: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Poppins-Regular',
      },
      default: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'Poppins-Regular',
      },
    },
    small: {
      focused: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'Poppins-Regular',
      },
      default: {
        fontSize: 8,
        lineHeight: 12,
        fontFamily: 'Poppins-Regular',
      },
    },
  };

  const labelPositionAnimation = useAnimatedStyle(() => {
    const topInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [
        Array.isArray(inputContainerStyle)
          ? -Number((inputContainerStyle.find(f => (f as ViewStyle)?.borderWidth) as ViewStyle)?.borderWidth) || -1
          : -Number((inputContainerStyle as ViewStyle)?.borderWidth) || -1,
        sizeStyles[size].paddingVertical],
    );
    const leftInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [(variant === 'outlined' && label) ? (left ? -(sizeStyles[size].paddingHorizontal + 6) : 2) : 0, 0],
    );
    return {
      top: topInterpolate,
      left: leftInterpolate,
    };
  });

  const borderAnimation = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      textInputOffset.value,
      [0, 1],
      [
        editable
          ? (error
            ? (componentTheme.error?.border || '')
            : (componentTheme.focused?.border || ''))
          : (componentTheme.disabled?.border || ''),
        editable
          ? (error
            ? (componentTheme.error?.border || '')
            : (componentTheme.default?.border || ''))
          : (componentTheme.disabled?.border || ''),
      ],
    );

    return {
      borderColor,
    };
  });

  const labelFontAnimation = useAnimatedStyle(() => {
    const fontSize = interpolate(
      textInputOffset.value,
      [0, 1],
      [labelStyles[size].default.fontSize,
        (labelStyle as TextStyle)?.fontSize || labelStyles[size].focused.fontSize],
    );
    const lineHeight = interpolate(
      textInputOffset.value,
      [0, 1],
      [labelStyles[size].default.lineHeight,
        (labelStyle as TextStyle)?.lineHeight || labelStyles[size].focused.lineHeight],
    );
    const color = interpolateColor(
      textInputOffset.value,
      [0, 1],
      // @ts-ignore
      [statusTheme.label, statusTheme.label],
    );
    const topInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [(variant === 'filled' && label)
        ? 2 : -labelStyles[size].focused.lineHeight + labelStyles[size].focused.lineHeight / 2,
      sizeStyles[size].paddingVertical],
    );
    const leftInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [(variant === 'outlined' && label) ? (left ? -(sizeStyles[size].paddingHorizontal + 5) : 3) : 0, 0],
    );
    return {
      fontSize,
      lineHeight,
      color,
      top: topInterpolate,
      left: leftInterpolate,
    };
  });

  useEffect(() => {
    if (props.value?.length) {
      setCounts(props.value.length);
    } else if (props.defaultValue?.length) {
      setCounts(props.defaultValue?.length);
    }
  }, [props.value, props.defaultValue]);

  const onFocusInput = () => {
    textInputOffset.value = withTiming(0);
    setIsFocused(true);
  };

  const onEndEditingInput = () => {
    if (counts === 0) {
      textInputOffset.value = (counts === 0) ? withTiming(1) : withTiming(0);
    }
    setIsFocused(false);
  };

  useEffect(() => {
    if (!props.defaultValue && !props.value && !isFocused) {
      textInputOffset.value = withTiming(1);
      setIsFocused(false);
      setCounts(0);
    } else {
      textInputOffset.value = withTiming(0);
      setIsFocused(true);
    }
  }, [props?.value]);

  return (
    <View style={[containerStyle]}>
      <Animated.View style={[{
        borderRadius: 8,
        borderWidth: (editable || props.defaultValue || props.value) ? 1 : 0,
        height: sizeStyles[size].height,
        maxHeight: sizeStyles[size].height,
      },
      // @ts-ignore
      borderAnimation, inputContainerStyle, { backgroundColor: statusTheme.background }]}
      >
        <View style={{ flex: 1,
          flexDirection: 'row',
          height: sizeStyles[size].height,
          paddingHorizontal: sizeStyles[size].paddingHorizontal }}
        >
          {typeof left === 'function' && (
            <View style={{ alignSelf: 'center',
              marginRight: 5 }}
            >
              { left?.(isFocused)}
            </View>
          )}

          <View style={{ flex: 1, flexDirection: 'row' }}>
            {(variant === 'outlined' && label && (() => {
              if (Array.isArray(inputContainerStyle)) {
                const foundStyle = inputContainerStyle.find(f => (f as ViewStyle)?.borderWidth);
                if (!foundStyle && editable === false) {
                  return false;
                }
                return foundStyle ? Number((foundStyle as ViewStyle)?.borderWidth) > 0 : true;
              }
              const borderWidth = (inputContainerStyle as ViewStyle)?.borderWidth;
              if (borderWidth === undefined && editable === false) {
                return false;
              }
              return borderWidth !== undefined ? borderWidth > 0 : true;
            })()) && (
            <Animated.View style={[
              {
                position: 'absolute',
                width: labelLayout.width + 2,
                height: 5,
                zIndex: 100,
                backgroundColor: statusTheme.background,
              },
              labelPositionAnimation,
            ]}
            />
            )}

            <AnimatedTextInput
              ref={inputRef}
              editable={editable}
              style={[{
                marginTop: (variant === 'filled' && label) ? fontStyles[size].lineHeight / 2 : 0,
                fontSize: fontStyles[size].fontSize,
                fontFamily: labelStyles[size].default.fontFamily,
                lineHeight: sizeStyles[size].lineHeight,
                flexDirection: 'row',
                borderRadius: Array.isArray(inputContainerStyle)
                  ? (inputContainerStyle.find(f => (f as ViewStyle)?.borderRadius) as ViewStyle)?.borderRadius || 8
                  : (inputContainerStyle as ViewStyle)?.borderRadius || 8,
                flexGrow: 1,
              }, inputStyle, { backgroundColor: statusTheme.background, color: statusValue }]}
              onChangeText={event => { setCounts(event?.length || 0); onChangeText && onChangeText(event); }}
              onFocus={x => { onFocusInput(); onFocus?.(x); }}
              onEndEditing={x => { onEndEditingInput(); onEndEditing?.(x); }}
              {...props}
              placeholder={label ? undefined : props.placeholder}
            />
            {label ? (
              <View style={[
                {
                  position: 'absolute',
                  zIndex: 101,
                },
                labelContainerStyle,
              ]}
              >
                <TouchableOpacity
                  onPress={() => inputRef.current?.focus()}
                  activeOpacity={0.9}
                  onLayout={event => setLabelLayout({ width: event.nativeEvent.layout.width,
                    height: event.nativeEvent.layout.height })}
                >
                  <Animated.Text style={[{ fontFamily: labelStyles[size].default.fontFamily },
                    labelStyle, labelFontAnimation, { color: statusTheme.label }]}
                  >
                    {label}
                  </Animated.Text>
                </TouchableOpacity>
              </View>
            ) : null
            }
          </View>
          {typeof right === 'function' && (
          <View style={{ alignSelf: 'center' }}>
            {right?.(isFocused)}
          </View>
          )}

        </View>
      </Animated.View>

      <View style={[styles.helperContainer, { flexDirection: 'row',
        display: (error || !!bottomLabel || count) ? 'flex' : 'none',
        alignSelf: 'stretch' }]}
      >
        <Text style={[labelStyles[size].default, bottomLabelStyle,
          { color: statusTheme.bottomLabel }]}
        >
          {bottomLabel}
        </Text>
        {count ? (
          <Text style={[labelStyles[size].default, bottomLabelStyle,
            { color: statusTheme.countLabel }]}
          >
            {`${counts}/${props.maxLength}`}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },
  helperContainer: {
    flexDirection: 'row',
    marginTop: 2,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },

});
export default applyDefaults(TextInput);
