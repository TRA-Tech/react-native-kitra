import { FlatList, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import {
  ReactElement,
  cloneElement, forwardRef, useImperativeHandle, useRef, useState,
} from 'react';
import { DefaultProps, PagerViewProps } from 'src/types';
import Animated,
{
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import { applyDefaults } from '../../core/KitraProvider';
import useComponentTheme from '../../core/hooks/useComponentTheme';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const HeaderItem = forwardRef<FlatList,
  {
    item: ReactElement,
    index: number,
    headerScroll: SharedValue<number>,
    componentTheme: any,
    labelStyle: StyleProp<ViewStyle>
  }>((
    {
      item,
      index,
      headerScroll,
      componentTheme,
      labelStyle,
    },
    ref,
  ) => {
    const textColorStyle = useAnimatedStyle(() => {
      const textColorInterpolation = interpolateColor(
        headerScroll.value,
        [index - 1, index],
        [componentTheme.default.headerLabel, componentTheme.active.headerLabel],
      );
      const textColorInterpolation2 = interpolateColor(
        headerScroll.value,
        [index, index + 1],
        [componentTheme.active.headerLabel, componentTheme.default.headerLabel],
      );

      if ((index < headerScroll.value + 1)) {
        if (index < headerScroll.value) { return { color: textColorInterpolation2 }; }
        return { color: textColorInterpolation };
      }
      return { color: componentTheme.default.headerLabel };
    });

    return (
      <AnimatedTouchableOpacity
        // @ts-ignore
        onPress={() => ref?.current?.scrollToIndex({ index })}
        activeOpacity={0.7}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}
      >
        <Animated.Text
          key={item.key}
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[style.headerLabel, textColorStyle, labelStyle]}
        >
          {item.key}
        </Animated.Text>
      </AnimatedTouchableOpacity>
    );
  });

const PagerView = forwardRef<FlatList, PagerViewProps & { children: ReactElement[] } & DefaultProps>(
  ({ children, theme, typography, ...props }, externalRef) => {
    const { length } = children;
    const internalRef = useRef<FlatList>(null);
    // @ts-ignore
    useImperativeHandle(externalRef, () => ({
      ...internalRef.current,
      scrollToIndex: index => {
        // @ts-ignore
        internalRef.current?.scrollToIndex({ index, animated: true });
      },
    }));
    const { componentTheme } = useComponentTheme(theme, 'pagerView');
    const [contentSize, setContentSize] = useState(0);
    const [headerSize, setHeaderSize] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const scroll = useSharedValue(0);
    const pagerScroll = useDerivedValue(() => interpolate(scroll.value, [0, contentSize], [0, headerSize]).toFixed(2));
    const headerScroll = useDerivedValue(() =>
      Number((interpolate(Number(pagerScroll.value), [0, contentSize], [0, length]).toFixed(2))) * length);

    const moveSelect = useAnimatedStyle(() => ({
      left: Number(pagerScroll.value),
    }));

    return (
      <View style={[{ alignSelf: 'baseline' }, props.containerStyle]}>
        <View
          onLayout={x => setHeaderSize(x.nativeEvent.layout.width)}
          style={[{
            backgroundColor: componentTheme.default?.headerBackground,
          }, style.headerContainer, props.headerContainerStyle]}
        >
          <Animated.View style={
            [moveSelect,
              style.headerSlider,
              {
                width: (headerSize / length),
                backgroundColor: componentTheme.active?.headerBackground,
              }, props.headerSliderStyle]}
          />

          {children.map((item, index) => (
            <HeaderItem
              key={item.key}
              item={item}
              ref={internalRef}
              index={index}
              headerScroll={headerScroll}
              componentTheme={componentTheme}
              labelStyle={props.headerLabelStyle}
            />
          ))}
        </View>

        <FlatList
          ref={internalRef}
          data={children}
          showsHorizontalScrollIndicator={false}
          onScroll={x => { scroll.value = x.nativeEvent.contentOffset.x; }}
          onContentSizeChange={x => setContentSize(x)}
          scrollEventThrottle={16}
          contentContainerStyle={props.pageContainerStyle}
          keyExtractor={(item, index) => item.key || index.toString()}
          pagingEnabled
          onLayout={x => setWindowWidth(x.nativeEvent.layout.width)}
          renderItem={({ item }) => cloneElement(
            item,
            {
              style: {
                ...item.props.style,
                width: windowWidth,
              },
              ref: internalRef,
            },
          )}
          bounces={false}
          horizontal
        />
      </View>
    );
  },
);

const style = StyleSheet.create({
  headerContainer: {
    borderRadius: 10,
    height: 44,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  headerLabel: {
    includeFontPadding: false,
  },
  headerSlider: {
    position: 'absolute',
    borderRadius: 10,
    height: '100%',
  },
});

export default applyDefaults(PagerView);
