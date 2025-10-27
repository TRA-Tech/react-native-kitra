import React, { useLayoutEffect, useRef, useCallback } from 'react';
import { Dimensions, TouchableOpacity, I18nManager, StyleSheet, Text, View, Pressable } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import type { SwipeableProps, SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, { useAnimatedStyle, interpolate, SharedValue } from 'react-native-reanimated';
import type { FCCWD, RenderRightActionProps, SwipeProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(Pressable);
const screenWith = Dimensions.get('screen').width;
let swipeWidth: number;

interface RightActionProps {
  item: any;
  dragValue: number;
  progress: SharedValue<number>;
  index: number;
  isRadius: boolean;
  swipeableMethods: SwipeableMethods;
  typography: any;
}

const RightAction = React.memo(({
  item,
  dragValue,
  progress,
  index,
  isRadius,
  swipeableMethods,
  typography,
}: RightActionProps) => {
  const { label, style, icon, labelStyle } = item;

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';

    const translateX = interpolate(
      progress.value,
      [0, 1],
      [dragValue, 0],
    );

    return {
      transform: [{ translateX }],
    };
  }, [progress, dragValue]);

  return (
    <AnimatedTouchableOpacity
      style={[
        {
          marginLeft: index === 0 && isRadius ? 5 : 0,
          borderRadius: isRadius ? 10 : 0,
          width: isRadius ? 50 : 82,
        },
        styles.rightAction,
        style,
        animatedStyle,
      ]}
      onPress={() => {
        item.onPress?.({ current: swipeableMethods });
        swipeableMethods.close();
      }}
    >
      {icon}
      {!!label && (
        <Text
          style={[
            typography?.body.xsmedium,
            styles.actionText,
            labelStyle,
            { marginTop: icon ? 10 : 0 },
          ]}
        >
          {label}
        </Text>
      )}
    </AnimatedTouchableOpacity>
  );
});

interface LeftActionProps {
  leftAction: any;
  translation: SharedValue<number>;
  swipeableMethods: SwipeableMethods;
  typography: any;
}

const LeftAction = React.memo(({
  leftAction,
  translation,
  swipeableMethods,
  typography,
}: LeftActionProps) => {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [contentWidth, setContentWidth] = React.useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';

    // Calculate the offset needed to center the content
    // When translation.value reaches containerWidth, we want content centered
    const centerOffset = containerWidth > 0 && contentWidth > 0
      ? (containerWidth - contentWidth) / 2
      : 0;

    // Map translation to translateX that centers the content
    const translateX = translation.value > 0
      ? interpolate(
        translation.value,
        [0, containerWidth],
        [0, centerOffset],
      )
      : 0;

    return {
      transform: [{ translateX }],
    };
  }, [translation, containerWidth, contentWidth]);

  return (
    <TouchableOpacity
      style={[styles.leftAction, leftAction?.style]}
      onPress={() => {
        leftAction?.onPress?.({ current: swipeableMethods });
        swipeableMethods.close();
      }}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <Animated.View
        style={[styles.leftActionContainer, animatedStyle]}
        onLayout={e => setContentWidth(e.nativeEvent.layout.width)}
      >
        {leftAction?.icon}
        <Text
          style={[
            typography?.body.xsmedium,
            styles.actionText,
            leftAction?.labelStyle,
          ]}
        >
          {leftAction?.label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
});

const Swipe: FCCWD<SwipeProps & SwipeableProps> = ({
  children = <View />,
  typography,
  variant = 'no-radius',
  rightActions,
  leftAction = {
    onPress: () => {},
  },
  ...props

}) => {
  const swipeRef = useRef<React.ElementRef<typeof Swipeable>>(null);
  const isRadius = variant === 'radius';

  useLayoutEffect(() => {
    if (rightActions) {
      const radiusValue = isRadius ? 5 + rightActions.length * 5 : 0;
      const defaultWidth = isRadius ? 50 : 82;
      const totalWidth = rightActions?.reduce(
        (acc, cur) => acc + ((cur?.style as any)?.width || defaultWidth),
        0,
      ) || 0;
      swipeWidth = totalWidth + radiusValue;
    }
  }, [variant, isRadius, rightActions]);

  const renderLeftAction = useCallback((
    _progress: SharedValue<number>,
    translation: SharedValue<number>,
    swipeableMethods: SwipeableMethods,
  ) => (
    <LeftAction
      leftAction={leftAction}
      translation={translation}
      swipeableMethods={swipeableMethods}
      typography={typography}
    />
  ), [leftAction, typography]);

  const renderRightActions = useCallback((
    progress: SharedValue<number>,
    _translation: any,
    swipeableMethods: SwipeableMethods,
  ) => {
    if (!rightActions) return null;

    return (
      <View
        style={{
          width: swipeWidth,
          columnGap: isRadius ? 5 : 0,
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        }}
      >
        {rightActions.map((item, index) => {
          const dragValue = rightActions
            .slice(0, index * -1 + rightActions.length)
            .reduce((acc, cur) => acc + ((cur?.style as any)?.width || (isRadius ? 50 : 82)), 0);
          return (
            <RightAction
              key={`right-action-${index}`}
              item={item}
              dragValue={dragValue}
              progress={progress}
              index={index}
              isRadius={isRadius}
              swipeableMethods={swipeableMethods}
              typography={typography}
            />
          );
        })}
      </View>
    );
  }, [rightActions, isRadius, typography]);

  const close = () => {
    swipeRef?.current?.close();
  };

  return (
    <Swipeable
      ref={swipeRef}
      friction={2}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      containerStyle={{ borderRadius: isRadius ? 10 : 0 }}
      rightThreshold={40}
      overshootRight={false}
      overshootLeft={false}
      renderLeftActions={leftAction && renderLeftAction}
      renderRightActions={renderRightActions}
      {...props}
    >
      {React.Children.map(children, item =>
        React.cloneElement(item, {
          style: [{ height: 82 }, item.props?.style, { borderRadius: isRadius ? 10 : 0, overflow: 'hidden' }],
        }))}

    </Swipeable>
  );
};

export default applyDefaults(Swipe);

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    justifyContent: 'center',
  },
  actionText: {
    backgroundColor: 'transparent',
  },
  leftActionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  rightAction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
