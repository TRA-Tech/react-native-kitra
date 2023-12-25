import { Text, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import type { BadgeProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const sizes = {
  medium: {
    width: 24,
    height: 24,
    fontSize: 10,
  },
  small: {
    width: 10,
    height: 10,
    fontSize: 8,
  },
};
const badgeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center', alignItems: 'center',
  },
});
const Badge : FCCWD<BadgeProps> = (
  { theme,
    visible = true,
    label,
    size = 'medium',
    containerStyle,
    textStyles,
    borderStyle = 'circular',
    icon },
) => (
  <View>
    {visible ? (
      <Animated.View
        exiting={FadeOut.duration(300)}
        entering={FadeIn.duration(400)}
        style={[badgeStyles.container,
          [borderStyle === 'circular' ? { width: size === 'medium' ? (label || icon ? 30 : 24) : 10,
            height: size === 'medium' ? (label || icon ? 30 : 24) : 10 } :
            { paddingVertical: size === 'medium' ? 4 : 3, paddingHorizontal: size === 'medium' ? 8 : 6 },
          { backgroundColor: theme?.primary, borderRadius: borderStyle === 'circular' ? 50 : 3 }],
          containerStyle]}
      >
        {(() => {
          if (label) {
            return <Text style={[{ color: theme?.white, fontSize: sizes[size]?.fontSize }, textStyles]}>{label}</Text>;
          }
          if (icon) {
            return icon;
          }
          return null;
        })()}
      </Animated.View>
    )
      : null
}
  </View>
);
export default applyDefaults(Badge);
