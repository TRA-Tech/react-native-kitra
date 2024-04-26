import { Text, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import React from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { BadgeProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const Badge: FCCWD<BadgeProps> = (
  { visible = true,
    label,
    size = 'medium',
    containerStyle,
    badgeStyle,
    labelStyle,
    variant = 'circular',
    icon,
    badgePosition = 'bottomRight',
    children,
    theme },
) => {
  const { statusTheme } = useComponentTheme(theme, 'badge', 'default');

  const styleOfSize = {
    circular: {
      medium: {
        paddingHorizontal: label || icon ? 7 : 10,
        paddingVertical: label || icon ? 7 : 10,
        borderWidth: 3,
        fontSize: 10,
      },
      small: {
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderWidth: 1.5,
        fontSize: 8,
      },
      borderRadius: 50,
    },
    rectangular: {
      medium: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 0,
        fontSize: 10,
      },
      small: {
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderWidth: 0,
        fontSize: 8,
      },
      borderRadius: 3,
    },
  };

  return (
    <View style={[containerStyle, { backgroundColor: 'transparent', alignSelf: 'baseline' }]}>
      {visible ? (
        <Animated.View
          exiting={FadeOut.duration(300)}
          entering={FadeIn.duration(400)}
          style={[badgeStyles.container,
            { position: 'absolute',
              zIndex: 10,
              borderRadius: styleOfSize[variant].borderRadius,
              borderWidth: styleOfSize[variant][size].borderWidth,
              borderColor: statusTheme.border,
              paddingHorizontal: styleOfSize[variant][size].paddingHorizontal,
              paddingVertical: styleOfSize[variant][size].paddingVertical },
            children ? badgePositions[badgePosition] : null,
            badgeStyle, { backgroundColor: statusTheme.background }]}
        >
          {(() => {
            if (label) {
              return <Text style={[{ fontSize: styleOfSize[variant][size].fontSize }, labelStyle, { color: statusTheme.label }]}>{label}</Text>;
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
      <View>
        {children}
      </View>
    </View>
  );
};
export default applyDefaults(Badge);

const badgePositions = {
  topRight: { top: 0, right: 0 },
  topLeft: { top: 0, left: 0 },
  bottomRight: { bottom: 0, right: 0 },
  bottomLeft: { bottom: 0, left: 0 },
};

const badgeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center', alignItems: 'center',
  },
});
