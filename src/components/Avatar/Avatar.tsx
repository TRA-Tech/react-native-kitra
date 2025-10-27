import { Image, View, Text } from 'react-native';
import React from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { AvatarProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Icon from '../Icons/Icon';

const Avatar: FCCWD<AvatarProps> = (
  { source,
    size = 'medium',
    variant,
    containerStyle,
    avatarIcon,
    label,
    labelStyle,
    typography,
    theme },
) => {
  const { statusTheme } = useComponentTheme(theme, 'avatar', 'default');
  const splitName = (string: string) => {
    const avatarText = string.trim().replace(/ {1,9}/g, ' ').split(' ').reduce((accumulator, currentValue: any) => accumulator.concat(currentValue[0]), '');
    return avatarText;
  };

  const labelTypography = {
    medium: {
      ...typography?.heading.h2,
    },
    small: {
      ...typography?.body.smedium,
    },
  };

  return (
    <View style={[{
      width: sizes[size].width,
      height: sizes[size].height,
      borderRadius: variant === 'rounded' ? 10 : 50,
      alignItems: 'center',
      justifyContent: 'center',
    }, containerStyle, { backgroundColor: statusTheme.background }]}
    >
      {(() => {
        if (source) {
          return (
            <Image source={source} resizeMethod="auto" style={[{ width: sizes[size].width, height: sizes[size].height, borderRadius: variant === 'rounded' ? 10 : 50 }]} />
          );
        }
        if (label) {
          return (
            <Text style={[labelTypography[size], labelStyle, { color: statusTheme.label }]}>
              {splitName(label)}

            </Text>
          );
        }

        return (
          avatarIcon || <Icon name="user" size={sizes[size].iconSize} color={statusTheme.label} />
        );
      })()}

    </View>
  );
};

export default applyDefaults(Avatar);

export const sizes = {
  medium: {
    width: 100,
    height: 100,
    iconSize: 30,
    borderRadius: 100,
    fontSize: 28,
  },
  small: {
    width: 30,
    height: 30,
    iconSize: 10,
    borderRadius: 15,
    fontSize: 12,
  },
};
