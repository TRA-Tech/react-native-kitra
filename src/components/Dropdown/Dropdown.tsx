/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import type { DrowdownProps, FCCWD } from '../../types';

import FeatherIcon from '../Icons/Feather';

const windowsHeight = Dimensions.get('window').height;

const Dropdown: FCCWD<DrowdownProps> = (
  { left,
    right,
    theme,
    typography,
    data,
    displayedRowValue,
    displayedButtonValue,
    listContainerStyle,
    defaultValue = {},
    buttonTitle,
    rowStyle,
    buttonStyle,
    disabled,
    buttonTextStyle,
    onSelect,
    rowTextStyle,
    containerStyle,
    iconStyle,
    autoPosition = true,
    testID,
    buttonBackgrounColor = { focusBackground: theme?.primary5, defaultBackground: theme?.darkWhite } },
) => {
  const [visible, setVisible] = useState(false);
  const [selectedObject, setSelectedObject] = useState(defaultValue);
  const [cord, setCord] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const openAnimation = useSharedValue(0);
  const dropdown = useRef<TouchableOpacity>(null);

  const rightElement = useMemo(() => (typeof right === 'function' ? right(visible) : right), [visible, right]);

  const leftElement = useMemo(() => (typeof left === 'function' ? left(visible) : left), [visible, left]);

  const dropdownAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${openAnimation.value * 180}deg` }],
  }), []);

  const isObjectSelected = (Object.keys(selectedObject).length === 0);
  const isSelectedObject = (value: any) => displayedButtonValue(selectedObject) === displayedButtonValue(value);

  useLayoutEffect(() => {
    dropdown?.current?.measure((x, y, width, height, pageX, pageY) => {
      setCord({ width, height, x: pageX, y: pageY });
    });
  }, [visible]);

  useEffect(() => {
    openAnimation.value = withSpring(visible ? 1 : 0);
  }, [visible]);

  return (
    <View testID={testID} style={[containerStyle, { opacity: disabled ? 0.5 : 1, zIndex: visible ? 1000 : 0 }]}>
      <TouchableOpacity
        ref={dropdown}
        activeOpacity={0.9}
        disabled={disabled}
        onLayout={event => setCord(event.nativeEvent.layout)}
        onPress={() => { setVisible(!visible); }}
        style={[Style.button, buttonStyle, { backgroundColor: visible ? buttonBackgrounColor.focusBackground : buttonBackgrounColor.defaultBackground }]}
      >
        {leftElement}
        <Animated.Text
          numberOfLines={1}
          key={displayedButtonValue(selectedObject)}
          entering={FadeIn.delay(100)}
          exiting={FadeOut}
          style={[
            {
              flex: 1,
              marginLeft: 12,
              color: isObjectSelected || disabled ? theme?.grey : theme?.primary,
            },
            typography?.body.medium, buttonTextStyle]}
        >
          {isObjectSelected ? (buttonTitle || 'Please Select') : displayedButtonValue(selectedObject)}
        </Animated.Text>
        {rightElement || (
          <View style={[Style.rightIcon, { backgroundColor: visible ? buttonBackgrounColor.focusBackground : buttonBackgrounColor.defaultBackground }, iconStyle?.container]}>
            <Animated.View style={dropdownAnimation}>
              <FeatherIcon
                name="chevron-down"
                size={14}
                color={iconStyle?.color || (visible ? theme?.primary : theme?.grey)}
              />
            </Animated.View>
          </View>
        )}
      </TouchableOpacity>
      {visible && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={[Style.listContainer,
            {
              backgroundColor: theme?.darkWhite,
              width: cord?.width,
              left: 0,
            }, listContainerStyle,
            autoPosition ? (windowsHeight - cord?.y <= windowsHeight / 3 ? { bottom: cord?.height + 5 } : { top: cord?.height + 5 }) : { top: cord?.height + 5 }]}
        >
          <ScrollView nestedScrollEnabled>
            {data?.map((value, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                onPress={() => {
                  setSelectedObject(value);
                  setVisible(false);
                  onSelect?.(value);
                }}
                style={[
                  Style.row, {
                    backgroundColor: isSelectedObject(value) ? theme?.primary15 : theme?.darkWhite,
                  },
                  index === data.length - 1 ? { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 } : null,
                  rowStyle,
                ]}
              >
                <Text style={[typography?.body.smedium, { color: isSelectedObject(value) ? theme?.primary : theme?.black, marginVertical: 10, marginHorizontal: 10 }, rowTextStyle]}>{displayedRowValue(value)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

        </Animated.View>
      )}
    </View>
  );
};

export default Dropdown;

export const Style = StyleSheet.create({
  button: {
    height: 38,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },

  listContainer: {
    zIndex: 100,
    padding: 10,
    height: 36 * 4.5,
    width: '100%',
    position: 'absolute',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    elevation: 4,
    borderRadius: 5,
  },

  row: {
    height: 38,
    borderRadius: 3,
    borderWidth: 0,
    justifyContent: 'center',
  },

  rightIcon: {
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 12,
  },
});
