import { Text, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import React, { useState } from 'react';
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
const Badge : FCCWD<BadgeProps> = (
  { theme,
    visible = true,
    label,
    size = 'medium',
    containerStyle,
    textStyles,
    variant = 'circular',
    icon,
    badgePosition = 'bottomRight',
    children },
) => {
  const [childSize, setChildSize] = useState({ width: 0, height: 0 });
  return (
    <View style={{ alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'center', width: childSize.width + 10, height: childSize.height + 10 }}>
      {visible ? (
        <View style={[{ position: 'absolute', zIndex: 10, backgroundColor: theme?.white, borderRadius: 50, padding: variant === 'circular' ? 3 : 0 }, badgePositions[badgePosition]]}>
          <Animated.View
            exiting={FadeOut.duration(300)}
            entering={FadeIn.duration(400)}
            style={[badgeStyles.container,
              [variant === 'circular' ? { width: size === 'medium' ? (label || icon ? 30 : 24) : 10, height: size === 'medium' ? (label || icon ? 30 : 24) : 10 }
                :
                { paddingVertical: size === 'medium' ? 4 : 3, paddingHorizontal: size === 'medium' ? 8 : 6 },
              { backgroundColor: theme?.primary, borderRadius: variant === 'circular' ? 50 : 3 }],
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
        </View>
      )
        : null
}
      <View onLayout={e => setChildSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })}>
        {children}
      </View>
    </View>
  );
};
export default applyDefaults(Badge);
