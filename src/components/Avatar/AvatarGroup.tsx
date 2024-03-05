import { View, Text } from 'react-native';
import type { AvatarGroupProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

import Avatar from './Avatar';

const AvatarGroup: FCCWD<AvatarGroupProps> = (
  { theme,
    typography,
    limitContainerStyle,
    avatarsType,
    avatarLimit = 10 },
) => {
  const limit = (avatarsType?.length || 0) - avatarLimit;
  const avatarIcon = (
    <Text style={[{ fontSize: typography?.body.smedium.fontSize, lineHeight: typography?.body.smedium.lineHeight, color: '#fff', fontWeight: '500' }, limitContainerStyle?.style]}>
      +
      {limit}
    </Text>
  );
  return (
    <View style={{ flexDirection: 'row' }}>
      {avatarsType?.slice(0, avatarLimit)?.map((item, index):any => (
        <View key={index} style={{ marginRight: -7 }}>
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
      { (avatarsType.length || 0) > avatarLimit ? (
        <Avatar
          theme={theme}
          typography={typography}
          variant="circular"
          size="small"
          containerStyle={{ backgroundColor: limitContainerStyle?.backgroundColor || '#82B98E' }}
          avatarIcon={avatarIcon}
        />
      )
        : null}
    </View>
  );
};
export default applyDefaults(AvatarGroup);
