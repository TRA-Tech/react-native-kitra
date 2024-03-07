/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Platform, Pressable, PressableProps, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import type { ButtonProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

export const Button: FCCWD<ButtonProps & PressableProps> = (
  { theme,
    typography,
    size = 'medium',
    disabled = false,
    label = '',
    statusStyle,
    iconPosition = 'left',
    style,
    textStyle,
    icon,
    ...props },
) => {
  const [isPressed, setIsPressed] = useState(false);
  const fontStyles = {
    large: typography?.body.medium,
    medium: typography?.body.smedium,
    small: typography?.body.xsmedium,
  };

  const viewStyles = {
    default: {
      container: {
        backgroundColor: statusStyle?.default?.container?.backgroundColor || theme?.primary,
      },
      text: {
        color: statusStyle?.default?.text?.color || theme?.white,
      },
    },

    focused: {
      container: {
        backgroundColor: statusStyle?.focused?.container?.backgroundColor || theme?.focused,
      },
      text: {
        color: statusStyle?.focused?.text?.color || theme?.white,
      },
    },

    disabled: {
      container: {
        backgroundColor: statusStyle?.disabled?.container?.backgroundColor || theme?.disabledLight,
      },
      text: {
        color: statusStyle?.disabled?.text?.color || theme?.grey,
      },
    },
  };

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }) =>
        [
          styles.container,

          { flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse' },

          label ?
            { paddingVertical: 15,
              paddingHorizontal: 30 }
            :
            { padding: (fontStyles[size].lineHeight - fontStyles[size].fontSize) / 2 + 10 },

          (pressed ?
            viewStyles.focused.container
            :
            viewStyles.default.container),

          disabled ? viewStyles.disabled.container : null,

          style,
        ]}
      disabled={disabled}
      {...props}
    >

      {icon && React.cloneElement(icon, {
        size: icon.props.size || fontStyles[size].fontSize,
        color: (disabled ? viewStyles.disabled.text.color : (isPressed ? (icon.props.color || viewStyles.focused.text.color) : (icon.props.color || viewStyles.default.text.color))),
        style: [label.length ? (iconPosition === 'left' ? { marginRight: 10 } : { marginLeft: 10 }) : null, icon.props?.style],
      })}
      <Text testID="button_text" style={[disabled ? viewStyles.disabled.text : (isPressed ? viewStyles.focused.text : viewStyles.default.text), { fontWeight: '500' }, fontStyles[size], textStyle]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default applyDefaults(Button);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
