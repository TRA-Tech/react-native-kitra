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
    iconPosition = 'left',
    style,
    textStyle,
    icon,
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
          { flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse' },
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

      {icon && React.cloneElement(icon, {
        size: icon.props.size || fontStyles[size].fontSize,
        color: statusTheme.icon || icon.props.color,
        style: [label.length ? (iconPosition === 'left' ? { marginRight: 10 } : { marginLeft: 10 }) : null, icon.props?.style],
      })}
      <Text testID="button_text" style={[{ fontWeight: '500' }, fontStyles[size], textStyle, { color: statusTheme.label }]}>
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
