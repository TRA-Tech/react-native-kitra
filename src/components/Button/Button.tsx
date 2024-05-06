import React, { useState } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { ButtonProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

export const Button: FCCWD<ButtonProps & PressableProps> = (
  { typography,
    size = 'medium',
    disabled = false,
    label = '',
    style,
    labelStyle,
    left,
    right,
    theme,
    ...props },
) => {
  const [isPressed, setIsPressed] = useState(false);
  const componentStatus = disabled ? 'disabled' : (isPressed ? 'pressed' : 'default');
  const { statusTheme } = useComponentTheme(theme, 'button', componentStatus);
  const fontStyles = {
    large: typography?.body.medium,
    medium: typography?.body.smedium,
    small: typography?.body.xsmedium,
  };

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }) =>
        [
          styles.container,

          label ?
            { paddingVertical: 15, paddingHorizontal: 30 }
            :
            { padding: (fontStyles[size].lineHeight - fontStyles[size].fontSize) / 2 + 10 },
          style,
          { backgroundColor: statusTheme.background },
        ]}
      disabled={disabled}
      {...props}
    >

      {typeof left === 'function' && React.cloneElement(left(isPressed), {
        size: left(isPressed).props.size || fontStyles[size].fontSize,
        style: [label.length ? { marginRight: 10 } : null, left(isPressed).props?.style],
      })}
      <Text
        testID="button_text"
        style={[{ fontWeight: '500' }, fontStyles[size], labelStyle, { color: statusTheme.label }]}
      >
        {label}
      </Text>
      {typeof right === 'function' && React.cloneElement(right(isPressed), {
        size: right(isPressed).props.size || fontStyles[size].fontSize,
        style: [label.length ? { marginLeft: 10 } : null, right(isPressed).props?.style],
      })}
    </Pressable>
  );
};

export default applyDefaults(Button);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
