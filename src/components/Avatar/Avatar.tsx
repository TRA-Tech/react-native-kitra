import { Image, View, Text } from 'react-native';
import type { AvatarProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import OcticonsIcon from '../Icons/Octicons';
import Badge from '../Badge/Badge';

const Avatar : FCCWD<AvatarProps> = (
  { typography,
    theme,
    source,
    size = 'medium',
    borderStyle,
    containerStyle,
    badgeContent,
    avatarIcon = <OcticonsIcon name="person" size={sizes[size].iconSize} color={theme?.primary} />,
    label,
    labelStyle,
    badgeStyle,
    badgePosition },
) => {
  const splitName = (string:string) => {
    const avatarText = string.trim().replace(/ {1,9}/g, ' ').split(' ').reduce((accumulator, currentValue:any) => accumulator.concat(currentValue[0]), '');
    return avatarText;
  };

  return (
    <View style={[{ width: sizes[size].width,
      height: sizes[size].height,
      borderRadius: borderStyle === 'rounded' ? 10 : 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme?.primary15 }, containerStyle]}
    >
      {(() => {
        if (source) {
          return (
            <Image source={source} resizeMethod="auto" style={[{ width: sizes[size].width, height: sizes[size].height, borderRadius: borderStyle === 'rounded' ? 10 : 50 }]} />
          );
        }
        if (label) {
          return (
            <Text style={[{ fontSize: size === 'medium' ? typography?.heading.h2.fontSize : typography?.body.smedium.fontSize,
              lineHeight: size === 'medium' ? typography?.heading.h2.lineHeight : typography?.body.smedium.lineHeight,
              color: theme?.primary }, labelStyle]}
            >
              {splitName(label)}

            </Text>
          );
        }

        return (
          avatarIcon
        );
      })()}
      {badgePosition && (
      <View style={[
        { position: 'absolute', borderRadius: 50, padding: size === 'small' ? 2 : 4, right: size === 'small' ? -5 : (borderStyle === 'circular' ? 0 : -10) },
        badgePosition === 'bottom' ?
          { bottom: size === 'small' ? -2 : (borderStyle === 'circular' ? 0 : -10) } :
          { top: size === 'small' ? -5 : (borderStyle === 'circular' ? 0 : -10) }]}
      >
        <Badge
          typography={typography}
          theme={theme}
          size={size === 'small' ? 'small' : 'medium'}
          textStyles={badgeStyle?.textStyle}
          containerStyle={badgeStyle?.containerStyle}
          icon={badgeContent}
        />
      </View>
      )}

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
