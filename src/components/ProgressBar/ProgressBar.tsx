import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { FCCWD, ProgressBarProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const ProgressBar: FCCWD<ProgressBarProps> = ({ theme, progress = 0, barColor, progressColor, progressStyle, testID }) => {
  const offset = useSharedValue(progress);
  const [barWidth, setBarWidth] = useState(0);
  offset.value = progress;
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming((offset.value / 100) * barWidth, {
      duration: 400,
    }),
  }));

  return (
    <View
      testID={testID}
      onLayout={x => setBarWidth(x.nativeEvent.layout.width)}
      style={[Style.container, { backgroundColor: barColor || theme?.primary15 }]}
    >
      <Animated.View
        testID="progressBarAnimation"
        style={
          [
            animatedStyle,
            Style.progressStyle,
            {
              backgroundColor: progressColor || theme?.primary,
            },
            progressStyle,
          ]
        }
      />
    </View>

  );
};
export default applyDefaults(ProgressBar);

export const Style = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', height: 2, width: '100%', overflow: 'visible', justifyContent: 'center' },
  progressStyle: { borderRadius: 14, position: 'absolute', height: 4 },
});
