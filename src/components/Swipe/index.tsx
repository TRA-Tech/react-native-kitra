import React, { useLayoutEffect, useRef } from 'react';
import { Animated, Dimensions, TouchableOpacity, I18nManager, StyleSheet, Text, View, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import type { SwipeableProps } from 'react-native-gesture-handler/lib/typescript/components/Swipeable';
import type { FCCWD, RenderRightActionProps, SwipeProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(Pressable);
const screenWith = Dimensions.get('screen').width;
let swipeWidth: number;

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
  const swipeRef = useRef<Swipeable>(null);
  const isRadius = variant === 'radius';

  useLayoutEffect(() => {
    if (rightActions) {
      const radiusValue = isRadius ? 5 + rightActions.length * 5 : 0;
      // @ts-expect-error
      swipeWidth = (rightActions?.reduce((accumulator, currentValue) => accumulator + (currentValue?.style?.width || (isRadius ? 50 : 82)), 0) || 0) + radiusValue;
    }
  }, [variant]);

  const renderLeftAction = (
    _progress: any,
    dragX: any,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, screenWith],
      outputRange: [-20, screenWith / 2],
    });

    return (
      <TouchableOpacity style={[styles.leftAction, leftAction?.style]} onPress={() => { leftAction?.onPress?.(swipeRef); close(); }}>
        <Animated.View style={[styles.leftActionContainer, {
          transform: [{ translateX: trans }],
        }]}
        >
          {leftAction?.icon}
          <Text
            style={[
              typography?.body.xsmedium,
              styles.actionText,
              leftAction?.textStyle,
            ]}
          >
            {leftAction?.text}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const renderRightAction = ({
    item,
    dragValue,
    progress,
    index,
  }: RenderRightActionProps) => {
    const { text, style, icon, textStyle } = item;
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [dragValue, 0],
    });
    return (
      <AnimatedTouchableOpacity
        key={index}
        style={
          [{
            marginLeft: index === 0 && isRadius ? 5 : 0,
            transform: [{ translateX: trans }],
            borderRadius: isRadius ? 10 : 0,
            width: isRadius ? 50 : 82,
          },
          styles.rightAction,
          style,
          ]}
        onPress={() => item.onPress?.(swipeRef)}
      >
        {icon}
        {!!text && <Text style={[typography?.body.xsmedium, styles.actionText, textStyle, { marginTop: icon ? 10 : 0 }]}>{text}</Text>}
      </AnimatedTouchableOpacity>
    );
  };

  const renderRightActions = (
    progress: any,
    _dragAnimatedValue: any,
  ) => (
    <View
      style={{
        width: swipeWidth,
        columnGap: isRadius ? 5 : 0,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}
    >
      {rightActions?.map((item, index) => {
        const dragValue = rightActions
          .slice(0, index * -1 + rightActions.length)
        // @ts-expect-error
          .reduce((accumulator, currentValue) => accumulator + (currentValue?.style?.width || (isRadius ? 50 : 82)), 0);
        return renderRightAction({ item, dragValue, progress, index });
      })}
    </View>
  );

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
