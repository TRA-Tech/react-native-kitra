import { FlashList } from '@shopify/flash-list';
import { forwardRef, RefAttributes, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, ScrollViewProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeViewGestureHandlerProps, ScrollView } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import type { DrowdownProps, FCCWD } from '../../types';
import { defaultTheme } from '../../core/theme/theme';
import { defaultTypography } from '../../core/typography/typography';
import Button from '../Button/Button';
import FeatherIcon from '../Icons/Feather';
import IoniconsIcon from '../Icons/Ionicons';
import OcticonsIcon from '../Icons/Octicons';

const windowsHeight = Dimensions.get('window').height;

let dataWithID: Array<string | { keyID: number, [key: string]: any }>;

// eslint-disable-next-line no-undef
const GScrollView = forwardRef((props: JSX.IntrinsicAttributes & ScrollViewProps & NativeViewGestureHandlerProps & RefAttributes<ScrollView>, ref) => <ScrollView {...props} />);

const MultipleDropdown: FCCWD<DrowdownProps> = (
  { theme,
    typography,
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
    containerStyle, testID },
) => {
  const [visible, setVisible] = useState(false);
  const [selectedObjects, setSelectedObjects] = useState(defaultValue || []);
  const [cord, setCord] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const openAnimation = useSharedValue(0);
  const dropdown = useRef<TouchableOpacity>(null);
  const dropdownAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${openAnimation.value * 180}deg` }],
  }), []);

  const toggleCheckBox = (value: string | { [key: string]: any; }) => {
    const selectedObjectsTemp = [...selectedObjects];
    const valueIndex = selectedObjectsTemp.indexOf(value);
    if (valueIndex > -1) {
      selectedObjectsTemp.splice(valueIndex, 1);
    } else {
      selectedObjectsTemp.push(value);
    }
    onSelect(selectedObjectsTemp);

    setSelectedObjects(selectedObjectsTemp);
  };

  const isItemSelected = (item: string | { [key: string]: any; }) => {
    const result = selectedObjects?.find((x: any) => (x ? displayedButtonValue(x) === displayedButtonValue(item) : false));
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
    // @ts-expect-error
    dataWithID = data?.map((x: (string | { [key: string]: any })): (string | { keyID: number, [key: string]: any }) => { x.keyID = Math.random(); return (x); });
  }, []);

  return (
    <View testID={testID} style={[containerStyle, { zIndex: 100 }]}>
      <TouchableOpacity
        testID="dropdown-button"
        ref={dropdown}
        activeOpacity={0.9}
        onPress={() => { setVisible(!visible); }}
        style={[Style.button, buttonStyle, { backgroundColor: visible ? theme?.primary5 : theme?.darkWhite }]}
      >
        {left}
        <Animated.Text
          numberOfLines={1}
          entering={FadeIn.delay(100)}
          exiting={FadeOut}
          style={[buttonTextStyle,
            typography?.body.medium,
            { flex: 1, marginLeft: 12, color: isObjectSelected ? theme?.primary : theme?.grey }]}
        >
          {!isObjectSelected ?
            (buttonTitle || 'Please Select')
            : selectedObjects.length <= displayLength ?
              `${selectedObjects.map(item => displayedButtonValue(item))}` :
              `${selectedObjects?.length} Selected`}
        </Animated.Text>
        {right || (
          <View style={[Style.rightIcon, { backgroundColor: visible ? theme?.primary5 : theme?.lightGrey }]}>
            <Animated.View style={dropdownAnimation}>
              <FeatherIcon
                name="chevron-down"
                size={14}
                color={visible ? theme?.primary : theme?.grey}
              />
            </Animated.View>
          </View>
        )}
      </TouchableOpacity>
      {visible && (
        <Animated.View
          testID="dropdown-list"
          entering={FadeIn}
          exiting={FadeOut}
          style={[Style.listContainer,
            {
              backgroundColor: theme?.darkWhite,
              width: cord?.width,
              left: 0,
            },
            listContainerStyle,
            windowsHeight - (cord?.y + (38 * 4) || 0) <= windowsHeight / 3 ? { bottom: cord?.height || 0 + 5 } : { top: cord?.height || 0 + 5 }]}
        >
          <FlashList
            extraData={selectedObjects}
            renderScrollComponent={GScrollView}
            data={dataWithID}
            // @ts-expect-error
            keyExtractor={(item: string | { keyID: number, [key: string]: any }) => item.keyID || displayedRowValue(item)}
            estimatedItemSize={38}
            renderItem={({ item, index }:any) => {
              const isSelected = isItemSelected(item || {});

              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setSelectedObjects(item);
                    toggleCheckBox(item);
                  }}
                  style={[
                    Style.row, {
                      backgroundColor: theme?.darkWhite,
                    },
                    index === data?.length || 0 - 1 ? { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 } : null,
                    rowStyle,
                  ]}
                >
                  <TouchableOpacity
                    disabled
                    style={[Style.checkBox, {
                      borderColor: theme?.disabledLight,
                      backgroundColor: theme?.disabledLightDark,
                    }]}
                  >
                    {isSelected && (
                      <OcticonsIcon
                        color={theme?.primary}
                        name="check"
                        size={12}
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={[typography?.body.smedium,
                      { color: isSelected ? theme?.primary : theme?.black, marginHorizontal: 10 },
                      rowTextStyle]}
                  >
                    {displayedRowValue(item)}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          {selectall && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                data?.length === selectedObjects.length ? setSelectedObjects([]) : setSelectedObjects(data);
              }}
              style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
            >
              <Text
                style={[typography?.body.smedium, { textAlign: 'right', color: theme?.secondary }]}
              >
                Select All
              </Text>
              <IoniconsIcon
                name="checkmark-done-outline"
                size={16}
                style={{ marginLeft: 5 }}
                color={theme?.secondary}
              />
            </TouchableOpacity>
          )}
          <Button
            testID="dropdown-complete-button"
            onPress={() => {
              if (onComplete) onComplete(selectedObjects); setVisible(false);
            }}
            size="large"
            label="Complete Selection"
            textStyle={{ textAlign: 'center' }}
            style={Style.completeSelection}
            iconPosition="left"
            theme={defaultTheme?.light}
            typography={defaultTypography}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default MultipleDropdown;

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
    height: 38 * 4 + 78,
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
    height: 38,
    borderRadius: 3,
  },
  completeSelection: {
    height: 42,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 30.5,
    marginTop: 10,
  },

  rightIcon: {
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 12,
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
