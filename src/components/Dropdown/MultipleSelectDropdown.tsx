import React, { forwardRef, RefAttributes, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, ScrollViewProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeViewGestureHandlerProps, ScrollView } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, MultipleDropdownProps } from '../../types';
import Button from '../Button/Button';
import FeatherIcon from '../Icons/Feather';
import IoniconsIcon from '../Icons/Ionicons';
import OcticonsIcon from '../Icons/Octicons';

const windowsHeight = Dimensions.get('window').height;

// eslint-disable-next-line no-undef
const GScrollView = forwardRef((props: JSX.IntrinsicAttributes &
   ScrollViewProps & NativeViewGestureHandlerProps & RefAttributes<ScrollView>, ref) => <ScrollView {...props} />);

const MultipleDropdown: FCCWD<MultipleDropdownProps> = (
  { typography,
    left,
    right,
    data,
    displayedRowValue,
    displayedButtonValue,
    listContainerStyle,
    defaultValue = [],
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
    size = 'medium' },
) => {
  const [visible, setVisible] = useState(false);
  const [selectedObjects, setSelectedObjects] = useState(defaultValue || []);
  const [cord, setCord] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const openAnimation = useSharedValue(0);
  const dataWithID = useRef();
  const { statusTheme, componentTheme } = useComponentTheme(
    theme,
    'multipleDropdown',
    selectedObjects.length ? 'selected' : (disabled ? 'disabled' : (visible ? 'active' : 'default')),
  );
  const componenetStatus = disabled ? 'disabled' : (visible ? 'active' : 'default');
  const dropdown = useRef<TouchableOpacity>(null);
  const dropdownAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${openAnimation.value * 180}deg` }],
  }), []);

  const sizes = {
    small: {
      buttonHeight: 36,
      typography: typography.body.xsmedium,
      rowHeight: 35,
    },
    medium: {
      buttonHeight: 42,
      typography: typography.body.smedium,
      rowHeight: 38,
    },
    large: {
      buttonHeight: 51,
      typography: typography.body.medium,
      rowHeight: 41,
    },
  };

  const rightElement = useMemo(() => (typeof right === 'function' ? right(visible) : right), [visible, right]);

  const leftElement = useMemo(() => (typeof left === 'function' ? left(visible) : left), [visible, left]);

  const toggleCheckBox = (value: string | { [key: string]: any; }) => {
    const selectedObjectsTemp = [...selectedObjects];
    const valueIndex = selectedObjectsTemp.indexOf(value);
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
  return (
    <View testID={testID} style={[containerStyle, { zIndex: visible ? 1000 : 0 }]}>
      <TouchableOpacity
        testID="dropdown-button"
        ref={dropdown}
        activeOpacity={0.9}
        disabled={disabled}
        onPress={() => { setVisible(!visible); }}
        style={[Style.button,
          { borderWidth: disabled ? 0 : 1, height: sizes[size].buttonHeight },
          buttonStyle,
          {
            backgroundColor: componentTheme[isObjectSelected ? 'selected' : componenetStatus]?.background,
            borderColor: componentTheme[isObjectSelected ? 'selected' : componenetStatus]?.border,
          }]}
      >
        {leftElement && (
          <View style={Style.leftItem}>
            {leftElement}
          </View>
        )}
        <Animated.Text
          numberOfLines={1}
          entering={FadeIn.delay(100)}
          exiting={FadeOut}
          style={[
            sizes[size].typography,
            buttonTextStyle,
            { flex: 1,
              marginLeft: 12,
              color: componentTheme[isObjectSelected ? 'selected' : componenetStatus]?.label }]}
        >
          {!isObjectSelected ?
            (buttonTitle || 'Please Select')
            : selectedObjects.length <= displayLength ?
              `${selectedObjects.map((item:any) => displayedButtonValue?.(item))}` :
              `${selectedObjects?.length} Selected`}
        </Animated.Text>
        <View style={[Style.rightItem]}>
          {rightElement || (
          <Animated.View style={dropdownAnimation}>
            <FeatherIcon
              name="chevron-down"
              size={14}
              color={statusTheme.collapseIcon}
            />
          </Animated.View>
          )}
        </View>
      </TouchableOpacity>
      {visible && data?.length > 0 && (
      <Animated.View
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
            },
            listContainerStyle,
            (cord?.y + (sizes[size].rowHeight * 6.5) || 0) >= windowsHeight ?
              { bottom: cord?.height || 0 } : { top: 0 },
            { backgroundColor: statusTheme.collapseBackground }]}
        >
          <ScrollView>
            {/* @ts-ignore */}
            {dataWithID?.current?.map((item, index) => {
              const isSelected = isItemSelected(item || {});
              return (
                <TouchableOpacity
                  key={item.keyID}
                  activeOpacity={0.8}
                  onPress={() => {
                    setSelectedObjects(item);
                    toggleCheckBox(item);
                  }}
                  style={[
                    Style.row,
                    index === data?.length || 0 - 1 ?
                      { borderBottomLeftRadius: 5, borderBottomRightRadius: 5, height: sizes[size].rowHeight }
                      : null,
                    rowStyle,
                    {
                      backgroundColor: componentTheme[isSelected ? 'selected' : componenetStatus]?.background,
                    },
                  ]}
                >
                  <TouchableOpacity
                    disabled
                    style={[Style.checkBox, {
                      borderColor: componentTheme[isSelected ? 'selected' : componenetStatus]?.checkBorder,
                      backgroundColor: componentTheme[isSelected ? 'selected' : componenetStatus]?.checkBackground,
                    }]}
                  >
                    {isSelected && (
                    <OcticonsIcon
                      color={componentTheme[isSelected ? 'selected' : componenetStatus]?.checkIcon}
                      name="check"
                      size={12}
                    />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={[sizes[size].typography,
                      { marginHorizontal: 10 },
                      rowTextStyle, { color: componentTheme[isSelected ? 'selected' : componenetStatus]?.itemLabel }]}
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
              data?.length === selectedObjects.length ? setSelectedObjects([]) : setSelectedObjects(data);
            }}
            style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
          >
            <Text
              style={[typography?.body.smedium, { textAlign: 'right', color: statusTheme.selectAllLabel }]}
            >
              Select All
            </Text>
            <IoniconsIcon
              name="checkmark-done-outline"
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
            label="Complete Selection"
            labelStyle={{ textAlign: 'center' }}
            style={Style.completeSelection}
          />
        </View>
      </Animated.View>
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
    zIndex: 100,
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
    height: 20,
    width: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
