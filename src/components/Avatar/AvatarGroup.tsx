import { View, Text } from 'react-native';
import React from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { AvatarGroupProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Avatar from './Avatar';

const AvatarGroup: FCCWD<AvatarGroupProps> = (
  { theme,
    typography,
    limitContainerStyle,
    avatars,
    avatarLimit = 10 },
) => {
  const { statusTheme } = useComponentTheme(theme, 'avatarGroup', 'default');
  const limit = (avatars?.length || 0) - avatarLimit;
  const avatarIcon = (
    <Text style={[{ fontSize: typography?.body.smedium.fontSize,
      lineHeight: typography?.body.smedium.lineHeight,
      fontWeight: '500' }, limitContainerStyle?.style, { color: statusTheme.morelabel }]}
    >
      +
      {limit}
    </Text>
  );
  return (
    <View style={{ flexDirection: 'row' }}>
      {avatars?.slice(0, avatarLimit)?.map((item, index): any => (
        <View key={item.label || item.avatarIcon?.toString()} style={{ marginRight: -7 }}>
          <Avatar
            theme={theme}
            typography={typography}
            key={index}
            source={item?.source}
            variant={item?.variant}
            avatarIcon={item?.avatarIcon}
            containerStyle={item?.containerStyle}
            size="small"
            label={item?.label}
          />

        </View>
      ))}
      {(avatars?.length || 0) > avatarLimit ? (
        <Avatar
          typography={typography}
          variant="circular"
          size="small"
          theme={{ default: { background: statusTheme.moreBackground, label: statusTheme.morelabel } }}
          avatarIcon={avatarIcon}
        />
      )
        : null}
    </View>
  );
};
export default applyDefaults(AvatarGroup);
