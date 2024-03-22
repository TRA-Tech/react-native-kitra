// @ts-nocheck

import { Pressable, PressableProps, ViewStyle, Platform } from 'react-native';
import type { FCCWD, IconButtonProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import MaterialCommunity from '../Icons/MaterialCommunity';
import Icon from '../Icons/Icon';

const IconButton:FCCWD<IconButtonProps&PressableProps> = (
  { theme,
    icon = { name: 'camera', size: 20, type: 'material-community' },
    containerColor = theme?.primary, style, iconColor = theme?.error, focusedColor, ...props },
) => {
  const statusStyles = {
    default: {
      container: {
        backgroundColor: theme?.primary,
      },
      iconColor: {
        color: theme?.white,
      },
    },
    focused: {
      container: {
        backgroundColor: theme?.focused,
      },
    },
    disabled: {
      container: {
        backgroundColor: theme?.disabledLight,
        opacity: 0.3,
      },
    },
  };
  const scale = {
    default: {
      borderRadius: 50,
      width: 30,
      height: 30,
    },
  };
  return (
    <Pressable
      android_ripple={{
        color: statusStyles.focused.container.backgroundColor,
      }}
      style={({ pressed }) =>
        [
          { alignItems: 'center', justifyContent: 'center' },
          Platform.OS === 'ios' ?
            (pressed ? { backgroundColor: focusedColor } : { backgroundColor: containerColor })
            : (statusStyles.default.container),
          props.disabled ? statusStyles.disabled.container : null,
          scale.default,
          style,
        ]}
      {...props}
    >
      <Icon type={icon.type} name={icon.name} size={icon.size} color={iconColor} />
    </Pressable>
  );
};
export default applyDefaults(IconButton);
