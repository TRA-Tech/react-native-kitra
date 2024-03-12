import { Text, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useState } from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { BadgeProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const Badge: FCCWD<BadgeProps> = (
  { visible = true,
    label,
    size = 'medium',
    containerStyle,
    textStyles,
    variant = 'circular',
    icon,
    badgePosition = 'bottomRight',
    children,
    theme },
) => {
  const [childSize, setChildSize] = useState({ width: 0, height: 0 });
  const { statusTheme } = useComponentTheme(theme, 'badge', 'default');
  return (
    <View style={{ alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'center', width: childSize.width + 10, height: childSize.height + 10 }}>
      {visible ? (
        <View style={[{ position: 'absolute', zIndex: 10, backgroundColor: statusTheme.border, borderRadius: 50, padding: variant === 'circular' ? 3 : 0 }, badgePositions[badgePosition]]}>
          <Animated.View
            exiting={FadeOut.duration(300)}
            entering={FadeIn.duration(400)}
            style={[badgeStyles.container,
              [variant === 'circular' ? { width: size === 'medium' ? (label || icon ? 30 : 24) : 10, height: size === 'medium' ? (label || icon ? 30 : 24) : 10 }
                :
                { paddingVertical: size === 'medium' ? 4 : 3, paddingHorizontal: size === 'medium' ? 8 : 6 },
              { backgroundColor: statusTheme.background, borderRadius: variant === 'circular' ? 50 : 3 }],
              containerStyle]}
          >
            {(() => {
              if (label) {
                return <Text style={[{ color: statusTheme.label, fontSize: sizes[size]?.fontSize }, textStyles]}>{label}</Text>;
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
