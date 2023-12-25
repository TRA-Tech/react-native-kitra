import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { FCCWD, SliderProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Slider: FCCWD<SliderProps> = (
  {
    theme,
    showPercentage,
    onChangeEnd = () => null,
    value,
    buttonStyle,
    barStyle,
    progressStyle,
  },
) => {
  const progress = useSharedValue(0);
  const containerRef = useRef<View>(null);
  const [measure, setMeasure] = useState({ x: 0, y: 0, pageX: 0, pageY: 0, width: 0, height: 0 });
  const onEndHandler = () => {
    onChangeEnd(Number(((progress.value / (measure.width - 20)) * 100).toFixed()));
  };

  const animatedProps = useAnimatedProps(() => ({
    text: `%${((progress.value / (measure.width - 20)) * 100).toFixed().toString()}`,
  } as any));

  const handler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      // @ts-ignore
      ctx.offsetX = progress.value;
    },
    onActive: (event, ctx) => {
      // @ts-ignore
      let newTranslateX = event.translationX + ctx.offsetX;
      if (newTranslateX < 0) { newTranslateX = 0; }
      if (newTranslateX > measure.width - 20) { newTranslateX = measure.width - 20; }
      if (newTranslateX >= 0 && newTranslateX <= measure.width - 20) { progress.value = newTranslateX; }
    },
    onEnd: () => runOnJS(onEndHandler)(),
  }, [measure]);

  useEffect(() => {
    if (value) {
      if (value >= 100) progress.value = withTiming(100);
      if (value <= 0) { progress.value = withTiming(0); } else progress.value = withTiming((value / 100) * (measure.width - 20));
    }
  }, [value, measure]);

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
    <View style={{ flex: 1 }}>
      <GestureDetector gesture={tap}>
        <View
          ref={containerRef}
          onLayout={() => containerRef.current?.measure((x, y, width, height, pageX, pageY) => { setMeasure({ x, y, pageX, pageY, width, height }); })}
          style={[{ backgroundColor: theme?.primary15 }, Style.barStyle, barStyle]}
        >
          <Animated.View style={[{ position: 'absolute', borderRadius: 14, backgroundColor: theme?.primary, width: progress.value, height: 6 }, progressStyle, percentageStyle]} />
          <PanGestureHandler onGestureEvent={handler}>
            <Animated.View hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }} style={[{ backgroundColor: theme?.white }, Style.button, buttonStyle, progressBarStyle]}>
              {showPercentage && (
                <View style={[Style.percentageIndicator, { backgroundColor: theme?.primary }]}>
                  <AnimatedTextInput
                    underlineColorAndroid="transparent"
                    editable={false}
                    style={{ textAlign: 'center', color: theme?.white, fontSize: 12 }}
                    value={progress.value.toString()}
                    {...{ animatedProps }}
                  />
                </View>
              )}
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureDetector>
    </View>
  );
};

const Style = StyleSheet.create({
  percentageIndicator: { position: 'absolute', justifyContent: 'center', top: -30, width: 35, height: 25, borderRadius: 5, alignSelf: 'center' },
  button: { position: 'absolute', height: 20, width: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.46, shadowRadius: 11.14, elevation: 17 },
  barStyle: { borderRadius: 14, height: 6, justifyContent: 'center' },
});
export default applyDefaults(Slider);
