import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, MenuProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Divider from '../Divider/Divider';

const HEIGHT = Dimensions.get('window').height;

const Menu: FCCWD<MenuProps> = (
  { items,
    menuStyle,
    rowTextStyle,
    containerStyle,
    rowStyle,
    closeOnPress,
    button = () => <Text style={{ color: 'red', fontSize: 20, bottom: 5 }}>...</Text>,
    typography,
    theme },
) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [menuHeight, setMenuHeight] = useState({ height: 0 });
  const { statusTheme } = useComponentTheme(theme, 'menu', open ? 'active' : 'default');
  const menu = useRef<View>(null);
  const offset = useSharedValue(0);

  useEffect(() => {
    menu.current?.measure((x, y, width, height, pageX, pageY) => {
      setSize({ x: pageX, y: pageY, width, height });
    });
  }, [open]);

  const closeMenu = useCallback(() => {
    if (closeOnPress) {
      offset.value = 0;
      setOpen(false);
    }
  }, [closeOnPress]);

  const pressButton = () => {
    if (open) {
      setOpen(false);
      offset.value = 0;
    } else {
      setOpen(true);
      offset.value = 1;
    }
  };

  const animatedStyleTop = useAnimatedStyle(() => {
    const top = interpolate(
      offset.value,
      [0, 1],
      [0, size.height + 10],
    );
    return {
      top: withTiming(top, { duration: 300 }),
    };
  });
  const animatedStyleBottom = useAnimatedStyle(() => {
    const bottom = interpolate(
      offset.value,
      [0, 1],
      [0, size.height + 10],
    );
    return {
      bottom: withTiming(bottom, { duration: 300 }),
    };
  });

  return (
    <View style={[styles.container, containerStyle]} ref={menu}>
      <TouchableOpacity
        testID="open_button"
        onPress={pressButton}
        style={styles.openButton}
      >
        {button(open)}
      </TouchableOpacity>
      {open ? (
        <Animated.View
          testID="menu_container"
          style={[
            styles.menuContainer,

            menuStyle,
            { backgroundColor: statusTheme.itemBackground },
            HEIGHT - (size.y + menuHeight.height + size.height) >= 0 ? animatedStyleTop : animatedStyleBottom,
          ]}
          onLayout={e => setMenuHeight({ height: e.nativeEvent.layout.height })}
        >
          {items?.map((item, index) => (
            <View key={index} style={rowStyle}>
              <TouchableOpacity
                testID={`item_button_${index}`}
                onPress={() => { item.onPress && item.onPress(); closeMenu(); }}
                style={styles.menuButton}
              >
                {item.left && item.left}
                <View style={styles.buttonContainer}>
                  <Text style={[
                    {
                      fontSize: typography?.body.smedium.fontSize,
                      fontWeight: '500',
                      lineHeight: typography?.body.smedium.lineHeight,
                      paddingHorizontal: item.left ? 5 : 0,
                    }, rowTextStyle, {
                      color: statusTheme.itemLabel,
                    }]}
                  >
                    {item.label}
                  </Text>
                  {item.right && item.right}
                </View>
              </TouchableOpacity>
              {items.length - 1 !== index ? (
                <Divider
                  typography={typography}
                  theme={{
                    default: {
                      background: statusTheme.divider,
                    },
                  }}
                  style={{ paddingHorizontal: 10 }}
                />
              )
                :
                null
              }

            </View>
          ))}
        </Animated.View>
      )
        :
        null
      }
    </View>
  );
};

export default applyDefaults(Menu);

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'flex-end',
  },
  openButton: { alignSelf: 'baseline' },
  menuContainer: {
    borderRadius: 5,
    position: 'absolute',
  },
  menuButton: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
});
