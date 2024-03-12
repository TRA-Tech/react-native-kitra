/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { DrowdownProps, FCCWD } from '../../types';
import FeatherIcon from '../Icons/Feather';

const windowsHeight = Dimensions.get('window').height;

const Dropdown: FCCWD<DrowdownProps> = (
  { left,
    right,
    typography,
    data,
    displayedRowValue,
    displayedButtonValue,
    listContainerStyle,
    defaultValue = {},
    buttonTitle,
    rowStyle,
    buttonStyle,
    buttonTextStyle,
    onSelect,
    rowTextStyle,
    containerStyle,
    autoPosition = true,
    testID,
    theme },
) => {
  const [visible, setVisible] = useState(false);
  const [selectedObject, setSelectedObject] = useState(defaultValue);
  const [cord, setCord] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const { statusTheme, componentTheme } = useComponentTheme(theme, 'dropdown', visible ? 'active' : 'default');

  const isObjectSelected = (Object.keys(selectedObject).length !== 0);
  const isSelectedObject = (value: any) => displayedButtonValue(selectedObject) === displayedButtonValue(value);
  const componenetStatus = visible ? 'active' : 'default';

  const openAnimation = useSharedValue(0);
  const dropdown = useRef<TouchableOpacity>(null);

  const rightElement = useMemo(() => (typeof right === 'function' ? right(visible) : right), [visible, right]);

  const leftElement = useMemo(() => (typeof left === 'function' ? left(visible) : left), [visible, left]);

  const dropdownAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${openAnimation.value * 180}deg` }],
  }), []);

  useLayoutEffect(() => {
    dropdown?.current?.measure((x, y, width, height, pageX, pageY) => {
      setCord({ width, height, x: pageX, y: pageY });
    });
  }, [visible]);

  useEffect(() => {
    openAnimation.value = withSpring(visible ? 1 : 0);
  }, [visible]);

  return (
    <View testID={testID} style={[containerStyle, { zIndex: visible ? 1000 : 0 }]}>
      <TouchableOpacity
        ref={dropdown}
        activeOpacity={0.9}
        onLayout={event => setCord(event.nativeEvent.layout)}
        onPress={() => { setVisible(!visible); }}
        style={[Style.button, buttonStyle, { borderColor: statusTheme.border }]}
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
              color: componentTheme[isObjectSelected ? 'selected' : componenetStatus].label,
            },
            typography?.body.medium, buttonTextStyle]}
        >
          {isObjectSelected ? displayedButtonValue(selectedObject) : (buttonTitle || 'Please Select')}
        </Animated.Text>
        {rightElement || (
          <View style={[Style.rightIcon]}>
            <Animated.View style={dropdownAnimation}>
              <FeatherIcon
                name="chevron-down"
                size={14}
                color={statusTheme.collapseIcon}
              />
            </Animated.View>
          </View>
        )}
      </TouchableOpacity>
      {visible && cord.x >= 0 && cord.y >= 0 && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={[Style.listContainer,
            {
              backgroundColor: statusTheme.background,
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
                    backgroundColor: componentTheme[isSelectedObject(value) ? 'selected' : componenetStatus].itemBackground,
                  },
                  index === data.length - 1 ? { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 } : null,
                  rowStyle,
                ]}
              >
                <Text style={[typography?.body.smedium, { color: componentTheme[isSelectedObject(value) ? 'selected' : componenetStatus].itemLabel, marginVertical: 10, marginHorizontal: 10 }, rowTextStyle]}>{displayedRowValue(value)}</Text>
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
    height: 42,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
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
