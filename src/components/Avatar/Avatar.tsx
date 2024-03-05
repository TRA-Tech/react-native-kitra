import { Image, View, Text } from 'react-native';
import type { AvatarProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import OcticonsIcon from '../Icons/Octicons';

const Avatar : FCCWD<AvatarProps> = (
  { typography,
    theme,
    source,
    size = 'medium',
    variant,
    containerStyle,
    avatarIcon = <OcticonsIcon name="person" size={sizes[size].iconSize} color={theme?.primary} />,
    label,
    labelStyle },
) => {
  const splitName = (string:string) => {
    const avatarText = string.trim().replace(/ {1,9}/g, ' ').split(' ').reduce((accumulator, currentValue:any) => accumulator.concat(currentValue[0]), '');
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
    <View style={[{ width: sizes[size].width,
      height: sizes[size].height,
      borderRadius: variant === 'rounded' ? 10 : 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme?.primary15 }, containerStyle]}
    >
      {(() => {
        if (source) {
          return (
            <Image source={source} resizeMethod="auto" style={[{ width: sizes[size].width, height: sizes[size].height, borderRadius: variant === 'rounded' ? 10 : 50 }]} />
          );
        }
        if (label) {
          return (
            <Text style={[{ color: theme?.primary }, labelTypography[size], labelStyle]}>
              {splitName(label)}

            </Text>
          );
        }

        return (
          avatarIcon
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
