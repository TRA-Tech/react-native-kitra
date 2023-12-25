import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import Animated, { FadeIn, runOnJS, SharedValue, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { default as PagerViewComponent, PagerViewOnPageScrollEvent, PagerViewProps as PWProps } from 'react-native-pager-view';
import type { FCCWD, IconComponentProps, IconType, PagerViewProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Divider from '../Divider/Divider';
import type Icon from '../Icons/Icon';

const style = StyleSheet.create({
  container: { flex: 1 },
  headersContainer: { flexDirection: 'row', padding: 5, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', width: 315, height: 50 },
  headerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerText: { margin: 10, textAlign: 'center', fontSize: 12, fontWeight: '500', flexDirection: 'row' },
  slider: { position: 'absolute', borderRadius: 8, margin: 5, alignItems: 'center' },
  pageContainer: { height: '100%', width: '100%', flex: 1 },
  divider: { position: 'absolute', bottom: 0, height: 4, margin: 5 },
});

export type TabItemProps = {
  item: ReactNode,
  index: number,
  theme:{[index: string]: string} | undefined,
  refPager: React.RefObject<PagerViewComponent>,
  setSize: Dispatch<SetStateAction<{ height: number, width: number }>>,
  slideValue: SharedValue<number>
  headerTextColor: {select:string|undefined, default:string|undefined},
  headerTextStyle?:StyleProp<TextStyle>,
  icons?: React.ReactElement<typeof Icon>[],
  selectPage:number
}
const TabItem:FCCWD<TabItemProps> = ({ theme, icons, selectPage, typography, item, index, refPager, setSize, slideValue, headerTextStyle, headerTextColor }) => {
  const textColorStyle = useAnimatedStyle(() => {
    if (index - slideValue.value < 0.3 && index - slideValue.value > -0.5) { return { color: headerTextColor.select || theme?.white }; }
    return { color: headerTextColor.default || theme?.primary };
  });

  return (
    <TouchableOpacity
      key={index}
      testID={`tab_button_${index}`}
      onLayout={({ nativeEvent }) =>
        setSize({ height: nativeEvent.layout.height, width: nativeEvent.layout.width })}
      style={[style.headerContainer]}
      onPress={() => { refPager.current?.setPage(index); }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* @ts-ignore */}
        {icons && icons[index] && React.cloneElement(icons[index], { color: selectPage === index ? headerTextColor.select : headerTextColor.default })}
        {/* @ts-ignore */}
        <Animated.Text style={[{ fontSize: typography?.body.medium.fontSize, lineHeight: typography?.body.medium.lineHeight }, style.headerText, textColorStyle, headerTextStyle]}>{item.key}</Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const AnimatedPager = Animated.createAnimatedComponent(PagerViewComponent);

const PagerView:FCCWD<PagerViewProps&PWProps> =
({ theme,
  typography,
  children,
  containerStyle,
  pageContainerStyle,
  headerTextColor,
  headerTextStyle,
  injectPagerRef = false,
  headerSliderStyle,
  headerContainerStyle,
  showDivider = true,
  dividerStyle,
  dividerColor,
  icons }) => {
  const refPager = useRef<PagerViewComponent>(null);
  const slideValue = useSharedValue(0);
  const [size, setSize] = useState<{ height: number, width: number }>({ height: 0, width: 0 });
  const [selectPage, setSelectPage] = useState(0);
  const headerSliderAnimated = useAnimatedStyle(() => (
    { left: (slideValue.value * (size?.width ? size.width : 0)) ? (slideValue.value * (size?.width ? size.width : 0)) : 0 }
  ));

  const onPageScroll = (e: PagerViewOnPageScrollEvent) => {
    if (e.nativeEvent.offset < 1) { slideValue.value = +e.nativeEvent.offset + e.nativeEvent.position; }
  };

  return (
    <View style={[style.container, containerStyle]}>
      <View style={[{ backgroundColor: theme?.white }, style.headersContainer, headerContainerStyle]}>
        {React.Children.map(children, (item, index) => (
          <TabItem
            theme={theme}
            selectPage={selectPage}
            item={item}
            icons={icons}
            index={index}
            refPager={refPager}
            setSize={setSize}
            slideValue={slideValue}
            typography={typography}
            headerTextStyle={headerTextStyle}
            headerTextColor={headerTextColor || { select: theme?.white, default: theme?.primary }}
          />
        ))
        }
        <Animated.View style={[style.slider, { backgroundColor: theme?.focused, height: size?.height, width: size?.width, zIndex: 100 }, headerSliderAnimated, headerSliderStyle]} />
        {showDivider &&
        <Divider style={[style.divider, dividerStyle]} color={dividerColor} />
 }
      </View>

      <AnimatedPager
        ref={refPager}
        entering={FadeIn}
        onPageScroll={onPageScroll}
        overScrollMode="never"
        overdrag={false}
        style={[{ flex: 1 }, pageContainerStyle]}
        initialPage={0}
        onPageSelected={e => setSelectPage(e.nativeEvent.position)}
      >

        {React.Children.map(children, (item, index) => {
          if (React.isValidElement(item)) {
            return (
              <View style={[style.pageContainer]} key={index + 1}>
                {injectPagerRef ? React.cloneElement(item.props.children, { ref: refPager }) : item}
              </View>
            );
          }
          return null;
        })}
      </AnimatedPager>
    </View>
  );
};
export default applyDefaults(PagerView);
