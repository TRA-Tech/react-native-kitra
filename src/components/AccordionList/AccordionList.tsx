import React, { cloneElement, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, FadeOut, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import { type AccordionListProps, type FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import OcticonsIcon from '../Icons/Octicons';

const AnimatedIcon = Animated.createAnimatedComponent(OcticonsIcon);

const AccordionList: FCCWD<AccordionListProps> = ({
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
  itemDisplay,
  testID,
  theme,
  typography,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { statusTheme } = useComponentTheme(theme, 'accordionList', expanded ? 'active' : 'default');
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
        <View style={[styles.labelContianer, labelContainerStyle, { backgroundColor: statusTheme.background }]}>
          {typeof left === 'function' && left?.(expanded)}
          <Text style={[typography?.body.medium, styles.labelText, labelStyle, { color: statusTheme.label }]}>
            {label}
          </Text>
          {typeof right === 'function' && right?.(expanded)}
          <View style={[styles.iconContainer, { backgroundColor: statusTheme.collapseIconBackground }]}>
            <AnimatedIcon
              color={statusTheme.collapseIcon}
              name="chevron-down"
              style={iconStyle}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[animatedStyle, { overflow: 'hidden' }]}>
        <FlatList
          bounces={false}
          data={data || []}
          onContentSizeChange={(w, h) => { if (h > 0 && h !== contentHeight) setContentHeight(h); }}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => onSelect?.(item)}>
              <Animated.View
                entering={FadeInUp}
                exiting={FadeOut}
                style={[styles.itemContainer, rowStyle, { backgroundColor: statusTheme.itemBackground }]}
              >
                <Text style={[{ textAlign: 'center' },
                  typography?.body.smedium, rowTextStyle, { color: statusTheme.itemLabel }]}
                >
                  {itemDisplay?.(item)}
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
