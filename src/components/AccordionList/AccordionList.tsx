import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Animated, { FadeInUp, FadeOut, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { AccordionListProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import OcticonsIcon from '../Icons/Octicons';

const AnimatedIcon = Animated.createAnimatedComponent(OcticonsIcon);

const AccordionList: FCCWD<AccordionListProps > = ({
  data,
  label,
  left,
  right,
  labelContainerStyle,
  labelStyle,
  rowTextStyle,
  rowStyle,
  onSelect,
  onExpand,
  theme,
  typography,
  itemDisplay,
  testID,

}) => {
  const [expanded, setExpanded] = useState(false);
  const listHeight = useSharedValue(0);
  const iconRotation = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: listHeight.value,
  }), [contentHeight]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${iconRotation.value}deg` }],
  }), [contentHeight]);

  const handleListOpen = () => {
    if (expanded) {
      listHeight.value = withTiming(0);
      iconRotation.value = withTiming(0);
    } else {
      onExpand?.();
      listHeight.value = withTiming(contentHeight, { duration: 600 });
      iconRotation.value = withTiming(180, { duration: 200 });
    }
    setExpanded(prev => !prev);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={handleListOpen} testID={testID}>
        <View style={[{ backgroundColor: expanded ? theme?.primary15 : theme?.primary5 }, styles.labelContianer, labelContainerStyle]}>
          {left && left(expanded)}
          <Text style={[{ color: expanded ? theme?.primary : theme?.lightBlack }, typography?.body.medium, styles.labelText, labelStyle]}>
            {label}
          </Text>
          {right && right(expanded)}
          <View style={[{ backgroundColor: expanded ? theme?.primary30 : theme?.lightGrey }, styles.iconContainer]}>
            <AnimatedIcon
              color={expanded ? theme?.primary : theme?.disabledLight}
              name="chevron-down"
              style={iconStyle}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[animatedStyle, { overflow: 'hidden' }]}>
        <FlashList
          bounces={false}
          data={data}
          estimatedItemSize={21}
          onContentSizeChange={(w, h) => { if (h > 0 && h !== contentHeight) setContentHeight(h); }}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => onSelect(item)}>
              <Animated.View
                entering={FadeInUp}
                exiting={FadeOut}
                style={[styles.itemContainer, { backgroundColor: theme?.primary5 }, rowStyle]}
              >
                <Text style={[{ textAlign: 'center', color: theme?.grey }, typography?.body.smedium, rowTextStyle]}>
                  {itemDisplay(item)}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </>
  );
};

export default applyDefaults(AccordionList);

const styles = StyleSheet.create({
  labelContianer: { padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 3 },
  labelText: { textAlign: 'left', marginHorizontal: 10, flex: 1 },
  iconContainer: { borderRadius: 3, paddingVertical: 6, paddingHorizontal: 10 },
  itemContainer: { padding: 10 },
});
