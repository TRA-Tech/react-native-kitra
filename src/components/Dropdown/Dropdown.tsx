/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { opacity } from '../../utilities';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { DrowdownProps, FCCWD } from '../../types';
import Icon from '../Icons/Icon';

const windowsHeight = Dimensions.get('window').height;
const windowsWidth = Dimensions.get('window').width;

const Dropdown: FCCWD<DrowdownProps> = (
  { left,
    right,
    typography,
    data,
    displayedRowValue,
    displayedButtonValue,
    listContainerStyle,
    buttonTitle,
    rowStyle,
    buttonStyle,
    buttonTextStyle,
    onSelect,
    rowTextStyle,
    containerStyle,
    autoPosition = true,
    size = 'medium',
    value,
    disabled,
    defaultValue = {},
    testID,
    theme },
) => {
  const [visible, setVisible] = useState(false);
  const [selectedObject, setSelectedObject] = useState(defaultValue);
  const [cord, setCord] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const { statusTheme, componentTheme } = useComponentTheme(
    theme,
    'dropdown',
    disabled ? 'disabled' : (Object.keys(selectedObject).length ? 'selected' : (visible ? 'active' : 'default')),

  );
  const sizes = {
    small: {
      buttonHeight: 36,
      typography: typography.body.xsregular,
      rowHeight: 35,
      paddingHorizontal: 10,
    },
    medium: {
      buttonHeight: 42,
      typography: typography.body.sregular,
      rowHeight: 38,
      paddingHorizontal: 12,
    },
    large: {
      buttonHeight: 51,
      typography: typography.body.regular,
      rowHeight: 41,
      paddingHorizontal: 15,
    },
  };

  const isObjectSelected = (Object.keys(selectedObject).length !== 0);
  const isSelectedObject = (x: any) => displayedButtonValue?.(selectedObject) === displayedButtonValue?.(x);
  const componentStatus = disabled ? 'disabled' : (visible ? 'active' : 'default');

  const openAnimation = useSharedValue(0);
  const dropdown = useRef<View>(null);

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

  useEffect(
    () => {
      if (value) {
        setSelectedObject(value);
      }
    },
    [value],
  );

  return (
    <View testID={testID} style={[containerStyle]}>
      <TouchableOpacity
        ref={dropdown}
        activeOpacity={0.9}
        disabled={disabled}
        onLayout={event => setCord(event.nativeEvent.layout)}
        onPress={() => { setVisible(!visible); }}
        style={[Style.button, { borderWidth: 1, height: sizes[size].buttonHeight }, buttonStyle,
          {
            borderColor: statusTheme.border,
            backgroundColor: statusTheme.background,
          }]}
      >
        {leftElement && (
          <View style={Style.leftItem}>
            {leftElement}
          </View>
        )}
        <Text
          numberOfLines={1}
          key={displayedButtonValue?.(selectedObject)}
          style={[
            {
              flex: 1,
              paddingHorizontal: sizes[size].paddingHorizontal,
            },
            sizes[size].typography, buttonTextStyle, {
              color: componentTheme[disabled ? componentStatus :
                isObjectSelected ? 'selected' : componentStatus]?.label,
            }]}
        >
          {isObjectSelected ? displayedButtonValue?.(selectedObject) : (buttonTitle || 'Please Select')}
        </Text>

        <View style={[Style.rightItem]}>
          {rightElement || (
            <Animated.View style={dropdownAnimation}>
              <Icon
                name="short-down"
                size={14}
                color={statusTheme.collapseIcon}
              />
            </Animated.View>
          )}
        </View>
      </TouchableOpacity>

      {cord?.x >= 0 && cord.y >= 0 && data?.length > 0 && (
        <Modal
          statusBarTranslucent
          visible={visible}
          transparent
          supportedOrientations={['landscape', 'portrait']}
        >

          <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={{ backgroundColor: opacity('black', 60), flex: 1 }}>
              <Animated.View
                style={{ flex: 1 }}
                entering={FadeIn.duration(300)}
                exiting={FadeOut}
              >

                <View style={[Style.listContainer,
                  {
                    width: cord?.width,
                    left: 0,
                    maxWidth: windowsWidth,
                  },
                  { maxHeight: sizes[size].rowHeight * 4.5 },
                  listContainerStyle,
                  autoPosition ?
                    ((cord?.y || 0) + (sizes[size].rowHeight * 4.5) + 10 +
                    (sizes[size].buttonHeight || 0)) >= windowsHeight ?
                      { bottom: windowsHeight - (cord?.y || 0), left: cord?.x || 0 } :
                      { top: (cord?.y || 0) + (cord?.height || 0), left: cord?.x || 0 }
                    : { top: (cord?.height || 0) + 5 },
                  { backgroundColor: statusTheme.collapseBackground }]}
                >
                  <ScrollView nestedScrollEnabled>
                    {data?.map((x, index) => (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        key={index}
                        onPress={() => {
                          setSelectedObject(x);
                          setVisible(false);
                          onSelect?.(x);
                        }}
                        style={[
                          Style.row,
                          index === data.length - 1 ? { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 } : null,
                          { height: sizes[size].rowHeight },
                          rowStyle,
                          {
                            backgroundColor: componentTheme[isSelectedObject(x) ?
                              'selected' : componentStatus]?.itemBackground,
                          },
                        ]}
                      >
                        <Text style={[sizes[size].typography, { marginVertical: 10, marginHorizontal: 10 },
                          rowTextStyle,
                          { color: componentTheme[isSelectedObject(x) ? 'selected' : componentStatus]?.itemLabel }]}
                        >
                          {displayedRowValue?.(x)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

export default Dropdown;

export const Style = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },

  listContainer: {
    padding: 10,
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
    borderRadius: 3,
    borderWidth: 0,
    justifyContent: 'center',
  },

  rightItem: {
    borderRadius: 3,
    paddingVertical: 2,
    marginRight: 15,
  },

  leftItem: {
    marginLeft: 15,
  },
});
