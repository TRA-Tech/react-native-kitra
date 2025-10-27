import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS,
  useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { FCCWD, SliderProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import useComponentTheme from '../../core/hooks/useComponentTheme';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Slider: FCCWD<SliderProps> = (
  {
    showPercentage,
    onChangeEnd = () => null,
    defaultValue,
    buttonStyle,
    barStyle,
    progressStyle,
    theme,
    containerStyle,
  },
) => {
  const { statusTheme } = useComponentTheme(theme, 'slider', 'default');
  const progress = useSharedValue(0);
  const containerRef = useRef<View>(null);
  const [measure, setMeasure] = useState({ x: 0, y: 0, pageX: 0, pageY: 0, width: 0, height: 0 });
  const startX = useSharedValue(0);
  
  const onEndHandler = () => {
    onChangeEnd(Number(((progress.value / (measure.width - 20)) * 100).toFixed()));
  };

  const animatedProps = useAnimatedProps(() => ({
    text: `%${((progress.value / (measure.width - 20)) * 100).toFixed().toString()}`,
  } as any));

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = progress.value;
    })
    .onUpdate(event => {
      let newTranslateX = event.translationX + startX.value;
      if (newTranslateX < 0) { newTranslateX = 0; }
      if (newTranslateX > measure.width - 20) { newTranslateX = measure.width - 20; }
      if (newTranslateX >= 0 && newTranslateX <= measure.width - 20) {
        progress.value = newTranslateX;
      }
    })
    .onEnd(() => {
      runOnJS(onEndHandler)();
    });

  useEffect(() => {
    if (defaultValue) {
      if (defaultValue >= 100) progress.value = withTiming(100);
      if (defaultValue <= 0) {
        progress.value = withTiming(0);
      } else progress.value = withTiming((defaultValue / 100) * (measure.width - 20));
    }
  }, [defaultValue, measure]);

  const progressBarStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value }],
  }), [progress.value]);

  const percentageStyle = useAnimatedStyle(() => ({
    width: progress.value + 5,
  }), [progress.value]);

  const tap = Gesture.Tap().onStart(e => {
    const translateX = e.x > measure.width - 20 ? measure.width - 20 : e.x;
    progress.value = withTiming(translateX);
  });
  
  return (
    <View style={containerStyle}>
      <GestureDetector gesture={tap}>
        <View
          ref={containerRef}
          onLayout={() =>
            containerRef.current?.measure((x, y, width, height, pageX, pageY) => {
              setMeasure({ x, y, pageX, pageY, width, height });
            })}
          style={[Style.barStyle, barStyle, { backgroundColor: statusTheme.bar }]}
        >
          <Animated.View style={[{ position: 'absolute',
            borderRadius: 14,
            width: progress,
            height: 6 }, progressStyle, percentageStyle, { backgroundColor: statusTheme.progress }]}
          />
          <GestureDetector gesture={panGesture}>
            <Animated.View
              hitSlop={{ top: 25,
                bottom: 25,
                left: 25,
                right: 25 }}
              style={[Style.button, buttonStyle, progressBarStyle, { backgroundColor: statusTheme.thumb }]}
            >
              {showPercentage && (
                <View style={[Style.percentageIndicator, { backgroundColor: statusTheme.percentageBackground }]}>
                  <AnimatedTextInput
                    underlineColorAndroid="transparent"
                    editable={false}
                    style={{ textAlign: 'center', fontSize: 12, color: statusTheme.percentageLabel }}
                    value={`%${progress.value.toString()}`}
                    {...{ animatedProps }}
                  />
                </View>
              )}
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureDetector>
    </View>
  );
};

const Style = StyleSheet.create({
  percentageIndicator: { position: 'absolute',
    justifyContent: 'center',
    top: -30,
    width: 35,
    height: 25,
    borderRadius: 5,
    alignSelf: 'center' },
  button: { position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17 },
  barStyle: { borderRadius: 14, height: 6, justifyContent: 'center' },
});
export default applyDefaults(Slider);
