import React, { forwardRef, RefAttributes, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Modal, ScrollViewProps,
  StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { NativeViewGestureHandlerProps, ScrollView } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, MultipleDropdownProps } from '../../types';
import Button from '../Button/Button';
import { opacity } from '../../utilities';
import Icon from '../Icons/Icon';

const windowsHeight = Dimensions.get('window').height;
const windowsWidth = Dimensions.get('window').width;

const MultipleDropdown: FCCWD<MultipleDropdownProps> = (
  { typography,
    left,
    right,
    data,
    displayedRowValue,
    displayedButtonValue,
    listContainerStyle,
    displayLength = 4,
    buttonTitle,
    rowStyle,
    buttonStyle,
    buttonTextStyle,
    selectall = false,
    onSelect,
    onComplete,
    rowTextStyle,
    containerStyle,
    disabled,
    testID,
    theme,
    defaultValue = [],
    value,
    size = 'medium',
    completeButtonLabelStyle,
    completeButtonLabel,
    overflowButtonLabel,
    selectallButtonLabel,
    checkBoxVariant = 'rectangular' },
) => {
  const [visible, setVisible] = useState(false);
  const [selectedObjects, setSelectedObjects] = useState(defaultValue);
  const [cord, setCord] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const openAnimation = useSharedValue(0);
  const dataWithID = useRef(null);
  const { statusTheme, componentTheme } = useComponentTheme(
    theme,
    'multipleDropdown',
    disabled ? 'disabled' : (Object.keys(selectedObjects).length ? 'selected' : (visible ? 'active' : 'default')),
  );

  const componentStatus = disabled ? 'disabled' : (visible ? 'active' : 'default');
  const dropdown = useRef<View>(null);
  const dropdownAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${openAnimation.value * 180}deg` }],
  }), []);

  const sizes = {
    small: {
      buttonHeight: 36,
      typography: typography.body.xsmedium,
      rowHeight: 35,
      checkBoxWidth: 12,
      checkBoxHeight: 12,
      checkIconSize: 9,
    },
    medium: {
      buttonHeight: 42,
      typography: typography.body.smedium,
      rowHeight: 38,
      checkBoxWidth: 14,
      checkBoxHeight: 14,
      checkIconSize: 10,
    },
    large: {
      buttonHeight: 51,
      typography: typography.body.medium,
      rowHeight: 41,
      checkBoxWidth: 16,
      checkBoxHeight: 16,
      checkIconSize: 11,

    },
  };

  const rightElement = useMemo(() => (typeof right === 'function' ? right(visible) : right), [visible, right]);

  const leftElement = useMemo(() => (typeof left === 'function' ? left(visible) : left), [visible, left]);

  const toggleCheckBox = (value: string | { [key: string]: any; }) => {
    const selectedObjectsTemp = [...selectedObjects];

    const valueIndex = selectedObjectsTemp.findIndex(obj => displayedRowValue(obj) === displayedRowValue(value));

    if (valueIndex > -1) {
      selectedObjectsTemp.splice(valueIndex, 1);
    } else {
      selectedObjectsTemp.push(value);
    }
    onSelect?.(selectedObjectsTemp);
    setSelectedObjects(selectedObjectsTemp);
  };

  const isItemSelected = (item: string | { [key: string]: any; }) => {
    const result = selectedObjects?.find((x: any) =>
      (x ? displayedButtonValue?.(x) === displayedButtonValue?.(item) : false));
    return result;
  };

  const isObjectSelected = !!selectedObjects?.length;

  useLayoutEffect(() => {
    dropdown?.current?.measure((x, y, width, height, pageX, pageY) => {
      setCord({ width, height, x: pageX, y: pageY });
    });
  }, [visible]);

  useEffect(() => {
    openAnimation.value = withSpring(visible ? 1 : 0);
  }, [visible]);

  useEffect(() => {
    const tempData = JSON.parse(JSON.stringify(data || []));
    dataWithID.current = tempData?.map((x: (string | { [key: string]: any })):
      // @ts-ignore
      (string | { keyID: number, [key: string]: any }) => { x.keyID = Math.random(); return (x); });
  }, [data]);

  useEffect(() => {
    if (defaultValue.length > 0) {
      setSelectedObjects(defaultValue);
    }
  }, []);

  useEffect(
    () => {
      if (value) {
        setSelectedObjects(value);
      }
    },
    [value],
  );
  return (
    <View testID={testID} style={[containerStyle]}>
      <TouchableOpacity
        testID="dropdown-button"
        ref={dropdown}
        activeOpacity={0.9}
        disabled={disabled}
        onPress={() => { setVisible(!visible); }}
        style={[Style.button,
          { borderWidth: 1, height: sizes[size].buttonHeight },
          buttonStyle,
          {
            backgroundColor: componentTheme[disabled ?
              componentStatus : isObjectSelected ? 'selected' : componentStatus]?.background,
            borderColor: componentTheme[disabled ?
              componentStatus : isObjectSelected ? 'selected' : componentStatus]?.border,
          }]}
      >
        {leftElement && (
          <View style={Style.leftItem}>
            {leftElement}
          </View>
        )}
        <Text
          numberOfLines={1}
          style={[
            sizes[size].typography,
            buttonTextStyle,
            {
              flex: 1,
              marginLeft: 12,
              color: componentTheme[disabled ?
                componentStatus : isObjectSelected ? 'selected' : componentStatus]?.label,
            }]}
        >
          {!isObjectSelected ?
            (buttonTitle || 'Please Select')
            : selectedObjects.length <= displayLength ?
              `${selectedObjects.map((item: any) => displayedButtonValue?.(item))}` :
              (overflowButtonLabel?.(selectedObjects.length) || `${selectedObjects?.length} Selected`)}
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
      {data?.length > 0 && (
        <Modal
          statusBarTranslucent
          visible={visible}
          transparent
        >

          <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={{ backgroundColor: opacity('black', 60), flex: 1 }}>
              <Animated.View
                style={{ flex: 1 }}
                entering={FadeIn}
                exiting={FadeOut}
              >
                <View
                  testID="dropdown-list"
                  style={[Style.listContainer,
                    {
                      width: cord?.width,
                      left: 0,
                      maxHeight: selectall ? sizes[size].rowHeight * 6.5 : sizes[size].rowHeight * 6,
                      maxWidth: windowsWidth,
                    },
                    listContainerStyle,

                    ((cord?.y || 0) + (sizes[size].rowHeight * 4.5) + 10 + (sizes[size].buttonHeight || 0))
                    >= windowsHeight ?
                      { bottom: windowsHeight - (cord?.y || 0), left: cord?.x || 0 } :
                      { top: (cord?.y || 0) + (cord?.height || 0), left: cord?.x || 0 },
                    { backgroundColor: statusTheme.collapseBackground }]}
                >
                  <ScrollView>
                    {/* @ts-ignore */}
                    {dataWithID?.current?.map((item, index) => {
                      const isSelected = isItemSelected(item || {});
                      return (
                        <TouchableOpacity
                          key={item.keyID || item}
                          activeOpacity={0.8}
                          onPress={() => {
                            toggleCheckBox(item);
                          }}
                          style={[
                            Style.row,
                            index === data?.length || 0 - 1 ?
                              { borderBottomLeftRadius: 5, borderBottomRightRadius: 5, height: sizes[size].rowHeight }
                              : null,
                            rowStyle,
                            {
                              backgroundColor: componentTheme[isSelected ? 'selected' : componentStatus]?.background,
                            },
                          ]}
                        >
                          <TouchableOpacity
                            disabled
                            style={[Style.checkBox, {
                              width: sizes[size].checkBoxWidth,
                              height: sizes[size].checkBoxHeight,
                              borderRadius: checkBoxVariant === 'circular' ? 24 : 3,
                              borderColor: componentTheme[isSelected ? 'selected' : componentStatus]?.checkBorder,
                              backgroundColor: componentTheme[isSelected ?
                                'selected' : componentStatus]?.checkBackground,
                            }]}
                          >
                            {isSelected && (
                              <Icon
                                color={componentTheme[isSelected ? 'selected' : componentStatus]?.checkIcon}
                                name="check"
                                size={sizes[size].checkIconSize}
                              />
                            )}
                          </TouchableOpacity>
                          <Text
                            style={[sizes[size].typography,
                              { marginHorizontal: 10 },
                              rowTextStyle, { color: componentTheme[isSelected ? 'selected'
                                : componentStatus]?.itemLabel }]}
                          >
                            {displayedRowValue?.(item)}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}

                  </ScrollView>
                  {selectall && (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        if (data?.length === selectedObjects.length) {
                          setSelectedObjects([]);
                          onSelect?.([]);
                        } else {
                          onSelect?.(dataWithID.current);
                          setSelectedObjects(dataWithID.current);
                        }
                      }}
                      style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
                    >
                      <Text
                        style={[typography?.body.smedium, { textAlign: 'right', color: statusTheme.selectAllLabel }]}
                      >
                        {selectallButtonLabel || 'Select All'}
                      </Text>
                      <Icon
                        name="double-check"
                        size={16}
                        style={{ marginLeft: 5 }}
                        color={statusTheme.selectAllLabel}
                      />
                    </TouchableOpacity>
                  )}
                  <Button
                    testID="dropdown-complete-button"
                    onPress={() => {
                      if (onComplete) onComplete(selectedObjects); setVisible(false);
                    }}
                    size={size}
                    theme={{
                      default: {
                        background: statusTheme.completeBackground,
                        label: statusTheme.completeLabel,
                      },
                    }}
                    label={completeButtonLabel || 'Complete Selection'}
                    labelStyle={[{ textAlign: 'center' }, completeButtonLabelStyle]}
                    style={Style.completeSelection}
                  />
                </View>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

export default MultipleDropdown;

export const Style = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },

  listContainer: {
    position: 'absolute',
    padding: 10,
    paddingBottom: 14,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  completeSelection: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 30.5,
    marginTop: 10,
  },

  rightItem: {
    borderRadius: 3,
    paddingVertical: 2,
    marginRight: 15,
  },
  leftItem: {
    marginLeft: 15,
  },
  checkBox: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
